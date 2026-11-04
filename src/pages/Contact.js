 import { useState } from 'react';
import { Mail, Code, Globe } from 'lucide-react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10 flex justify-center items-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          تماس با من
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-700 text-center mb-6">
            خوشحال می‌شم با من در ارتباط باشی. فرم زیر رو پر کن یا از راه‌های زیر پیام بده:
          </p>

          {/* فرم تماس */}
          <form 
            action="https://formspree.io/f/xaeeabdl" 
            method="POST"
            onSubmit={handleSubmit}
            className="mb-8 space-y-4"
          >
            <div>
              <label className="block text-gray-700 mb-1">نام شما</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">ایمیل شما</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">پیام شما</label>
              <textarea 
                name="message" 
                required 
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              ارسال پیام
            </button>

            {status === 'success' && (
              <p className="text-green-500 text-center font-bold">پیام شما با موفقیت ارسال شد!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center font-bold">خطا در ارسال پیام. لطفاً دوباره تلاش کنید.</p>
            )}
          </form>

          {/* لینک‌های ارتباطی */}
          <div className="space-y-3 border-t pt-6 border-gray-200">
            <a
              href="mailto:atalebi894@gmail.com"
              className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition border border-gray-100"
            >
              <Mail className="text-blue-500" size={24} />
              <div>
                <p className="text-sm text-gray-500">ایمیل</p>
                <p className="text-gray-800 font-medium">atalebi894@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/sanaz-graphic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-100"
            >
              <Code className="text-gray-800" size={24} />
              <div>
                <p className="text-sm text-gray-500">گیت‌هاب (نمونه کدها)</p>
                <p className="text-gray-800 font-medium">github.com/sanaz-graphic</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;