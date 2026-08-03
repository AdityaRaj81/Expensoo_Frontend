import {
  LayoutDashboard,
  CreditCard,
  BarChart3,
  User,
  LogOut,
} from "lucide-react";

/**
 * ============================================================
 * EXPENSOO USER NAVIGATION CONFIGURATION
 * ============================================================
 *
 * This file is the single source of truth for all
 * user-side navigation.
 *
 * Used By:
 * ✔ Sidebar
 * ✔ Bottom Navigation
 * ✔ Desktop Layout
 *
 * DO NOT add Admin navigation here.
 * Admin has its own navigation configuration.
 *
 * ============================================================
 */

export const NAVIGATION_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/app",
    icon: LayoutDashboard,

    showInSidebar: true,
    showInBottomNav: true,
    showInDesktop: true,
    showInMobile: true,

    requiresAuth: true,
  },

  {
    id: "transactions",
    label: "Transactions",
    path: "/app/transactions",
    icon: CreditCard,

    showInSidebar: true,
    showInBottomNav: true,
    showInDesktop: true,
    showInMobile: true,

    requiresAuth: true,
  },

  {
    id: "reports",
    label: "Reports",
    path: "/app/reports",
    icon: BarChart3,

    showInSidebar: true,
    showInBottomNav: true,
    showInDesktop: true,
    showInMobile: true,

    requiresAuth: true,
  },

  {
    id: "account",
    label: "Account",
    path: "/app/account",
    icon: User,

    showInSidebar: true,
    showInBottomNav: true,
    showInDesktop: true,
    showInMobile: true,

    requiresAuth: true,
  },
];

/**
 * ============================================================
 * SIDEBAR FOOTER
 * ============================================================
 *
 * Items displayed at the bottom of the desktop sidebar.
 *
 * Example:
 * --------------------------
 * Dashboard
 * Transactions
 * Reports
 * Account
 *
 *
 *
 *
 *
 * Logout
 * --------------------------
 */

export const SIDEBAR_FOOTER_ITEMS = [
  {
    id: "logout",
    label: "Logout",
    icon: LogOut,
    action: "logout",
    danger: true,

    requiresAuth: true,
  },
];

/**
 * ============================================================
 * DESKTOP HEADER CONFIGURATION
 * ============================================================
 *
 * According to the PRD:
 *
 * Desktop Header shows ONLY:
 *
 *  - Logo
 *  - App Name
 *
 * No Search
 * No Notification
 * No User Avatar
 * No Navigation
 *
 * Mobile has NO header.
 *
 * ============================================================
 */

export const HEADER_CONFIG = {
  appName: "Expensoo",
  logo: "/logos/logo.png",
  showLogo: true,

  showAppName: true,
};

/**
 * ============================================================
 * BOTTOM NAVIGATION CONFIGURATION
 * ============================================================
 *
 * Maximum Items : 4
 *
 * Dashboard
 * Transactions
 * Reports
 * Account
 *
 * Icons Only
 *
 * ============================================================
 */

export const BOTTOM_NAVIGATION = NAVIGATION_ITEMS.filter(
  (item) => item.showInBottomNav
);

/**
 * ============================================================
 * SIDEBAR NAVIGATION CONFIGURATION
 * ============================================================
 */

export const SIDEBAR_NAVIGATION = NAVIGATION_ITEMS.filter(
  (item) => item.showInSidebar
);