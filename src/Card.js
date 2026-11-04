 function Card({ name, role, skills }) {
  return (
    <div className="bg-white border-2 border-blue-500 rounded-xl p-5 m-3 w-64 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-blue-600 text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-500 mb-4">{role}</p>
      <ul className="list-none p-0">
        {skills.map((skill, index) => (
          <li 
            key={index} 
            className="bg-gray-100 my-1 py-2 px-3 rounded-md text-gray-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;