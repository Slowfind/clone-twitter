import { call, put, takeEvery } from 'redux-saga/effects'
import { ThemeApi } from '../../../services/api/themeApi'
import { setTheme, setThemeLoading, ThemeActionsType } from './actionCreators'
import { LoadingState } from './contracts/state'

const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))
export function* fetchThemeRequest(): any {
    try {
        const items = yield call(ThemeApi.fetchTheme)
        yield call(delay, 500)
        yield put(setTheme(items))
    } catch (error) {
        yield put(setThemeLoading(LoadingState.ERROR))
    }
}

export function* themesSaga() {
    yield takeEvery(ThemeActionsType.FETCH_THEME, fetchThemeRequest)
}
