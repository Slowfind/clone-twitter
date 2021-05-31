import { Action } from 'redux'
import { LoadingState, ThemesState } from './contracts/state'

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

export const setTheme = (payload: ThemesState['items']): SetThemeActionInterface => ({
    type: ThemeActionsType.SET_THEME,
    payload,
})

export const setThemeLoading = (payload: LoadingState): SetThemeLoadingStateActionInterface => ({
    type: ThemeActionsType.SET_LOADING,
    payload,
})

export const fetchTheme = (): FetchThemeActionInterface => ({
    type: ThemeActionsType.FETCH_THEME,
})

export type ThemeActions = SetThemeActionInterface | SetThemeLoadingStateActionInterface | FetchThemeActionInterface
