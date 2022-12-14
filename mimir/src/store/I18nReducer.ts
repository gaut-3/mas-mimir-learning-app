import { I18nAction, I18nActionTypeEnum } from "../models/i18nAction";
import { I18nState } from "../models/I18nState";
import { getLangFromLocalStorage } from "../services/i18nService";

export function i18nReducer(
  langState: I18nState,
  action: I18nAction
): I18nState {
  switch (action.type) {
    case I18nActionTypeEnum.SetLanguage:
      return { lang: action.lang, translations: action.translation };
  }
}

export const initialLanguage: I18nState = {
  lang: getLangFromLocalStorage(),
  translations: {},
};

