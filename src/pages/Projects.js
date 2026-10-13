function Projects() {
  const projects = [
    {
      title: 'لیست کارها',
      description: 'یک اپلیکیشن برای مدیریت کارهای روزانه با قابلیت ذخیره‌سازی خودکار.',
      tech: ['React', 'Tailwind', 'localStorage'],
    },
    {
      title: 'اپلیکیشن آب‌وهوا',
      description: 'جستجوی آب‌وهوای هر شهر جهان با استفاده از API رایگان Open-Meteo.',
      tech: ['React', 'API', 'async/await'],
    },
    {
      title: 'کارت پروفایل',
      description: 'کارت پروفایل شخصی با طراحی مدرن و واکنش‌گرا.',
      tech: ['HTML', 'CSS', 'Tailwind'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          پروژه‌های من
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;