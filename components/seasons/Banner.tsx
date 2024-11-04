// src/components/home.tsx
import React from 'react';
import Button from '../elements/button';
import SocialMedia from '../elements/socialmedia';

const Home: React.FC = () => {
  const data = {
    title: 'Transforme sua presença digital com conteúdo autêntico e estratégico!',
    description: 'Você nunca mais vai precisar contratar um serviço ou curso genérico para tentar destacar sua marca no digital!',
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
    ]
  };

  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <section className='banner-home'>
      <div className="flex justify-center mx-auto container">
        <div className="flex-row content-center bg-opacity-70 p-4 max-w-5xl h-screen text-center text-light">
          <SocialMedia platforms={data.socials} />
          <h1 className="mb-2 font-semibold text-5xl">{data.title}</h1>
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

export default Home;
