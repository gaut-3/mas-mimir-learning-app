import styled from "styled-components";
import {fetchTranslations, saveLangToLocalStorage} from "../services/i18nService";
import { I18nActionTypeEnum } from "../models/i18nAction";
import { useContext } from "react";
import { I18nContext } from "../store/I18nContext";
import { LanguageEnum } from "../utils/LanguageEnum";

export const LanguageComponent = () => {
  const { lang, dispatch } = useContext(I18nContext);

  const changeLangugeClick = async (lang: LanguageEnum) => {
    const newTranslations = await fetchTranslations(lang);
    if (newTranslations) {
      dispatch({
        lang: lang,
        translation: newTranslations,
        type: I18nActionTypeEnum.SetLanguage,
      });
      saveLangToLocalStorage(lang)
    }
  };
  const LanguageContainer = styled.div`
    display: flex;
    column-gap: 5px;
    color: black;
    font-size: 15px;
    margin-left: 8px;

    & div {
      padding: 2px;
    }
  `;

  const LanguageElements = styled.div<LanguageContainerProps>`
    font-weight: ${(p) => (p.active ? "bold" : "normal")};
    &:hover {
      background: black;
      color: white;
      cursor: default;
    }
  `;

  interface LanguageContainerProps {
    active?: boolean;
  }

  return (
    <LanguageContainer>
      <LanguageElements
        {...(lang === LanguageEnum.EN ? { active: true } : {})}
        onClick={() => changeLangugeClick(LanguageEnum.EN)}
      >
        {LanguageEnum.EN.toUpperCase()}
      </LanguageElements>
      <div>/</div>
      <LanguageElements
        {...(lang === LanguageEnum.DE ? { active: true } : {})}
        onClick={() => changeLangugeClick(LanguageEnum.DE)}
      >
        {LanguageEnum.DE.toUpperCase()}
      </LanguageElements>
    </LanguageContainer>
  );
};