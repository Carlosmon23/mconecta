import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, X } from 'lucide-react';

interface SearchExpandedProps {
  onClose: () => void;
  onSearch: (filters: any) => void;
}

const SearchExpanded: React.FC<SearchExpandedProps> = ({ onClose, onSearch }) => {
  const [location, setLocation] = useState('');
  const [activeTab, setActiveTab] = useState<'stays' | 'experiences'>('experiences');

  return (
    <div className="absolute top-0 left-0 w-full bg-white z-40 pb-8 border-b border-gray-200 animate-fadeIn origin-top">
      {/* Top Bar inside Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
           <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={onClose}>
            <span className="text-brand-primary font-bold text-2xl tracking-tighter">MConecta</span>
          </div>
          
          {/* Tabs */}
          <div className="hidden md:flex gap-8">
            <button 
                className={`text-base font-medium pb-2 border-b-2 transition-colors ${activeTab === 'experiences' ? 'border-gray-800 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('experiences')}
            >
                Encontrar Artistas
            </button>
            <button 
                className={`text-base font-medium pb-2 border-b-2 transition-colors ${activeTab === 'stays' ? 'border-gray-800 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('stays')}
            >
                Eventos Públicos
            </button>
          </div>

           <div className="w-10"></div> {/* Spacer to center tabs */}
        </div>
      </div>

      {/* Expanded Search Bar */}
      <div className="max-w-4xl mx-auto px-4 mt-2">
        <div className="bg-white rounded-full border border-gray-200 shadow-xl flex flex-col md:flex-row overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {/* Location */}
          <div className="flex-1 px-8 py-4 hover:bg-gray-100 cursor-pointer transition-colors group relative">
            <label className="text-xs font-bold text-gray-800 block">Onde?</label>
            <input 
              type="text" 
              placeholder="Buscar destinos" 
              className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-400 mt-1"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              autoFocus
            />
             <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <X size={16} className="bg-gray-200 rounded-full p-0.5 text-gray-600" onClick={() => setLocation('')}/>
             </div>
          </div>

          {/* Date */}
          <div className="flex-1 px-8 py-4 hover:bg-gray-100 cursor-pointer transition-colors">
            <label className="text-xs font-bold text-gray-800 block">Quando?</label>
            <div className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                <span>Adicionar datas</span>
            </div>
          </div>

          {/* Type/Guests */}
          <div className="flex-[0.8] pl-8 pr-2 py-2 flex items-center hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
            <div className="flex-1">
                <label className="text-xs font-bold text-gray-800 block">Quem?</label>
                <div className="text-sm text-gray-400 mt-1">Adicionar artistas</div>
            </div>
            <button 
                onClick={() => {
                    onSearch({ location });
                    onClose();
                }}
                className="bg-brand-primary hover:bg-brand-hover text-white rounded-full p-4 shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
                <Search size={20} strokeWidth={3} />
                <span className="md:hidden font-bold">Buscar</span>
            </button>
          </div>

        </div>
      </div>
      
      {/* Background Overlay to close */}
      <div className="fixed inset-0 bg-black/25 z-[-1] top-40" onClick={onClose}></div>
    </div>
  );
};

export default SearchExpanded;
