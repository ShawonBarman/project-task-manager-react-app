import React from 'react'

const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyles = `
    px-6 py-2.5 rounded-lg font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transform hover:-translate-y-0.5 active:translate-y-0
  `;

  const variants = {
    primary: `
      bg-stone-800 text-stone-50 shadow-lg
      hover:bg-stone-900 hover:shadow-xl
      focus:ring-stone-500
      active:bg-stone-800
    `,
    secondary: `
      bg-white text-stone-600 shadow-sm
      hover:bg-stone-50 hover:text-stone-800
      focus:ring-stone-400
      active:bg-stone-100
    `
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
