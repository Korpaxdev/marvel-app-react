import React, { FC } from 'react';

import { TComicsList } from 'types/comics/comicsTranformTypes';
import {motion} from 'framer-motion';

import { MOTION } from 'utils/const';

import './ComicsListItem.scss';

interface IComicsListItem {
  comicBook: TComicsList;
}

const ComicsListItem: FC<IComicsListItem> = ({ comicBook }) => {
  let { thumbnail, title, price } = comicBook;
  if (title.length > 50) title = title.slice(0, 50) + '...';
  return (
    <motion.li
      initial={MOTION.INIT}
      animate={MOTION.ANIMATE}
      transition={MOTION.LIST_TRANSITION}
      className="comic-book">
      <div className="comic-book__img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="comic-book__info">
        <h3 className="comic-book__title">{title}</h3>
        <p className="comic-book__price">{price}</p>
      </div>
    </motion.li>
  );
};

export default ComicsListItem;
