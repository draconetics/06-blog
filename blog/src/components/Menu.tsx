import React from 'react';
export default function Menu() {
  return (
    <div className="menu">
        <div className="menu__logo">
          <img src="/img/logo.png" alt="travel-food-travel" />
        </div>
        <ul>
          <li>Off Grid</li>
          <li>Travel</li>
          <li>Food</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <span>find</span>
        </div>
    </div>
  );
}
