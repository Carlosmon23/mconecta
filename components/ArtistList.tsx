import React, { useState, useEffect } from 'react';
import { Star, Heart, Loader2 } from 'lucide-react';
import { Artist } from '../types';

interface ArtistListProps {
  artists: Artist[];
  onSelectArtist: (artist: Artist) => void;
  onFavorite: (artistName: string) => void;
}

const CATEGORIES = ['Todos', 'Sertanejo', 'MPB', 'Rock', 'DJ', 'Samba', 'Jazz', 'Clássico', 'Forró'];

const ArtistList: React.FC<ArtistListProps> = ({ artists, onSelectArtist, onFavorite }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>(artists);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Filter logic
    if (activeCategory === 'Todos') {
      setFilteredArtists(artists);
    } else {
      setFilteredArtists(artists.filter(artist => 
        artist.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
        artist.description.toLowerCase().includes(activeCategory.toLowerCase())
      ));
    }
    // Reset pagination when filter changes
    setVisibleCount(8);
  }, [activeCategory, artists]);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
        setVisibleCount(prev => prev + 4);
        setIsLoading(false);
    }, 800);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="artist-list">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Músicos bem avaliados perto de você</h2>
        <div className="flex gap-3 mt-6 overflow-x-auto no-scrollbar pb-2 mask-linear-fade">
           {CATEGORIES.map((cat) => (
             <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 
                  ${activeCategory === cat 
                    ? 'bg-black text-white shadow-md transform scale-105' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-800 hover:text-gray-900'}`}
             >
               {cat}
             </button>
           ))}
        </div>
      </div>

      {filteredArtists.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border-dashed border-2 border-gray-200">
            <p className="text-gray-500 text-lg">Nenhum artista encontrado nesta categoria.</p>
            <button onClick={() => setActiveCategory('Todos')} className="mt-4 text-brand-primary font-bold hover:underline">
                Ver todos os artistas
            </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredArtists.slice(0, visibleCount).map((artist) => (
            <div 
                key={artist.id} 
                className="group cursor-pointer relative"
            >
                <div 
                    className="relative aspect-square overflow-hidden rounded-xl bg-gray-200 mb-3"
                    onClick={() => onSelectArtist(artist)}
                >
                <img 
                    src={artist.imageUrl} 
                    alt={artist.name} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onFavorite(artist.name);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10 transition-colors z-10 active:scale-90"
                >
                    <Heart className="text-white fill-black/40 hover:fill-brand-primary hover:text-brand-primary transition-colors drop-shadow-md" size={24} />
                </button>
                {artist.verified && (
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-sm">
                    Superhost
                    </div>
                )}
                </div>

                <div onClick={() => onSelectArtist(artist)}>
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900 truncate pr-2 group-hover:text-brand-primary transition-colors">{artist.name}</h3>
                        <div className="flex items-center gap-1 shrink-0">
                            <Star size={14} className="fill-black text-black" />
                            <span className="text-sm font-light">{artist.rating.toFixed(2)}</span>
                        </div>
                    </div>
                    
                    <p className="text-gray-500 text-sm mt-0.5">{artist.location}</p>
                    <p className="text-gray-500 text-sm">{artist.category}</p>
                    
                    <div className="mt-2 flex items-baseline gap-1">
                        <span className="font-bold text-gray-900">{artist.price}</span>
                    </div>
                </div>
            </div>
            ))}
        </div>
      )}
      
      {visibleCount < filteredArtists.length && (
        <div className="mt-12 text-center">
            <button 
                onClick={handleLoadMore}
                disabled={isLoading}
                className="px-8 py-3 bg-white border border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto min-w-[200px]"
            >
                {isLoading ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        Carregando...
                    </>
                ) : (
                    'Carregar mais músicos'
                )}
            </button>
            <p className="mt-4 text-xs text-gray-500">Exibindo {Math.min(visibleCount, filteredArtists.length)} de {filteredArtists.length} artistas</p>
        </div>
      )}
    </section>
  );
};

export default ArtistList;
