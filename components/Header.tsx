import React, { useState } from 'react';
import { Search, Globe, Menu, UserCircle, LogIn, Music, LayoutDashboard, LogOut } from 'lucide-react';
import SearchExpanded from './SearchExpanded';
import { User } from '../types';

interface HeaderProps {
  onSearchClick: () => void;
  isSearchExpanded: boolean;
  onCloseSearch: () => void;
  onSearchSubmit: (filters: any) => void;
  currentUser: User | null;
  onLogin: (role: 'client' | 'artist') => void;
  onLogout: () => void;
  onNavigateHome: () => void;
  onNavigateDashboard: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
    onSearchClick, 
    isSearchExpanded, 
    onCloseSearch, 
    onSearchSubmit,
    currentUser,
    onLogin,
    onLogout,
    onNavigateHome,
    onNavigateDashboard
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isSearchExpanded) {
    return <SearchExpanded onClose={onCloseSearch} onSearch={onSearchSubmit} />;
  }

  const handleMenuAction = (action: () => void) => {
      action();
      setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={onNavigateHome}>
            <span className="text-brand-primary font-bold text-2xl tracking-tighter">MConecta</span>
          </div>

          {/* Search Bar (The "Airbnb" pill) */}
          <div 
            onClick={onSearchClick}
            className="hidden md:flex items-center justify-between bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 py-2.5 pl-6 pr-2 cursor-pointer w-[400px]"
          >
            <div className="flex-1 border-r border-gray-300 pr-4">
              <div className="text-xs font-bold text-gray-800">Qual artista?</div>
              <div className="text-sm text-gray-600 truncate">Sertanejo, Rock...</div>
            </div>
            <div className="flex-1 border-r border-gray-300 px-4">
              <div className="text-xs font-bold text-gray-800">Onde?</div>
              <div className="text-sm text-gray-600 truncate">Brasil</div>
            </div>
            <div className="flex-1 pl-4 flex items-center justify-between">
              <div>
                 <div className="text-xs font-bold text-gray-800">Data</div>
                 <div className="text-sm text-gray-600">Inserir</div>
              </div>
              <div className="bg-brand-primary rounded-full p-2.5 text-white ml-2">
                <Search size={16} strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Mobile Search Trigger (Icon Only) */}
          <div 
            onClick={onSearchClick}
            className="md:hidden flex items-center justify-center bg-gray-100 rounded-full p-3 cursor-pointer"
          >
             <Search size={20} className="text-gray-600" />
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-4 relative">
            {!currentUser && (
                <button 
                    onClick={() => onLogin('artist')}
                    className="hidden md:block text-sm font-semibold text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer transition-colors"
                >
                Seja um Artista
                </button>
            )}
            {currentUser?.role === 'artist' && (
                <button 
                    onClick={onNavigateDashboard}
                    className="hidden md:block text-sm font-semibold text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer transition-colors"
                >
                Painel do Artista
                </button>
            )}
            
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <Globe size={18} className="text-gray-800" />
            </button>
            
            <div 
              className="flex items-center gap-2 border border-gray-300 rounded-full p-1 pl-3 hover:shadow-md transition-all cursor-pointer bg-white relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={18} className="text-gray-600" />
              <div className="bg-gray-500 rounded-full text-white overflow-hidden w-[30px] h-[30px] flex items-center justify-center">
                 {currentUser ? (
                     <img src={currentUser.avatarUrl} className="w-full h-full object-cover" alt="User" />
                 ) : (
                     <UserCircle size={30} className="text-gray-500" fill="#E5E7EB" />
                 )}
              </div>
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsMenuOpen(false)}></div>
                <div className="absolute top-14 right-0 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20 flex flex-col">
                  {currentUser ? (
                      <>
                        <div className="px-4 py-3 border-b border-gray-100">
                             <p className="font-bold text-sm text-gray-900">Olá, {currentUser.name}</p>
                             <p className="text-xs text-gray-500 capitalize">{currentUser.role}</p>
                        </div>
                        <button onClick={() => handleMenuAction(onNavigateDashboard)} className="text-left px-4 py-3 hover:bg-gray-50 text-sm font-semibold text-gray-800 flex items-center gap-2">
                            <LayoutDashboard size={16}/> Minha Dashboard
                        </button>
                        <button onClick={() => handleMenuAction(onLogout)} className="text-left px-4 py-3 hover:bg-gray-50 text-sm text-red-600 flex items-center gap-2">
                             <LogOut size={16} /> Sair
                        </button>
                      </>
                  ) : (
                      <>
                        <button className="text-left px-4 py-3 hover:bg-gray-50 text-sm font-semibold text-gray-800">Cadastre-se</button>
                        <button onClick={() => handleMenuAction(() => onLogin('client'))} className="text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-600 flex items-center gap-2">
                            <LogIn size={16} /> Entrar como Cliente
                        </button>
                         <button onClick={() => handleMenuAction(() => onLogin('artist'))} className="text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-600 flex items-center gap-2">
                            <Music size={16} /> Sou Artista (Login)
                        </button>
                      </>
                  )}
                  <hr className="my-1 border-gray-200" />
                  <button className="text-left px-4 py-3 hover:bg-gray-50 text-sm text-gray-600">Ajuda</button>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;