import { all } from '@redux-saga/core/effects'
import { themesSaga } from './ducks/themes/sagas'
import { tweetSaga } from './ducks/tweet/sagas'
import { tweetsSaga } from './ducks/tweets/sagas'

export default function* rootSaga() {
    yield all([tweetsSaga(), themesSaga(), tweetSaga()])
}
