import { useMemo } from "react";
import { Bell, Menu } from "lucide-react";

const Greeting = ({
  userName = "User",
  hasNotifications = false,
  onNotificationClick,
  onMenuClick,
}) => {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour >= 17) return "Good Evening";

    return "Hello";
  }, []);

  const month = new Date().toLocaleString("default", {
    month: "long",
  });

  const firstName = userName.trim().split(/\s+/)[0] || "User";

  return (
    <header className="w-full">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open navigation menu"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm sm:hidden"
          >
            <Menu size={18} />
          </button>

          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold text-gray-900 sm:text-lg">
              {greeting}, {firstName} 👋
            </h1>

            <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
              Your {month} Financial Overview
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onNotificationClick}
          aria-label="Notifications"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Bell size={18} />

          {hasNotifications && (
            <span
              aria-hidden="true"
              className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-white"
            />
          )}
        </button>
      </div>
    </header>
  );
};

export default Greeting;