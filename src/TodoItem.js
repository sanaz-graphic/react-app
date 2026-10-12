function TodoItem({ task, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-white border border-gray-200 my-2 p-3 rounded-lg shadow-sm hover:shadow-md transition">
      <span className="text-gray-800">{task}</span>
      <button 
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
      >
        حذف
      </button>
    </li>
  );
}

export default TodoItem;