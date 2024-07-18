import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Function to add a new task
  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Function to remove a task by index
  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-2 border rounded"
          />
          <button onClick={handleAddTask} className="mt-2 w-full p-2 bg-blue-500 text-white rounded">Add Task</button>
        </div>
        <ul className="list-disc pl-5">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li key={index} className="mb-2 flex justify-between items-center">
                {task}
                <button 
                  onClick={() => handleRemoveTask(index)} 
                  className="ml-2 p-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <li className="mb-2 text-center">No tasks available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;