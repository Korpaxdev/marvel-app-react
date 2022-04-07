import React from 'react';

import charBg from 'assets/bg_char.png'
import './AppCharacterBg.scss'

const AppCharacterBg = () => {
  return (
    <div className='char-bg'>
      <img src={charBg} alt='Background character' />
    </div>
  );
};

export default AppCharacterBg;
