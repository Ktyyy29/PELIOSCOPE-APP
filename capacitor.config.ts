    import type { CapacitorConfig } from '@capacitor/cli';

    const config: CapacitorConfig = {
      appId: 'com.example.app', // Make sure this is correct for your app
      appName: 'PelioScope',
      webDir: 'dist', // This tells Capacitor to use the files from your build folder
      server: {
        // This is the important part
        androidScheme: 'http', // Use http instead of https
        cleartext: true        // Allow non-https network requests
      }
    };

    export default config;
    