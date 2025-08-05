const Button = ({ type, text, onClick, className }) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    className={`py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-300 ${className}`}
  >
    {text}
  </button>
);

export default Button;