import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-10">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          سلام! من ساناز هستم
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          طراح گرافیک و برنامه‌نویس فرانت‌اند
        </p>
        <p className="text-gray-500 mb-10 leading-relaxed">
          من در حال یادگیری برنامه‌نویسی وب هستم و روی React، Tailwind و ساخت اپلیکیشن‌های کاربردی تمرکز دارم.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            to="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
          >
            مشاهده پروژه‌ها
          </Link>
          <Link
            to="/contact"
            className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg transition"
          >
            تماس با من
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;