import React from 'react';
import { PlayCircle, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
            M.Conecta <br />
            <span className="text-brand-primary relative inline-block">
              Profissional.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary opacity-30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.99991 132.5 -4.50005 198 6.99996" stroke="currentColor" strokeWidth="3" /></svg>
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Sem comissão. Sem ruído. A plataforma definitiva para organizar, dar visibilidade e facilitar a contratação musical no Brasil.
          </p>

          <div className="flex flex-col gap-4 max-w-lg mx-auto lg:mx-0 pt-4">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Qual seu objetivo?</p>

            {/* Intention 1: Event */}
            <div className="group cursor-pointer bg-white border border-gray-200 hover:border-brand-primary p-4 rounded-xl flex items-center gap-4 transition-all hover:shadow-lg shadow-sm">
              <div className="bg-brand-light p-3 rounded-full text-brand-primary group-hover:scale-110 transition-transform">
                <Star size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 leading-tight">Contratar para Evento</h3>
                <p className="text-xs text-gray-500">Casamentos, Festas, Bares (Entrega & Show)</p>
              </div>
            </div>

            {/* Intention 2: Project */}
            <div className="group cursor-pointer bg-white border border-gray-200 hover:border-purple-500 p-4 rounded-xl flex items-center gap-4 transition-all hover:shadow-lg shadow-sm">
              <div className="bg-purple-100 p-3 rounded-full text-purple-600 group-hover:scale-110 transition-transform">
                <PlayCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 leading-tight">Montar Projeto Musical</h3>
                <p className="text-xs text-gray-500">Banda autoral, Orquestra, Coletivo (Afinidade)</p>
              </div>
            </div>

            {/* Intention 3: Collab */}
            <div className="group cursor-pointer bg-white border border-gray-200 hover:border-blue-500 p-4 rounded-xl flex items-center gap-4 transition-all hover:shadow-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                <PlayCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 leading-tight">Colaboração / Freelancer</h3>
                <p className="text-xs text-gray-500">Substituição, Gravação, Cachê Padrão (Oportunidade)</p>
              </div>
            </div>

          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 border-t border-gray-100 mt-8 max-w-md">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://picsum.photos/seed/u1/100/100" alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://picsum.photos/seed/u2/100/100" alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://picsum.photos/seed/u3/100/100" alt="User" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+2k</div>
            </div>
            <div>
              <div className="flex text-yellow-400 gap-0.5">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
              <p><span className="font-bold text-gray-900">4.9/5</span> de satisfação</p>
            </div>
          </div>
        </div>

        {/* Right Content: Dynamic Grid */}
        <div className="w-full lg:w-1/2 relative">

          {/* Floating Card Animation */}
          <div className="absolute top-10 left-0 bg-white p-3 rounded-xl shadow-xl z-20 flex gap-3 animate-bounce-slow max-w-[220px]">
            <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit">
              <Star size={16} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">"Melhor show da vida!"</p>
              <p className="text-[10px] text-gray-500">Amanda contratou Banda RockVolt</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[550px]">
            <div className="col-span-1 h-full space-y-4 pt-12">
              <img
                src="https://picsum.photos/seed/singer1/400/600"
                alt="Singer"
                className="w-full h-2/5 object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
              />
              <img
                src="https://picsum.photos/seed/drums/400/400"
                alt="Drums"
                className="w-full h-3/5 object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 h-full space-y-4">
              <img
                src="https://picsum.photos/seed/piano/400/400"
                alt="Piano"
                className="w-full h-3/5 object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="w-full h-2/5 relative rounded-3xl overflow-hidden shadow-lg group">
                <img
                  src="https://picsum.photos/seed/guitarist/400/600"
                  alt="Guitarist"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <style>{`
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
            animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;