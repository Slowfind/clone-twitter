import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { setTweets, setTweetsLoading, TweetsActionsType } from './actionCreators'
import { LoadingState } from './contracts/state'

const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))
export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(TweetsApi.fetchTweets)

        yield call(delay, 500)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoading(LoadingState.ERROR))
    }
}
console.log(fetchTweetsRequest())
export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
