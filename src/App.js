import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>تیم برنامه‌نویسی من</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Card 
          name="sanaz" 
          role="فرانت‌اند دولوپر" 
          skills={['HTML', 'CSS', 'JavaScript', 'React']} 
        />
        <Card 
          name="ario" 
          role="بک‌اند دولوپر" 
          skills={['Python', 'Django', 'SQL']} 
        />
        <Card 
          name="adrina" 
          role="طراح UI/UX" 
          skills={['Figma', 'Photoshop', 'Illustrator']} 
        />
      </div>
    </div>
  );
}

export default App;