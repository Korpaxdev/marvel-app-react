import React from 'react';

import {motion} from 'framer-motion';

import avengers from 'assets/avengers.png';
import avengersLogo from 'assets/avengers_logo.png';

import './AppBanner.scss';
import { MOTION } from 'utils/const';

const AppBanner = () => {
  return (
    <motion.div
      initial={MOTION.INIT}
      animate={MOTION.ANIMATE}
      className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <div className="banner__left">
            <div className="banner__left-img">
              <img src={avengers} alt="Avengers" />
            </div>
            <h2 className="banner__title">
              New comics every week!
              <br />
              Stay tuned!
            </h2>
          </div>
          <div className="banner__right-img">
            <img src={avengersLogo} alt="Avengers Logotype" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AppBanner;
