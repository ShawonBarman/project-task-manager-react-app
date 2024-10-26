import React, { useState } from 'react';

// Simple SVG icons as components
const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
  </svg>
);

const ProjectSidebar = ({ 
  onStartAddProject, 
  projects, 
  handleSelectProject, 
  selectedProjectID 
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`relative min-h-screen transition-all duration-300 ease-in-out
      ${isCollapsed ? 'w-16' : 'w-72'} 
      bg-gradient-to-b from-stone-900 to-stone-950 text-stone-50 
      border-r border-stone-800/50 shadow-xl`}>
      
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 p-1 bg-stone-800 rounded-full 
          shadow-lg border border-stone-700 hover:bg-stone-700 
          transition-colors duration-200"
      >
        <div className={`transition-transform duration-300
          ${isCollapsed ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronIcon />
        </div>
      </button>

      <div className="px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8 px-2">
          <span className="text-stone-300">
            <FolderIcon />
          </span>
          <h2 className={`ml-3 font-bold uppercase text-lg text-stone-200 
            tracking-wide transition-opacity duration-200
            ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
            Projects
          </h2>
        </div>

        {/* Add Project Button */}
        <button
          onClick={onStartAddProject}
          className={`w-full flex items-center justify-center p-2 
            bg-stone-700 hover:bg-stone-600 active:bg-stone-500
            rounded-lg transition-all duration-200 
            text-stone-100 font-medium shadow-md
            hover:shadow-lg hover:-translate-y-0.5
            active:translate-y-0 active:shadow-md`}
        >
          <PlusIcon />
          <span className={`ml-2 transition-opacity duration-200
            ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            Add Project
          </span>
        </button>

        {/* Projects List */}
        <ul className="mt-8 space-y-1">
          {projects.map((project) => {
            const isSelected = project.id === selectedProjectID;
            return (
              <li key={project.id} className="relative">
                {isSelected && (
                  <div className="absolute left-0 top-0 w-1 h-full 
                    bg-stone-300 rounded-full" />
                )}
                <button
                  onClick={() => handleSelectProject(project.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg 
                    transition-all duration-200 
                    ${isSelected 
                      ? 'bg-stone-800 text-stone-200 shadow-md' 
                      : 'text-stone-400 hover:text-stone-300 hover:bg-stone-800/70'
                    }`}
                >
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3
                      ${isSelected ? 'bg-stone-300' : 'bg-stone-600'}`} />
                    <span className={`truncate transition-opacity duration-200
                      ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                      {project.projectTitle}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ProjectSidebar;