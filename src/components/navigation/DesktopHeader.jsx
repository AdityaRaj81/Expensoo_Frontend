import { HEADER_CONFIG } from "./navigationConfig";
import logo from "../../assets/logo_1.png";

const DesktopHeader = () => {
  return (
    <header
      className="
        hidden
        lg:flex
        items-center
        justify-between
        h-16
        px-6
        bg-white
        border-b
        border-gray-200
        sticky
        top-0
        z-40
      "
    >
      {/* Left Section */}
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

      {/* Right Section */}
      {/* Reserved for future features */}
      <div />
    </header>
  );
};

export default DesktopHeader;