const Select = ({
  label,
  name,
  id,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  required = false,
  disabled = false,
  error = "",
  helperText = "",
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id || name}
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
      )}

      <select
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`
          w-full
          rounded-lg
          border
          px-4
          py-2.5
          bg-white
          outline-none
          transition
          focus:ring-2
          focus:ring-blue-500
          ${error
            ? "border-red-500"
            : "border-gray-300"
          }
          ${disabled
            ? "bg-gray-100 cursor-not-allowed"
            : ""
          }
        `}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      ) : (
        helperText && (
          <p className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )
      )}
    </div>
  );
};

export default Select;