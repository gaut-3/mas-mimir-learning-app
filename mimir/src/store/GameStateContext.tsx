import { GameStateEnum } from "../utils/GameStateEnum";
import {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  useReducer,
} from "react";
/*
import { GameStateReducer, initialGameState } from "./GameStateReducer";

type initialGameStateType = {
  gameState: GameState;
};

type Context = {
    state: GameState;
    dispatch: Dispatch<any>;
};

const GameStateContext = createContext<Context>({
    dispatch(value: any): void {
    },
    state: {
        state: GameStateEnum.NO_GAME
    }
});

export default GameStateContext;

type Props = {
    children: ReactNode
}


const GameStateContextProvider: FunctionComponent<Props> = ({children}: Props) => {

    const [state, dispatch] = useReducer(GameStateReducer, initialGameState);
    const value = {state, dispatch}
    return <GameStateContext.Provider value={value}>{children}</GameStateContext.Provider>
}
export {GameStateContext, GameStateContextProvider}
//
// const GameStateProvider = ( children) => {
//     const [state, dispatch] = useReducer((state: GameState, action: { type: any }) => {
//         switch(action.type) {
//             case "SET_GAME_STARTED":
//                 return { state: GameStateEnum.RUNNING };
//             case "SET_NO_GAME":
//                 return { state: GameStateEnum.NO_GAME };
//             case "SET_GAME_FINISHED":
//                 return { state: GameStateEnum.FINISHED };
//             default:
//                 throw new Error();
//         };
//     }, initialGameState);
//     //https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm
//     https://yudhajitadhikary.medium.com/implementation-of-react-hooks-context-api-reducer-all-together-bf2df11070b7
//         //https://blog.logrocket.com/react-hooks-context-redux-state-management/
//
//     return <GameStateProvider value={{ state, dispatch }}>{children}</GameStateProvider>;
// };

*/
