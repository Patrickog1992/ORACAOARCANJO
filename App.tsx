import React, { useState } from 'react';
import { Lock, ThumbsUp, CheckCircle2, CornerDownRight, ChevronRight } from 'lucide-react';
import VideoPlayer from './components/VideoPlayer';
import OfferModal from './components/OfferModal';
import SocialProofPopup from './components/SocialProofPopup';

// Dados dos comentários com fotos reais
const COMMENTS = [
  {
    id: 1,
    name: 'Reginaldo Manzotti',
    verified: true,
    image: 'https://i.imgur.com/pbJc2VT.jpeg',
    text: 'As orações de São Miguel Arcanjo são um presente do céu para os momentos de batalha. Elas renovam a fé e trazem a certeza da proteção divina. Receba essa graça em sua vida!',
    likes: '2.134',
    time: '3 h',
    replies: [
      {
        id: 11,
        name: 'Ana Luiza',
        image: 'https://i.imgur.com/nCdT1tV.jpg',
        replyTo: 'Reginaldo Manzotti',
        text: 'Comecei hoje e já me sinto mais forte para enfrentar meus problemas. Obrigada por compartilhar, Padre! 🙌',
        time: '3 h',
        likes: '45'
      }
    ]
  },
  {
    id: 2,
    name: 'Frei Gilson',
    verified: true,
    image: 'https://i.imgur.com/nwPjVfR.jpeg',
    text: 'Vi de perto o poder dessas orações. Não são apenas palavras, são uma conexão direta com o Príncipe dos Anjos. Assista ao vídeo e sinta a presença de São Miguel Arcanjo em sua vida.',
    likes: '2.001',
    time: '1 h',
    replies: [
      {
        id: 21,
        name: 'Maria Santos',
        image: 'https://i.imgur.com/K5tLVza.jpg',
        replyTo: 'Frei Gilson',
        text: 'No final do vídeo eu já sentia a energia diferente. É muito poderoso! 😭',
        time: '1 h',
        likes: '128'
      }
    ]
  },
  {
    id: 3,
    name: 'Patrícia Lima',
    image: 'https://i.imgur.com/NVXnmUf.jpg',
    text: 'Meu marido voltou a trabalhar depois de fazer a oração do Arcanjo por 7 dias seguidos! Deus é fiel e São Miguel é poderoso! 🙌',
    likes: '412',
    time: '1 h'
  },
  {
    id: 4,
    name: 'João Pedro',
    image: 'https://i.imgur.com/lUUhU1Y.jpg',
    text: 'Senti um arrepio e uma paz quando comecei a orar. A presença do Arcanjo é real! 🙏',
    likes: '341',
    time: '1 h'
  },
  {
    id: 5,
    name: 'Luciana Silva',
    image: 'https://i.imgur.com/j72iQe8.jpg',
    text: 'Tô arrepiada! Essas 40 orações de proteção do Arcanjo Miguel são surreais. 😭🌟',
    likes: '267',
    time: '1 h'
  },
  {
    id: 6,
    name: 'Mateus Andrade',
    image: 'https://i.imgur.com/QfJtgio.jpg',
    text: '3º dia de oração e recebi uma notícia maravilhosa hoje. Tenho certeza que foi intercessão de São Miguel.',
    likes: '198',
    time: '1 h'
  },
  {
    id: 7,
    name: 'Rafaela Martins',
    image: 'https://i.imgur.com/SPsVs9s.jpg',
    text: 'Confiei no poder de São Miguel e hoje estou vivendo meu milagre! 🙏😭 Glória a Deus!',
    likes: '354',
    time: '1 h'
  },
  {
    id: 8,
    name: 'Ricardo Pereira',
    image: 'https://i.imgur.com/cGzrRGs.jpg',
    text: 'Senti a proteção do Arcanjo no meu trabalho. As coisas começaram a dar certo. Que bênção! 🙌',
    likes: '322',
    time: '1 h'
  }
];

