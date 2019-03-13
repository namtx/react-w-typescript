import { connectRouter } from "connected-react-router"
import { History } from "history"
import { Action, AnyAction, combineReducers, Dispatch } from "redux"
import { all, fork } from "redux-saga/effects"
import { heroesReducer } from "./heroes/reducers"
import heroesSaga from "./heroes/sagas";
import { IHeroesState } from "./heroes/types"

export interface IApplicationState {
  heroes: IHeroesState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    heroes: heroesReducer,
    router: connectRouter(history)
  })

export interface IConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export function* rootSaga(): IterableIterator<any> {
  yield all([fork(heroesSaga)])
}
