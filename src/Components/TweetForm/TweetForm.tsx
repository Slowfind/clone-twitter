import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import React from 'react'
import { Link } from 'react-router-dom'
import MoodIcon from '@material-ui/icons/Mood'
import ImageIcon from '@material-ui/icons/Image'
import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'

import { useTweet } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddTweet } from '../../store/ducks/tweets/actionCreators'
import { selectAddFormState } from '../../store/ducks/tweets/selectors'
import { AddTweetState } from '../../store/ducks/tweets/contracts/state'

const MAX_LENGTH: number = 280
export const TweetForm: React.FC = () => {
    const classes = useTweet()
    const dispatch = useDispatch()
    const [text, setText] = React.useState('')

    const addFormState = useSelector(selectAddFormState)
    const textCount = MAX_LENGTH - text.length
    const textLimitPercent = Math.round((text.length / 280) * 100)

    const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>) => e.currentTarget && setText(e.currentTarget.value)

    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text))
        setText('')
    }
    return (
        <>
            {addFormState === AddTweetState.ERROR && (
                <Alert icon={false} severity="error">
                    Что-то пошло не так, но не беспокойтесь — давайте попробуем еще раз.
                </Alert>
            )}
            <div className={classes.tweetWrapper}>
                <div className={classes.tweetAvatar}>
                    <Link to="/">
                        <Avatar
                            className={classes.normal}
                            alt="Armin van Buuren"
                            src="https://pbs.twimg.com/profile_images/1315647532438085632/tqSEjOJB_normal.jpg"
                        />
                    </Link>
                </div>
                <div className={classes.tweetContent}>
                    <div className={classes.tweetInput}>
                        <TextareaAutosize
                            onChange={handleChangeText}
                            value={text}
                            rowsMin={3}
                            aria-label="empty textarea"
                            placeholder="Что происходит?"
                        />
                    </div>

                    <div className={classes.tweetAction}>
                        <div className={classes.tweetIcons}>
                            <IconButton color="primary">
                                <ImageIcon></ImageIcon>
                            </IconButton>

                            <IconButton color="primary">
                                <MoodIcon></MoodIcon>
                            </IconButton>
                        </div>
                        <div className={classes.tweetBox}>
                            {text && (
                                <>
                                    <span style={{ fontSize: 12 }}>{textCount}</span>
                                    <div className={classes.tweetProgress}>
                                        <CircularProgress
                                            style={{ color: 'rgb(235, 238, 240)' }}
                                            variant="determinate"
                                            size={20}
                                            thickness={5}
                                            value={100}
                                        />
                                        <CircularProgress
                                            variant="determinate"
                                            size={20}
                                            thickness={5}
                                            value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                            style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                                        />
                                    </div>
                                </>
                            )}

                            <Button
                                onClick={handleClickAddTweet}
                                disabled={!text || text.length >= MAX_LENGTH}
                                size="large"
                                color="primary"
                                variant="contained"
                            >
                                {addFormState === AddTweetState.LOADING ? <CircularProgress color="inherit" size={26} /> : 'Твитнуть'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
