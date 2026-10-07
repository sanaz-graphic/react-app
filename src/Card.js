function Card({ name, role, skills }) {
  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      width: '250px',
      textAlign: 'center',
      backgroundColor: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#007bff' }}>{name}</h2>
      <p style={{ color: '#666' }}>{role}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index} style={{
            backgroundColor: '#f0f0f0',
            margin: '5px 0',
            padding: '5px',
            borderRadius: '5px'
          }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;