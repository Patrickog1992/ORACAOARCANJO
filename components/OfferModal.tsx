import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OfferModal: React.FC<OfferModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(90); // 1:30 in seconds
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [isCandleLit, setIsCandleLit] = useState(false);
  const [name, setName] = useState('');

  // Timer Logic
  useEffect(() => {
    if (!isOpen || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, timeLeft]);

  // Format MM:SS
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!isOpen) return null;

  return (
    <div className="min-h-screen w-full bg-slate-950 font-poppins animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        
        {/* Back Button (Subtle) */}
        <button 
          onClick={onClose} 
          className="absolute top-6 left-6 text-gray-500 hover:text-white transition flex items-center gap-2 text-sm font-medium"
        >
          <ArrowLeft size={18} />
          Voltar
        </button>

        <div className="max-w-md w-full bg-slate-900/50 border border-gold-500/30 rounded-2xl shadow-2xl p-6 md:p-8 relative mt-8 md:mt-0">
          
          {/* Top Timer Bar */}
          <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-3 text-center mb-8 animate-pulse">
            <p className="text-red-400 text-sm font-bold tracking-wider uppercase">Expira em:</p>
            <p className="text-3xl font-black text-white font-mono">{formatTime(timeLeft)}</p>
          </div>

          <div className="space-y-8">
            
            {/* Step 1: Quiz */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white text-center">
                Marque a área da sua vida sente mais ataques espirituais
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {['Saúde e corpo', 'Vida financeira', 'Relacionamentos', 'Todas'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedArea(option)}
                    className={`w-full p-3 rounded-lg text-left transition-all duration-200 flex items-center justify-between border ${
                      selectedArea === option 
                        ? 'bg-gold-500 text-black border-gold-400 font-bold' 
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {option}
                    {selectedArea === option && <CheckCircle2 size={20} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Simple Candle Interaction */}
            <div className="flex flex-col items-center text-center py-6 border-y border-white/10">
              <p className={`font-semibold text-lg mb-6 transition-colors duration-300 ${isCandleLit ? 'text-green-400' : 'text-gold-400'}`}>
                {isCandleLit 
                  ? "AGORA SÃO MIGUEL ESTÁ ROGANDO POR VOCÊ"
                  : "Toque na vela para acender a luz de São Miguel"
                }
              </p>
              
              <button 
                onClick={() => setIsCandleLit(true)}
                className="relative group transition-transform active:scale-95 focus:outline-none mt-2"
                disabled={isCandleLit}
              >
                <div className="relative w-24 h-40 flex items-end justify-center">
                  
                  {/* Flame */}
                  <div className={`absolute top-0 transition-all duration-500 ${isCandleLit ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                    <div className="w-6 h-6 bg-orange-500 rounded-full blur-sm animate-pulse mx-auto shadow-[0_0_30px_rgba(255,165,0,0.8)]"></div>
                    <div className="w-4 h-8 bg-yellow-300 rounded-full -mt-4 mx-auto blur-[1px]"></div>
                  </div>
                  
                  {/* Wick */}
                  <div className="w-1 h-4 bg-gray-800 mb-[-2px] relative z-10"></div>
                  
                  {/* Body */}
                  <div className="w-16 h-28 bg-gradient-to-r from-gray-100 to-gray-300 rounded-sm shadow-lg relative z-0"></div>
                
                </div>

                {!isCandleLit && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max">
                    <span className="text-xs text-gold-400 font-bold animate-pulse">
                      CLIQUE PARA ACENDER
                    </span>
                  </div>
                )}
              </button>
            </div>

            {/* Step 3: Name Input & Checkout - ALWAYS VISIBLE NOW */}
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm text-gray-400 ml-1">Coloque seu nome aqui para receber</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                />
              </div>

              <a 
                href="https://pay.kirvano.com/3a6ebdce-f5ce-4a44-896a-315d6c749bda"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-black text-center py-4 rounded-lg text-lg uppercase tracking-wide shadow-lg hover:scale-[1.02] transition-transform"
              >
                QUERO TODAS AS BENÇÃOS AGORA
              </a>
              
              <p className="text-xs text-center text-gray-500">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                Ambiente seguro e verificado
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;