import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfessionalFeed from './components/SocialFeed';
import ArtistList from './components/ArtistList';
import ArtistPage from './components/ArtistPage';
import ClientDashboard from './components/ClientDashboard';
import ArtistDashboard from './components/ArtistDashboard';
import ProfessionalChat from './components/ProfessionalChat';

import { ARTISTS, ACTIVITY_FEED } from './constants';
import { Artist, ToastNotification, User, ChatSession, ChatMessage } from './types';
import { X, CheckCircle, Info } from 'lucide-react';

import CheckoutFlow from './components/CheckoutFlow';
import LoginView from './components/Auth/LoginView';
import RegisterView from './components/Auth/RegisterView';

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
type ViewState = 'home' | 'artist-detail' | 'dashboard-client' | 'dashboard-artist' | 'checkout' | 'login' | 'register';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [notification, setNotification] = useState<ToastNotification | null>(null);

  // Chat State
  const [activeChatSession, setActiveChatSession] = useState<ChatSession | null>(null);

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

  const handleLogin = (role: 'client' | 'artist' | 'representative') => {
    if (role === 'client') {
      setCurrentUser({
        id: 'u1',
        name: 'Lucas Cliente',
        role: 'client',
        avatarUrl: 'https://picsum.photos/seed/u1/100/100',
        followedArtistIds: []
      });
      setCurrentView('dashboard-client');
      showToast('Bem-vindo de volta, Lucas!');
    } else if (role === 'representative') {
      setCurrentUser({
        id: 'rep1',
        name: 'Agência Palco',
        role: 'representative',
        avatarUrl: 'https://picsum.photos/seed/rep1/100/100',
        followedArtistIds: []
      });
      setCurrentView('dashboard-artist');
      showToast('Painel do Representante carregado.');
    } else {
      setCurrentUser({
        id: 'a1',
        name: 'Mariana Silva',
        role: 'artist',
        avatarUrl: 'https://picsum.photos/seed/mariana/100/100',
        followedArtistIds: []
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

  // Checkout Logic
  const handleSubscriptionComplete = () => {
    setCurrentUser(prev => prev ? ({ ...prev, subscriptionStatus: 'active' }) : null);
    showToast('Assinatura confirmada! Bem-vindo.', 'success');
    setCurrentUser(prev => {
      // Redirect based on role
      const nextView = prev?.role === 'artist' ? 'dashboard-artist' : 'dashboard-client';
      setCurrentView(nextView);
      return prev;
    });
  };

  const handleRegisterComplete = (data: any) => {
    // Create temp user structure
    const newUser: User = {
      id: `new_${Date.now()}`,
      name: data.name,
      role: data.role || 'client',
      avatarUrl: `https://ui-avatars.com/api/?name=${data.name}&background=random`,
      followedArtistIds: [],
      subscriptionStatus: 'inactive' // Start inactive
    };
    setCurrentUser(newUser);
    showToast('Conta criada! Selecione um plano.', 'success');
    setCurrentView('checkout');
  };

  // Chat/Booking Logic
  const handleInitiateChat = (bookingData: any) => {
    if (!currentUser) {
      showToast('Faça login ou cadastre-se para iniciar.', 'info');
      setCurrentView('login');
      return;
    }

    // PAYWALL CHECK
    if (currentUser.subscriptionStatus !== 'active') {
      showToast('Complete sua assinatura para desbloquear o chat.', 'info');
      setCurrentView('checkout');
      return;
    }

    if (!selectedArtist) return;

    const newSession: ChatSession = {
      id: Date.now().toString(),
      participants: [currentUser.id, selectedArtist.id],
      context: {
        type: 'event', // simplified for demo
        date: bookingData.date,
        location: 'Local a definir',
        notes: `${bookingData.eventType} - Solicitado por ${currentUser.name}`
      },
      messages: [
        {
          id: 'm1',
          senderId: 'system',
          text: `Nova solicitação de contato enviada para ${selectedArtist.name}.`,
          timestamp: 'Agora',
          isSystem: true
        }
      ],
      lastMessageAt: 'Agora',
      status: 'active'
    };

    setActiveChatSession(newSession);
    showToast('Chat iniciado!', 'success');
  };

  const handleSendMessage = (text: string) => {
    if (!activeChatSession || !currentUser) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      senderId: currentUser.id,
      text,
      timestamp: 'Agora'
    };

    setActiveChatSession(prev => prev ? ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }) : null);
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

  // Find artist from feed post to navigate
  const handleFeedPostClick = (artistId: string) => {
    const artist = ARTISTS.find(a => a.id === artistId);
    if (artist) navigateToArtist(artist);
    else showToast('Perfil do artista indisponível no momento.', 'info');
  };

  // Follow Logic
  const handleToggleFollow = (artistId: string) => {
    if (!currentUser) {
      showToast('Faça login para seguir artistas.', 'info');
      return;
    }

    setCurrentUser(prev => {
      if (!prev) return null;
      const following = prev.followedArtistIds || [];
      const isFollowing = following.includes(artistId);

      const newFollowing = isFollowing
        ? following.filter(id => id !== artistId)
        : [...following, artistId];

      showToast(isFollowing ? 'Deixou de seguir.' : 'Seguindo artista!', 'success');

      return { ...prev, followedArtistIds: newFollowing };
    });
  };

  // Connect Social Feed clicks to Artist Pages
  const handleFeedInteraction = (artistId: string) => {
    // If we have an ID, try to find the artist
    if (artistId) {
      const artist = ARTISTS.find(a => a.id === artistId);
      if (artist) {
        navigateToArtist(artist);
        showToast(`Visualizando perfil de ${artist.name}`, 'success');
        return;
      }
    }

    // Fallback or Generic Message
    showToast('Perfil detalhado indisponível.', 'info');
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* Navigation */}
      <Header
        onSearchClick={() => setIsSearchExpanded(true)}
        isSearchExpanded={isSearchExpanded}
        onCloseSearch={() => setIsSearchExpanded(false)}
        onSearchSubmit={handleSearch}
        currentUser={currentUser}
        onLogin={(role) => handleLogin(role)} // Keep existing mock behavior for dropdown
        onLogout={handleLogout}
        onNavigateHome={() => setCurrentView('home')}
        onNavigateDashboard={navigateToDashboard}
        onNavigateLogin={() => setCurrentView('login')} // New prop
      />

      <main className="w-full min-h-screen">

        {/* VIEW: HOME */}
        {currentView === 'home' && (
          <div className="animate-fadeIn">
            <Hero />
            <ProfessionalFeed
              posts={ACTIVITY_FEED}
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
            onBook={handleInitiateChat}
            currentUser={currentUser}
            onToggleFollow={handleToggleFollow}
          />
        )}

        {/* VIEW: DASHBOARDS */}
        {currentView === 'dashboard-client' && (
          <ClientDashboard />
        )}

        {currentView === 'dashboard-artist' && (
          <ArtistDashboard />
        )}

        {currentView === 'checkout' && (
          <CheckoutFlow onComplete={handleSubscriptionComplete} />
        )}

        {currentView === 'login' && (
          <LoginView
            onLogin={handleLogin}
            onNavigateRegister={() => setCurrentView('register')}
          />
        )}

        {currentView === 'register' && (
          <RegisterView
            onComplete={handleRegisterComplete}
            onNavigateLogin={() => setCurrentView('login')}
          />
        )}


      </main>

      {/* CHAT MODAL */}
      {activeChatSession && currentUser && selectedArtist && (
        <ProfessionalChat
          session={activeChatSession}
          currentUser={currentUser}
          opponentName={selectedArtist.name}
          opponentImage={selectedArtist.imageUrl}
          onClose={() => setActiveChatSession(null)}
          onSendMessage={handleSendMessage}
        />
      )}

      {/* GLOBAL TOAST */}
      {notification && (
        <Toast notification={notification} onClose={() => setNotification(null)} />
      )}
    </div>
  );
}

export default App;