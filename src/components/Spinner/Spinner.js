import React from 'react';
import style from './Spinner.module.scss';

const Spinner = () => (
  <>
    <div className={style['lds-roller']}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <p>Loading data...</p>
  </>
);

export default Spinner;
