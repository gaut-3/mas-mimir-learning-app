export const initialState = {
  game: null
};

export interface GameCard {
  id: string;
  front: string;
  back: string;
  answer: string;
  accepted: string;
}

export interface Game {
  front: string;
  cardCount: number;
  solved: [];
}

export interface Card {
  id: string;
  front: string;
  back: string;
}

export interface Anwser {
  answer: string;
}

export const fetchNewGame = async (): Promise<Game | null> => {
  const response = await fetch("/api/game", { method: "POST" });
  if (response.ok) {
    const game = await response.json();
    return game;
  } else {
    return null;
  }
};

export const fetchGame = async (): Promise<Game | null> => {
  const response = await fetch("/api/game", { method: "GET" });
  const game = await response.json();
  if (response.ok) {
    return game;
  }
  return null;
};

export const gameReducer = (
  state: any,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "START_NEW_GAME":
      return { game: action.payload };
      break;
    case "GET_GAME":
      return { game: action.payload };
      break;
    default:
      return state;
  }
};
