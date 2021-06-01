import {
    SetThemeActionInterface,
    ThemeActionsType,
    SetThemeLoadingStateActionInterface,
    FetchThemeActionInterface,
} from './contracts/actionTypes'
import { LoadingState, ThemesState } from './contracts/state'

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
