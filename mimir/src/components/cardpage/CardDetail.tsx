import { useContext, useEffect, useRef, useState } from "react";
import { fetchCards, updateCard } from "../../services/CardService";
import styled from "styled-components";
import { Card } from "../../models/Card";
import { useNavigate, useParams } from "react-router-dom";
import { CardContext } from "../../store/CardContext";
import { CardActionTypeEnum } from "../../models/CardAction";
import { Textfield } from "../../elements/Textfield";
import { Button, ButtonSize } from "elements/Button";
import useTranslation from "../../hooks/LanguageTranslation";

export const CardDetail = () => {
  const navigate = useNavigate();
  const translate = useTranslation();
  const { cards, dispatch } = useContext(CardContext);

  const { cardId } = useParams<{ cardId: string }>();
  const [card, setCard] = useState<Card | null>(null);

  const frontText = useRef<HTMLInputElement>(null);
  const backText = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onMount = async () => {
      if (cards.length === 0) {
        const cardsFetched = await fetchCards();
        if (cardsFetched) {
          dispatch({ cards: cardsFetched, type: CardActionTypeEnum.SetCards });
        }
      }
    };
    onMount().then(() => onSelectCard());
  }, []);

  useEffect(() => {
    onSelectCard();
  }, [cards]);

  const handleUpdateButton = () => {
    if (
      frontText.current &&
      frontText.current.value &&
      backText.current &&
      backText.current.value
    ) {
      const card: Card = {
        front: frontText.current.value,
        back: backText.current.value,
        id: cardId,
      };
      updateCard(card).then((value) => {
        if (value) {
          dispatch({ card: value, type: CardActionTypeEnum.UpdateCard });
        }
      });
      navigate("/cards");
    }
  };

  const onSelectCard = () => {
    const card = cards.find((card) => card.id === cardId);
    console.log(cards);
    if (card) {
      setCard(card);
    }
  };

  const CardAddContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 10px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    align-items: center;
    text-align: left;

    & div ${Button} {
      width: 100%;
    }
  `;

  const CardHeader = styled.div`
    font-weight: bold;
  `;

  return (
    <CardAddContainer>
      <CardHeader>{translate("frontHeaderText")}</CardHeader>
      <CardHeader>{translate("backHeaderText")}</CardHeader>
      <CardHeader></CardHeader>

      <div>
        <Textfield type="text" defaultValue={card?.front} ref={frontText} />
      </div>
      <div>
        <Textfield type="text" defaultValue={card?.back} ref={backText} />
      </div>
      <div>
        <Button size={ButtonSize.SMALL} onClick={handleUpdateButton}>
          {translate("updateButton")}
        </Button>
      </div>
    </CardAddContainer>
  );
};
