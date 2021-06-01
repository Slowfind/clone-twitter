import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { delay } from '../../store'
import { Tweet } from '../tweets/contracts/state'
import { setTweetLoading, setTweet } from './actionCreators'
import { FetchTweetActionInterface, TweetActionsType } from './contracts/actionTypes'
import { LoadingState } from './contracts/state'

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
    try {
        const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId)
        yield call(delay, 500)
        yield put(setTweet(data[0]))
    } catch (error) {
        yield put(setTweetLoading(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}
