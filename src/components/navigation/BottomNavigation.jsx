import BottomNavItem from "./BottomNavItem";
import { BOTTOM_NAVIGATION } from "./navigationConfig";

const BottomNavigation = () => {
  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50

        lg:hidden

        bg-white
        border-t
        border-gray-200

        shadow-lg

        pb-[env(safe-area-inset-bottom)]
      "
    >
      <div className="flex items-center justify-around h-16">

        {BOTTOM_NAVIGATION.map((item) => (
          <BottomNavItem
            key={item.id}
            item={item}
          />
        ))}

      </div>
    </nav>
  );
};

export default BottomNavigation;