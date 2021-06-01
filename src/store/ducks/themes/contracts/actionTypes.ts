import { Action } from 'redux'
import { ThemesState, LoadingState } from './state'

export enum ThemeActionsType {
    SET_THEME = 'themes/SET_THEME',
    FETCH_THEME = 'themes/FETCH_THEME',
    SET_LOADING = 'themes/SET_LOADING',
}
export interface SetThemeActionInterface extends Action<ThemeActionsType> {
    type: ThemeActionsType.SET_THEME
    payload: ThemesState['items']
}

export interface SetThemeLoadingStateActionInterface extends Action<ThemeActionsType> {
    type: ThemeActionsType.SET_LOADING
    payload: LoadingState
}

export interface FetchThemeActionInterface extends Action<ThemeActionsType> {
    type: ThemeActionsType.FETCH_THEME
}
