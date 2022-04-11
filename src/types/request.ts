import { Dispatch } from 'redux';
import { tSetRandomCharStatusAction } from './chars/charRandom';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { tSetCharListStatusAction } from './chars/charList';

import { STATUS } from '../utils/const';

type tStatusAction = ActionCreatorWithPayload<STATUS>
type tDispatch = Dispatch<tSetRandomCharStatusAction | tSetCharListStatusAction>

export type requestType =  (url: string, dispatch:tDispatch, statusAction: tStatusAction) => Promise<any>
