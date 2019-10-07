import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { StoreProvider } from './store/Store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/favs" component={Favorites} />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
