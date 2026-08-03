import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, onClick }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        `
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-xl
        transition-all
        duration-200
        font-medium

        ${isActive
          ? "bg-blue-600 text-white shadow-md"
          : item.danger
            ? "text-red-600 hover:bg-red-50"
            : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
        }
      `
      }
    >
      <Icon size={20} />

      <span>{item.label}</span>
    </NavLink>
  );
};

export default SidebarItem;