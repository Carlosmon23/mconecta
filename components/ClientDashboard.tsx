import React from 'react';
import { Calendar, MessageSquare, Heart, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Booking } from '../types';
import { CLIENT_BOOKINGS } from '../constants';

const ClientDashboard: React.FC = () => {
  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Olá, Cliente!</h1>

        {/* Overview Tabs */}
        <div className="flex gap-8 border-b border-gray-200 mb-8">
            <button className="pb-3 border-b-2 border-brand-primary font-bold text-brand-primary">Meus Eventos</button>
            <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 font-medium transition-colors">Favoritos</button>
            <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 font-medium transition-colors">Mensagens</button>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800">Próximos Shows & Solicitações</h2>

            {CLIENT_BOOKINGS.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CLIENT_BOOKINGS.map((booking) => (
                        <div key={booking.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-32 bg-gray-200 relative">
                                <img src={booking.artistImage} alt={booking.artistName} className="w-full h-full object-cover" />
                                <div className="absolute top-3 right-3">
                                    {booking.status === 'confirmed' && <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1"><CheckCircle size={12}/> Confirmado</span>}
                                    {booking.status === 'pending' && <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1"><Clock size={12}/> Pendente</span>}
                                    {booking.status === 'completed' && <span className="bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded-md">Realizado</span>}
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-lg truncate">{booking.artistName}</h3>
                                <p className="text-sm text-gray-500 mb-4">{booking.eventName}</p>
                                
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-gray-400" />
                                        <span>{booking.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-brand-primary">{booking.price}</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-3">
                                    <button className="flex-1 bg-gray-900 text-white text-sm font-semibold py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                        Detalhes
                                    </button>
                                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                        <MessageSquare size={18} className="text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50 rounded-xl border-dashed border-2 border-gray-200">
                    <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">Você ainda não tem reservas.</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default ClientDashboard;