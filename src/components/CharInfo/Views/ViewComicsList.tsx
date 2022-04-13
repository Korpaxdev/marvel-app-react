import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useAppSelector from 'hooks/useAppSelector';
import useAppActions from 'hooks/useAppActions';

import { SCREEN_TYPE } from 'utils/const';

interface IViewComicsList {
  id: string | undefined;
  name: string;
}

const ViewComicsList: FC<IViewComicsList> = ({ id, name }) => {
  const { type } = useAppSelector((state) => state.screen);
  const { closeSelectedCharModal } = useAppActions();
  const goToComic = () => {
    if (type !== SCREEN_TYPE.DESKTOP) closeSelectedCharModal();
  };

  if (id) {
    return (
      <li className='char-info__comics-list-item'>
        <Link to={`/comics/${id}`} onClick={goToComic}>
          {name}
        </Link>
      </li>
    )
  }
  return (
    <li className='char-info__comics-list-item-others'>
      {name}
    </li>
  )

};

export default ViewComicsList;
