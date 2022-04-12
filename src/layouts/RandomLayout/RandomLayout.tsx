import React from 'react';

import RandomChar from 'components/RandomChar/RandomChar';
import RandomCharToday from 'components/RandomCharToday/RandomCharToday';
import {motion} from 'framer-motion';

import { MOTION } from '../../utils/const';

import './RandomLayout.scss';

const RandomLayout = () => {
  return (
    <motion.section
      initial={MOTION.INIT}
      animate={MOTION.ANIMATE}
      className="random-layout">
      <div className="container">
        <div className="random-layout__wrapper">
          <RandomChar />
          <RandomCharToday />
        </div>
      </div>
    </motion.section>
  );
};

export default RandomLayout;
