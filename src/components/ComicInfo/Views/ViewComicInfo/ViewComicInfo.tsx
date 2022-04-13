import React, { FC } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';
import AppButton from 'components/UI/AppButton/AppButton';

import { TComic } from 'types/comics/comicsTranformTypes';

interface IComicInfoView {
  comic: TComic;
}

const ViewComicInfo: FC<IComicInfoView> = ({ comic }) => {
  const { title, description, thumbnail, pageCount, price, language } = comic;
  const navigate = useNavigate();
  const navigationType = useNavigationType()

  const onBackToAll = () => {
    navigationType === 'POP' ? navigate('/comics') : navigate(-1)
  };
  return (
    <div className="comic-info__wrapper">
      <div className="comic-info__img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="comic-info__body">
        <h2 className="comic-info__title">{title}</h2>
        <p className="comic-info__description">{description}</p>
        <p className="comic-info__prop">
          <strong>Page:</strong> {pageCount}
        </p>
        <p className="comic-info__prop">
          <strong>Language:</strong> {language}
        </p>
        <p className="comic-info__price">
          Price: <span>{price}</span>
        </p>
        <div className="comic-info__button">
          <AppButton as="button" type="secondary" onClick={onBackToAll}>
            Go back
          </AppButton>
        </div>
      </div>
    </div>
  );
};
export default ViewComicInfo;
