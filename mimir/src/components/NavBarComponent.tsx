import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { GameStateEnum } from "../utils/GameStateEnum";
import { AppContext } from "../store/GameContext";
import { Link } from "react-router-dom";
import useTranslation from "../hooks/LanguageTranslation";
import { LanguageComponent } from "./LanguageComponent";
import { Button } from "elements/Button";

export const NavBarComponent = () => {
  const { game, state } = useContext(AppContext);
  const translate = useTranslation();
  const [buttonTitle, setButtonTitle] = useState<string>("newGameButton");

  useEffect(() => {
    setButtonTitle(getGameStateTitle());
  }, [state]);

  const getGameStateTitle = () => {
    if (state == GameStateEnum.RUNNING) {
      return "runningGameButton";
    }
    if (state == GameStateEnum.FINISHED) {
      return "finishedGameButton";
    }
    return "newGameButton";
  };

  const getCountNumberGameRunning = (): string => {
    if (state == GameStateEnum.RUNNING) {
      let count = game.solved.length + 1;
      return count.toString();
    }
    return "";
  };

  const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: "space-between";
    background-color: blue;
    margin-bottom: 25px;
  `;

  const LanguageLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: left;
    column-gap: 10px;
  `;

  const Item = styled.div<ItemProps>`
    margin: 10px;
    text-align: ${(p) => p.alignment};
    width: 100%;
  `;

  interface ItemProps {
    alignment: string;
  }

  return (
    <NavbarContainer>
      <Item alignment="left">
        <LanguageLogoContainer>
          <h1>{translate("logoTitle")}</h1>
          <LanguageComponent />
        </LanguageLogoContainer>
      </Item>
      <Item alignment="center">
        <Link to="/">
          <Button>
            {translate(buttonTitle, [getCountNumberGameRunning()])}
          </Button>
        </Link>
      </Item>
      <Item alignment="right">
        <Link to="/cards">
          <Button>{translate("manageCardButton")}</Button>
        </Link>
      </Item>
    </NavbarContainer>
  );
};
