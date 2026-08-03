import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import DesktopHeader from "../components/navigation/DesktopHeader";

const DesktopLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Desktop Header */}
      <DesktopHeader />

      {/* Main Layout */}
      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main
          className="
            flex-1
            min-h-[calc(100vh-64px)]
            overflow-y-auto
            p-6
            lg:p-8
          "
        >
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DesktopLayout;