 import { useState } from 'react';

function LandingPage() {
  const [status, setStatus] = useState('');

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      
      {/* هدر سایت */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-pink-600">آرتمیس</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="text-gray-600 hover:text-pink-600 transition">خدمات</a>
          <a href="#about" className="text-gray-600 hover:text-pink-600 transition">درباره ما</a>
          <a href="#contact" className="text-gray-600 hover:text-pink-600 transition">تماس</a>
        </nav>
        <a href="#contact" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition">
          رزرو نوبت
        </a>
      </header>

      {/* بخش Hero */}
      <section className="bg-pink-50 py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          زیبایی خود را با ما تجربه کنید
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          کلینیک زیبایی آرتمیس با بهترین متخصصان و مدرن‌ترین تجهیزات، آماده ارائه خدمات به شماست.
        </p>
        <a href="#contact" className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-3 rounded-full transition shadow-lg hover:shadow-xl">
          دریافت مشاوره رایگان
        </a>
      </section>

      {/* بخش خدمات */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">خدمات ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">پاکسازی پوست</h3>
            <p className="text-gray-600 text-sm">استفاده از بهترین دستگاه‌ها برای شفافیت و طراوت پوست شما.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition">
            <div className="text-4xl mb-4">💆‍♀️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">ماساژ درمانی</h3>
            <p className="text-gray-600 text-sm">آرامش و رفع خستگی با ماساژهای تخصصی توسط بهترین متخصصان.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition">
            <div className="text-4xl mb-4">💉</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">تزریق ژل و بوتاکس</h3>
            <p className="text-gray-600 text-sm">جوان‌سازی و رفع چین و چروک با جدیدترین متدهای روز دنیا.</p>
          </div>
        </div>
      </section>

      {/* بخش درباره ما */}
      <section id="about" className="bg-pink-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">درباره کلینیک آرتمیس</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            کلینیک زیبایی آرتمیس با سال‌ها تجربه درخشان، بهترین خدمات زیبایی و پوست را به شما ارائه می‌دهد. 
            هدف ما افزایش اعتماد به نفس و زیبایی طبیعی شماست. تیم ما متشکل از مجرب‌ترین پزشکان و متخصصان است.
          </p>
        </div>
      </section>

      {/* بخش رزرو نوبت (فرم) */}
      <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">رزرو نوبت</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <form 
            action="https://formspree.io/f/xaeeabdl" 
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const data = new FormData(form);
              try {
                const response = await fetch(form.action, {
                  method: form.method,
                  body: data,
                  headers: { 'Accept': 'application/json' }
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
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-700 mb-1">نام و نام خانوادگی</label>
              <input type="text" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">شماره تماس</label>
              <input type="tel" name="phone" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">توضیحات (اختیاری)</label>
              <textarea name="message" rows="3" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500"></textarea>
            </div>

            {status === 'success' && (
              <p className="text-green-600 font-bold text-center">درخواست شما با موفقیت ثبت شد!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 font-bold text-center">خطا در ارسال. لطفاً دوباره تلاش کنید.</p>
            )}

            <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition">
              ثبت درخواست
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;