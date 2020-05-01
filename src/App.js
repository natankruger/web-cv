import React from 'react';

import { useTranslation } from 'react-i18next';

import 'bootstrap';
import './styles/application.scss';

function App() {
  const { t, i18n } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  };

  return (
    <section className="App">
      <section className="app-body">
      <div className="btn-group">
        <button onClick={() => { changeLanguage("en_us")} } className="btn btn-outline-secondary">EN-US</button>
        <button onClick={() => { changeLanguage("pt_br")} } className="btn btn-outline-primary" >PT-BR</button>
      </div>

        <h1>
          {t('construction')}
        </h1>
      </section>
    </section>
  );
}

export default App;
