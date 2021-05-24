import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useHomeStyles } from '../../pages/Home/style'
import { TweetForm } from '../TweetForm/TweetForm'
import { TweetItem } from '../TweetItem/TweetItem'

interface classes {
    classes: ReturnType<typeof useHomeStyles>
}
export const Main: React.FC<classes> = ({ classes }: classes) => {
    return (
        <div className={classes.main}>
            <div className={classes.mainTitle}>
                <Typography variant="h6">Главная</Typography>
            </div>
            <div className={classes.tweet}>
                <TweetForm />
            </div>

            <div className={classes.tweetMargin}></div>
            <section className={classes.tweets}>
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
                <TweetItem classes={classes} />
            </section>
        </div>
    )
}
