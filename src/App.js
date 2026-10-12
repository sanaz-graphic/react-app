 import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-10 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        تیم برنامه‌نویسی من
      </h1>
      
      <div className="flex justify-center flex-wrap gap-6">
        <Card 
          name="ساناز" 
          role="فرانت‌اند دولوپر" 
          skills={['HTML', 'CSS', 'JavaScript', 'React']} 
        />
        <Card 
          name="آریو" 
          role="بک‌اند دولوپر" 
          skills={['Python', 'Django', 'SQL']} 
        />
        <Card 
          name="آدرینا" 
          role="طراح UI/UX" 
          skills={['Figma', 'Photoshop', 'Illustrator']} 
        />
      </div>
    </div>
  );
}

export default App;