import React, { useEffect, useRef } from 'react';
import useAppSelector from 'hooks/useAppSelector';
import useAppActions from 'hooks/useAppActions';

import AppSkeleton from '../UI/AppSkeleton/AppSkeleton';
import ViewCharInfo from './Views/ViewCharInfo';

import { SCREEN_TYPE } from 'utils/const';

import './CharInfo.scss';

const CharInfo = () => {
  const { selectedChar, isOpen } = useAppSelector((state) => state.charInfo);
  const { type } = useAppSelector((state) => state.screen);
  const { closeSelectedCharModal } = useAppActions();
  const charInfo = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (type === SCREEN_TYPE.DESKTOP) {
      closeSelectedCharModal();
    }
  }, [type]);
  return (
    <div
      className={isOpen ? `char-info char-info_active` : `char-info`}
      ref={charInfo}
    >
      <div className="char-info__wrapper">
        {selectedChar ? (
          <ViewCharInfo selectedChar={selectedChar} />
        ) : (
          <AppSkeleton />
        )}
      </div>
    </div>
  );
};

export default CharInfo;
