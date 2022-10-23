import { LanguageEnum } from "../utils/LanguageEnum";

export const fetchTranslations = async (lang: string): Promise<{}> => {
  return new Promise((resolve) => {
    fetch("/lang/{lang}.json".replace("{lang}", lang))
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
};

export const saveLangToLocalStorage = (lang: LanguageEnum) => {
  localStorage.setItem("lang", lang);
};

export const getLangFromLocalStorage = (): LanguageEnum => {
  let lang = localStorage.getItem("lang");
  if (lang === null) {
    return LanguageEnum.EN;
  }
  return <LanguageEnum>lang;
};