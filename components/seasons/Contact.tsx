import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        need: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const whatsappMessage = `Olá, gostaria de agendar um diagnóstico gratuito!%0A%0A` +
            `Nome: ${formData.name}%0A` +
            `Empresa: ${formData.company}%0A` +
            `E-mail: ${formData.email}%0A` +
            `Telefone: ${formData.phone}%0A` +
            `Necessidade: ${formData.need}`;

        const whatsappNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-5 md:p-10">
            <div className="flex-1 md:pr-5 mb-5 md:mb-0">
                <img
                    src="/img/pronto-para-transformar-sua-marca-e-comecar-a-ver-resultados-reais-natalia-lima.jpg"
                    alt="Imagem"
                    className="w-full rounded-lg"
                />
            </div>

            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">
                    Pronto para transformar sua marca e começar a ver resultados reais?
                </h2>
                <p className="mb-6">
                    Agende uma sessão de diagnóstico gratuita e vamos conversar sobre as melhores estratégias para sua empresa:
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="p-3 border rounded-md"
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Empresa"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="p-3 border rounded-md"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="p-3 border rounded-md"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="p-3 border rounded-md"
                    />
                    <textarea
                        name="need"
                        placeholder="Qual é a sua necessidade?"
                        value={formData.need}
                        onChange={handleChange}
                        required
                        className="p-3 border rounded-md resize-none"
                    />
                    <button
                        type="submit"
                        className="p-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
                    >
                        Agendar diagnóstico gratuito!
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;