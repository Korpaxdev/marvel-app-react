import React, { FC } from 'react';
import AppButton from 'components/UI/AppButton/AppButton';
import { useNavigate } from 'react-router-dom';

import './ViewNotFound.scss';

interface IComicInfoNotFound {
  id: string;
}

const ViewNotFound: FC<IComicInfoNotFound> = ({ id }) => {
  const navigate = useNavigate();
  const onGoToAllComics = () => {
    navigate('/comics');
  };
  return (
    <div className="comic-info__not-found">
      <h2 className="comic-info__not-found-title">
        Comic book with id - <span>{id}</span> was not found
      </h2>
      <div className="comic-info__not-found-button">
        <AppButton as="button" type="primary" onClick={onGoToAllComics}>
          Go to all comics
        </AppButton>
      </div>
    </div>
  );
};

export default ViewNotFound;
