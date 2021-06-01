import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { delay } from '../../store'
import { addTweet, setTweets, setTweetsLoading } from './actionCreators'
import { FetchAddTweetsActionInterface, TweetsActionsType } from './contracts/actionTypes'
import { LoadingState, Tweet } from './contracts/state'

export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(TweetsApi.fetchTweets)
        yield call(delay, 500)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoading(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetsActionInterface): any {
    try {
        const data: Tweet = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: 'Tiësto',
                username: 'tiesto',
                avatarUrl: 'https://pbs.twimg.com/profile_images/1334700334594154499/WWYQp7XQ_normal.jpg',
            },
        }
        const item = yield call(TweetsApi.addTweet, data)
        yield put(addTweet(item))
    } catch (error) {
        yield put(setTweetsLoading(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}
