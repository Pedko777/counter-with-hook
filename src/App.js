import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import CounterPage from './pages/CounterPage/CounterPage';
import CounterPageHook from './pages/CounterPageHook/CounterPageHook';
import NewsPage from './pages/NewsPage/NewsPage';
import NewsPageHook from './pages/NewsPageHook/NewsPageHook';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">CounterPage</Link>
            </li>
            <li>
              <Link to="/CounterPage">CounterPageHook</Link>
            </li>
            <li>
              <Link to="/NewsPage">News</Link>
            </li>
            <li>
              <Link to="/NewsPageHook">NewsPageHook</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <div className="App"> */}
        <Switch>
          <Route exact path="/" component={CounterPage} />
          <Route path="/CounterPage" component={CounterPageHook} />
          <Route path="/NewsPage" component={NewsPage} />
          <Route path="/NewsPageHook" component={NewsPage} />
        </Switch>
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