const App: React.FC = () => {
  // Data atual formatada
  const currentDate = new Date().toLocaleDateString('pt-BR');
  const [showOfferPage, setShowOfferPage] = useState(false);

  // If the offer page is active, render ONLY the offer page (simulating a new page navigation)
  if (showOfferPage) {
    return <OfferModal isOpen={true} onClose={() => setShowOfferPage(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white selection:bg-gold-500 selection:text-black font-poppins flex flex-col">
      
      {/* Social Proof Popup */}
      <SocialProofPopup />

      {/* Top Warning Banner */}
      <div className="w-full bg-red-700 text-white text-center py-3 px-4 text-sm md:text-base font-semibold shadow-lg z-50">
        <p>
          Devido a grande pressão do vaticano esta bênção está disponível somente hoje <span className="text-yellow-300 font-bold px-1 rounded bg-red-800/30">{currentDate}</span>. Assista antes que saia do ar
        </p>
      </div>

      <main className="flex-grow flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto relative z-10 w-full">
        
        {/* Main Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight mb-8 tracking-tight drop-shadow-lg">
          <span className="text-red-500">40 orações secretas:</span> pessoas choram ao ouvir as orações por alguns segundos e sentem o toque do <span className="text-gold-400">Arcanjo Miguel</span>
        </h1>

        {/* Sub-headline / Authority Section */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 w-full mb-8 backdrop-blur-md">
          <div className="flex flex-col gap-4 text-center">
            
            <p className="text-lg md:text-xl text-gray-200 font-medium">
              Frei Gilson traduziu todas as orações
            </p>

            <div className="h-px w-24 bg-white/20 mx-auto my-2"></div>

            <p className="text-base md:text-lg text-gray-400 flex items-center justify-center gap-2">
              <Lock size={18} className="text-gold-500" />
              Essas orações estavam guardadas a 7 chaves dentro de arquivos secretos do vaticano
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full max-w-[400px] mx-auto mb-8 relative group">
          {/* Decorative glow behind video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative shadow-2xl rounded-lg overflow-hidden">
            <VideoPlayer />
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="w-full max-w-[400px] mx-auto mb-12 px-4 sm:px-0">
          <button 
            onClick={() => setShowOfferPage(true)}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-extrabold text-xl md:text-2xl py-5 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.5)] animate-pulse hover:animate-none hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 border-b-4 border-green-800"
          >
            QUERO RECEBER AS ORAÇÕES
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
            <Lock size={12} /> Acesso seguro e imediato
          </p>
        </div>

        {/* Comments Section */}
        <div className="w-full max-w-2xl bg-white text-slate-900 rounded-lg shadow-xl overflow-hidden mt-4">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="font-bold text-lg text-slate-800">O que os fiéis dizem após as orações:</h3>
          </div>
          
          <div className="p-4 space-y-6 bg-white">
            {COMMENTS.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img 
                    src={comment.image} 
                    alt={comment.name}
                    className="w-10 h-10 rounded-full border border-gray-200 object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  {/* Main Comment Bubble */}
                  <div className="bg-slate-100 rounded-2xl px-4 py-2 inline-block relative">
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-1">
                      {comment.name}
                      {comment.verified && (
                        <CheckCircle2 size={14} className="text-blue-500 fill-blue-500 text-white" />
                      )}
                    </div>
                    <p className="text-sm text-slate-800 leading-snug">{comment.text}</p>
                    
                    {/* Floating Reaction Count (Visual Only) */}
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-0.5 shadow-sm border border-gray-100 flex items-center gap-0.5 px-1.5">
                      <div className="bg-blue-500 rounded-full p-0.5">
                        <ThumbsUp size={8} className="text-white fill-white" />
                      </div>
                      <span className="text-[10px] text-gray-500 font-medium">{comment.likes}</span>
                    </div>
                  </div>

                  {/* Actions Line */}
                  <div className="flex items-center gap-4 mt-1 ml-2 text-xs font-semibold text-slate-500">
                    <button className="hover:underline">Curtir</button>
                    <button className="hover:underline">Responder</button>
                    <span className="font-normal">{comment.time}</span>
                  </div>

                  {/* Replies */}
                  {comment.replies && comment.replies.map(reply => (
                    <div key={reply.id} className="flex gap-3 mt-3 ml-2 relative">
                      <CornerDownRight size={16} className="absolute -left-4 top-2 text-gray-300" />
                      <div className="flex-shrink-0">
                        <img 
                          src={reply.image} 
                          alt={reply.name}
                          className="w-8 h-8 rounded-full border border-gray-200 object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="bg-slate-100 rounded-2xl px-4 py-2 inline-block">
                           <div className="font-bold text-sm text-slate-900">
                            {reply.name} 
                            <span className="font-normal text-slate-500 ml-1">@{reply.replyTo.replace(' ', '')}</span>
                          </div>
                          <p className="text-sm text-slate-800 leading-snug">{reply.text}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-1 ml-2 text-xs font-semibold text-slate-500">
                          <button className="hover:underline">Curtir</button>
                          <button className="hover:underline">Responder</button>
                          <span className="font-normal">{reply.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
            <button className="text-blue-600 text-sm font-semibold hover:underline">
              Ver mais 124 comentários
            </button>
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-12 text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p className="mt-2">Este site não faz parte do site do Facebook ou Facebook Inc.</p>
        </footer>

      </main>

      {/* Subtle background texture effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
    </div>
  );
};

export default App;