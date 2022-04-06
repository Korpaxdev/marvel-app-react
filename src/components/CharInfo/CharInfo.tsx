import React, { useEffect } from 'react';

import './CharInfo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AppButton from '../UI/AppButton/AppButton';
import { iChar } from '../../interfaces/interfaces';
import AppSkeleton from '../UI/AppSkeleton/AppSkeleton';
import { SCREEN_TYPE } from 'utils/const';
import { closeSelectedModal } from 'redux/actions/charInfoActions';

const CharInfo = () => {
  const { selectedChar, isOpen } = useSelector(
    (state: RootState) => state.charInfo
  );
  const type = useSelector(({ screen }: RootState) => screen.type);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeSelectedModal());
  };
  useEffect(() => {
    if (type !== SCREEN_TYPE.DESKTOP) {
      isOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = '');
    }
  }, [isOpen, type]);

  return (
    <div className={isOpen ? `char-info char-info_active` : `char-info`}>
      {selectedChar && isOpen ? (
        <ViewCharInfo closeModal={closeModal} selectedChar={selectedChar} />
      ) : (
        <AppSkeleton />
      )}
    </div>
  );
};

const ViewCharInfo = ({
  closeModal,
  selectedChar,
}: {
  closeModal: () => void;
  selectedChar: iChar;
}) => {
  let { name, thumbnail, description, links, comics } = selectedChar;
  if (comics.length > 10) {
    comics = comics.slice(0, 10);
  }
  return (
    <div className="char-info__wrapper">
      <div className="char-info__overlay" onClick={closeModal}></div>
      <div className="char-info__content">
        <button className="char-info__close" onClick={closeModal}>
          X
        </button>
        <div className="char-info__head">
          <div className="char-info__img">
            <img src={thumbnail} alt={name} />
          </div>
          <div className="char-info__head-right">
            <h2 className="char-info__title">{name}</h2>
            <div className="char-info__btns">
              {links.map(({ type, url, label }) => (
                <AppButton as="a" type={type} href={url} key={type}>
                  {label}
                </AppButton>
              ))}
            </div>
          </div>
        </div>
        <p className="char-info__description">{description}</p>
        <h3 className="char-info__subtitle">Comics:</h3>
        <ul className="char-info__comics-list">
          {comics.map((name, i) => (
            <li className="char-info__comics-list-item" key={i}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CharInfo;
