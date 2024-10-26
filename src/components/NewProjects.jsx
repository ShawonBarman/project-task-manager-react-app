import React, { useRef } from 'react'
import Input from './Input'
// import { toast } from 'react-toastify';
import Modal from './Modal';
import Button from './Button';

export default function NewProjects({ handleProjectData, handleCancelButton }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalRef = useRef();

  const handleSubmitData = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      !enteredTitle?.trim() ||
      !enteredDescription?.trim() ||
      !enteredDueDate?.trim()
    ) {
      modalRef.current.open();
      return;
    }

    handleProjectData({
      projectTitle: enteredTitle,
      projectDescription: enteredDescription,
      projectDueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Got it">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 
            rounded-full bg-red-100 text-red-500 mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">
            Invalid Input
          </h2>
          <p className="text-stone-600 mb-2">
            Please fill in all fields with valid values.
          </p>
        </div>
      </Modal>

      <div className="w-full h-[36rem] max-w-2xl mx-auto mt-16 p-8 bg-white/80 
        backdrop-blur-sm rounded-2xl shadow-xl border border-stone-200/60">
        <h1 className="text-3xl font-bold text-stone-800 mb-10 text-center">
          Create New Project
        </h1>
        
        <div className="space-y-6">
          <Input
            type="text"
            ref={title}
            label="Project Title"
            placeholder="Enter project title..."
          />
          <Input
            ref={description}
            label="Project Description"
            isTextArea={true}
            placeholder="Describe your project..."
          />
          <Input
            type="date"
            ref={dueDate}
            label="Due Date"
          />
        </div>

        <menu className="flex items-center justify-end gap-4 mt-8 pt-6 
          border-t border-stone-200">
          <li>
            <Button
              variant="secondary"
              onClick={handleCancelButton}
            >
              Cancel
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              onClick={handleSubmitData}
            >
              Create Project
            </Button>
          </li>
        </menu>
      </div>
    </>
  );
}