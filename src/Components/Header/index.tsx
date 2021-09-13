import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Logo from '../../Assets/logo.svg'
import './styles.scss';

const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <header>
      <img src={Logo} alt="logo" onClick={() => history.push('/')} />
      <div className="current__page">
        <h1>{location.pathname.split('/')[1].toUpperCase()}</h1>
      </div>
    </header>
  )
}
export default Header
