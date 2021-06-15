import { createSelector } from 'reselect'
import { RootState } from '../../store'
import { AddTweetState, LoadingState, TweetsState } from './contracts/state'

export const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState

export const selectAddFormState = (state: RootState): AddTweetState => selectTweets(state).addTweetFormState

export const selectIsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items)
