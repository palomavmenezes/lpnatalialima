import React from 'react';
import Image from 'next/image';
import Button from '../elements/button';
import Numbers from '../elements/numbers';

const Troubles: React.FC = () => {
  const data = {
    title: 'Se você...',
    label: 'É o que eu preciso!',
    troubles: [
      {
        circleNumber: 1,
        title: 'Já contratou um social media...',
        description: 'Mas só recebeu posts genéricos? Vamos criar estratégias com identidade para engajar sua marca.'
      },
      {
        circleNumber: 2,
        title: 'Comprou um curso de MKT...',
        description: 'Mas você não tem como acumular mais essa função. Eu posso cuidar da sua estratégia enquanto você foca no que você não pode delegar.'
      },
      {
        circleNumber: 3,
        title: 'Não sabe onde investir...',
        description: 'Vamos, juntos, escolher as ferramentas certas, aquelas que trazem resultados e otimizam seu tempo e investimento.'
      },
      {
        circleNumber: 4,
        title: 'Não conhece bons profissionais...',
        description: 'Eu conecto você a profissionais de confiança, especialistas em design, tráfego e mais, para uma estratégia completa.'
      }
    ]
  };

  const handleClick = () => {
    const message = encodeURIComponent('Olá preciso de ajuda com minha estratégia de marketing digital. Gostaria de agendar uma consultoria.');
    const whatsappNumber =  process.env.NEXT_PUBLIC_PHONE_NUMBER || '55999999999';
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className='troubles-section'>
      <div className="bg-dark mx-auto my-10 container">
        <div className="gap-4 md:grid md:grid-cols-12 text-light">
          <div className="md:col-span-8 p-10">
            <h2 className="mb-2 font-semibold text-3xl">{data.title}</h2>
            <Numbers
              cards={data.troubles}
            />
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

          <div className="md:col-span-4 m-0 p-0">
            <Image
              src="/img/imagem-escritorio-de-marketing-digital-em-frente-ao-pao-de-acucar-rio-de-janeiro.png"
              alt="Imagem do escritório de Marketing Digital em frente ao Pão de Açúcar, no Rio de Janeiro."
              width={500}
              height={100}
              className='justify-self-end h-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Troubles;
