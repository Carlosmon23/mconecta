import React, { useState, useRef } from 'react';
import { Heart, MessageCircle, Play, Share2, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { SocialPost } from '../types';

interface SocialFeedProps {
  posts: SocialPost[];
  onInteract: (msg: string) => void;
}

const STORIES = [
    { id: 's1', name: 'Bastidores', img: 'https://picsum.photos/seed/story1/100/100', active: true },
    { id: 's2', name: 'Shows', img: 'https://picsum.photos/seed/story2/100/100', active: false },
    { id: 's3', name: 'Dicas', img: 'https://picsum.photos/seed/story3/100/100', active: false },
    { id: 's4', name: 'Agenda', img: 'https://picsum.photos/seed/story4/100/100', active: false },
    { id: 's5', name: 'Mariana', img: 'https://picsum.photos/seed/mariana/100/100', active: true },
];

const FeedCard: React.FC<{ post: SocialPost; onInteract: (msg: string) => void }> = ({ post, onInteract }) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likes);

    const handleLike = () => {
        if (liked) {
            setLikesCount(prev => prev - 1);
            setLiked(false);
        } else {
            setLikesCount(prev => prev + 1);
            setLiked(true);
            onInteract(`Curtiu o post de ${post.userHandle}`);
        }
    };

    return (
        <div className="snap-center shrink-0 w-[280px] sm:w-[300px] h-[500px] relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group bg-gray-900 cursor-pointer">
            {/* Image/Video Background */}
            <img 
                src={post.imageUrl} 
                alt="Post content" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>

            {/* Top User Info */}
            <div className="absolute top-4 left-4 flex items-center gap-3 z-10">
                <div className="relative">
                    <img src={post.userAvatar} alt={post.userName} className="w-10 h-10 rounded-full border-2 border-white/20 backdrop-blur-sm" />
                    <div className="absolute -bottom-1 -right-1 bg-brand-primary w-4 h-4 rounded-full flex items-center justify-center border border-white">
                        <Plus size={10} className="text-white" strokeWidth={4} />
                    </div>
                </div>
                <div className="text-white drop-shadow-md">
                    <p className="text-sm font-bold leading-none">{post.userHandle}</p>
                    <p className="text-[10px] opacity-80 mt-0.5">2h atrás</p>
                </div>
            </div>

            {/* Play Button Center (if video) */}
            {post.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                        <Play size={24} className="fill-white text-white ml-1" />
                    </div>
                </div>
            )}

            {/* Bottom Content & Actions */}
            <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                <p className="text-white text-sm font-medium line-clamp-2 mb-4 drop-shadow-sm leading-relaxed">
                    {post.content}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <button onClick={(e) => { e.stopPropagation(); handleLike(); }} className="flex flex-col items-center gap-1 group/btn">
                            <Heart size={24} className={`transition-colors ${liked ? "fill-brand-primary text-brand-primary" : "text-white group-hover/btn:text-brand-primary"}`} />
                            <span className="text-[10px] font-bold text-white">{likesCount}</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 group/btn">
                            <MessageCircle size={24} className="text-white group-hover/btn:text-blue-400 transition-colors" />
                            <span className="text-[10px] font-bold text-white">{post.comments}</span>
                        </button>
                        <button className="flex flex-col items-center gap-1">
                            <Share2 size={24} className="text-white hover:text-gray-300" />
                            <span className="text-[10px] font-bold text-white">Share</span>
                        </button>
                    </div>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                        Ver Perfil
                    </button>
                </div>
            </div>
        </div>
    );
};

const SocialFeed: React.FC<SocialFeedProps> = ({ posts, onInteract }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount = 320; // card width + gap
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
  };

  return (
    <section className="py-12 bg-white border-t border-b border-gray-100 relative group/section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex justify-between items-end mb-6">
             <div>
                <h2 className="text-2xl font-bold text-gray-800">Acontecendo agora</h2>
                <p className="text-gray-500 mt-1">Stories e momentos exclusivos dos nossos artistas.</p>
            </div>
             <button className="text-sm font-bold text-gray-900 underline hover:text-brand-primary">Ver todos</button>
        </div>

        {/* Stories Bar */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar mb-8 pb-2">
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                 <div className="w-[70px] h-[70px] rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-50">
                    <Plus className="text-brand-primary" />
                 </div>
                 <span className="text-xs font-medium text-gray-600">Criar</span>
            </div>
            {STORIES.map((story) => (
                <div key={story.id} className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className={`p-[2px] rounded-full ${story.active ? 'bg-gradient-to-tr from-yellow-400 via-brand-primary to-purple-600' : 'bg-gray-200'}`}>
                         <img src={story.img} alt={story.name} className="w-[66px] h-[66px] rounded-full border-2 border-white object-cover group-hover:scale-95 transition-transform" />
                    </div>
                    <span className="text-xs font-medium text-gray-800">{story.name}</span>
                </div>
            ))}
        </div>
      </div>

      <div className="relative w-full max-w-[1920px] mx-auto">
        {/* Navigation Buttons */}
        <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:scale-110 transition-transform disabled:opacity-0"
        >
            <ChevronLeft size={24} />
        </button>
        <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:scale-110 transition-transform"
        >
            <ChevronRight size={24} />
        </button>

        {/* Feed Scroll Container */}
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 px-4 sm:px-6 lg:px-8 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {posts.map((post) => (
            <FeedCard key={post.id} post={post} onInteract={onInteract} />
          ))}
          
          {/* Load More Card */}
          <div className="snap-center shrink-0 w-[200px] h-[500px] flex items-center justify-center">
             <button className="group flex flex-col items-center gap-4">
                 <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-light transition-colors">
                    <span className="text-3xl text-gray-400 group-hover:text-brand-primary">→</span>
                 </div>
                 <span className="font-bold text-gray-600 group-hover:text-brand-primary">Ver mais posts</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;