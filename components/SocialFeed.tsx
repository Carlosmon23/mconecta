import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Briefcase, Music, Calendar } from 'lucide-react';
import { ActivityItem } from '../types';

interface ProfessionalFeedProps {
    posts: ActivityItem[];
    onInteract: (msg: string) => void;
}

const FeedCard: React.FC<{ item: ActivityItem; onInteract: (msg: string) => void }> = ({ item, onInteract }) => {
    // Determine icon and color based on type
    const getTypeStyle = () => {
        switch (item.type) {
            case 'open_project': return { label: 'Vaga', color: 'bg-purple-100 text-purple-700' };
            case 'new_artist': return { label: 'Novo Talento', color: 'bg-green-100 text-green-700' };
            default: return { label: 'Atualização', color: 'bg-blue-100 text-blue-700' };
        }
    }
    const style = getTypeStyle();

    return (
        <div
            onClick={() => onInteract(item.artistId)}
            className="snap-center shrink-0 w-[280px] bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
        >
            {/* Header / Banner if present, else colored bar */}
            <div className={`h-2 w-full ${style.color.replace('text', 'bg').split(' ')[0].replace('100', '500')}`}></div>

            <div className="p-4 flex flex-col h-full gap-3">
                {/* Top Row: Avatar & Meta */}
                <div className="flex items-center gap-3">
                    <img
                        src={item.imageUrl || `https://ui-avatars.com/api/?name=${item.title}&background=random`}
                        alt="Avatar"
                        className="w-10 h-10 rounded-full object-cover border border-gray-100"
                    />
                    <div className="flex flex-col">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md w-fit mb-0.5 ${style.color}`}>
                            {style.label}
                        </span>
                        <span className="text-[10px] text-gray-400">{item.timestamp}</span>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1 line-clamp-2 decoration-gray-900 group-hover:underline decoration-1 underline-offset-2">
                        {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {item.description}
                    </p>
                </div>

                {/* Footer Action */}
                <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-gray-400">Ver perfil</span>
                    <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <ChevronRight size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfessionalFeed: React.FC<ProfessionalFeedProps> = ({ posts }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 320;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-8 bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Feed Profissional
                    </h2>
                    <div className="flex gap-2">
                        <button onClick={() => scroll('left')} className="p-1 hover:bg-gray-200 rounded-full"><ChevronLeft size={20} /></button>
                        <button onClick={() => scroll('right')} className="p-1 hover:bg-gray-200 rounded-full"><ChevronRight size={20} /></button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
                >
                    {posts.map((post) => (
                        <FeedCard key={post.id} item={post} onInteract={() => { }} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalFeed;