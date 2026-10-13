import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">ساناز</h1>
        
        <ul className="flex gap-6 list-none">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              خانه
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
              درباره من
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition">
              پروژه‌ها
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
              تماس
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;