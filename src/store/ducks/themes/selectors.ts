import { createSelector } from 'reselect'
import { RootState } from '../../store'
import { LoadingState, ThemesState } from './contracts/state'

export const selectThemes = (state: RootState): ThemesState => state.themes

export const selectLoadingState = (state: RootState): LoadingState => selectThemes(state).loadingState

export const selectIsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectThemesItems = createSelector(selectThemes, (themes) => themes.items)
