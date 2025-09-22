import React, { useState, useRef, useEffect } from "react";

// Custom hook for dropdown functionality
function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, close, ref };
}

// Mock notification data
const mockNotifications = [
  {
    id: 1,
    type: 'success',
    icon: '✓',
    title: 'Order Completed',
    message: 'Order #1234 has been completed successfully',
    time: '5 min ago',
    unread: true
  },
  {
    id: 2,
    type: 'warning',
    icon: '⚠',
    title: 'Low Stock Alert',
    message: 'Product "Wireless Mouse" is running low',
    time: '1 hour ago',
    unread: true
  },
  {
    id: 3,
    type: 'info',
    icon: 'ℹ',
    title: 'New User Registered',
    message: 'John Doe has registered on the platform',
    time: '2 hours ago',
    unread: false
  },
  {
    id: 4,
    type: 'error',
    icon: '✗',
    title: 'Payment Failed',
    message: 'Payment for order #1235 has failed',
    time: '3 hours ago',
    unread: false
  }
];

export default function Topbar() {
  const notificationsDropdown = useDropdown();
  const profileDropdown = useDropdown();
  const [notifications, setNotifications] = useState(mockNotifications);
  const unreadCount = notifications.filter(n => n.unread).length;

  const toggleNotifications = (e) => {
    e.stopPropagation();
    notificationsDropdown.toggle();
    profileDropdown.close();
  };

  const toggleProfile = (e) => {
    e.stopPropagation();
    profileDropdown.toggle();
    notificationsDropdown.close();
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, unread: false } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      unread: false
    })));
  };

  const handleProfileAction = (action) => {
    profileDropdown.close();
    console.log(`Profile action: ${action}`);
  };

  return (
    <header className="bg-white border-bottom px-3 px-md-4 py-2 d-flex align-items-center justify-content-between">
      {/* Left Side */}
      <div>
        <h2 className="h5 mb-0">Welcome Back</h2>
        <small className="text-muted">Here's what's happening today</small>
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-3">
        {/* Notifications Dropdown */}
        <div className="dropdown position-relative" ref={notificationsDropdown.ref}>
          <button
            className="btn btn-outline-secondary btn-sm position-relative"
            type="button"
            onClick={toggleNotifications}
          >
            <i className="bi bi-bell"></i>
            {unreadCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {unreadCount}
                <span className="visually-hidden">unread notifications</span>
              </span>
            )}
          </button>
          
          <div
            className={`dropdown-menu ${notificationsDropdown.isOpen ? 'show' : ''}`}
            style={{
              display: notificationsDropdown.isOpen ? 'block' : 'none',
              width: 'min(400px, 90vw)',
              maxWidth: '400px',
              position: 'fixed',
              right: '1rem',
              top: '80px',
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              zIndex: 1000
            }}
          >
            {/* Notifications Header */}
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
              <h6 className="mb-0 fw-bold">Notifications</h6>
              {unreadCount > 0 && (
                <button 
                  className="btn btn-sm btn-outline-primary"
                  onClick={markAllAsRead}
                >
                  Mark all as read
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="notification-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {notifications.length > 0 ? (
                notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`notification-item p-3 border-bottom ${notification.unread ? 'bg-light' : ''}`}
                    onClick={() => markAsRead(notification.id)}
                    style={{ cursor: 'pointer', transition: 'background-color 0.2s' }}
                  >
                    <div className="d-flex align-items-start gap-2">
                      <div className={`notification-icon rounded-circle d-flex align-items-center justify-content-center 
                        ${notification.type === 'success' ? 'bg-success' : 
                          notification.type === 'warning' ? 'bg-warning' : 
                          notification.type === 'error' ? 'bg-danger' : 'bg-info'}`}
                        style={{ width: '32px', height: '32px', color: 'white', fontSize: '14px', flexShrink: 0 }}
                      >
                        {notification.icon}
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start">
                          <h6 className="mb-1 fw-semibold">{notification.title}</h6>
                          {notification.unread && (
                            <span className="badge bg-primary ms-2">New</span>
                          )}
                        </div>
                        <p className="mb-1 text-muted small">{notification.message}</p>
                        <small className="text-muted">{notification.time}</small>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center p-4">
                  <i className="bi bi-bell-slash display-6 text-muted"></i>
                  <p className="text-muted mt-2 mb-0">No notifications</p>
                </div>
              )}
            </div>

            {/* Notifications Footer */}
            <div className="p-2 border-top text-center">
              <button className="btn btn-sm btn-link text-decoration-none">
                View all notifications
              </button>
            </div>
          </div>
        </div>

        {/* User Profile Dropdown */}
        <div className="dropdown position-relative" ref={profileDropdown.ref}>
          <button
            className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
            type="button"
            onClick={toggleProfile}
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-person"></i>
          </button>
          <ul
            className={`dropdown-menu ${profileDropdown.isOpen ? 'show' : ''}`}
            style={{ 
              display: profileDropdown.isOpen ? 'block' : 'none',
              width: 'min(250px, 80vw)',
              maxWidth: '250px',
              position: 'fixed',
              right: '1rem',
              top: '80px',
              zIndex: 1000
            }}
          >
            <li className="dropdown-header px-3 py-2">
              <div className="fw-bold">User Account</div>
              <small className="text-muted">admin@example.com</small>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button 
                className="dropdown-item d-flex align-items-center"
                onClick={() => handleProfileAction('profile')}
              >
                <i className="bi bi-person me-2"></i>
                Profile
              </button>
            </li>
            <li>
              <button 
                className="dropdown-item d-flex align-items-center"
                onClick={() => handleProfileAction('settings')}
              >
                <i className="bi bi-gear me-2"></i>
                Settings
              </button>
            </li>
            <li>
              <button 
                className="dropdown-item d-flex align-items-center"
                onClick={() => handleProfileAction('help')}
              >
                <i className="bi bi-question-circle me-2"></i>
                Help & Support
              </button>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button 
                className="dropdown-item d-flex align-items-center text-danger"
                onClick={() => handleProfileAction('logout')}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}