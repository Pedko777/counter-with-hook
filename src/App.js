import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import CounterPage from './pages/CounterPage/CounterPage';
import CounterPageHook from './pages/CounterPageHook/CounterPageHook';
import NewsPage from "./pages/NewsPages/NewsPage"


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
      <Switch>
        {/* <div className="App"> */}
          <Route exact path="/" component={CounterPage} />
          <Route path="/CounterPage" component={CounterPageHook} />
          <Route path="/NewsPage" component={NewsPage} />
          {/* <Route path="/NewsPage" component={NewsPage} /> */}
        {/* </div> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
