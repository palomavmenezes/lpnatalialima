import React from 'react';
import Button from '../elements/button';
import SocialMedia from '../elements/socialmedia';

const Banner: React.FC = () => {
  const data = {
    title: 'Transforme sua presença digital com conteúdo autêntico e estratégico!',
    description: 'Você nunca mais vai precisar contratar um serviço ou curso genérico para tentar se destacar!',
    label: 'Agendar meu diagnóstico gratuito!',
    socials: [
      {
        perfil: 'natalialimavlog',
        icon: 'instagram'
      },
      {
        perfil: 'natalialima',
        icon: 'tiktok'
      },
      {
        perfil: 'natalialima',
        icon: 'linkedin'
      }
    ],
    troubles: [
      {
        number: 1,
        title: 'Já contratou um social media...',
        description: 'Mas só recebeu posts genéricos? Vamos criar estratégias com identidade para engajar sua marca.'
      },
      {
        number: 2,
        title: 'Comprou um curso de MKT...',
        description: 'Mas você não tem como acumular mais essa função. Eu posso cuidar da sua estratégia enquanto você foca no que você não pode delegar.'
      },
      {
        number: 3,
        title: 'Não sabe onde investir...',
        description: 'Vamos, juntos, escolher as ferramentas certas, aquelas que trazem resultados e otimizam seu tempo e investimento.'
      },
      {
        number: 4,
        title: 'Não conhece bons profissionais...',
        description: 'Eu conecto você a profissionais de confiança, especialistas em design, tráfego e mais, para uma estratégia completa.'
      }
      
    ]
  };

  const handleClick = () => {
    const message = encodeURIComponent('Olá quero agendar meu diagnóstico gratuito!');
    const whatsappNumber =  process.env.NEXT_PUBLIC_PHONE_NUMBER || '55999999999';
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className='banner-home'>
      <div className="flex justify-center mx-auto container">
        <div className="flex-row content-center bg-opacity-70 p-4 max-w-5xl h-screen text-center text-light">
          <SocialMedia platforms={data.socials} />
          <h1 className="mb-2 font-semibold text-5xl max-sm:text-3xl">{data.title}</h1>
          <p className="mx-auto mb-4 max-w-2xl text-xl">{data.description}</p>
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
      </div>
    </section>
  );
};

export default Banner;
