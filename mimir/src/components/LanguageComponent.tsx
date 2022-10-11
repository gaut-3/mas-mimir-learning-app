import styled from "styled-components";
import {fetchTranslations} from "../services/i18nService";
import {I18nActionTypeEnum} from "../models/i18nAction";
import {useContext} from "react";
import {I18nContext} from "../store/I18nContext";

export const LanguageComponent = () => {
    const Button = styled.button`
    background: black;
    border-radius: 3px;
    color: white;
    margin: 0 1em;
    padding: 1.25em 3em;
  `;
    const { dispatch } = useContext(I18nContext);

    const changeLangugeClick = async (lang: string) => {
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
            <Button onClick={() => changeLangugeClick("de")}>de</Button>
            <Button onClick={() => changeLangugeClick("en")}>en</Button>
        </>
    )

}