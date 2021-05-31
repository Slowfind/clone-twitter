import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ThemesState } from './ducks/themes/contracts/state'
import { TweetState } from './ducks/tweet/contracts/state'
import { TweetsState } from './ducks/tweets/contracts/state'
import { rootReducer } from './rootReducer'
import rootSaga from './saga'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    tweets: TweetsState
    themes: ThemesState
    tweet: TweetState
}

export const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
