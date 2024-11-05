import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  bgColor?: string;
  textColor?: string;
  textHover?: string;
  bgHover?: string;
  borderColor?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, bgColor, textColor, bgHover, textHover, borderColor }) => {
  return (
    <button 
      onClick={onClick} 
      className={`${bgColor} ${textColor} ${textHover} ${bgHover} ${borderColor} uppercase mt-5 px-6 py-3 font-bold rounded-none transition duration-500 transform border`}
    >
      {label}
    </button>
  );
};

export default Button;
