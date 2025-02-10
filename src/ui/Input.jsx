function Input({ type, name, placeholder, value, onChange, className }) {
  return (
    <input
      className={`${className} rounded-full border border-stone-300 bg-stone-100 px-6 py-3 text-sm transition-all duration-300 focus:ring focus:ring-yellow-400 focus:outline-none`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default Input;
