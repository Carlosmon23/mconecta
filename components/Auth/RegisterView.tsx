import React, { useState } from 'react';
import { Mail, Lock, User, Briefcase, Mic2, ArrowRight } from 'lucide-react';

interface RegisterViewProps {
    onComplete: (data: any) => void;
    onNavigateLogin: () => void;
}

const RegisterView: React.FC<RegisterViewProps> = ({ onComplete, onNavigateLogin }) => {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState<'client' | 'artist' | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Setup User Data
        onComplete({ ...formData, role });
    };

    return (
        <div className="min-h-screen bg-white flex flex-col pt-16 items-center px-4 animate-fadeIn">

            <div className="w-full max-w-md">
                {/* Progress */}
                <div className="flex gap-2 mb-8 justify-center">
                    <div className={`h-1 w-8 rounded-full ${step >= 1 ? 'bg-black' : 'bg-gray-200'}`}></div>
                    <div className={`h-1 w-8 rounded-full ${step >= 2 ? 'bg-black' : 'bg-gray-200'}`}></div>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-extrabold mb-2">Criar Conta</h1>
                    <p className="text-gray-500 text-sm">
                        {step === 1 ? 'Qual seu objetivo na plataforma?' : 'Seus dados de acesso'}
                    </p>
                </div>

                {/* STEP 1: ROLE SELECTION */}
                {step === 1 && (
                    <div className="space-y-4">
                        <button
                            onClick={() => { setRole('artist'); setStep(2); }}
                            className="w-full p-6 border-2 border-gray-100 hover:border-black rounded-2xl flex items-center gap-4 transition-all group text-left bg-white hover:bg-gray-50"
                        >
                            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mic2 size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Sou Artista / Representante</h3>
                                <p className="text-xs text-gray-500 mt-1">Quero divulgar meu trabalho e receber propostas.</p>
                            </div>
                        </button>

                        <button
                            onClick={() => { setRole('client'); setStep(2); }}
                            className="w-full p-6 border-2 border-gray-100 hover:border-black rounded-2xl flex items-center gap-4 transition-all group text-left bg-white hover:bg-gray-50"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Sou Contratante</h3>
                                <p className="text-xs text-gray-500 mt-1">Busco atrações para eventos ou projetos.</p>
                            </div>
                        </button>
                    </div>
                )}

                {/* STEP 2: FORM */}
                {step === 2 && (
                    <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-gray-100 p-6 rounded-2xl shadow-xl">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-700 ml-1">Nome Completo</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-black/5 focus:outline-none"
                                    placeholder="Seu nome"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-700 ml-1">E-mail</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-black/5 focus:outline-none"
                                    placeholder="seu@email.com"
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
                                    value={formData.password}
                                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-black/5 focus:outline-none"
                                    placeholder="Mínimo 8 caracteres"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all flex items-center justify-center gap-2 mt-4"
                        >
                            Continuar para Planos
                            <ArrowRight size={18} />
                        </button>

                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full text-xs text-gray-400 hover:text-gray-600 mt-2"
                        >
                            Voltar
                        </button>
                    </form>
                )}

                <div className="mt-8 text-center">
                    <button onClick={onNavigateLogin} className="text-sm text-gray-600 hover:text-black font-medium">
                        Já tem conta? <span className="underline">Fazer login</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default RegisterView;
