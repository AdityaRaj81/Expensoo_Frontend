import React from "react";
import { Loader2 } from "lucide-react";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",

  outline:
    "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",

  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400",

  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
};

const sizes = {
  sm: "px-3 py-2 text-sm",

  md: "px-4 py-2.5 text-base",

  lg: "px-6 py-3 text-lg",
};

const Button = ({
  children,
  type = "button",

  variant = "primary",

  size = "md",

  loading = false,

  disabled = false,

  fullWidth = false,

  rounded = "lg",

  leftIcon,

  rightIcon,

  className = "",

  onClick,
}) => {
  const roundedClass = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        font-medium
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${roundedClass[rounded]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <Loader2
          size={18}
          className="animate-spin"
        />
      ) : (
        leftIcon
      )}

      <span>{children}</span>

      {!loading && rightIcon}
    </button>
  );
};

export default Button;