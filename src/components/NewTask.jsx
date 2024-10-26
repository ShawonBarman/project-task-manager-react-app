import React, { useState } from 'react'

export default function NewTask({ handleAddTask }) {
    const [enteredTask, setEnteredTask] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    const handleChange = (event) => {
      setEnteredTask(event.target.value);
    };
  
    const handleClick = () => {
      if (enteredTask.trim() !== '') {
        handleAddTask(enteredTask);
        setEnteredTask('');
      }
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && enteredTask.trim() !== '') {
        handleClick();
      }
    };
  
    return (
      <div className={`flex items-center gap-4 p-4 rounded-lg
        transition-all duration-200 ${isFocused ? 'bg-stone-50' : ''}`}>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Add a new task..."
            value={enteredTask}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full px-4 py-2 rounded-lg border-2 border-stone-200
              focus:border-stone-400 focus:outline-none focus:ring-2
              focus:ring-stone-400/20 transition-all duration-200"
          />
        </div>
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-stone-800 text-white rounded-lg
            hover:bg-stone-900 transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-stone-400/20"
        >
          Add Task
        </button>
      </div>
    );
  }