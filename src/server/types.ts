import { ecmaserve } from '../proto/types'


export interface UserContext
{
    sub: string;
}

export type ICard = ecmaserve.trash.ICard;
export type IState = ecmaserve.trash.IState;
export type IActions = ecmaserve.trash.Actions;
export const CardSource = ecmaserve.trash.CardSource;
export const CardSuite = ecmaserve.trash.Suite;
export const CardFaceValue = ecmaserve.trash.FaceValue;
export type ICardSpot = ecmaserve.trash.ICardSpot;
export type IPlayerTableau = ecmaserve.trash.IPlayerTableau;
export const SlotNumber = ecmaserve.trash.SlotNumber;