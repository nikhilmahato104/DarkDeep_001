import { useEffect } from 'react';
import DeviceInfoCollector from '@/utils/deviceInfoCollector';

const DeviceTracker = () => {
  useEffect(() => {
    const trackDeviceInfo = async () => {
      try {
        // Wait for page to load completely
        setTimeout(async () => {
          const tracker = new DeviceInfoCollector();
          
          // Get or create user ID
          tracker.getOrCreateUserId();
          
          // Collect and send device info
          await tracker.collectAndSend();
          
          console.log('Device tracking initialized');
        }, 2000); // Delay to ensure page is loaded
      } catch (error) {
        console.error('Device tracking failed:', error);
      }
    };

    trackDeviceInfo();

    // Set up periodic tracking (every 5 minutes)
    const intervalId = setInterval(async () => {
      const tracker = new DeviceInfoCollector();
      const userId = localStorage.getItem('userId');
      if (userId) {
        tracker.userId = userId;
        await tracker.collectAllInfo();
        await tracker.sendToBackend(tracker.deviceInfo);
      }
    }, 5 * 60 * 1000); // 5 minutes

    // Set up visibility change tracking
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const tracker = new DeviceInfoCollector();
        const userId = localStorage.getItem('userId');
        if (userId) {
          tracker.userId = userId;
          tracker.collectAndSend();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DeviceTracker;