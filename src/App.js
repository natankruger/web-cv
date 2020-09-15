import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Navbar from './components/navbar';
import Main from './pages/main';

import 'bootstrap';
import './styles/application.scss';

function App() {
  const { t } = useTranslation();

  return (
    <section>
      <header className="app-header pt-3">
        <Navbar />
      </header>
      <main className="app-body">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ () => <Main t={ t.bind(this) } /> } />
        </Switch>
      </BrowserRouter>
      </main>
    </section>
  );
}

export default App;
