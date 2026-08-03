import { useEffect, useRef } from "react";

const Textarea = ({
  label,
  name,
  id,
  value,
  onChange,
  placeholder = "",
  rows = 4,
  required = false,
  disabled = false,
  error = "",
  helperText = "",
  maxLength,
  showCharacterCount = false,
  autoResize = false,
  className = "",
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [value, autoResize]);

  return (
    <div className={`w-full ${className}`}>
      {/* Label */}
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

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        id={id || name}
        name={name}
        value={value}
        rows={rows}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        className={`
          w-full
          rounded-lg
          border
          px-4
          py-3
          outline-none
          transition
          resize-none
          focus:ring-2
          focus:ring-blue-500
          ${error
            ? "border-red-500"
            : "border-gray-300"
          }
          ${disabled
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-white"
          }
        `}
      />

      {/* Footer */}
      <div className="mt-1 flex items-center justify-between">

        <div>
          {error ? (
            <p className="text-sm text-red-500">
              {error}
            </p>
          ) : (
            helperText && (
              <p className="text-sm text-gray-500">
                {helperText}
              </p>
            )
          )}
        </div>

        {showCharacterCount && maxLength && (
          <span className="text-xs text-gray-400">
            {(value || "").length}/{maxLength}
          </span>
        )}

      </div>
    </div>
  );
};

export default Textarea;