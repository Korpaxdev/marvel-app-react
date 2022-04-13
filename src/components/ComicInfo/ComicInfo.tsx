import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useAppActions from 'hooks/useAppActions';
import useAppSelector from 'hooks/useAppSelector';

import { motion } from 'framer-motion';
import AppLoading from '../UI/AppLoading/AppLoading';
import ViewComicInfo from './Views/ViewComicInfo/ViewComicInfo';
import ViewNotFound from './Views/ViewNotFound/ViewNotFound';
import ViewErrorWithButton from './Views/ViewErrorWithButton/ViewErrorWithButton';

import { MOTION, STATUS } from 'utils/const';

import './ComicInfo.scss';

const ComicInfo = () => {
  const { id } = useParams();
  const { status, comic } = useAppSelector((state) => state.comicInfo);
  const { fetchComicInfo } = useAppActions();

  const content = useMemo(() => {
    switch (status) {
      case STATUS.LOADING:
        return <AppLoading />;
      case STATUS.NOT_FOUND:
        return <ViewNotFound id={id!} />;
      case STATUS.ERROR:
        return <ViewErrorWithButton />;
      default:
        return comic && <ViewComicInfo comic={comic} />;
    }
  }, [status, comic]);

  useEffect(() => {
    fetchComicInfo(id!);
  }, []);
  return (
    <motion.section
      initial={MOTION.INIT}
      animate={MOTION.ANIMATE}
      className="comic-info"
    >
      <div className="container">{content}</div>
    </motion.section>
  );
};

export default ComicInfo;
