import styled from "styled-components";
import {fetchTranslations} from "../services/i18nService";
import {I18nActionTypeEnum} from "../models/i18nAction";
import {useContext} from "react";
import {I18nContext} from "../store/I18nContext";
import {LanguageEnum} from "../utils/LanguageEnum";

export const LanguageComponent = () => {
    const Button = styled.button`
    background: #02E0FF;
    border-radius: 3px;
    color: black;
    margin: 0 2px;
    padding: 0.5em 1em;
  `;
    const { dispatch } = useContext(I18nContext);

    const changeLangugeClick = async (lang: LanguageEnum) => {
        const newTranslations = await fetchTranslations(lang);
        if (newTranslations) {
            dispatch({
                lang: lang,
                translation: newTranslations,
                type: I18nActionTypeEnum.SetLanguage,
            });
        }
    };

    return (
        <>
            <Button onClick={() => changeLangugeClick(LanguageEnum.DE)}>de</Button>
            <Button onClick={() => changeLangugeClick(LanguageEnum.EN)}>en</Button>
        </>
    )

}