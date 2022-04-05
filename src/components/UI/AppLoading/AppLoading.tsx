import React from 'react';
import spinner from 'assets/spinner.svg';

import './AppLoading.scss'

const AppLoading = () => {
  return (
    <div className='loading'>
      <img src={spinner} alt='Loading' />
    </div>
  );
};

export default AppLoading;
