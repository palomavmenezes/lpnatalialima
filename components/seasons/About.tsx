import React from 'react';
import Image from 'next/image';
import Button from '../elements/button';

const About: React.FC = () => {
  const data = {
    title: 'Prazer, eu sou Natália Lima',
    description: 'Sou publicitária, atriz e influenciadora, parte da Geração Z com uma mentalidade empreendedora. Iniciei minha jornada no marketing digital aos 22 anos e, desde então, acumulei experiência em e-commerce, marketing de influência, B2B e gestão de comunidades. Com uma visão estratégica e criativa, estou aqui para te guiar em Planejamento, Produção de Conteúdo, Branding e Criatividade.',
    label: 'Agendar consultoria',
  };

  const handleClick = () => {
    const message = encodeURIComponent('Olá quero agendar uma consultoria.');
    const whatsappNumber =  process.env.NEXT_PUBLIC_PHONE_NUMBER || '55999999999';
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className='bg-dark about-section'>
      <div className="mx-auto my-10 container">
        <div className="gap-4 md:grid md:grid-cols-12 text-light">
            <div className="flex-row content-center md:col-span-6 p-10">
                <h2 className="mb-2 font-semibold text-3xl">{data.title}</h2>
                <p className='mb-5'>{data.description}</p>
                <Button 
                label={data.label}
                onClick={handleClick}
                bgColor="bg-light"
                textColor="text-black"
                bgHover='hover:bg-transparent'
                textHover="hover:text-light"
                borderColor='border-light'
                />
            </div>
          
            <div className="md:col-span-6 m-0 p-0">
                <Image
                    src="/img/natalia-lima-consultora-de-marketing-digital.png"
                    alt="Imagem da especialista em Marketing Digital Natália Lima."
                    width={1200}
                    height={100}
                    className='justify-self-end w-full h-auto'
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
