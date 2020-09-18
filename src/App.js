import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Navbar from './components/navbar';
import Main from './pages/main';
import ResponsiveTable from './pages/responsiveTable';

import 'bootstrap';
import './styles/application.scss';

function App() {
  const { t } = useTranslation();

  return (
    <section>
      <BrowserRouter>
        <header className="app-header">
          <Navbar />
        </header>
        <main className="app-body">
          <Switch>
            <Route exact path="/" component={ () => <Main t={ t.bind(this) } /> } />
            <Route exact path="/responsive_table" component={ () => <ResponsiveTable t={ t.bind(this) } /> } />
          </Switch>
        </main>
      </BrowserRouter>
    </section>
  );
}

export default App;
