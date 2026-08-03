import {
  Palette,
  Bell,
  Shield,
  Tags,
  Info,
  FileText,
  Trash2,
  LogOut,
} from "lucide-react";

import MenuItem from "./MenuItem";

const AccountMenu = ({
  onAppearance,
  onNotifications,
  onSecurity,
  onCategories,
  onAbout,
  onPrivacy,
  onDeleteRequest,
  onLogout,
}) => {
  return (
    <div className="space-y-4">

      <MenuItem
        icon={Palette}
        title="Appearance"
        description="Customize application theme"
        onClick={onAppearance}
      />

      <MenuItem
        icon={Bell}
        title="Notification Preferences"
        description="Manage reminders and alerts"
        onClick={onNotifications}
      />

      <MenuItem
        icon={Shield}
        title="Security"
        description="Change password and security settings"
        onClick={onSecurity}
      />

      <MenuItem
        icon={Tags}
        title="Manage Categories"
        description="Create and manage transaction categories"
        onClick={onCategories}
      />

      <MenuItem
        icon={Info}
        title="About Us"
        description="Learn more about Expensoo"
        onClick={onAbout}
      />

      <MenuItem
        icon={FileText}
        title="Privacy Policy"
        description="Read our privacy policy"
        onClick={onPrivacy}
      />

      <MenuItem
        icon={Trash2}
        title="Request Account Deletion"
        description="Submit an account deletion request"
        danger
        onClick={onDeleteRequest}
      />

      <MenuItem
        icon={LogOut}
        title="Logout"
        description="Sign out from your account"
        danger
        onClick={onLogout}
      />

    </div>
  );
};

export default AccountMenu;