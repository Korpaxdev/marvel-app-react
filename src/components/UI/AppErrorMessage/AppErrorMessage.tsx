import React from 'react';
import error from 'assets/error.jpg'

import './AppErrorMessage.scss'

const AppErrorMessage = () => {
  return (
    <div className='error-message'>
      <div className='error-message__img'>
        <img src={error} alt='Something went wrong' />
      </div>
      <h2 className='error-message__title'>Something went wrong <br/> Please try again later</h2>
    </div>
  );
};

export default AppErrorMessage;
