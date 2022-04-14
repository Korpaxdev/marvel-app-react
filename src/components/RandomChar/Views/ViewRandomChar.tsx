import React from 'react';

import AppButton from 'components/UI/AppButton/AppButton';
import { motion } from 'framer-motion';

import { TChar } from 'types/chars/charsTransformTypes';

import { MOTION } from 'utils/const';

const ViewRandomChar = ({ char }: { char: TChar }) => {
  let { name, description, thumbnail, links } = char;
  if (description.length > 200) {
    description = description.slice(0, 200) + '...';
  }
  return (
    <motion.div
      initial={MOTION.INIT}
      animate={MOTION.ANIMATE}
      className="random-char__wrapper">
      <div className="random-char__img">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="random-char__description">
        <h2 className="random-char__title">{name}</h2>
        <p className="random-char__text">{description}</p>
        <div className="random-char__buttons">
          {links.map(({ type, url, label }) => (
            <AppButton as="a" type={type} href={url} key={type}>
              {label}
            </AppButton>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default ViewRandomChar
