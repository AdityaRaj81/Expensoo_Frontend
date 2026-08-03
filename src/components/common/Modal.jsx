import { X } from "lucide-react";

const Modal = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = "md",
}) => {
  if (!open) return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-6xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        className={`
          w-full
          bg-white
          rounded-2xl
          shadow-xl
          ${sizes[size]}
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-5">

          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}

        <div className="max-h-[70vh] overflow-y-auto p-6">
          {children}
        </div>

        {/* Footer */}

        {footer && (
          <div className="border-t p-5">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;