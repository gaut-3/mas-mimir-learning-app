import React, { useContext, useEffect } from "react";
import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent";
import { GamePageComponent } from "./components/gamepage/GamePageComponent";
import { Route, Routes } from "react-router-dom";
import { CardOverviewComponent } from "./components/cardpage/CardOverview";
import { CardDetail } from "./components/cardpage/CardDetail";
import { I18nContext } from "./store/I18nContext";
import { fetchTranslations } from "./services/i18nService";
import { I18nActionTypeEnum } from "./models/i18nAction";

function App() {
  const { lang, translations, dispatch } = useContext(I18nContext);

  useEffect(() => {
    if (lang || translations) {
      const onMount = async () => {
        const newTranslations = await fetchTranslations("de");
        if (newTranslations) {
          dispatch({
            lang: lang,
            translation: newTranslations,
            type: I18nActionTypeEnum.SetLanguage,
          });
        }
      };

      onMount();
    }
  }, []);

  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
      <Routes>
        <Route path="/" element={<GamePageComponent />} />
        <Route path="/cards" element={<CardOverviewComponent />} />
        <Route path="/cards/:cardId" element={<CardDetail />} />
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
