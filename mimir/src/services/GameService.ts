import { Game } from "../models/Game";
import { Answer } from "../store/GameReducer";

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

export const patchAnswerGame = async (answer: Answer): Promise<Game | null> => {
  const response = await fetch("/api/game", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(answer),
  });
  if (response.ok) {
    const game = await response.json();
    return game;
  }
  return null;
};

export const deleteGame = async (): Promise<boolean> => {
  const response = await fetch("/api/game", { method: "DELETE" });
  if (response.status === 204) {
    return true;
  }
  return false;
};