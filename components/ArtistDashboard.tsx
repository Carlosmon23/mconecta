import React from 'react';
import { DollarSign, Users, TrendingUp, Calendar, ArrowRight, Check, X } from 'lucide-react';

const ArtistDashboard: React.FC = () => {
  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
         <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Painel do Artista</h1>
            <div className="flex gap-3">
                <button className="text-sm font-semibold underline">Editar Perfil</button>
                <button className="bg-black text-white text-sm font-bold px-4 py-2 rounded-lg">Ver meu perfil público</button>
            </div>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-green-100 rounded-full text-green-700">
                        <DollarSign size={24} />
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12% este mês</span>
                </div>
                <p className="text-gray-500 text-sm font-medium">Faturamento Dezembro</p>
                <p className="text-3xl font-bold text-gray-900">R$ 4.250,00</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 rounded-full text-blue-700">
                        <TrendingUp size={24} />
                    </div>
                </div>
                <p className="text-gray-500 text-sm font-medium">Visualizações do Perfil</p>
                <p className="text-3xl font-bold text-gray-900">1.245</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                 <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-purple-100 rounded-full text-purple-700">
                        <Users size={24} />
                    </div>
                </div>
                <p className="text-gray-500 text-sm font-medium">Novos Contatos</p>
                <p className="text-3xl font-bold text-gray-900">28</p>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Requests Column */}
            <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Solicitações Pendentes (2)</h2>
                <div className="space-y-4">
                    {/* Request Card 1 */}
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                                <img src="https://picsum.photos/seed/requester1/100/100" className="w-12 h-12 rounded-full object-cover" alt="User" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Ana Paula S.</h3>
                                    <p className="text-sm text-gray-500">Casamento ao ar livre • 150 convidados</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-700 font-medium">
                                        <span className="bg-gray-100 px-2 py-1 rounded">20 Jan, 2025</span>
                                        <span className="text-green-700">R$ 2.500 (Proposta)</span>
                                    </div>
                                </div>
                            </div>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Novo</span>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button className="flex-1 bg-black text-white py-2.5 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                <Check size={18} /> Aceitar
                            </button>
                            <button className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-lg font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                <X size={18} /> Recusar
                            </button>
                            <button className="px-4 border border-gray-300 rounded-lg hover:bg-gray-50">Chat</button>
                        </div>
                    </div>

                    {/* Request Card 2 */}
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow opacity-75">
                         <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                                <img src="https://picsum.photos/seed/requester2/100/100" className="w-12 h-12 rounded-full object-cover" alt="User" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Eventos Corp Ltda.</h3>
                                    <p className="text-sm text-gray-500">Coquetel de Final de Ano</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-700 font-medium">
                                        <span className="bg-gray-100 px-2 py-1 rounded">15 Dez, 2024</span>
                                        <span className="text-green-700">R$ 1.800</span>
                                    </div>
                                </div>
                            </div>
                            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">Respondido</span>
                        </div>
                        <div className="mt-4 text-sm text-orange-600 font-medium flex items-center gap-2">
                            Aguardando pagamento do sinal.
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="bg-gray-50 p-6 rounded-2xl h-fit">
                <h3 className="font-bold text-gray-900 mb-4">Agenda</h3>
                <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                        <div className="w-10 h-10 bg-white rounded-lg flex flex-col items-center justify-center border border-gray-200 shadow-sm">
                            <span className="text-[10px] text-gray-500 uppercase font-bold">Dez</span>
                            <span className="text-sm font-bold">12</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">Bar do Zé</p>
                            <p className="text-xs text-gray-500">20:00 - 23:00</p>
                        </div>
                    </div>
                     <div className="flex gap-3 items-center">
                        <div className="w-10 h-10 bg-white rounded-lg flex flex-col items-center justify-center border border-gray-200 shadow-sm">
                            <span className="text-[10px] text-gray-500 uppercase font-bold">Dez</span>
                            <span className="text-sm font-bold">24</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">Ceia Privada</p>
                            <p className="text-xs text-gray-500">22:00 - 02:00</p>
                        </div>
                    </div>
                </div>
                <button className="w-full mt-6 py-2 border border-gray-300 rounded-lg text-sm font-bold hover:bg-white transition-colors">
                    Ver calendário completo
                </button>
            </div>
         </div>
    </div>
  );
};

export default ArtistDashboard;