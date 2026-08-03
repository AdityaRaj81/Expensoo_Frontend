import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_1.png";

import SidebarItem from "./SidebarItem";

import {
  SIDEBAR_NAVIGATION,
  SIDEBAR_FOOTER_ITEMS,
  HEADER_CONFIG,
} from "./navigationConfig";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleFooterAction = (item) => {
    if (item.action === "logout") {
      const confirmed = window.confirm(
        "Are you sure you want to logout?"
      );

      if (!confirmed) return;

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/login");
    }
  };

  return (
    <aside
      className="
        hidden
        lg:flex
        flex-col
        w-64
        min-h-screen
        bg-white
        border-r
        border-gray-200
        sticky
        top-0
      "
    >
      {/* ===========================
            Logo
      ============================ */}

      <div className="border-b p-6">

        <div className="flex items-center gap-3">

          {HEADER_CONFIG.showLogo && (
            <img
              src={logo}
              alt={HEADER_CONFIG.appName}
              className="w-10 h-10 object-contain"
            />
          )}

          {HEADER_CONFIG.showAppName && (
            <h1 className="text-2xl font-bold text-blue-600">
              {HEADER_CONFIG.appName}
            </h1>
          )}

        </div>

      </div>

      {/* ===========================
          Main Navigation
      ============================ */}

      <nav className="flex-1 p-4">

        <div className="space-y-2">

          {SIDEBAR_NAVIGATION.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </nav>

      {/* ===========================
          Footer
      ============================ */}

      <div className="border-t p-4">

        <div className="space-y-2">

          {SIDEBAR_FOOTER_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleFooterAction(item)}
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-red-600
                hover:bg-red-50
                transition
              "
            >
              <item.icon size={20} />

              <span>{item.label}</span>

            </button>
          ))}

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;