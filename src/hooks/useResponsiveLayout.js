import { useEffect, useState } from "react";

/**
 * Responsive Breakpoints
 *
 * Mobile  : < 768px
 * Tablet  : 768px - 1023px
 * Desktop : >= 1024px
 */

const MOBILE_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1024;

const getScreenInfo = () => {
  const width = window.innerWidth;

  return {
    width,

    isMobile: width < MOBILE_BREAKPOINT,

    isTablet:
      width >= MOBILE_BREAKPOINT &&
      width < DESKTOP_BREAKPOINT,

    isDesktop: width >= DESKTOP_BREAKPOINT,
  };
};

export const useResponsiveLayout = () => {
  const [screen, setScreen] = useState(getScreenInfo);

  useEffect(() => {
    const handleResize = () => {
      setScreen(getScreenInfo());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return screen;
};

export default useResponsiveLayout;