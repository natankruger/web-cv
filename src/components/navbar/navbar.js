import React from 'react';

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
    <nav class="navbar">
      <button
        id="light-btn"
        onClick={() => { changeColorMode("light-app") }}
        className="btn btn-outline-primary ml-auto mr-2 d-none">
        { t('light-mode') }
      </button>

      <button
        id="dark-btn"
        onClick={() => { changeColorMode("dark-app") }}
        className="btn btn-outline-secondary ml-auto mr-2" >
        { t('dark-mode') }
      </button>

      <button
        id="eng-btn"
        onClick={() => { changeLanguage("en_us") }}
        className="btn btn-outline-secondary mr-auto">
        English
      </button>

      <button
        id="por-btn"
        onClick={() => { changeLanguage("pt_br") }}
        className="btn btn-outline-secondary d-none mr-auto" >
        Português
      </button>
    </nav>
  );
}

export default Navbar;
