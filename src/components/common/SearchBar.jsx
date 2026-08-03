import { Search, X } from "lucide-react";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  autoFocus = false,
  className = "",
}) => {
  return (
    <div
      className={`
        relative
        w-full
        ${className}
      `}
    >
      <Search
        size={18}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

      <input
        type="text"
        value={value}
        autoFocus={autoFocus}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          bg-white
          py-2.5
          pl-10
          pr-10
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500
        "
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-gray-700
          "
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;