import {Game} from "../models/Game";

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