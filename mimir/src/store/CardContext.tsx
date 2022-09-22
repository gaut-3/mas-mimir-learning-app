import { createContext, ReactNode, useReducer } from 'react'
import {gameReducer, initialGame} from "./GameReducer";
import {GameAction} from "../models/GameAction";
import {GameState} from "../models/GameState";
import {CardState} from "../models/CardState";
import {CardAction} from "../models/CardAction";
import {cardReducer, initialCards} from "./CardReducer";

interface AppState extends CardState {
    dispatch: (action: CardAction) => void
}

const initialState: AppState = {
    ...initialCards,
    dispatch: (action: CardAction) => {}
}

interface Props {
    children: ReactNode
}

export const CardContext = createContext<AppState>(initialState)

export const CardProvider = ({ children }: Props) => {

    const [cards, dispatch] = useReducer(cardReducer, initialState)

    const store = {
        ...cards,
        dispatch
    }
    return <CardContext.Provider value={store}>{children}</CardContext.Provider>

}
