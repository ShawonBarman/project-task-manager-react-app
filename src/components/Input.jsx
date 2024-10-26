import React, { forwardRef } from 'react'

const Input = forwardRef(function Input({ label, isTextArea, ...props }, ref) {
  return (
    <div className="relative my-6">
      <label className="absolute -top-6 left-2 text-sm font-semibold tracking-wide text-stone-600">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          ref={ref}
          className="w-full min-h-[120px] p-3 rounded-lg border-2 border-stone-200
            bg-white/80 backdrop-blur-sm text-stone-600
            placeholder-stone-400 transition-all duration-200
            hover:border-stone-300 focus:border-stone-500 focus:outline-none
            focus:ring-2 focus:ring-stone-500/20 focus:shadow-lg
            resize-none mb-5"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="w-full p-3 rounded-lg border-2 border-stone-200
            bg-white/80 backdrop-blur-sm text-stone-600
            placeholder-stone-400 transition-all duration-200
            hover:border-stone-300 focus:border-stone-500 focus:outline-none
            focus:ring-2 focus:ring-stone-500/20 focus:shadow-lg mb-5"
          {...props}
        />
      )}
    </div>
  );
});

export default Input;