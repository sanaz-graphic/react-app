import { useState, useEffect } from 'react';

function ApiTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // این useEffect در زمان لود شدن صفحه اجرا می‌شه
  useEffect(() => {
    // تابعی برای گرفتن دیتا از API
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        
        if (!response.ok) {
          throw new Error('خطا در دریافت اطلاعات');
        }
        
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []); // آرایه خالی یعنی این کد فقط یک بار (موقع باز شدن صفحه) اجرا بشه

  // نمایش وضعیت Loading (در حال بارگذاری)
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <p className="text-xl text-blue-500 font-bold">در حال دریافت اطلاعات...</p>
      </div>
    );
  }

  // نمایش وضعیت Error (خطا)
  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <p className="text-xl text-red-500 font-bold">خطا: {error}</p>
      </div>
    );
  }
const filteredTodos = todos.filter(todo => 
  todo.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  // نمایش لیست کارها
  return (
    <div className="min-h-screen bg-gray-50 p-10 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          لیست کارها (از API واقعی)
        </h1>
        <input 
  type="text" 
  placeholder="جستجو در کارها..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full mb-6 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
/>
        
        <ul className="list-none p-0">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className="bg-gray-100 p-4 mb-2 rounded-lg border border-gray-200 flex items-center justify-between">
              <span className={todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}>
                {todo.title}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${todo.completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {todo.completed ? 'انجام شده' : 'در انتظار'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ApiTodos;