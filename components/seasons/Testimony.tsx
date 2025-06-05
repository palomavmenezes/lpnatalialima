import React from 'react';
import Quotes from '../elements/testimony'

const Testimony: React.FC = () => {
  const data = {
    title: 'Título',
    depoimentos: [
      { 
        name: 'Giovana Oliveira (UX Designer)', 
        quote: '“Natália é uma profissional surpreendente. Tive o prazer de trabalhar com ela no setor de marketing e, por meio dessa experiência, compreendi o valor e a diferença que faz trabalhar em sintonia com alguém. Suas habilidades de comunicação e pensamento estratégico, aliadas à sua capacidade de ouvir atentamente os stakeholders e o público, são pontos fortes notáveis. Ela enfrenta desafios de braços abertos e está sempre disposta a expandir seu conhecimento em novas áreas, sem medo.”'
      },
      { 
        name: 'Giovana Oliveira (UX Designer)', 
        quote: '“Natália é uma profissional surpreendente. Tive o prazer de trabalhar com ela no setor de marketing e, por meio dessa experiência, compreendi o valor e a diferença que faz trabalhar em sintonia com alguém. Suas habilidades de comunicação e pensamento estratégico, aliadas à sua capacidade de ouvir atentamente os stakeholders e o público, são pontos fortes notáveis. Ela enfrenta desafios de braços abertos e está sempre disposta a expandir seu conhecimento em novas áreas, sem medo. 2”'
      },
      { 
        name: 'Giovana Oliveira (UX Designer)',
        quote: '“Natália é uma profissional surpreendente. Tive o prazer de trabalhar com ela no setor de marketing e, por meio dessa experiência, compreendi o valor e a diferença que faz trabalhar em sintonia com alguém. Suas habilidades de comunicação e pensamento estratégico, aliadas à sua capacidade de ouvir atentamente os stakeholders e o público, são pontos fortes notáveis. Ela enfrenta desafios de braços abertos e está sempre disposta a expandir seu conhecimento em novas áreas, sem medo. 3”'
        
      },
      { 
        name: 'Giovana Oliveira (UX Designer)',
        quote: '“Natália é uma profissional surpreendente. Tive o prazer de trabalhar com ela no setor de marketing e, por meio dessa experiência, compreendi o valor e a diferença que faz trabalhar em sintonia com alguém. Suas habilidades de comunicação e pensamento estratégico, aliadas à sua capacidade de ouvir atentamente os stakeholders e o público, são pontos fortes notáveis. Ela enfrenta desafios de braços abertos e está sempre disposta a expandir seu conhecimento em novas áreas, sem medo. 4”'
        
      },
    ]
  };

  return (
    <section className="testimony-section bg-dark mt-10">
      <div className="container mx-auto pt-10 pb-6">
        <h2>{data.title}</h2>
        
        <Quotes
          testimonies={data.depoimentos}
        />
      </div>
    </section>
  );
}

export default Testimony;