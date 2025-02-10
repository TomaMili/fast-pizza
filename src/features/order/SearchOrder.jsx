import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-32 rounded-full bg-stone-200 px-4 py-2 text-sm italic transition-all duration-500 placeholder:text-stone-500/70 focus:w-50 focus:ring focus:ring-amber-200/50 focus:transition-all focus:duration-500 focus:outline-none focus:placeholder:text-stone-500/30 md:w-64 md:focus:w-120"
      ></input>
    </form>
  );
}

export default SearchOrder;
