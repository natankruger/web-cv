import React from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from './components/navbar';
import Biography from './components/biography';

import 'bootstrap';
import './styles/application.scss';

function App() {
  const { t } = useTranslation();


  return (
    <section id="cv-app" className="light-app">
      <header className="app-header pt-3">
        <Navbar />
      </header>
      <main className="app-body">
        <Biography bio={t('biograpy-description')} />
        <h1>
          {t('construction')}
        </h1>
      </main>
    </section>
  );
}

export default App;
