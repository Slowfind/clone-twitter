import { Avatar, Grid, IconButton } from '@material-ui/core'
import { ChatBubbleOutline, Repeat, FavoriteBorder, Reply } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { TweetProps } from '../../interfaces'

export const TweetItem: React.FC<TweetProps> = ({ _id, text, user, classes }: TweetProps) => {
    return (
        <Link to={`/home/tweet/${_id}`} className={classes.tweetsItem}>
            <div className={classes.tweetsAvatar}>
                <Avatar className={classes.normal} alt={user.username} src={user.avatarUrl} />
            </div>
            <div className={classes.tweetsContent}>
                <div className={classes.tweetsHeader}>
                    <div className={classes.tweetsLink}>
                        <span className={classes.tweetsName}>{user.fullname}</span>
                        <span className={classes.tweetsNickName}>@{user.username}</span>
                    </div>
                    <span className={classes.tweetsDelimetr}>·</span>
                    <div className={classes.tweetsTimeLink}>
                        <time className={classes.tweetsTime}>18 мая</time>
                    </div>
                </div>
                <div className={classes.tweetsWysiwyg}>
                    <p>{text}</p>
                </div>
                <Grid container>
                    <Grid item xs={1} sm={3}>
                        <IconButton>
                            <ChatBubbleOutline className={classes.tweetsActionsIcon}></ChatBubbleOutline>
                        </IconButton>
                        <span className={classes.tweetsActions}>1</span>
                    </Grid>
                    <Grid item xs={1} sm={3}>
                        <IconButton>
                            <Repeat className={classes.tweetsActionsIcon}></Repeat>
                        </IconButton>
                        <span className={classes.tweetsActions}>1</span>
                    </Grid>
                    <Grid item xs={1} sm={3}>
                        <IconButton>
                            <FavoriteBorder className={classes.tweetsActionsIcon}></FavoriteBorder>
                        </IconButton>
                        <span className={classes.tweetsActions}>1</span>
                    </Grid>
                    <Grid item xs={1} sm={3}>
                        <IconButton>
                            <Reply className={classes.tweetsActionsIcon}></Reply>
                        </IconButton>
                        <span className={classes.tweetsActions}>1</span>
                    </Grid>
                </Grid>
            </div>
        </Link>
    )
}
