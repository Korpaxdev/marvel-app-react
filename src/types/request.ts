import { Dispatch } from 'redux';
import { iSetRandomStatus, randomAction } from './chars/charRandom';
import { charsListAction, iSetCharsListStatus } from './chars/charList';


type requestDispatch = Dispatch<randomAction | charsListAction>
type statusAction = (status:string) => iSetRandomStatus | iSetCharsListStatus

export type requestType =  (url: string, dispatch:requestDispatch, statusAction: statusAction) => Promise<any>
