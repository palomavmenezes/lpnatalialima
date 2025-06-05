import React from 'react';
import Button from '../elements/button';
import CheckList from '../elements/checks'; 

const Transform: React.FC = () => {
  const data = {
    title: 'Vamos transformar sua marca? Veja como posso te ajudar:',
    label: 'Quero meu diagnóstico gratuito',
    topics: [
      {
        title: 'Estratégia de conteúdo para redes sociais',
        description: 'Conteúdos sem identidade não geram engajamento. Vamos mudar isso com estratégias que façam sentido para a sua marca.'
      },
      {
        title: 'Consultoria de branding digital',
        description: 'Ajudar você a construir ou reposicionar sua marca de forma autêntica, gerando mais confiança e autoridade no mercado.'
      },
      {
        title: 'Treinamento',
        description: 'Capacitação para que você ou uma equipe de social media crie conteúdos que conversem diretamente com o público, fugindo dos "posts prontos".'
      },
      {
        title: 'Auditoria de Presença Digital',
        description: 'Vamos revisar toda a sua presença online para identificar pontos de melhoria e novas oportunidades de crescimento.'
      },
      {
        title: 'Networking com bons profissionais da área de marketing',
        description: 'Tráfego pago, Desenvolvimento de sites, etc. '
      }
    ]
  };

  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <section className='transform-section'>
      <div className="mx-auto container">
        <div className="text-center max-sm:mx-5">
          <h2 className="mb-2 font-bold text-3xl max-sm:text-xl">{data.title}</h2>
          <CheckList
            checks={data.topics}
          />
          <Button
            label={data.label}
            onClick={handleClick}
            bgColor="bg-black"
            textColor="text-white"
            bgHover='hover:bg-transparent'
            textHover="hover:text-black"
            borderColor='border-black'
          />
        </div>
      </div>
    </section>
  );
};

export default Transform;
