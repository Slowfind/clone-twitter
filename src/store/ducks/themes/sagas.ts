import { call, put, takeEvery } from 'redux-saga/effects'
import { ThemeApi } from '../../../services/api/themeApi'
import { delay } from '../../store'
import { setTheme, setThemeLoading } from './actionCreators'
import { ThemeActionsType } from './contracts/actionTypes'
import { LoadingState } from './contracts/state'

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
