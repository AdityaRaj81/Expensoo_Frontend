const SkeletonLoader = ({
  width = "100%",
  height = "20px",
  rounded = "lg",
  circle = false,
  count = 1,
  className = "",
}) => {
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          style={{
            width,
            height,
          }}
          className={`
            bg-gray-200
            animate-pulse
            ${circle ? "rounded-full" : roundedClasses[rounded]}
            ${className}
          `}
        />
      ))}
    </>
  );
};

export default SkeletonLoader;