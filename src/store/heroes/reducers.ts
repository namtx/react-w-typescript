import { Reducer } from "redux"
import { HeroesActionTypes, IHeroesState } from "./types"

export const initialState: IHeroesState = {
  data: [],
  errors: undefined,
  loading: false
}

const reducer: Reducer<IHeroesState> = (state = initialState, action) => {
  switch (action.type) {
    case HeroesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case HeroesActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case HeroesActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as heroesReducer }
