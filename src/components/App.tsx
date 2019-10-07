import React from 'react';
import { Store } from '../store/Store';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'tomato'
};
export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Choose your favourite episode</p>
        </div>
        <div className="nav-container">
          <NavLink activeClassName="active" exact to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink activeClassName="active" className="nav-link" to="/favs">
            Favorites(s) : {state.favorites.length}
          </NavLink>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
