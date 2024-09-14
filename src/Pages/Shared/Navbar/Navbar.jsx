import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../../../assets/logo/logo1.png";
import rlogo from "../../../assets/logo/logoR.png";
import useReadingProgress from "../../../Hooks/useReadingProgress";

const Navbar = () => {
  const [user, setUser] = useState(null); // Assume no user is logged in
  const [activeNav, setActiveNav] = useState("#home");
  const completion = useReadingProgress();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state for profile

  /* Simulate logged-in user (you can fetch this from actual auth logic) */
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  /* Control navbar background on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.pageYOffset > 120 ? "solid" : "transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Control dark mode and save to local storage */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* Handle logout */
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear user data from localStorage
  };

  /* Toggle profile dropdown */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>
          <a
            className={activeNav === "#home" ? " active_link" : ""}
            onClick={() => setActiveNav("#home")}
          >
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link to={"/programmer"}>
          <a
            className={activeNav === "#programmes" ? " active_link" : ""}
            onClick={() => setActiveNav("#programmes")}
          >
            Sports
          </a>
        </Link>
      </li>
      <li>
        <Link to={"/facilities"}>
          <a
            className={activeNav === "#facilities" ? " active_link" : ""}
            onClick={() => setActiveNav("#facilities")}
          >
            Facilities
          </a>
        </Link>
      </li>
      <li>
        <Link to={"/instructors"}>
          <a
            className={activeNav === "#instructors" ? " active_link" : ""}
            onClick={() => setActiveNav("#instructors")}
          >
            Instructors
          </a>
        </Link>
      </li>
      <li>
        <Link to={"/about"}>
          <a
            className={activeNav === "#aboutus" ? " active_link" : ""}
            onClick={() => setActiveNav("#aboutus")}
          >
            About Us
          </a>
        </Link>
      </li>
      <li>
        <Link to={"/contact"}>
          <a
            className={activeNav === "#contactus" ? " active_link" : ""}
            onClick={() => setActiveNav("#contactus")}
          >
            Contact Us
          </a>
        </Link>
      </li>

      {/* Show profile icon and dropdown if user is logged in */}
      {user ? (
        <>
          <div className="relative">
            {/* Profile Icon */}
            <div
              className="tooltip tooltip-bottom cursor-pointer"
              data-tip={user.displayName}
              onClick={toggleDropdown}
            >
              <img
                className="w-10 rounded-full border-red-600 border mx-4"
                src={
                  user.photoURL ||
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                }
                alt="User Avatar"
              />
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => setDropdownOpen(false)} // Close dropdown on link click
                >
                  Dashboard
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              <a
                className={activeNav === "#login" ? " active_link" : ""}
                onClick={() => setActiveNav("#login")}
              >
                Login
              </a>
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      {/* Small display */}
      <div className="lg:hidden bg-green-500 flex justify-center items-center py-2">
        <img className="w-20" src={logo} alt="logo" />
      </div>
      <div
        className={`navbar top-0 transition-all ease-out duration-300 text-white lg:fixed z-50 py-3 md:px-8 ${
          navbarBg !== "transparent" ? "navbar_bg" : "lg:py-4 py-5"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-red-500 lg:hidden hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500 dark:bg-gray-700 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="cursor-pointer hidden md:block">
            {navbarBg !== "transparent" ? (
              <img className="w-28" src={rlogo} />
            ) : (
              <img className="w-28" src={logo} />
            )}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-1 font-semibold ${
              navbarBg !== "transparent"
                ? "text-red-500 dark:text-white"
                : "text-white"
            } `}
          >
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center relative w-fit items-center rounded-full">
            <button
              className="toggle_class text-white dark:lg:text-white dark:text-red-500"
              onClick={() => setTheme("light")}
            >
              <FiMoon className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10 hidden md:block">Light</span>
            </button>
            <button
              className={`toggle_class dark:text-white ${
                navbarBg !== "transparent"
                  ? "text-red-500"
                  : "text-red-500 lg:text-white"
              }`}
              onClick={() => setTheme("dark")}
            >
              <FiSun className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10 hidden md:block ">Dark</span>
            </button>
            <div className="absolute inset-0 z-0 flex dark:justify-end justify-start">
              <motion.span
                layout
                transition={{ type: "spring", damping: 15, stiffness: 250 }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"
              ></motion.span>
            </div>
          </div>
        </div>
        <span
          className="absolute bg-gradient-to-r from-red-500 via-yellow-500 to-transparent h-1 w-full bottom-0"
          style={{ transform: `translateX(${completion - 101}%)` }}
        ></span>
      </div>
    </>
  );
};

export default Navbar;
