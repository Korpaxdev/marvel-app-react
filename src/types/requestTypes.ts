import { Dispatch } from 'redux';
import { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit';

import { STATUS } from '../utils/const';

type tStatusAction = ActionCreatorWithPayload<STATUS>;
type tDispatch = Dispatch<PayloadAction<STATUS>>

export type requestType =  (url: string, dispatch:tDispatch, statusAction: tStatusAction) => Promise<any>
