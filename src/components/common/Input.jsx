import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  id,
  disabled = false,
  required = false,
  error = "",
  helperText = "",
  leftIcon,
  rightIcon,
  className = "",
  ...inputProps
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id || name}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}

        <input
          id={id || name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          {...inputProps}
          className={`
            w-full
            rounded-lg
            border
            bg-white
            px-4
            py-2.5
            outline-none
            transition
            focus:ring-2
            focus:ring-blue-500
            ${error
              ? "border-red-500"
              : "border-gray-300"
            }
            ${disabled
              ? "cursor-not-allowed bg-gray-100"
              : ""
            }
            ${leftIcon ? "pl-10" : ""}
            ${rightIcon ? "pr-10" : ""}
          `}
        />

        {rightIcon && (
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>

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

export default Input;