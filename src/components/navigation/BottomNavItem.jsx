import { NavLink } from "react-router-dom";

const BottomNavItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end={item.path === "/app"}
      className={({ isActive }) =>
        `
          flex
          flex-col
          items-center
          justify-center
          flex-1
          py-2
          transition-all
          duration-200
          ${isActive
          ? "text-blue-600"
          : "text-gray-500 hover:text-blue-500"
        }
        `
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            size={22}
            strokeWidth={isActive ? 2.5 : 2}
          />

          <span
            className={`
              mt-1
              text-xs
              font-medium
              ${isActive
                ? "text-blue-600"
                : "text-gray-500"
              }
            `}
          >
            {item.label}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default BottomNavItem;