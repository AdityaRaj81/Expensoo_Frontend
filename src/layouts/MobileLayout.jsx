import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/navigation/BottomNavigation";

const MobileLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Main Content */}
      <main
        className="
          flex-1
          overflow-y-auto
          px-4
          py-4
          pb-24
        "
      >
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default MobileLayout;