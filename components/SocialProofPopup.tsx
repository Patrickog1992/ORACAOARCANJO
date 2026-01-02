import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const RECENT_BUYERS = [
  { name: 'Maria S.', city: 'SP' },
  { name: 'João P.', city: 'RJ' },
  { name: 'Ana L.', city: 'MG' },
  { name: 'Carlos E.', city: 'PR' },
  { name: 'Lúcia M.', city: 'BA' },
  { name: 'Fernanda R.', city: 'PE' },
  { name: 'Roberto A.', city: 'RS' },
  { name: 'Patrícia C.', city: 'DF' },
  { name: 'Geraldo N.', city: 'CE' },
  { name: 'Sandra V.', city: 'GO' },
];

const SocialProofPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buyer, setBuyer] = useState(RECENT_BUYERS[0]);

  useEffect(() => {
    // Initial delay before first popup
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Cycle logic
    const cycleInterval = setInterval(() => {
      setIsVisible(false); // Hide

      setTimeout(() => {
        // Change data while hidden
        const randomIndex = Math.floor(Math.random() * RECENT_BUYERS.length);
        setBuyer(RECENT_BUYERS[randomIndex]);
        setIsVisible(true); // Show again
      }, 2000); // Wait 2s before showing next

    }, 8000); // Total cycle time (visible time + hidden time)

    return () => {
      clearTimeout(startTimeout);
      clearInterval(cycleInterval);
    };
  }, []);

  return (
    <div 
      className={`fixed top-14 right-1 z-[60] w-auto transition-all duration-700 ease-in-out transform ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-4 pointer-events-none'
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-white/5 border-l-[1.5px] border-l-green-500 shadow-lg rounded-sm p-1.5 flex items-center gap-1.5 max-w-[180px]">
        <div className="bg-green-500/10 p-0.5 rounded-full flex-shrink-0">
          <ShieldCheck size={10} className="text-green-400" />
        </div>
        
        <div className="flex flex-col justify-center">
          <p className="text-[8px] text-white leading-tight whitespace-nowrap">
            <span className="font-bold text-green-400">{buyer.name}</span> ({buyer.city}) recebeu as orações.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofPopup;