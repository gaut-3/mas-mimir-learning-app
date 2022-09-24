import { CardState } from "../models/CardState";
import { CardAction, CardActionTypeEnum } from "../models/CardAction";

export function i18nReducer(
  cardState: CardState,
  action: CardAction
): CardState {
  switch (action.type) {
    case CardActionTypeEnum.SetCards:
      return { cards: action.cards };
    case CardActionTypeEnum.AddCard:
      return { cards: [...cardState.cards, action.card] };
    case CardActionTypeEnum.UpdateCard:
      const newCardState = cardState.cards.map((card) => {
        if (card.id === action.card.id) {
          return { ...card, front: action.card.front, back: action.card.back };
        }
        return card;
      });
      return { cards: newCardState };
    case CardActionTypeEnum.DeleteCard:
      const newCards = cardState.cards.filter(
        (card) => card.id !== action.card.id
      );
      return { cards: newCards };
  }
}

export const initialCards: CardState = {
  cards: [],
};

