/** @format */

import React from 'react';
import './styles.scss';

const Loader: React.FC = () => {
  return (
    <div className="loader__wrapper">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;
