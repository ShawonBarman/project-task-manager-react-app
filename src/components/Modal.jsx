import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import {createPortal} from 'react-dom'
import Button from './Button';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const dialogRef = useRef();
  
    useImperativeHandle(ref, () => ({
      open() {
        dialogRef.current.showModal();
      }
    }));
  
    return createPortal(
      <dialog
        ref={dialogRef}
        className="backdrop:bg-stone-900/90 p-8 rounded-xl
          shadow-2xl border border-stone-200/20
          animate-[fadeIn_0.3s_ease-out]"
      >
        <div className="max-w-md">
          {children}
          <form method="dialog" className="mt-6">
            <Button className="w-full">{buttonCaption}</Button>
          </form>
        </div>
      </dialog>,
      document.getElementById('modal-root')
    );
  });

export default Modal;