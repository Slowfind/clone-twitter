import produce, { Draft } from 'immer'
import { ThemeActions } from './actionCreators'
import { ThemeActionsType } from './contracts/actionTypes'
import { LoadingState, ThemesState } from './contracts/state'

const initialThemesState: ThemesState = {
    items: [],
    loadingState: LoadingState.NEVER,
}

export const themesReducer = produce((draft: Draft<ThemesState>, action: ThemeActions) => {
    switch (action.type) {
        case ThemeActionsType.SET_THEME:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case ThemeActionsType.FETCH_THEME:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break
        case ThemeActionsType.SET_LOADING:
            draft.loadingState = action.payload
            break
        default:
            break
    }
}, initialThemesState)
