import { useContext, useEffect, useRef } from "react";
import { addNewCard, deleteCard, fetchCards } from "../../services/CardService";
import styled from "styled-components";
import { Card } from "../../models/Card";
import { CardContext } from "../../store/CardContext";
import { CardActionTypeEnum } from "../../models/CardAction";
import { Link } from "react-router-dom";
import { Button, ButtonSize } from "elements/Button";
import { Textfield } from "elements/Textfield";
import useTranslation from "../../hooks/LanguageTranslation";

export const CardOverviewComponent = () => {
  const { cards, dispatch } = useContext(CardContext);
  const translate = useTranslation();

  useEffect(() => {
    const onMount = async () => {
      const cards = await fetchCards();
      if (cards) {
        dispatch({ cards: cards, type: CardActionTypeEnum.SetCards });
      }
    };
    onMount();
  }, []);

  const frontText = useRef<HTMLInputElement>(null);
  const backText = useRef<HTMLInputElement>(null);

  const CardItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 0.5fr 0.5fr;
    gap: 10px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px black solid;
    align-items: center;
    text-align: left;
  `;

  const CardAdd = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 0.5fr 0.5fr;
    gap: 10px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px black solid;
    text-align: left;
  `;

  const CardContainer = styled.div`
    margin: 0 auto;
    max-width: 800px;
  `;

  const CardElement = styled.div`
    grid-area: 1 / 3 / 1 / span 4;

    ${Button} {
      width: 100%;
    }
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
      <CardItem>
        <div>
          <Textfield placeholder={translate("inputPlaceholderTextFront")} type="text" ref={frontText} />
        </div>
        <div>
          <Textfield placeholder={translate("inputPlaceholderTextBack")} type="text" ref={backText} />
        </div>
        <CardElement>
          <Button size={ButtonSize.SMALL} onClick={handleAddCardButton}>
            {translate("addButton")}
          </Button>
        </CardElement>
      </CardItem>
      {cards.map((card) => {
        return (
          <CardItem key={card.id}>
            <div>{card.front}</div>
            <div>{card.back}</div>
            <div>
              <Link to={"/cards/" + card.id}>
                <Button size={ButtonSize.SMALL}>
                  {translate("editButton")}
                </Button>
              </Link>
            </div>
            <div>
              <Button
                size={ButtonSize.SMALL}
                onClick={(e) => handleDeleteButton(e, card)}
              >
                {translate("deleteButton")}
              </Button>
            </div>
          </CardItem>
        );
      })}
    </CardContainer>
  );
};
