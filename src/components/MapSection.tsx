'use client';

import dynamic from 'next/dynamic';

// Dynamically import the map component with no SSR
const GoogleMap = dynamic(() => import('@/components/GoogleMap'), {
  ssr: false
});

const MapSection = () => {
  return (
    <div className="h-full w-full">
      <GoogleMap apiKey="AIzaSyAicU3Ldm84xZtJPtB-hBZD3_DGA9qiIuM" />
    </div>
  );
};

export default MapSection; 