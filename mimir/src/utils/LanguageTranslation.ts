import {useContext, useState} from "react";
import de from '../i18n/de.json';
import en from '../i18n/de.json';
import {I18nContext} from "../store/I18nContext";



export function useTranslation() {
    const test = de;
    const test2 = JSON.stringify(test)
    console.log("asdfasd", test2)
    const {lang, translations, dispatch} = useContext(I18nContext);
    //https://phrase.com/blog/posts/roll-your-own-i18n-solution-react-redux/
    //https://blog.decipher.dev/internationalization-in-plain-reactjs
    console.log(translations["newGameButton"])
    return translations["newGameButton"]

    // const dispatch = useDispatch();
    // const t = useSelector((state) => state.i18n.translations);
    // const setLang = (lang) => dispatch(setLangAsync(lang));
    // const lang = useSelector((state) => state.i18n.lang);
    // const supportedLangs = useSelector(
    //     (state) => state.i18n.supportedLangs,
    // );
    // const status = useSelector((state) => state.i18n.status);
    // return {
    //     t,
    //     lang,
    //     setLang,
    //     init: setLang,
    //     supportedLangs,
    //     status,
    // };
}