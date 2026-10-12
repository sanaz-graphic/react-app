 import { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('myReactTasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('myReactTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === '') {
      alert('لطفا یک کار بنویسید!');
      return;
    }
    setTasks([...tasks, inputValue]);
    setInputValue('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          لیست کارهای من
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="یک کار جدید بنویس..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            اضافه کن
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-400 py-6">
            هنوز هیچ کاری اضافه نکردی.
          </p>
        ) : (
          <ul className="list-none p-0">
            {tasks.map((task, index) => (
              <TodoItem
                key={index}
                task={task}
                onDelete={() => deleteTask(index)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;