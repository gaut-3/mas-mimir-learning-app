import { useContext, useEffect, useRef, useState } from "react";
import { addNewCard } from "../../services/CardService";
import styled from "styled-components";
import { Card } from "../../models/Card";
import { useParams } from "react-router-dom";
import { CardContext } from "../../store/CardContext";

export const CardDetail = () => {
  const { cardId } = useParams<{ cardId: string }>();
  const { cards, dispatch } = useContext(CardContext);
  const [card, setCard] = useState<Card | null>(null);

  useEffect(() => {
    const onMount = async () => {
      const card = cards.find((card) => card.id === cardId);
      console.log(cards)
      if (card) {
        setCard(card);
      }
    };
    onMount();
  }, []);

  const Button = styled.button`
    background: black;
    border-radius: 3px;
    color: white;
    margin: 0 1em;
    padding: 1.25em 3em;
  `;

  const frontText = useRef<HTMLInputElement>(null);
  const backText = useRef<HTMLInputElement>(null);
  const CardItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 0.5fr 0.5fr;
    gap: 10px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px black solid;
  `;

  const CardAdd = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 0.5fr 0.5fr;
    gap: 10px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px black solid;
  `;

  const CardContainer = styled.div`
    margin: 0 auto;
    max-width: 500px;
  `;

  const handleAddCardButton = () => {
    if (
      frontText.current &&
      frontText.current.value &&
      backText.current &&
      backText.current.value
    ) {
      const card: Card = {
        front: frontText.current.value,
        back: backText.current.value,
      };
      addNewCard(card).then((value) => {
        if (value) {
          //setCards((cards) => [...cards, value]);
        }
      });
    }
  };

  return (
    <CardContainer>
      <CardAdd>
        <div>Front</div>
        <div>Back</div>
      </CardAdd>
      <CardAdd>
        <div>
          <input type="text" value={card?.front} ref={frontText} />
        </div>
        <div>
          <input type="text" value={card?.back} ref={backText} />
        </div>
        <div>
          <Button onClick={handleAddCardButton}>Update</Button>
        </div>
      </CardAdd>
    </CardContainer>
  );
};
