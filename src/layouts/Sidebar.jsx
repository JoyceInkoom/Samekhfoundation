import  { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaCalendarPlus,
  FaUser,
  FaSignOutAlt,
  // FaArrowRight,
  // FaArrowLeft,
} from "react-icons/fa";
import { getProfile } from "../services/profile.js";

const Sidebar = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [isOpen, ] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) return;
        const response = await getProfile(token);
        setUserProfile(response.details);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { label: "Home", icon: <FaHome />, path: "/dashboard" },
    {
      label: "Post a Project",
      icon: <FaCalendarPlus />,
      path: "/postevent",
    },
    { label: "All Projects", icon: <FaCalendarAlt />, path: "/allevents" },
    { label: "Profile", icon: <FaUser />, path: "/profile" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.assign("/");
  };

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      {isOpen && (
        <aside className="admin-sidebar">
          <div className="admin-sidebar-header">
            <h3 className="hidden lg:block">
              Hi, {userProfile ? `${userProfile.firstName}` : "User"}
            </h3>
            {/* Divider line */}
            <hr
              style={{
                borderTop: "1px solid black",
                marginTop: "-10px",
                marginBottom: "16px",
                display: "block",
              }}
            />
          </div>

          <nav className="admin-sidebar-nav">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`admin-sidebar-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                <span className="admin-sidebar-icon">{item.icon}</span>
                <span className="admin-sidebar-label hidden lg:inline">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="admin-sidebar-footer">
            <button className="admin-sidebar-logout" onClick={handleLogout}>
              <FaSignOutAlt />
              {windowWidth > 1024 && <span>Logout</span>}
            </button>
          </div>
        </aside>
      )}
      {/* <button className="toggle-button" onClick={handleToggle}>
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button> */}
    </div>
  );
};

export default Sidebar;