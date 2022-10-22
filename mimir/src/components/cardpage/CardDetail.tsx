import {useContext, useEffect, useRef, useState} from "react";
import {addNewCard, fetchCards, updateCard} from "../../services/CardService";
import styled from "styled-components";
import {Card} from "../../models/Card";
import {useParams} from "react-router-dom";
import {CardContext} from "../../store/CardContext";
import {CardActionTypeEnum} from "../../models/CardAction";
import { Textfield } from "../../elements/Textfield";
import {Button, ButtonSize} from "elements/Button";

export const CardDetail = () => {
    const {cardId} = useParams<{ cardId: string }>();
    const {cards, dispatch} = useContext(CardContext);
    const [card, setCard] = useState<Card | null>(null);

    useEffect(() => {
        const onMount = async () => {
            if (cards.length === 0) {
                const cardsFetched = await fetchCards();
                if (cardsFetched) {
                    dispatch({cards: cardsFetched, type: CardActionTypeEnum.SetCards});
                }
            }
        };
        onMount().then(() =>
            onSelectCard()
        );
    }, []);


    useEffect(() => {
        onSelectCard();
    }, [cards]);

    const onSelectCard = () => {
        const card = cards.find((card) => card.id === cardId);
        console.log(cards)
        if (card) {
            setCard(card);
        }
    };

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
    grid-template-columns: 2fr 2fr 1fr;
    gap: 10px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px black solid;
    align-items: center;
    div:nth-child(3) {
        text-align:right
    }
  `;

    const CardHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 10px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px black solid;
  `;

    const CardContainer = styled.div`
    margin: 0 auto;
    max-width: 800px;
    text-align: left;
  `;

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
                id: cardId
            };
            updateCard(card).then((value) => {
                if (value) {
                    dispatch({card: value, type: CardActionTypeEnum.UpdateCard});
                }
            });
        }
    };

    return (
        <CardContainer>
            <CardHeader>
                <div>Front</div>
                <div>Back</div>
            </CardHeader>
            <CardAdd>
                <div><Textfield type="text" defaultValue={card?.front} ref={frontText}/></div>
                <div><Textfield type="text" defaultValue={card?.back} ref={backText}/></div>
                <div><Button size={ButtonSize.SMALL} onClick={handleUpdateButton}>Update</Button></div>
            </CardAdd>
        </CardContainer>
    );
};
