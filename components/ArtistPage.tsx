import React, { useState } from 'react';
import { Star, MapPin, ShieldCheck, CheckCircle, Loader2, Share2, Heart, Music, Mic2, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Artist } from '../types';

interface ArtistPageProps {
  artist: Artist;
  onBook: () => void;
}

const ArtistPage: React.FC<ArtistPageProps> = ({ artist, onBook }) => {
  const [bookingStep, setBookingStep] = useState<'idle' | 'loading' | 'success'>('idle');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleBooking = () => {
    if (!selectedDate) {
        setIsDatePickerOpen(true);
        return;
    }
    setBookingStep('loading');
    setTimeout(() => {
        setBookingStep('success');
        onBook();
    }, 1500);
  };

  const CalendarPicker = () => {
      const days = Array.from({length: 31}, (_, i) => i + 1);
      return (
          <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-20 animate-fadeIn">
              <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-gray-900">Dezembro 2024</h4>
                  <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded-full"><ChevronLeft size={16} /></button>
                      <button className="p-1 hover:bg-gray-100 rounded-full"><ChevronRight size={16} /></button>
                  </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-400">
                  <div>D</div><div>S</div><div>T</div><div>Q</div><div>Q</div><div>S</div><div>S</div>
              </div>
              <div className="grid grid-cols-7 gap-1">
                  {/* Empty slots for start of month */}
                  <div className="h-8"></div><div className="h-8"></div>
                  {days.map(day => (
                      <button 
                        key={day} 
                        onClick={() => {
                            setSelectedDate(`${day} Dez, 2024`);
                            setIsDatePickerOpen(false);
                        }}
                        className={`h-8 w-8 rounded-full flex items-center justify-center text-sm transition-colors
                            ${selectedDate === `${day} Dez, 2024` ? 'bg-black text-white font-bold' : 'hover:bg-gray-100 text-gray-700'}
                        `}
                      >
                          {day}
                      </button>
                  ))}
              </div>
          </div>
      )
  }

  return (
    <div className="pt-24 pb-20 animate-fadeIn">
        
        {/* Gallery Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                <div className="md:col-span-2 h-full relative group">
                    <img src={artist.imageUrl} alt="Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="hidden md:flex flex-col gap-2">
                    <img src={`https://picsum.photos/seed/${artist.id}1/400/300`} className="h-1/2 object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery 1" />
                    <img src={`https://picsum.photos/seed/${artist.id}2/400/300`} className="h-1/2 object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery 2" />
                </div>
                <div className="hidden md:flex flex-col gap-2 relative">
                    <img src={`https://picsum.photos/seed/${artist.id}3/400/300`} className="h-1/2 object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery 3" />
                    <div className="relative h-1/2 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${artist.id}4/400/300`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" alt="Gallery 4" />
                        <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 text-sm font-bold rounded-lg shadow-sm hover:scale-105 transition-transform flex items-center gap-2">
                            <span className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></span>
                            Ver todas fotos
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10">
                
                {/* Header Info */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{artist.name}</h1>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                             <span className="flex items-center gap-1 font-medium text-gray-900">
                                <Star size={16} className="fill-brand-primary text-brand-primary" />
                                {artist.rating} · <span className="underline cursor-pointer">{artist.reviewCount} avaliações</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPin size={16} /> {artist.location}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors flex flex-col items-center text-xs gap-1 group">
                            <Share2 size={20} className="text-gray-700 group-hover:text-black" /> 
                            <span className="underline opacity-0 group-hover:opacity-100 transition-opacity">Compartilhar</span>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors flex flex-col items-center text-xs gap-1 group">
                            <Heart size={20} className="text-gray-700 group-hover:text-brand-primary" />
                            <span className="underline opacity-0 group-hover:opacity-100 transition-opacity">Salvar</span>
                        </button>
                    </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="flex gap-4 items-start p-5 bg-white border border-gray-100 shadow-sm rounded-2xl">
                        <div className="bg-brand-light p-2 rounded-full">
                            <ShieldCheck className="text-brand-primary" size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Músico Verificado</h3>
                            <p className="text-sm text-gray-500 mt-1">Identidade e qualidade técnica validadas pela curadoria MConecta.</p>
                        </div>
                     </div>
                     <div className="flex gap-4 items-start p-5 bg-white border border-gray-100 shadow-sm rounded-2xl">
                        <div className="bg-brand-light p-2 rounded-full">
                            <Music className="text-brand-primary" size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Repertório Personalizável</h3>
                            <p className="text-sm text-gray-500 mt-1">Envie suas músicas preferidas e o artista montará o setlist.</p>
                        </div>
                     </div>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                {/* About */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Sobre o artista</h2>
                    <p className="text-gray-600 leading-7 whitespace-pre-line text-lg font-light">
                        {artist.description}
                        <br/><br/>
                        Meu objetivo é transformar seu evento em uma experiência inesquecível. Chego sempre com 1 hora de antecedência para montagem e passagem de som. Trabalho com equipamentos de ponta para garantir a melhor qualidade sonora.
                    </p>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                {/* Equipment */}
                {artist.equipment.length > 0 && (
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-6">O que está incluso</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            {artist.equipment.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 text-gray-700">
                                <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                                <span className="font-medium">Transporte até 50km</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="w-full h-px bg-gray-200"></div>

                {/* Reviews */}
                <div>
                     <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                        <Star className="fill-brand-primary text-brand-primary" size={28} /> 
                        {artist.rating} 
                        <span className="text-gray-400 text-lg font-normal">· {artist.reviewCount} avaliações</span>
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {artist.reviews.map(review => (
                            <div key={review.id} className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <img src={review.avatarUrl} className="w-12 h-12 rounded-full object-cover" alt="User" />
                                    <div>
                                        <p className="font-bold text-gray-900">{review.author}</p>
                                        <p className="text-xs text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed italic">"{review.text}"</p>
                            </div>
                        ))}
                     </div>
                     <button className="mt-8 border border-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Mostrar todas as {artist.reviewCount} avaliações
                     </button>
                </div>

            </div>

            {/* Right Booking Card (Sticky) */}
            <div className="relative">
                <div className="sticky top-32 bg-white border border-gray-200 shadow-xl rounded-2xl p-6 ring-1 ring-black/5">
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <span className="text-2xl font-bold text-gray-900">{artist.price}</span>
                        </div>
                        <div className="flex items-center text-sm font-semibold underline cursor-pointer">
                            <Star size={14} className="fill-brand-primary text-brand-primary mr-1" />
                            {artist.rating}
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="border border-gray-400 rounded-xl mb-4 relative bg-white">
                        <div className="flex border-b border-gray-400 relative">
                            {/* Date Input */}
                            <div 
                                className="flex-1 p-3 border-r border-gray-400 cursor-pointer hover:bg-gray-50 relative rounded-tl-xl"
                                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                            >
                                <label className="block text-[10px] font-bold uppercase text-gray-800">Data</label>
                                <span className={`text-sm ${selectedDate ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                                    {selectedDate || 'Adicionar data'}
                                </span>
                            </div>
                            
                            {isDatePickerOpen && <CalendarPicker />}

                            <div className="flex-1 p-3 cursor-pointer hover:bg-gray-50 rounded-tr-xl">
                                <label className="block text-[10px] font-bold uppercase text-gray-800">Hora</label>
                                <span className="text-sm text-gray-600">19:00</span>
                            </div>
                        </div>
                         <div className="p-3 cursor-pointer hover:bg-gray-50 rounded-b-xl">
                            <label className="block text-[10px] font-bold uppercase text-gray-800">Tipo de Evento</label>
                            <span className="text-sm text-gray-600">Casamento, Festa...</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleBooking}
                        disabled={bookingStep !== 'idle'}
                        className={`
                            w-full py-4 rounded-xl font-bold text-lg text-white transition-all shadow-lg active:scale-95
                            ${bookingStep === 'success' 
                                ? 'bg-green-600 hover:bg-green-700' 
                                : 'bg-brand-primary hover:bg-brand-hover'}
                        `}
                    >
                        {bookingStep === 'loading' ? <div className="flex justify-center"><Loader2 className="animate-spin" /></div> : 
                         bookingStep === 'success' ? <div className="flex items-center justify-center gap-2"><CheckCircle /> Solicitação Enviada</div> : 
                         'Reservar'}
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-4">Você não será cobrado ainda.</p>

                    <div className="mt-6 space-y-4">
                        <div className="flex justify-between text-gray-600 text-sm">
                            <span className="underline decoration-gray-300">Show (4 horas)</span>
                            <span>R$ 1.800</span>
                        </div>
                        <div className="flex justify-between text-gray-600 text-sm">
                            <span className="underline decoration-gray-300">Taxa de serviço MConecta</span>
                            <span>R$ 150</span>
                        </div>
                        <hr className="border-gray-200" />
                        <div className="flex justify-between font-bold text-lg text-gray-900">
                            <span>Total</span>
                            <span>R$ 1.950</span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
                     <Share2 size={12} />
                     <span className="underline">Denunciar este perfil</span>
                </div>
            </div>

        </div>
    </div>
  );
};

export default ArtistPage;