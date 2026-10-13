function About() {
  const skills = [
    { name: 'HTML', level: 'پیشرفته' },
    { name: 'CSS', level: 'پیشرفته' },
    { name: 'JavaScript', level: 'متوسط' },
    { name: 'React', level: 'متوسط' },
    { name: 'Tailwind', level: 'متوسط' },
    { name: 'Photoshop', level: 'پیشرفته' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          درباره من
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            من ساناز هستم، طراح گرافیک و برنامه‌نویس فرانت‌اند. 
            مسیر من از طراحی شروع شد و حالا با ترکیب دانش گرافیکی و مهارت‌های برنامه‌نویسی، 
            در حال ساخت اپلیکیشن‌های وب مدرن هستم.
          </p>
          <p className="text-gray-700 leading-relaxed">
            هدف من کار در حوزه فرانت‌اند به صورت دورکاری و همکاری با تیم‌های بین‌المللی است.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          مهارت‌های من
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition"
            >
              <span className="font-bold text-gray-800">{skill.name}</span>
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;