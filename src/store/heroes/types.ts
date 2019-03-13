import { Hero } from "@app/models/Hero"

export const enum HeroesActionTypes {
  FETCH_REQUEST = '@@heroes/FETCH_REQUEST',
  FETCH_SUCCESS = '@@heroes/FETCH_SUCCESS',
  FETCH_ERROR = '@@heroes/FETCH_ERROR',
  SELECT_HERO = '@@heroes/SELECT_HERO',
  SELECTED = '@@heroes/SELECTED'
}

export interface IHeroesState {
  readonly loading: boolean
  readonly data: Hero[]
  readonly errors?: string
}
