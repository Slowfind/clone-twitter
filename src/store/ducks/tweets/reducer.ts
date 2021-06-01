import produce, { Draft } from 'immer'
import { TweetsActions } from './actionCreators'
import { TweetsActionsType } from './contracts/actionTypes'
import { AddTweetState, LoadingState, TweetsState } from './contracts/state'

const initialTweetsState: TweetsState = {
    items: [],
    addTweetFormState: AddTweetState.NEVER,
    loadingState: LoadingState.NEVER,
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case TweetsActionsType.FETCH_TWEETS:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break
        case TweetsActionsType.SET_LOADING:
            draft.loadingState = action.payload
            break

        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.addTweetFormState = AddTweetState.LOADING
            break
        case TweetsActionsType.ADD_TWEET:
            draft.items.push(action.payload)
            draft.addTweetFormState = AddTweetState.NEVER
            break
        default:
            break
    }
}, initialTweetsState)
