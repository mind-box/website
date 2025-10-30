import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './index.scss';

function Layout(): JSX.Element {
  return (
    <div className="layout">
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <span className="app-name">Inkio</span>
      </div>
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;