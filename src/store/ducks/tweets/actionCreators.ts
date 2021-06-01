import {
    SetTweetsActionInterface,
    TweetsActionsType,
    SetTweetsLoadingStateActionInterface,
    FetchTweetsActionInterface,
    FetchAddTweetsActionInterface,
    AddTweetsActionInterface,
    SetAddFormStateActionInterface,
} from './contracts/actionTypes'
import { AddTweetState, LoadingState, Tweet, TweetsState } from './contracts/state'

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})

export const setTweetsLoading = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING,
    payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export const fetchAddTweet = (payload: string): FetchAddTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
})

export const addTweet = (payload: Tweet): AddTweetsActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
})

export const setAddFormState = (payload: AddTweetState): SetAddFormStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_TWEET,
    payload,
})

export type TweetsActions =
    | SetTweetsActionInterface
    | SetTweetsLoadingStateActionInterface
    | FetchTweetsActionInterface
    | AddTweetsActionInterface
    | FetchAddTweetsActionInterface
    | SetAddFormStateActionInterface
