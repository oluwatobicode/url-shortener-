import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const Navbar = ["Features", "Pricing", "Resources"];
  // const [open, close] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-Logo">
        <img src="images/logo.svg" alt="shortly-logo" />
      </div>
      <div className="nav-items">
        <div className="nav">
          <ul className="nav-link">
            {Navbar.map((nav) => (
              <li className="navbar-list" key={nav}>
                <a href="222.s" className="links">
                  {nav}
                </a>
              </li>
            ))}
          </ul>

          <div className="cta-buttons">
            <button className="log-in">Login</button>
            <button className="sign-up">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
