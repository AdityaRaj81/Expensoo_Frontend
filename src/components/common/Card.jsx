const Card = ({
  children,
  title,
  subtitle,
  footer,
  className = "",
  hover = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white
        border
        border-gray-200
        rounded-xl
        shadow-sm
        overflow-hidden
        ${hover ? "hover:shadow-md transition-shadow duration-200 cursor-pointer" : ""}
        ${className}
      `}
    >
      {(title || subtitle) && (
        <div className="px-5 pt-5">
          {title && (
            <h2 className="text-lg font-semibold">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="p-5">
        {children}
      </div>

      {footer && (
        <div className="border-t px-5 py-4 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;