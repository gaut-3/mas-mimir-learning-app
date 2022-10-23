import { Card } from "../models/Card";

export const fetchCards = async (): Promise<Card[] | null> => {
  const response = await fetch("/api/cards", { method: "GET" });
  if (response.ok) {
    const cards = await response.json();
    return cards;
  } else {
    return [];
  }
};

export const addNewCard = async (card: Card): Promise<Card | null> => {
  const response = await fetch("/api/cards", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
  const addedCard = await response.json();
  if (response.ok) {
    return addedCard;
  }
  return null;
};

export const updateCard = async (card: Card): Promise<Card | null> => {
  const response = await fetch("/api/cards/" + card.id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
  const updatedCard = await response.json();
  if (response.ok) {
    return updatedCard;
  }
  return null;
};

export const deleteCard = async (card: Card): Promise<boolean> => {
  const response = await fetch("/api/cards/" + card.id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
  if (response.status === 204) {
    return true;
  }
  return false;
};