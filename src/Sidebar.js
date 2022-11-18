import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './css/Sidebar.css'

export default props => {
  return (
    <Menu>
     <h1>Shop Skincare</h1>
      <a className="menu-item" href="/salads">
        Cleansers
      </a>

      <a className="menu-item" href="/desserts">
        Exfoliators
      </a>

      <a className="menu-item" href="/pizzas">
        Toners & Ampolues
      </a>
      <a className="menu-item" href="/desserts">
        Serums & Essences
      </a>

      <a className="menu-item" href="/desserts">
        Moisturizers
      </a>

      <a className="menu-item" href="/desserts">
        Sunscreen
      </a>

      <a className="menu-item" href="/desserts">
        Eye care
      </a>

      <a className="menu-item" href="/desserts">
        Lip care
      </a>

      <a className="menu-item" href="/desserts">
        Masks
      </a>

    </Menu>
  );
};