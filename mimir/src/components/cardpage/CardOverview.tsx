import { useContext, useEffect, useRef } from "react";
import { addNewCard, deleteCard, fetchCards } from "../../services/CardService";
import styled from "styled-components";
import { Card } from "../../models/Card";
import { CardContext } from "../../store/CardContext";
import { CardActionTypeEnum } from "../../models/CardAction";
import { Link } from "react-router-dom";

export const CardOverviewComponent = () => {
  const { cards, dispatch } = useContext(CardContext);

  useEffect(() => {
    const onMount = async () => {
      const cards = await fetchCards();
      if (cards) {
        dispatch({ cards: cards, type: CardActionTypeEnum.SetCards });
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
    max-width: 800px;
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
          dispatch({ card: value, type: CardActionTypeEnum.AddCard });
        }
      });
    }
  };

  const handleDeleteButton = (e: React.MouseEvent<HTMLElement>, card: Card) => {
    deleteCard(card).then((deleted) => {
      if (deleted) {
        dispatch({ card: card, type: CardActionTypeEnum.DeleteCard });
      }
    });
  };

  return (
    <CardContainer>
      <CardAdd>
        <div>
          <input type="text" ref={frontText} />
        </div>
        <div>
          <input type="text" ref={backText} />
        </div>
        <div>
          <Button onClick={handleAddCardButton}>Add</Button>
        </div>
      </CardAdd>
      {cards.map((card) => {
        return (
          <CardItem key={card.id}>
            <div>{card.front}</div>
            <div>{card.back}</div>
            <div>
              <Link to={"/cards/" + card.id}>
                <Button>
                  Edit
                </Button>
              </Link>
            </div>
            <div>
              <Button onClick={(e) => handleDeleteButton(e, card)}>
                Delete
              </Button>
            </div>
          </CardItem>
        );
      })}
    </CardContainer>
  );
};
