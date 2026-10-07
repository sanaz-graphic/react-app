import { useState } from 'react';
import './App.css';

function App() {
  // این خط، یک state می‌سازه به اسم count که مقدار اولیه‌اش 0 هست
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>شمارنده من</h1>
      <p style={{ fontSize: '48px', color: '#007bff' }}>{count}</p>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '18px', margin: '5px', cursor: 'pointer' }}
      >
        + اضافه کن
      </button>
      
      <button 
        onClick={() => setCount(count - 1)}
        style={{ padding: '10px 20px', fontSize: '18px', margin: '5px', cursor: 'pointer' }}
      >
        - کم کن
      </button>
      
      <button 
        onClick={() => setCount(0)}
        style={{ padding: '10px 20px', fontSize: '18px', margin: '5px', cursor: 'pointer' }}
      >
        ریست
      </button>
    </div>
  );
}

export default App;