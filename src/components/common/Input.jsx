const Input = ({ label, type, value, onChange, error, placeholder, togglePassword, showPassword }) => (
  <div>
    <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-white">
      {label}
    </label>
    <div className="relative">
      <input
        id={label.toLowerCase()}
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 bg-white/20 border ${error ? 'border-red-500' : 'border-transparent'} rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
        placeholder={placeholder}
      />
      {togglePassword && (
        <button
          type="button"
          onClick={togglePassword}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-white"
        >
          {showPassword ? '🙈' : '👁️'}
        </button>
      )}
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default Input;