import { useEffect, useRef } from 'react';

// Add type declaration for the global google object
declare global {
  interface Window {
    google: any;
    googleMapsInitialized: boolean;
    initMap: any;  // Add this to fix TypeScript error
  }
}

interface GoogleMapProps {
  apiKey: string;
}

const GoogleMap = ({ apiKey }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to initialize the map
    const initMap = () => {
      if (mapRef.current && window.google) {
        // Updated coordinates for Prestige Finsbury Park Hyde, Bangalore
        const location = { lat: 13.142973, lng: 77.684624 };
        
        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15,
        });

        // Add a marker
        new window.google.maps.Marker({
          position: location,
          map: map,
          title: 'Prestige Finsbury Park Hyde'
        });
      }
    };

    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
      initMap();
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
    
    if (existingScript) {
      // If script is already loading, wait for it to load
      if (!window.googleMapsInitialized) {
        const originalCallback = window.initMap;
        window.initMap = () => {
          if (originalCallback) originalCallback();
          initMap();
        };
      } else {
        // If already initialized, just init the map
        initMap();
      }
      return;
    }

    // If not loaded or loading, create and load the script
    window.initMap = initMap;
    window.googleMapsInitialized = false;
    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.googleMapsInitialized = true;
    };

    return () => {
      // No need to remove the script as it should be loaded only once
      // Just clean up our callback if needed
      if (window.initMap === initMap) {
        window.initMap = () => {};
      }
    };
  }, [apiKey]);

  return (
    <div ref={mapRef} className="w-full h-full" />
  );
};

export default GoogleMap; 