import React from 'react';
import { useNavigate } from 'react-router-dom';

import AppErrorMessage from 'components/UI/AppErrorMessage/AppErrorMessage';
import AppButton from 'components/UI/AppButton/AppButton';

import './ViewErrorWithButton.scss';

const ViewErrorWithButton = () => {
  const navigate = useNavigate();
  return (
    <div className="comic-info__error">
      <AppErrorMessage />
      <div className="comic-info__error-button">
        <AppButton as="button" type="primary" onClick={() => navigate('/')}>
          Go To Main Page
        </AppButton>
      </div>
    </div>
  );
};

export default ViewErrorWithButton;
