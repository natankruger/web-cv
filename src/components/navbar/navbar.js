import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  function changeLanguage(lang) {
    if (lang === "en_us") {
      document.getElementById("por-btn").classList.remove("d-none")
      document.getElementById("eng-btn").classList.add("d-none")
    }
    else {
      document.getElementById("por-btn").classList.add("d-none")
      document.getElementById("eng-btn").classList.remove("d-none")
    }
    i18n.changeLanguage(lang);
  };

  function changeColorMode(mode) {
    if (mode === "dark-app") {
      document.getElementById("light-btn").classList.remove("d-none")
      document.getElementById("dark-btn").classList.add("d-none")
    }
    else {
      document.getElementById("light-btn").classList.add("d-none")
      document.getElementById("dark-btn").classList.remove("d-none")
    }
    document.getElementById("cv-app").className = mode
  }

  return (
    <nav class="navbar navbar-expand-lg">
      <Link to={ { pathname: "/" } } className="navbar-brand">Natan Krüger</Link>
      <button class="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <input className="menu-btn" type="checkbox" id="menu-btn" />

        <label className="menu-icon" htmlFor="menu-btn" >
          <span className="navicon"></span>
        </label>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to={ { pathname: "/responsive_table" } } className="nav-link">Responsive table</Link>
          </li>
          <li class="nav-item">
            <button id="light-btn" onClick={() => { changeColorMode("light-app")} } className="btn btn-outline-primary ml-2 d-none">
              { t('light-mode') }
            </button>

            <button id="dark-btn" onClick={() => { changeColorMode("dark-app")} } className="btn btn-outline-secondary ml-2" >
              { t('dark-mode') }
            </button>
          </li>
          <li className="nav-item mt-2 mt-lg-0 ml-2">
            <button id="eng-btn" onClick={() => { changeLanguage("en_us")} } className="btn btn-outline-secondary">
              English
            </button>

            <button id="por-btn" onClick={() => { changeLanguage("pt_br")} } className="btn btn-outline-secondary d-none" >
              Português
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
