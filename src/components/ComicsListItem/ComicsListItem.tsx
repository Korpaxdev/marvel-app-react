import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {motion} from 'framer-motion';

import { TComic } from 'types/comics/comicsTranformTypes';

import { MOTION } from 'utils/const';
import './ComicsListItem.scss';

interface IComicsListItem {
  comicBook: TComic;
}

const ComicsListItem: FC<IComicsListItem> = ({ comicBook }) => {
  const navigate = useNavigate()
  let { thumbnail, title, price, inApiId } = comicBook;
  if (title.length > 50) title = title.slice(0, 50) + '...';

  const onHandleComicClick = () => {
    navigate(`/comics/${inApiId}`)
  }

  return (
    <motion.li
      initial={MOTION.INIT}
      animate={MOTION.ANIMATE}
      transition={MOTION.LIST_TRANSITION}
      className="comic-book"
      onClick={onHandleComicClick}
    >
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
