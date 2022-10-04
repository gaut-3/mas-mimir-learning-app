import {useContext} from "react";
import de from "../i18n/de.json";
import {I18nContext} from "../store/I18nContext";
import {initialLanguage} from "../store/I18nReducer";

const useTranslation = () => {
    const test = de;
    const test2 = JSON.stringify(test);
    const {lang, translations, dispatch} = useContext(I18nContext);
    //https://phrase.com/blog/posts/roll-your-own-i18n-solution-react-redux/
    //https://blog.decipher.dev/internationalization-in-plain-reactjs
    console.log(translations["navbar.newGameButton"]);

    const translate = (name: string) => {
        return translations[name]
        // if (translations !== initialLanguage.translations) {
        //     console.log("translation", translations, translations === initialLanguage.translations)
        //     console.log(Object.entries(translations["navbar"]))
        //     const nameString = "gamePage.newGamePage.deleteGameButton".split(".");
        //     const getKey = (namespace: string, keys: string[]): {} => {
        //         return keys.filter((key) => key === namespace).map(value => value);
        //     }
        //     let test2 = translations;
        //     nameString.forEach(value => {
        //         console.log("asfdasdfsda ", test2, value)
        //         test2 = getKey(value, Object.keys(test2))
        //     })
        //     let translationas = ["navbar"];
        //     let uebersetzung: string[] = [];
        //     if (nameString.length !== 1) {
        //         let entries: [string, string][] = Object.entries(translations[nameString[0]])
        //         for (let i = 0; i < nameString.length; i++) {
        //             console.log("looop entries", i, entries)
        //             console.log("looop entries", i, i === nameString.length - 1)
        //             if (i === nameString.length - 1) {
        //                 uebersetzung = entries.map(value => value[1])
        //             } else {
        //                 entries =  Object.entries(entries);
        //             }
        //         }
        //     } else {
        //         const tre =  translations[nameString[0]]
        //         console.log("looop end", tre)
        //
        //     }
        //     console.log("looop end", uebersetzung)
        //
        //     if (translationas) {
        //         console.log("direct", Object.entries(translations["navbar"]).map((value, index) => value[0]))
        //     }
        //     // for (let i = 0; i < nameString.length; i++) {
        //     //
        //     // }
        //     //
        //     // let s = Object.keys(translations).filter((key) => key === "navbar");
        //     // if(s) {
        //     //     return Object.keys(s).filter((key) => key === "newGameButton")
        //     // }
        //     // // const test =  translations["navbar"];
        //     // return test.newGameButton
        //     //return translate;
        //     return "";
        // }
        // return "";
    }

    return translate;

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
};

export default useTranslation;