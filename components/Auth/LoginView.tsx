import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Music, User } from 'lucide-react';

interface LoginViewProps {
    onLogin: (role: 'client' | 'artist') => void;
    onNavigateRegister: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin, onNavigateRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'client' | 'artist'>('client');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            onLogin(role);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col pt-24 items-center px-4 animate-fadeIn">
            <h1 className="text-2xl font-extrabold mb-1">Bem-vindo de volta</h1>
            <p className="text-gray-500 mb-8 text-sm">Acesse sua conta profissional</p>

            <div className="w-full max-w-sm bg-white border border-gray-100 shadow-xl rounded-2xl p-6">

                {/* Role Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-50 rounded-xl mb-6">
                    <button
                        onClick={() => setRole('client')}
                        className={`flex items-center justify-center gap-2 text-sm font-bold py-2 rounded-lg transition-all ${role === 'client' ? 'bg-white shadow text-black' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <User size={16} /> Contratante
                    </button>
                    <button
                        onClick={() => setRole('artist')}
                        className={`flex items-center justify-center gap-2 text-sm font-bold py-2 rounded-lg transition-all ${role === 'artist' ? 'bg-white shadow text-black' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <Music size={16} /> Artista/Eq.
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700 ml-1">E-mail Corporativo</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-black/5 focus:outline-none transition-all"
                                placeholder="nome@empresa.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700 ml-1">Senha</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-black/5 focus:outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    >
                        {isLoading ? 'Entrando...' : 'Acessar Conta'}
                        {!isLoading && <ArrowRight size={18} />}
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-50 text-center">
                    <p className="text-xs text-gray-500 mb-2">Ainda não tem cadastro?</p>
                    <button
                        onClick={onNavigateRegister}
                        className="text-sm font-bold text-brand-primary hover:underline"
                    >
                        Criar Conta Profissional
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginView;
