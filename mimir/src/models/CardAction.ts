import { Card } from "./Card";

type UpdateCardAction = {
  type: CardActionTypeEnum.UpdateCard;
  card: Card;
};

type AddCardAction = {
  type: CardActionTypeEnum.AddCard;
  card: Card;
};

type DeleteCardAction = {
  type: CardActionTypeEnum.DeleteCard;
  card: Card;
};

type SetCardsAction = {
  type: CardActionTypeEnum.SetCards;
  cards: Card[];
};

export enum CardActionTypeEnum {
  SetCards = "set-cards",
  UpdateCard = "update-card",
  AddCard = "add-card",
  DeleteCard = "delete-card",
}

export type CardAction =
  | UpdateCardAction
  | AddCardAction
  | DeleteCardAction
  | SetCardsAction;
