import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm cursor-pointer rounded-full bg-yellow-500  font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-300 focus:ring-3 focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";
  const styles = {
    primary: base + " md:px-6 md:py-4 px-4 py-3",
    small: base + " py-1.5 px-3 md:px-5 md:py-1.5 text-xs",
    secondary:
      "inline-block text-sm cursor-pointer rounded-full border-2 border-stone-400 font-semibold tracking-wide text-stone-500 uppercase transition-colors duration-300 hover:text-stone-600 hover:bg-stone-300 focus:bg-stone-300 focus:ring-3 focus:ring-stone-300 focus:text-stone-600 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed md:px-6 md:py-3.5 px-4 py-2.5 ",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
