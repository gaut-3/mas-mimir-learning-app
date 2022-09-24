import {useContext, useEffect, useRef, useState} from "react";
import {addNewCard, fetchCards, updateCard} from "../../services/CardService";
import styled from "styled-components";
import {Card} from "../../models/Card";
import {useParams} from "react-router-dom";
import {CardContext} from "../../store/CardContext";
import {CardActionTypeEnum} from "../../models/CardAction";

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
            <CardAdd>
                <div>Front</div>
                <div>Back</div>
            </CardAdd>
            <CardAdd>
                <div>
                    <input type="text" defaultValue={card?.front} ref={frontText}/>
                </div>
                <div>
                    <input type="text" defaultValue={card?.back} ref={backText}/>
                </div>
                <div>
                    <Button onClick={handleUpdateButton}>Update</Button>
                </div>
            </CardAdd>
        </CardContainer>
    );
};
