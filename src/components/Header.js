import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Beer Collection</h1>
        </Link>
        <div>
          <Link to="/beers/new" className="button button--link">Add beer</Link>
          <Link to="/beer-directory" className="button button--link">Beer Directory</Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header
