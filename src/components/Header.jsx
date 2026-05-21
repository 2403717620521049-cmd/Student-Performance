import React from "react";

function Header() {
  return (
    <header>
      <h1>Student Performance Management System</h1>

      <p>
        Track marks, attendance, assignments, and progress
      </p>

      <a href="#dashboard" className="btn">
        Explore
      </a>
    </header>
  );
}

export default Header;