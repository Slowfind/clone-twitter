import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHomeStyles } from '../../pages/Home/style'
import { fetchTweet, setTweet } from '../../store/ducks/tweet/actionCreators'
import { selectIsLoading, selectTweetData } from '../../store/ducks/tweet/selectors'
import { Loader } from '../Loader/Loader'
import { TweetItem } from '../TweetItem/TweetItem'

export const TweetDetail: React.FC = () => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const params: { id: string } = useParams()
    const isLoading = useSelector(selectIsLoading)
    const tweetData = useSelector(selectTweetData)
    const id = params.id
    React.useEffect(() => {
        id && dispatch(fetchTweet(id))
        return () => {
            dispatch(setTweet(undefined))
        }
    }, [dispatch, id])

    if (isLoading) {
        return <Loader />
    }
    if (tweetData) {
        return <TweetItem classes={classes} {...tweetData} />
    }

    return null
}
