 import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TodoApp from './pages/TodoApp';
import WeatherApp from './WeatherApp';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;