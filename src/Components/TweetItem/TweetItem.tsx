import { Avatar, Grid, IconButton } from '@material-ui/core'
import { ChatBubbleOutline, Repeat, FavoriteBorder, Reply } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { useHomeStyles } from '../../pages/Home/style'
interface classes {
    classes: ReturnType<typeof useHomeStyles>
}
export const TweetItem: React.FC<classes> = ({ classes }: classes) => {
    return (
        <div className={classes.tweetsItem}>
            <div className={classes.tweetsAvatar}>
                <Link to="/">
                    <Avatar
                        className={classes.normal}
                        alt="Armin van Buuren"
                        src="https://pbs.twimg.com/profile_images/1315647532438085632/tqSEjOJB_normal.jpg"
                    />
                </Link>
            </div>
            <div className={classes.tweetsContent}>
                <div className={classes.tweetsHeader}>
                    <Link className={classes.tweetsLink} to="/">
                        <span className={classes.tweetsName}>Armin van Buuren</span>
                        <span className={classes.tweetsNickName}>@arminvanbuuren</span>
                    </Link>
                    <span className={classes.tweetsDelimetr}>·</span>
                    <Link className={classes.tweetsTimeLink} to="/">
                        <time className={classes.tweetsTime}>18 мая</time>
                    </Link>
                </div>
                <div className={classes.tweetsWysiwyg}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia aspernatur culpa maxime aperiam. Saepe
                        et accusantium placeat qui voluptates, nobis temporibus eveniet. Vitae autem esse nobis dignissimos ad excepturi!
                    </p>
                </div>

                <Grid container spacing={3}>
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
        </div>
    )
}
