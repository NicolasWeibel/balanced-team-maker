import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../styles/navigation/header.css";

const navbar = {
  navigation: [
    {
      name: "Create Teams",
      href: "/team-maker",
    },
    {
      name: "How It Works",
      href: "/how-it-works",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
  logIn: {
    name: "Log In",
    href: "/log-in",
  },
  signUp: {
    name: "Sign Up",
    href: "/sign-up",
  },
};

function Header() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.getElementById("header")) {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        document.getElementById("header").classList.add("shadow-header");
        document.getElementById("header").classList.add("bg-white");
      } else {
        document.getElementById("header").classList.remove("shadow-header");
        document.getElementById("header").classList.remove("bg-white");
      }
    }
  }

  return (
    <>
      <div className="header-height"></div>
      <header
        data-scroll
        data-scroll-id="hey"
        id="header"
        className="py-6 transition duration-300 ease-in-out header"
      >
        <div className="header__container">
          {/* Mobile Header */}
          <Popover>
            {({ open }) => (
              <>
                <div className="mobile-header">
                  <Link to="/" className="logo">
                    <img
                      src={
                        "https://marketplace.canva.com/EAFkPycgt7s/1/0/1600w/canva-black-orange-white-professional-concept-basketball-team-logo-3bbDJVewr58.jpg"
                      }
                      height={50}
                      alt="Logo"
                    />
                    <div className="logo-letters">
                      <span className="logo-letters__first-row">Balanced</span>
                      <span className="logo-letters__second-row">
                        Team Maker
                      </span>
                    </div>
                  </Link>
                  <Popover.Button className="hamburguer-button">
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35px"
                        height="35px"
                        viewBox="4 4 16 16"
                      >
                        <path
                          d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35px"
                        height="35px"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                      </svg>
                    )}
                  </Popover.Button>
                  <nav>
                    <Transition
                      as={Fragment}
                      enter="enter-panel"
                      enterFrom="enter-from-panel"
                      enterTo="enter-to-panel"
                      leave="leave-panel"
                      leaveFrom="leave-from-panel"
                      leaveTo="leave-to-panel"
                    >
                      <Popover.Panel className="navbar-panel">
                        <ul className="navbar-ul navbar-ul--mobile">
                          {navbar.navigation.map((item) => (
                            <li className="navbar-li" key={item.name}>
                              <NavLink
                                to={item.href}
                                className="navbar__link navbar__link--mobile"
                              >
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                        <ul className="navbar-ul navbar-ul--mobile">
                          <li className="navbar-li">
                            <NavLink
                              to={navbar.logIn.href}
                              className="navbar__link navbar__link--mobile"
                            >
                              {navbar.logIn.name}
                            </NavLink>
                          </li>
                          <li className="navbar-li">
                            <NavLink
                              to={navbar.signUp.href}
                              className="button button--navbar"
                            >
                              {navbar.signUp.name}
                            </NavLink>
                          </li>
                        </ul>
                      </Popover.Panel>
                    </Transition>
                  </nav>
                  <div
                    className="overlay-mobile"
                    style={open ? { opacity: 1 } : { opacity: 0 }}
                  ></div>
                </div>
              </>
            )}
          </Popover>
          {/* Tablet Header */}
          <Popover>
            {({ open }) => (
              <>
                <div className="tablet-header">
                  <Link to="/" className="logo">
                    <img
                      src="https://marketplace.canva.com/EAFkPycgt7s/1/0/1600w/canva-black-orange-white-professional-concept-basketball-team-logo-3bbDJVewr58.jpg"
                      height={50}
                      alt="Logo"
                    />
                    <div className="logo-letters">
                      <span className="logo-letters__first-row">Balanced</span>
                      <span className="logo-letters__second-row">
                        Team Maker
                      </span>
                    </div>
                  </Link>
                  <nav className="navbar navbar--tablet">
                    <ul className="navbar-ul">
                      <li>
                        <NavLink
                          to={navbar.logIn.href}
                          className="navbar__link"
                        >
                          {navbar.logIn.name}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={navbar.signUp.href}
                          className="button button--navbar"
                        >
                          {navbar.signUp.name}
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                  <Popover.Button className="hamburguer-button">
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35px"
                        height="35px"
                        viewBox="4 4 16 16"
                      >
                        <path
                          d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35px"
                        height="35px"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                      </svg>
                    )}
                  </Popover.Button>
                  <nav>
                    <Transition
                      as={Fragment}
                      enter="enter-panel"
                      enterFrom="enter-from-panel"
                      enterTo="enter-to-panel"
                      leave="leave-panel"
                      leaveFrom="leave-from-panel"
                      leaveTo="leave-to-panel"
                    >
                      <Popover.Panel className="navbar-panel">
                        <ul className="navbar-ul navbar-ul--mobile">
                          {navbar.navigation.map((item) => (
                            <li className="navbar-li" key={item.name}>
                              <NavLink
                                to={item.href}
                                className="navbar__link navbar__link--mobile"
                              >
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </Popover.Panel>
                    </Transition>
                  </nav>
                  <div
                    className="overlay-mobile"
                    style={open ? { opacity: 1 } : { opacity: 0 }}
                  ></div>
                </div>
              </>
            )}
          </Popover>
          {/* Desktop Header */}
          <div className="desktop-header">
            <Link to="/" className="logo">
              <img
                src={
                  "https://marketplace.canva.com/EAFkPycgt7s/1/0/1600w/canva-black-orange-white-professional-concept-basketball-team-logo-3bbDJVewr58.jpg"
                }
                height={50}
                alt="Logo"
              />
              <div className="logo-letters">
                <span className="logo-letters__first-row">Balanced</span>
                <span className="logo-letters__second-row">Team Maker</span>
              </div>
            </Link>
            <nav className="navbar">
              <ul className="navbar-ul">
                {navbar.navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.href} className="navbar__link">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className="navbar-ul">
                <li>
                  <NavLink to={navbar.logIn.href} className="navbar__link">
                    {navbar.logIn.name}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={navbar.signUp.href}
                    className="button button--navbar"
                  >
                    {navbar.signUp.name}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
