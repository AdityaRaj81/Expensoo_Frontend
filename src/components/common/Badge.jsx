const variants = {
  primary: "bg-blue-100 text-blue-700",
  success: "bg-green-100 text-green-700",
  danger: "bg-red-100 text-red-700",
  warning: "bg-yellow-100 text-yellow-700",
  info: "bg-cyan-100 text-cyan-700",
  secondary: "bg-gray-100 text-gray-700",
};

const sizes = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5",
};

const Badge = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        font-medium
        whitespace-nowrap
        ${variants[variant]}
        ${sizes[size]}
        rounded-${rounded}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;