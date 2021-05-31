import { combineReducers } from 'redux'
import { themesReducer } from './ducks/themes/reducer'
import { tweetReducer } from './ducks/tweet/reducer'
import { tweetsReducer } from './ducks/tweets/reducer'

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    themes: themesReducer,
    tweet: tweetReducer,
})
