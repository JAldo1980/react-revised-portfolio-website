import React from "react";

export default function Navbar() {
  function handleClick() {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".drop-down").classList.toggle("show");
  }

  function handleDropdownClick() {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".drop-down").classList.remove("show");
  }

  function handleNavLinkClick(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      handleDropdownClick(); // Close dropdown after click
    }
  }

  return (
    <div className="nav-container">
      <a href="#">
        <img
          src="james-alderman-logo-removebg-preview.png"
          className="logo-img"
          alt="Logo"
        />
      </a>

      <div className="mobile-nav">
        <div onClick={handleClick} className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* mobile nav active */}
      <div className="drop-down">
        <a onClick={() => handleNavLinkClick("about-scroll")}>About</a>
        <a onClick={() => handleNavLinkClick("project-scroll")}>Work</a>
        <a onClick={() => handleNavLinkClick("contact-scroll")}>Contact</a>
      </div>

      <nav>
        <div className="desktop-nav">
          <div className="nav-links">
            <a onClick={() => handleNavLinkClick("about-scroll")}>About</a>
            <a onClick={() => handleNavLinkClick("project-scroll")}>Work</a>
            <a onClick={() => handleNavLinkClick("contact-scroll")}>Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
