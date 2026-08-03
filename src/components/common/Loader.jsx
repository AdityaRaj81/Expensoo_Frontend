import { Loader2 } from "lucide-react";

const sizeClasses = {
  sm: 20,
  md: 32,
  lg: 48,
};

const Loader = ({
  size = "md",
  text = "",
  fullScreen = false,
  className = "",
}) => {
  const content = (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <Loader2
        size={sizeClasses[size]}
        className="animate-spin text-blue-600"
      />

      {text && (
        <p className="text-sm text-gray-600 font-medium">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};

export default Loader;