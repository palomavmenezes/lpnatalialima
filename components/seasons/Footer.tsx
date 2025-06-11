import React from 'react';
import SocialMedia from '../elements/socialmedia';

const Footer: React.FC = () => {

    const data = {
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
  return (
    <footer className="flex justify-between items-center bg-black text-white p-4 text-sm">
      <p className="m-0">
        Copyright © 2024 - Todos os direitos reservados à Natália Lima | Desenvolvido por <a href="https://www.linkedin.com/in/palomamenezes/" target="_blank">palomavianna</a>
      </p>
      <SocialMedia platforms={data.socials} />
    </footer>
  );
};

export default Footer;
