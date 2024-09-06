import React, { useState } from "react";
import "./profileSettings.css";

const ProfileSettings = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    alert("Profile updated successfully!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    // Handle password update logic here
    alert("Password changed successfully!");
  };

  return (
    <div className="settings-container">
      <h2>Profile Settings</h2>

      {/* Profile Information */}
      <form className="profile-form" onSubmit={handleProfileSubmit}>
        <h3>Profile Information</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>

      {/* Password Change */}
      <form className="password-form" onSubmit={handlePasswordSubmit}>
        <h3>Change Password</h3>
        <label>
          Current Password:
          <input
            type="password"
            name="currentPassword"
            value={password.currentPassword}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            name="newPassword"
            value={password.newPassword}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <label>
          Confirm New Password:
          <input
            type="password"
            name="confirmPassword"
            value={password.confirmPassword}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <button type="submit">Change Password</button>
      </form>

      {/* Notification Preferences */}
      <div className="notifications-section">
        <h3>Notification Preferences</h3>
        <label>
          <input
            type="checkbox"
            name="emailNotifications"
            checked={notifications.emailNotifications}
            onChange={handleNotificationChange}
          />
          Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            name="smsNotifications"
            checked={notifications.smsNotifications}
            onChange={handleNotificationChange}
          />
          SMS Notifications
        </label>
      </div>
    </div>
  );
};

export default ProfileSettings;
