import { Avatar, Grid, IconButton } from '@material-ui/core'
import { ChatBubbleOutline, Repeat, FavoriteBorder, Reply } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHomeStyles } from '../../pages/Home/style'
import { fetchTweet, setTweet } from '../../store/ducks/tweet/actionCreators'
import { selectIsLoading, selectTweetData } from '../../store/ducks/tweet/selectors'
import { Loader } from '../Loader/Loader'

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
        return (
            <div className={`${classes.tweetsItem} ${classes.tweetDetail}`}>
                <div className={classes.tweetsContent}>
                    <div className={classes.tweetsHeader}>
                        <div className={classes.tweetsAvatar}>
                            <Avatar className={classes.normal} alt={tweetData.user.username} src={tweetData.user.avatarUrl} />
                        </div>
                        <div className={classes.tweetsLink}>
                            <span className={classes.tweetsName}>{tweetData.user.fullname}</span>
                            <span className={classes.tweetsNickName}>@{tweetData.user.username}</span>
                        </div>
                    </div>
                    <div className={classes.tweetsWysiwyg}>
                        <p>{tweetData.text}</p>
                    </div>
                    <div className={classes.tweetsTimeLink}>
                        <time className={classes.tweetsTime}>6:56 AM · 31 мая 2021 г.</time>
                    </div>
                    <Grid container>
                        <Grid item xs={1} sm={3}>
                            <IconButton>
                                <ChatBubbleOutline className={classes.tweetsActionsIcon}></ChatBubbleOutline>
                            </IconButton>
                        </Grid>
                        <Grid item xs={1} sm={3}>
                            <IconButton>
                                <Repeat className={classes.tweetsActionsIcon}></Repeat>
                            </IconButton>
                        </Grid>
                        <Grid item xs={1} sm={3}>
                            <IconButton>
                                <FavoriteBorder className={classes.tweetsActionsIcon}></FavoriteBorder>
                            </IconButton>
                        </Grid>
                        <Grid item xs={1} sm={3}>
                            <IconButton>
                                <Reply className={classes.tweetsActionsIcon}></Reply>
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }

    return null
}
