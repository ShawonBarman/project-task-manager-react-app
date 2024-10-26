import React from 'react'
import NewTask from './NewTask'

export default function Tasks({ tasks, handleAddTask, handleDeleteTask }) {
    return (
      <section className="bg-white p-6 rounded-xl shadow-lg border border-stone-200/60">
        <h2 className="text-2xl font-bold text-stone-800 mb-6">Tasks</h2>
        <NewTask handleAddTask={handleAddTask} />
        {tasks.length === 0 ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 
              rounded-full bg-stone-100 text-stone-400 mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-stone-600">This project does not have any tasks yet.</p>
          </div>
        ) : (
          <ul className="mt-6 space-y-2">
            {tasks.map((task, index) => (
              <li
                key={task.taskId}
                className="flex items-center justify-between p-4 rounded-lg
                  bg-stone-50 hover:bg-stone-100 transition-colors duration-200
                  group"
              >
                <span className="text-stone-700">{task.text}</span>
                <button
                  onClick={() => handleDeleteTask(task.taskId)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity
                    px-3 py-1 text-red-600 hover:text-red-700 
                    hover:bg-red-50 rounded-md"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }