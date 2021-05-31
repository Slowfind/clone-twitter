import { Action } from 'redux'
import { LoadingState, TweetState } from './state'

export enum TweetActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING = 'tweet/SET_LOADING',
}
export interface SetTweetActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEET_DATA
    payload: TweetState['data']
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING
    payload: LoadingState
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET_DATA
    payload: string
}
