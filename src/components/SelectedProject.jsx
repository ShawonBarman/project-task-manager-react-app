import React from 'react';
import Tasks from './Tasks';

const TrashIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
    />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default function SelectedProject({
  tasks = [],
  project = {},
  handleDeleteButton = () => {},
  handleAddTask = () => {},
  handleDeleteTask = () => {}
}) {
  const formattedDate = new Date(project.projectDueDate).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 px-4">
      <header className="transform transition-all duration-300 hover:scale-[1.01]">
        <div className="p-8 bg-white rounded-2xl shadow-lg border border-stone-200/60 
          backdrop-blur-sm relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100/20 to-blue-100/20 
            rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-100/10 to-blue-100/10 
            rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />
          
          {/* Header Content */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-stone-800 tracking-tight">
              {project.projectTitle}
            </h1>
            <button
              onClick={handleDeleteButton}
              className="px-4 py-2 text-red-600 hover:text-red-700
                hover:bg-red-50 rounded-lg transition-all duration-200
                group flex items-center gap-2 focus:outline-none 
                focus:ring-2 focus:ring-red-200 active:bg-red-100"
            >
              <span className="transform group-hover:scale-110 transition-transform duration-200">
                <TrashIcon />
              </span>
              <span className="font-medium">Delete Project</span>
            </button>
          </div>

          {/* Date Display */}
          <div className="flex items-center gap-2 mb-6 text-stone-500 group">
            <span className="transform group-hover:scale-110 transition-transform duration-200">
              <CalendarIcon />
            </span>
            <span className="font-medium">{formattedDate}</span>
          </div>

          {/* Description */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-50/50 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="text-stone-600 leading-relaxed whitespace-pre-wrap 
              text-lg backdrop-blur-sm relative z-10">
              {project.projectDescription}
            </p>
          </div>
        </div>
      </header>

      {/* Tasks Section */}
      <div className="mt-8 transform transition-all duration-300">
        <Tasks
          tasks={tasks}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}