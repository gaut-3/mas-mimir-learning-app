import {GameCard} from "./GameCard";

export interface Game {
  front: string;
  cardCount: number;
  solved: GameCard[];
}