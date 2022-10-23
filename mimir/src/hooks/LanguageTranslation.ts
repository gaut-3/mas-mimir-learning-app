import { useContext } from "react";
import { I18nContext } from "../store/I18nContext";

const useTranslation = () => {
  const { translations } = useContext(I18nContext);

  const translate = (name: string, params?: any[]) => {
    let translation = translations[name];
    if (translation && params && params.length > 0) {
      for (let i = 0; i < params.length; i++) {
        translation = translation.replace("{}", params[i]);
      }
    }
    return translation;
  };

  return translate;
};

export default useTranslation;