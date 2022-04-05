import React, { useEffect } from 'react';

import './CharInfo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import AppButton from '../UI/AppButton/AppButton';
import { closeSelectedModal } from '../../store/actions';
import { iChar } from '../../interfaces/interfaces';
import AppSkeleton from '../UI/AppSkeleton/AppSkeleton';

const CharInfo = () => {
  const { selectedChar, openModal } = useSelector(
    (state: RootState) => state.charInfo
  );
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeSelectedModal());
  };
  useEffect(()=>{
    if (openModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },[openModal])

  return (
    <div className={openModal ? `char-info char-info_active` : `char-info`}>
      {selectedChar ? (
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
  const {name, thumbnail, description} = selectedChar
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
              <AppButton as="a" type="primary" href="#">
                Homepage
              </AppButton>
              <AppButton as="a" type="secondary" href="#">
                Wiki
              </AppButton>
            </div>
          </div>
        </div>
        <p className="char-info__description">{description}</p>
        <h3 className="char-info__subtitle">Comics:</h3>
        <ul className="char-info__comics-list">
          <li className="char-info__comics-list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info__comics-list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info__comics-list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info__comics-list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info__comics-list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info__comics-list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info__comics-list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info__comics-list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info__comics-list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info__comics-list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CharInfo;
