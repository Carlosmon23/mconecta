import React, { useState } from 'react';
import { X, Send, AlertCircle, Calendar, MapPin, Briefcase } from 'lucide-react';
import { ChatSession, ChatMessage, User } from '../types';

interface ProfessionalChatProps {
    session: ChatSession;
    currentUser: User;
    opponentName: string;
    opponentImage: string;
    onClose: () => void;
    onSendMessage: (text: string) => void;
}

const ProfessionalChat: React.FC<ProfessionalChatProps> = ({
    session,
    currentUser,
    opponentName,
    opponentImage,
    onClose,
    onSendMessage
}) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        if (!newMessage.trim()) return;
        onSendMessage(newMessage);
        setNewMessage('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col overflow-hidden relative">

                {/* Header: Context & Participants */}
                <div className="bg-gray-900 p-4 text-white flex justify-between items-start">
                    <div className="flex gap-3 items-center">
                        <img src={opponentImage} alt={opponentName} className="w-10 h-10 rounded-full border-2 border-brand-primary" />
                        <div>
                            <h3 className="font-bold text-sm">{opponentName}</h3>
                            <div className="flex items-center gap-1 text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">
                                <span className={`w-2 h-2 rounded-full ${session.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                                Chat Profissional
                            </div>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Context Card (Sticky Top) */}
                <div className="bg-brand-light/20 p-3 border-b border-gray-100 text-xs text-gray-700 flex flex-col gap-1">
                    <div className="flex items-center gap-2 font-bold text-gray-900">
                        {session.context.type === 'event' && <Calendar size={12} />}
                        {session.context.type === 'project' && <Briefcase size={12} />}
                        <span>Contexto: {session.context.notes || 'Solicitação de Contato'}</span>
                    </div>
                    {session.context.date && (
                        <div className="ml-5 text-gray-500">
                            Data: {session.context.date} - {session.context.location || 'Local a definir'}
                        </div>
                    )}
                </div>

                {/* Rules Banner */}
                <div className="bg-yellow-50 px-4 py-2 flex items-start gap-2 text-[10px] text-yellow-800 border-b border-yellow-100">
                    <AlertCircle size={12} className="mt-0.5 flex-shrink-0" />
                    <p>
                        <span className="font-bold">Regras:</span> Texto objetivo. Sem áudio. Foco na negociação.
                    </p>
                </div>

                {/* Message List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 scrollbar-hide">
                    {session.messages.length === 0 && (
                        <div className="text-center text-gray-400 text-sm mt-10 p-4 border border-dashed border-gray-200 rounded-xl">
                            <p>Inicie a conversa.</p>
                            <p className="text-xs mt-1">Seja cordial e vá direto ao ponto.</p>
                        </div>
                    )}

                    {session.messages.map(msg => {
                        const isMe = msg.senderId === currentUser.id;
                        return (
                            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`
                                        max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                                        ${isMe
                                            ? 'bg-gray-900 text-white rounded-br-none'
                                            : 'bg-white border border-gray-100 shadow-sm text-gray-800 rounded-bl-none'}
                                    `}
                                >
                                    {msg.text}
                                    <div className={`text-[9px] mt-1 opacity-60 text-right ${isMe ? 'text-gray-300' : 'text-gray-400'}`}>
                                        {msg.timestamp}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Input Area */}
                <div className="p-3 bg-white border-t border-gray-100">
                    <div className="relative">
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Digite sua mensagem profissional..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 resize-none h-12"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!newMessage.trim()}
                            className="absolute right-2 top-2 p-1.5 bg-brand-primary text-white rounded-lg hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                    <p className="text-[9px] text-gray-400 text-center mt-2">
                        Enter para enviar. Áudios não são permitidos.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ProfessionalChat;
