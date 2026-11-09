 import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TodoApp from './pages/TodoApp';
import WeatherApp from './WeatherApp';
import ApiTodos from './pages/ApiTodos';
import LandingPage from './pages/LandingPage';

function AppContent() {
  const location = useLocation();
  // چک می‌کنیم که آیا در صفحه لندینگ هستیم یا نه
  const isLandingPage = location.pathname === '/landing';

  return (
    <div>
      {/* اگر در صفحه لندینگ نبودیم، منو و فوتر نمایش داده می‌شوند */}
      {!isLandingPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/api-todos" element={<ApiTodos />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>

      {!isLandingPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;