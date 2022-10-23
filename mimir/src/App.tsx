import React, { useContext, useEffect } from "react";
import { I18nContext } from "./store/I18nContext";
import {
  fetchTranslations,
  getLangFromLocalStorage,
} from "./services/i18nService";
import { I18nActionTypeEnum } from "./models/i18nAction";
import { createGlobalStyle } from "styled-components";
import { NavBarComponent } from "./components/NavBarComponent";
import { GamePageComponent } from "./components/gamepage/GamePageComponent";
import { CardOverviewComponent } from "./components/cardpage/CardOverview";
import { CardDetail } from "./components/cardpage/CardDetail";
import { Container } from "elements/Container";
import { Route, Routes } from "react-router-dom";

function App() {
  const { dispatch } = useContext(I18nContext);

  useEffect(() => {
    const onMount = async () => {
      const langFromLocalStorage = getLangFromLocalStorage();
      const newTranslations = await fetchTranslations(langFromLocalStorage);
      if (newTranslations) {
        dispatch({
          lang: langFromLocalStorage,
          translation: newTranslations,
          type: I18nActionTypeEnum.SetLanguage,
        });
      }
    };

    onMount();
  }, []);

  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `;

  return (
    <div className="App">
      <GlobalStyle />
      <NavBarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<GamePageComponent />} />
          <Route path="/cards" element={<CardOverviewComponent />} />
          <Route path="/cards/:cardId" element={<CardDetail />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
