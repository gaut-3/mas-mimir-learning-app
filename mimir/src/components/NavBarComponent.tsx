import styled from "styled-components";
import {useContext, useEffect, useState} from "react";
import {GameStateEnum} from "../utils/GameStateEnum";
import {AppContext} from "../store/GameContext";
import {GameState} from "../models/GameState";
import {Link} from "react-router-dom";
import {I18nContext} from "../store/I18nContext";
import {I18nActionTypeEnum} from "../models/i18nAction";

interface Props {
    gameState: GameState;
}

export const NavBarComponent = () => {
    interface ContainerProps {
        justifyContent: string;
    }

    const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(p) => p.justifyContent};
    background-color: blue;
    padding: 0 5px;
  `;

    interface ItemProps {
        alignment: string;
    }

    const Item = styled.div<ItemProps>`
    margin: 10px;
    text-align: ${(p) => p.alignment};
    width: 100%;
    justify-content: right;
  `;

    const Button = styled.button`
    background: black;
    border-radius: 3px;
    color: white;
    margin: 0 1em;
    padding: 1.25em 3em;
  `;

    const [buttonTitle, setButtonTitle] = useState<String>("New Game");
    const {game, state} = useContext(AppContext);
    const {lang, dispatch} = useContext(I18nContext);

    const getGameStateTitle = () => {
        if (state == GameStateEnum.NO_GAME) {
            return "New Game";
        }
        if (state == GameStateEnum.RUNNING) {
            let count = game.solved.length;
            if (count === 0) {
                count = 1;
            }
            return "Solve #" + count;
        }
        if (state == GameStateEnum.FINISHED) {
            return "Finished";
        }
        return "New Game";
    };

    console.log("language ,", lang)

    useEffect(() => {
        console.log("useeffect gameState ", state);
        setButtonTitle(getGameStateTitle());
    }, [state]);

    const changeLangugeClick = (lang: string) => {
        console.log("asdfasdf")
        dispatch({lang: lang, type: I18nActionTypeEnum.SetLanguage})
    }

    return (
        <Container justifyContent="space-between">
            <Item alignment="left">
                <Container justifyContent="left">
                    <h1>Mimir</h1>
                    <Button onClick={() => changeLangugeClick("de")}>de</Button>
                    <Button onClick={() => changeLangugeClick("en")}>en</Button>
                </Container>
            </Item>
            <Item alignment="center">
                <Link to="/">
                    <Button>{buttonTitle}</Button>
                </Link>
            </Item>
            <Item alignment="right">
                <Link to="/cards">
                    <Button>Manage Card</Button>
                </Link>
            </Item>
        </Container>
    );
};
