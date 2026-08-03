import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader";

import ProfileCard from "../../components/account/ProfileCard";
import AccountMenu from "../../components/account/AccountMenu";

const AccountPage = () => {
  const navigate = useNavigate();

  // Will come from Redux / Backend later
  const [user] = useState(null);

  const handleEditProfile = () => {
    navigate("/app/account/edit-profile");
  };

  const handleAppearance = () => {
    navigate("/app/account/appearance");
  };

  const handleNotifications = () => {
    navigate("/app/account/notifications");
  };

  const handleSecurity = () => {
    navigate("/app/account/security");
  };

  const handleCategories = () => {
    navigate("/app/account/categories");
  };

  const handleAbout = () => {
    navigate("/app/account/about");
  };

  const handlePrivacy = () => {
    navigate("/app/account/privacy");
  };

  const handleDeleteRequest = () => {
    navigate("/app/account/request-account-deletion");
  };

  const handleLogout = () => {
    // TODO:
    // Clear Redux
    // Clear Local Storage
    // Call Logout API
    // Redirect to Login

    navigate("/login");
  };

  return (
    <div className="space-y-6">

      <PageHeader
        title="Account"
        subtitle="Manage your profile and application settings"
      />

      <ProfileCard
        user={user}
        onEditProfile={handleEditProfile}
      />

      <AccountMenu
        onAppearance={handleAppearance}
        onNotifications={handleNotifications}
        onSecurity={handleSecurity}
        onCategories={handleCategories}
        onAbout={handleAbout}
        onPrivacy={handlePrivacy}
        onDeleteRequest={handleDeleteRequest}
        onLogout={handleLogout}
      />

    </div>
  );
};

export default AccountPage;