 import { Mail, Code, Briefcase } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          تماس با من
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-700 text-center mb-8">
            خوشحال می‌شم با من در ارتباط باشی. از راه‌های زیر می‌تونی پیام بدی:
          </p>

          <div className="space-y-4">
            <a
              href="mailto:atalebi894@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
            >
              <Mail className="text-blue-500" size={24} />
              <span className="text-gray-700">atalebi894@gmail.com</span>
            </a>

            <a
              href="https://github.com/sanaz-graphic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
            >
              <Code className="text-gray-800" size={24} />
              <span className="text-gray-700">github.com/sanaz-graphic</span>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Briefcase className="text-blue-700" size={24} />
              <span className="text-gray-700">LinkedIn (به زودی)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;