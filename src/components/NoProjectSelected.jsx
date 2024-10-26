import React from 'react';
import { PlusCircle } from 'lucide-react';

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 w-full">
      <div className="w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <div className="bg-white rounded-xl shadow-xl p-8 space-y-6">
          {/* Decorative elements */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-100 rounded-full opacity-50" />
            
            {/* Main content */}
            <div className="relative z-10 text-center space-y-6">
              {/* Placeholder illustration */}
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                  <PlusCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Text content */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  No Project Selected
                </h2>
                <p className="text-gray-500 text-lg">
                  Select a project or create something new
                </p>
              </div>
              
              {/* Button */}
              <button
                onClick={onStartAddProject}
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                <PlusCircle className="w-5 h-5 mr-2" />
                <span>Create New Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoProjectSelected;