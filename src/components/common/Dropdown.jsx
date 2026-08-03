import { useEffect, useRef, useState } from "react";

const Dropdown = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
    >
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg border z-50 overflow-hidden">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;