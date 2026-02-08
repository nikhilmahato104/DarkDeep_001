/**
 * Device Information Collector
 * Automatically collects device, location, and user data
 */

class DeviceInfoCollector {
  constructor(userId = null) {
    this.userId = userId || this.generateUserId();
    this.deviceInfo = {};
  }

  // Generate unique user ID if not provided
  generateUserId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 9);
    return `${timestamp}_${random}`;
  }

  // Get geolocation
  async getGeolocation() {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(null);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          });
        },
        (error) => {
          console.log('Geolocation error:', error.message);
          resolve(null);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    });
  }

  // Get device type
  getDeviceType() {
    const userAgent = navigator.userAgent;
    if (/mobile|android|iphone|ipad|ipod/i.test(userAgent)) {
      return 'mobile';
    } else if (/tablet|ipad/i.test(userAgent)) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  // Get device brand/model (basic detection)
  getDeviceBrandModel() {
    const userAgent = navigator.userAgent;
    let brand = 'Unknown';
    let model = 'Unknown';

    // Detect common brands
    if (/samsung/i.test(userAgent)) {
      brand = 'Samsung';
      if (/sm-[a-z][0-9]{3}/i.test(userAgent)) {
        model = userAgent.match(/sm-[a-z][0-9]{3}/i)[0];
      }
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      brand = 'Apple';
      if (/iphone/i.test(userAgent)) model = 'iPhone';
      else if (/ipad/i.test(userAgent)) model = 'iPad';
    } else if (/xiaomi|redmi/i.test(userAgent)) {
      brand = 'Xiaomi';
    } else if (/oneplus/i.test(userAgent)) {
      brand = 'OnePlus';
    } else if (/google pixel/i.test(userAgent)) {
      brand = 'Google';
      model = 'Pixel';
    } else if (/huawei|honor/i.test(userAgent)) {
      brand = 'Huawei';
    }

    return { brand, model };
  }

  // Get operating system
  getOperatingSystem() {
    const userAgent = navigator.userAgent;
    let os = 'Unknown';
    let version = 'Unknown';

    if (/windows/i.test(userAgent)) {
      os = 'Windows';
    } else if (/mac os/i.test(userAgent)) {
      os = 'macOS';
    } else if (/linux/i.test(userAgent)) {
      os = 'Linux';
    } else if (/android/i.test(userAgent)) {
      os = 'Android';
      const match = userAgent.match(/android\s([0-9\.]+)/i);
      version = match ? match[1] : 'Unknown';
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      os = 'iOS';
      const match = userAgent.match(/os\s([0-9_]+)/i);
      version = match ? match[1].replace(/_/g, '.') : 'Unknown';
    }

    return { os, version };
  }

  // Get browser info
  getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';
    let version = 'Unknown';

    if (/chrome/i.test(userAgent) && !/edge/i.test(userAgent)) {
      browser = 'Chrome';
      const match = userAgent.match(/chrome\/([0-9\.]+)/i);
      version = match ? match[1] : 'Unknown';
    } else if (/firefox/i.test(userAgent)) {
      browser = 'Firefox';
      const match = userAgent.match(/firefox\/([0-9\.]+)/i);
      version = match ? match[1] : 'Unknown';
    } else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) {
      browser = 'Safari';
      const match = userAgent.match(/version\/([0-9\.]+)/i);
      version = match ? match[1] : 'Unknown';
    } else if (/edge/i.test(userAgent)) {
      browser = 'Edge';
      const match = userAgent.match(/edge\/([0-9\.]+)/i);
      version = match ? match[1] : 'Unknown';
    } else if (/opera|opr/i.test(userAgent)) {
      browser = 'Opera';
      const match = userAgent.match(/(?:opera|opr)\/([0-9\.]+)/i);
      version = match ? match[1] : 'Unknown';
    }

    return { browser, version };
  }

  // Get IP address via third-party service
  async getIPAddress() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.log('IP detection failed:', error);
      return 'Unknown';
    }
  }

  // Get location info from IP
  async getLocationFromIP(ip) {
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      return {
        city: data.city || 'Unknown',
        country: data.country_name || 'Unknown',
        timezone: data.timezone || 'Unknown'
      };
    } catch (error) {
      console.log('Location detection failed:', error);
      return {
        city: 'Unknown',
        country: 'Unknown',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown'
      };
    }
  }

  // Get network type
  async getNetworkType() {
    if (navigator.connection) {
      const connection = navigator.connection;
      return connection.effectiveType || 'Unknown';
    }
    return 'Unknown';
  }

  // Get battery status
  async getBatteryStatus() {
    if (navigator.getBattery) {
      try {
        const battery = await navigator.getBattery();
        return {
          batteryLevel: Math.round(battery.level * 100),
          isCharging: battery.charging
        };
      } catch (error) {
        console.log('Battery detection failed:', error);
      }
    }
    return {
      batteryLevel: 100,
      isCharging: false
    };
  }

  // Collect all device information
  async collectAllInfo() {
    try {
      // Basic device info
      const deviceType = this.getDeviceType();
      const { brand, model } = this.getDeviceBrandModel();
      const { os, version: osVersion } = this.getOperatingSystem();
      const { browser, version: browserVersion } = this.getBrowserInfo();
      
      // Screen info
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const devicePixelRatio = window.devicePixelRatio || 1;
      
      // Language
      const language = navigator.language || navigator.userLanguage || 'Unknown';
      
      // Get IP and location
      const ipAddress = await this.getIPAddress();
      const locationFromIP = await this.getLocationFromIP(ipAddress);
      
      // Geolocation (if permitted)
      const geolocation = await this.getGeolocation();
      
      // Network and battery
      const networkType = await this.getNetworkType();
      const battery = await this.getBatteryStatus();
      
      // Compile all data
      this.deviceInfo = {
        latitude: geolocation?.latitude || 28.6139, // Default to New Delhi
        longitude: geolocation?.longitude || 77.209,
        accuracy: geolocation?.accuracy || 0,
        city: locationFromIP.city,
        country: locationFromIP.country,
        timezone: locationFromIP.timezone,
        deviceType,
        deviceBrand: brand,
        deviceModel: model,
        os,
        osVersion,
        browser,
        browserVersion,
        screenWidth,
        screenHeight,
        devicePixelRatio,
        ipAddress,
        networkType,
        batteryLevel: battery.batteryLevel,
        isCharging: battery.isCharging,
        language,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        userId: this.userId,
        timestamp: new Date().toISOString(),
        pageUrl: window.location.href,
        referrer: document.referrer || 'Direct'
      };

      return this.deviceInfo;
    } catch (error) {
      console.error('Error collecting device info:', error);
      return null;
    }
  }

  // Send data to backend
  async sendToBackend(data) {
    try {
      const response = await fetch('https://darkdeep-learning-001.onrender.com/api/device-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Device info sent successfully');
        return await response.json();
      } else {
        console.error('Failed to send device info:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error sending device info:', error);
      return null;
    }
  }

  // Main function to collect and send data
  async collectAndSend() {
    const deviceInfo = await this.collectAllInfo();
    if (deviceInfo) {
      await this.sendToBackend(deviceInfo);
      
      // Store in localStorage for future use
      localStorage.setItem('deviceInfo', JSON.stringify(deviceInfo));
      localStorage.setItem('userId', deviceInfo.userId);
      
      return deviceInfo;
    }
    return null;
  }

  // Get stored user ID or generate new
  getOrCreateUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = this.generateUserId();
      localStorage.setItem('userId', userId);
    }
    this.userId = userId;
    return userId;
  }
}

export default DeviceInfoCollector;