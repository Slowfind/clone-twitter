import {
    FetchTweetActionInterface,
    SetTweetActionInterface,
    SetTweetLoadingStateActionInterface,
    TweetActionsType,
} from './contracts/actionTypes'
import { LoadingState, TweetState } from './contracts/state'

export const setTweet = (payload: TweetState['data']): SetTweetActionInterface => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload,
})

export const setTweetLoading = (payload: LoadingState): SetTweetLoadingStateActionInterface => ({
    type: TweetActionsType.SET_LOADING,
    payload,
})

export const fetchTweet = (payload: string): FetchTweetActionInterface => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload,
})

export type TweetActions = SetTweetActionInterface | SetTweetLoadingStateActionInterface | FetchTweetActionInterface
