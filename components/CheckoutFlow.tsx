import React, { useState } from 'react';
import { CheckCircle, Shield, Gift, ArrowRight } from 'lucide-react';

interface CheckoutProps {
    onComplete: () => void;
}

const CheckoutFlow: React.FC<CheckoutProps> = ({ onComplete }) => {
    const [step, setStep] = useState<1 | 2>(1); // 1: Plan Selection, 2: Payment/Coupon
    const [selectedPlan, setSelectedPlan] = useState<'artist' | 'contractor' | null>(null);
    const [coupon, setCoupon] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const PLANS = {
        artist: { name: 'Artista Profissional', price: 14.90 },
        contractor: { name: 'Acesso Contratante', price: 14.90 }
    };

    const handleApplyCoupon = () => {
        if (coupon.toUpperCase() === 'CONVITE2024') {
            setCouponApplied(true);
        }
    };

    const handleSubscribe = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            onComplete();
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center pt-20 px-4 animate-fadeIn">

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">M.Conecta Premium</h1>
                <p className="text-gray-500">Acesso ilimitado. Sem comissões.</p>
            </div>

            <div className="w-full max-w-md">

                {/* STEP 1: PLAN SELECTION */}
                {step === 1 && (
                    <div className="space-y-6">
                        <div
                            onClick={() => setSelectedPlan('artist')}
                            className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${selectedPlan === 'artist' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-lg">Sou Artista</h3>
                                <span className="font-bold">R$ 14,90/mês</span>
                            </div>
                            <p className="text-sm text-gray-500">Vitrine profissional, chat ilimitado e sem taxas sobre cachê.</p>
                        </div>

                        <div
                            onClick={() => setSelectedPlan('contractor')}
                            className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${selectedPlan === 'contractor' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-lg">Sou Contratante</h3>
                                <span className="font-bold">R$ 14,90/mês</span>
                            </div>
                            <p className="text-sm text-gray-500">Acesso à agenda dos melhores artistas e garantia de suporte.</p>
                        </div>

                        <button
                            onClick={() => setStep(2)}
                            disabled={!selectedPlan}
                            className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Continuar
                        </button>
                    </div>
                )}

                {/* STEP 2: CHECKOUT / COUPON */}
                {step === 2 && selectedPlan && (
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
                        <h3 className="font-bold text-xl mb-6">Resumo do Pedido</h3>

                        <div className="flex justify-between items-center py-4 border-b border-gray-100">
                            <span>{PLANS[selectedPlan].name}</span>
                            <div className="text-right">
                                {couponApplied ? (
                                    <>
                                        <span className="block text-gray-400 line-through text-xs">R$ 14,90</span>
                                        <span className="text-green-600 font-bold">R$ 0,00</span>
                                    </>
                                ) : (
                                    <span className="font-bold">R$ 14,90</span>
                                )}
                            </div>
                        </div>

                        {/* Coupon Input */}
                        <div className="mt-6 mb-8">
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Tem um convite?</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    placeholder="Código do convite"
                                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 uppercase placeholder:normal-case focus:outline-none focus:border-black"
                                    readOnly={couponApplied}
                                />
                                <button
                                    onClick={handleApplyCoupon}
                                    disabled={couponApplied || !coupon}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 disabled:opacity-50"
                                >
                                    {couponApplied ? <CheckCircle size={20} className="text-green-600" /> : 'Aplicar'}
                                </button>
                            </div>
                            {couponApplied && (
                                <p className="text-green-600 text-xs mt-2 flex items-center gap-1">
                                    <Gift size={12} /> Convite aplicado com sucesso! Acesso liberado.
                                </p>
                            )}
                        </div>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Shield size={16} className="text-brand-primary" />
                                <span>Ambiente seguro</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={16} className="text-brand-primary" />
                                <span>Cancelamento a qualquer momento</span>
                            </div>
                        </div>

                        <button
                            onClick={handleSubscribe}
                            disabled={!couponApplied && !isProcessing} // For now force coupon or payment sim
                            className={`
                                w-full py-4 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-2
                                ${isProcessing || (!couponApplied) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-green-200'}
                            `}
                        >
                            {isProcessing ? 'Ativando...' : 'Confirmar Assinatura'}
                            {!isProcessing && <ArrowRight size={20} />}
                        </button>

                        {!couponApplied && (
                            <p className="text-center text-xs text-red-400 mt-4">
                                * Para testes, use o cupom: <span className="font-bold">CONVITE2024</span>
                            </p>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default CheckoutFlow;
