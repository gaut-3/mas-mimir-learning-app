import {I18nAction, I18nActionTypeEnum} from "../models/i18nAction";
import {I18nState} from "../models/I18nState";

export function i18nReducer(
    langState: I18nState,
    action: I18nAction,
): I18nState {
    switch (action.type) {
        case I18nActionTypeEnum.SetLanguage:
            return {lang: action.lang};
    }
}

export const initialLanguage: I18nState = {
    lang: "de",
};

