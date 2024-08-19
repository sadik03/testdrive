import React, { useEffect, useRef } from 'react';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadScripts = async () => {
      const threeScript = document.createElement('script');
      threeScript.src = '/three.r134.min.js';
      threeScript.onload = () => {
        const vantaScript = document.createElement('script');
        vantaScript.src = '/vanta.waves.min.js';
        vantaScript.onload = () => {
          vantaEffect.current = window.VANTA.WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x8878
          });
        };
        document.body.appendChild(vantaScript);
      };
      document.body.appendChild(threeScript);
    };

    loadScripts();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current = null; // Clean up the Vanta effect
      }
      // Remove the scripts if necessary
      const scripts = document.querySelectorAll('script[src*="three.r134.min.js"], script[src*="vanta.waves.min.js"]');
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, []);

  return <div ref={vantaRef} style={{ width: '100%', height: '100vh' }}></div>;
};

export default VantaBackground;
