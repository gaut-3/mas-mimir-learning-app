import {Game} from "../models/Game";

// export const fetchTranslations = (lang: string) => {
//     return new Promise((resolve) => {
//         fetch("/lang/{lang}.json".replace("{lang}", lang))
//             .then((response) => response.json())
//             .then((data) => resolve(data));
//     });
// }

export const fetchTranslations = async (lang: string): Promise<{ }> => {
  return new Promise((resolve) => {
    fetch("/lang/{lang}.json".replace("{lang}", lang))
      .then((response) => response.json())
      .then((data) => resolve(data));
  });

    const response = await fetch("/lang/{lang}.json".replace("{lang}", lang));
    if (response.ok) {
        const game = await response.json();
        return game;
    }
    return {}
};

// export const fetchNewGame = async (): Promise<Game | null> => {
//     const response = await fetch("/api/game", {method: "POST"});
//     if (response.ok) {
//         const game = await response.json();
//         return game;
//     }
//     return null
// };