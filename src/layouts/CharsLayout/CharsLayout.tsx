import React from 'react';

import CharsList from 'components/CharsList/CharsList';
import CharInfo from 'components/CharInfo/CharInfo';
import { motion } from 'framer-motion';

import { MOTION } from 'utils/const';

import './CharsLayout.scss';

const CharsLayout = () => {
  return (
    <motion.section
      initial={MOTION.INIT}
      animate={MOTION.ANIMATE}
      className="characters-layout"
    >
      <div className="container">
        <div className="characters-layout__wrapper">
          <CharsList />
          <CharInfo />
        </div>
      </div>
    </motion.section>
  );
};

export default CharsLayout;
