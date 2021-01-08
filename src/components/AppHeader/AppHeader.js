import React from 'react';
import './AppHeader.css';

const AppHeader = () => (
  <div className="wrapper">
    <ul>
      <li><a href="/" className="recipeBook">Fit And Healthy</a></li>
      <li><a href="/">Recipes</a></li>
      <li><a href="/fitness">Fitness</a></li>
      <li><a href="/self-development">Self-development</a></li>
    </ul>
  </div>
);

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
