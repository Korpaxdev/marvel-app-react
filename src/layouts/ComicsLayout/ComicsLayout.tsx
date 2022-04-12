import React from 'react';

import ComicsList from 'components/ComicsList/ComicsList';
import { motion } from 'framer-motion';

import './ComicsLayout.scss';

import { MOTION } from 'utils/const';

const ComicsLayout = () => {
  return (
    <motion.section
      initial={MOTION.INIT}
      animate={MOTION.ANIMATE}
      className="comics-layout">
      <div className="container">
        <ComicsList />
      </div>
    </motion.section>
  );
};

export default ComicsLayout;
