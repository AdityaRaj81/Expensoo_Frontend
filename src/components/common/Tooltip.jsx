import { useState } from "react";

const Tooltip = ({
  text,
  children,
  position = "top",
}) => {
  const [show, setShow] = useState(false);

  const positions = {
    top: "-top-10 left-1/2 -translate-x-1/2",
    bottom: "-bottom-10 left-1/2 -translate-x-1/2",
    left: "top-1/2 -left-32 -translate-y-1/2",
    right: "top-1/2 -right-32 -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div
          className={`
            absolute
            z-50
            whitespace-nowrap
            rounded-lg
            bg-gray-900
            px-3
            py-2
            text-xs
            text-white
            shadow-lg
            ${positions[position]}
          `}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;