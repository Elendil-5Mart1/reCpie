import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from 'react';
import { ThemeContext } from '../../config/ThemeContext.jsx';
import { useBookmarks } from '../../stores/bookmarks.js';

import './Header.css';
import logo from '../../assets/logo.png';

export const Header = () => {

  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { bookmarks } = useBookmarks();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header fixed-top ${menuOpen ? 'menu-open' : ''}`}>
        <div>
          <div className="header-container wrap">
            <div className="logo">
              <h1><img src={logo} alt="Logo" />reCpie</h1>
            </div>

            <button className="burger-btn" onClick={toggleMenu} aria-label="Menu">
              {menuOpen ? '✕' : '☰'}
            </button>

            <nav className={`navbar ${menuOpen ? 'nav-open' : ''}`}>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <NavLink end className="nav-link me-2 border border-primary" to="/" onClick={closeMenu}>Accueil</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link me-2 border border-primary" to="/bookmarks" onClick={closeMenu}>Favoris</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="text-decoration-none" to="/bookmarks" onClick={closeMenu}>⭐{bookmarks.length}</NavLink>
                </li>
              </ul>
              <button
                className="btn-theme"
                onClick={toggleTheme}
                title={isDark ? "Mode clair" : "Mode sombre"}
              >
                {isDark ? "☀️" : "🌙"}
              </button>
            </nav>
          </div>
        </div>
    </header>
  )
}
