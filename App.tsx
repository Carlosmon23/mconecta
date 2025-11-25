import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialFeed from './components/SocialFeed';
import ArtistList from './components/ArtistList';
import ArtistPage from './components/ArtistPage'; // New Page
import ClientDashboard from './components/ClientDashboard'; // New Page
import ArtistDashboard from './components/ArtistDashboard'; // New Page

import { ARTISTS, SOCIAL_POSTS } from './constants';
import { Artist, ToastNotification, User } from './types';
import { X, CheckCircle, Info } from 'lucide-react';

// Toast Component
const Toast: React.FC<{ notification: ToastNotification; onClose: () => void }> = ({ notification, onClose }) => (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[100] animate-fadeInUp">
        <div className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 min-w-[300px] justify-between">
            <div className="flex items-center gap-3">
                {notification.type === 'success' ? <CheckCircle className="text-green-400" size={20} /> : <Info className="text-blue-400" size={20} />}
                <span className="font-medium text-sm">{notification.message}</span>
            </div>
            <button onClick={onClose}><X size={16} className="text-gray-400 hover:text-white" /></button>
        </div>
    </div>
);

// Router View Types
type ViewState = 'home' | 'artist-detail' | 'dashboard-client' | 'dashboard-artist';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [notification, setNotification] = useState<ToastNotification | null>(null);
  
  // Simulated Auth State
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedArtist]);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setNotification({ id: Date.now().toString(), message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (role: 'client' | 'artist') => {
      if (role === 'client') {
          setCurrentUser({
              id: 'u1',
              name: 'Lucas Cliente',
              role: 'client',
              avatarUrl: 'https://picsum.photos/seed/u1/100/100'
          });
          setCurrentView('dashboard-client');
          showToast('Bem-vindo de volta, Lucas!');
      } else {
           setCurrentUser({
              id: 'a1',
              name: 'Mariana Silva',
              role: 'artist',
              avatarUrl: 'https://picsum.photos/seed/mariana/100/100'
          });
          setCurrentView('dashboard-artist');
          showToast('Painel do Artista carregado.');
      }
  };

  const handleLogout = () => {
      setCurrentUser(null);
      setCurrentView('home');
      showToast('Você saiu da conta.', 'info');
  }

  // Navigation Logic
  const navigateToArtist = (artist: Artist) => {
      setSelectedArtist(artist);
      setCurrentView('artist-detail');
  };

  const navigateToDashboard = () => {
      if (!currentUser) return;
      if (currentUser.role === 'artist') setCurrentView('dashboard-artist');
      else setCurrentView('dashboard-client');
  };

  const handleBooking = () => {
    showToast(`Solicitação enviada para ${selectedArtist?.name}!`);
    setTimeout(() => {
        // Redirect logic simulation
        if(currentUser) navigateToDashboard();
        else {
            showToast('Faça login para acompanhar sua reserva.', 'info');
            // prompt login...
        }
    }, 2000);
  };

  const handleSearch = (filters: any) => {
      showToast(`Buscando em: ${filters.location || 'Todo o Brasil'}`, 'info');
      // If not home, go home then scroll
      if (currentView !== 'home') {
          setCurrentView('home');
          setTimeout(() => {
             document.getElementById('artist-list')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
      } else {
         document.getElementById('artist-list')?.scrollIntoView({ behavior: 'smooth' });
      }
  };

  // Connect Social Feed clicks to Artist Pages
  const handleFeedInteraction = (msg: string) => {
      showToast(msg, 'info');
  }
  
  // Find artist from feed post to navigate
  const handleFeedPostClick = (artistId: string) => {
      const artist = ARTISTS.find(a => a.id === artistId);
      if (artist) navigateToArtist(artist);
      else showToast('Perfil do artista indisponível no momento.', 'info');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Navigation */}
      <Header 
        onSearchClick={() => setIsSearchExpanded(true)}
        isSearchExpanded={isSearchExpanded}
        onCloseSearch={() => setIsSearchExpanded(false)}
        onSearchSubmit={handleSearch}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onNavigateHome={() => setCurrentView('home')}
        onNavigateDashboard={navigateToDashboard}
      />

      <main className="w-full min-h-screen">
        
        {/* VIEW: HOME */}
        {currentView === 'home' && (
            <div className="animate-fadeIn">
                <Hero />
                <SocialFeed 
                    posts={SOCIAL_POSTS} 
                    onInteract={handleFeedInteraction}
                />
                <ArtistList 
                    artists={ARTISTS} 
                    onSelectArtist={navigateToArtist} 
                    onFavorite={(name) => showToast(`${name} salvo!`, 'success')}
                />
            </div>
        )}

        {/* VIEW: ARTIST DETAIL */}
        {currentView === 'artist-detail' && selectedArtist && (
            <ArtistPage 
                artist={selectedArtist}
                onBook={handleBooking}
            />
        )}

        {/* VIEW: CLIENT DASHBOARD */}
        {currentView === 'dashboard-client' && (
            <ClientDashboard />
        )}

        {/* VIEW: ARTIST DASHBOARD */}
        {currentView === 'dashboard-artist' && (
            <ArtistDashboard />
        )}

      </main>

      {/* Footer (Global) */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid grid-cols-1 sm:grid-cols-4 gap-8">
           <div>
             <h4 className="font-bold text-gray-900 mb-4">Atendimento</h4>
             <ul className="space-y-3 text-sm text-gray-600">
               <li className="hover:underline cursor-pointer">Central de Ajuda</li>
               <li className="hover:underline cursor-pointer">Anti-discriminação</li>
               <li className="hover:underline cursor-pointer">Cancelamento</li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-gray-900 mb-4">MConecta</h4>
             <ul className="space-y-3 text-sm text-gray-600">
               <li className="hover:underline cursor-pointer">Carreiras</li>
               <li className="hover:underline cursor-pointer">Novidades</li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-gray-900 mb-4">Para Artistas</h4>
             <ul className="space-y-3 text-sm text-gray-600">
               <li className="hover:underline cursor-pointer font-semibold text-brand-primary">Anuncie seu show</li>
               <li className="hover:underline cursor-pointer">Recursos para músicos</li>
             </ul>
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between text-sm text-gray-500 items-center">
          <p>© 2024 MConecta Tecnologia Ltda.</p>
          <div className="flex gap-6 mt-4 sm:mt-0 font-medium text-gray-600">
            <span className="hover:underline cursor-pointer">Privacidade</span>
            <span className="hover:underline cursor-pointer">Termos</span>
          </div>
        </div>
      </footer>

      {/* Notification Toast */}
      {notification && (
          <Toast notification={notification} onClose={() => setNotification(null)} />
      )}
    </div>
  );
}

export default App;