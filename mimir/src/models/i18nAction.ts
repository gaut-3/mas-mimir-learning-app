type SetLanguageAction = {
    type: I18nActionTypeEnum.SetLanguage;
    lang: string;
};

export enum I18nActionTypeEnum {
    SetLanguage = "set-language",
}

export type I18nAction =
    | SetLanguageAction

