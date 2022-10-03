import { createContext, ReactNode, useReducer } from "react";
import { I18nState } from "../models/I18nState";
import { I18nAction } from "../models/i18nAction";
import { i18nReducer, initialLanguage } from "./I18nReducer";

interface AppState extends I18nState {
  dispatch: (action: I18nAction) => void;
}

const initialState: AppState = {
  ...initialLanguage,
  dispatch: (action: I18nAction) => {},
};

interface Props {
  children: ReactNode;
}

export const I18nContext = createContext<AppState>(initialState);

export const I18nProvider = ({ children }: Props) => {
  const [lang, dispatch] = useReducer(i18nReducer, initialState);

  const store = {
    ...lang,
    dispatch,
  };
  return <I18nContext.Provider value={store}>{children}</I18nContext.Provider>;
};
