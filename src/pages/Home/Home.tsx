import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router'

import { SideMenu } from '../../Components/SideBlock/SideMenu'
import { useHomeStyles } from './style'
import { fetchTweets } from '../../store/ducks/tweets/actionCreators'
import { selectIsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors'
import { Search } from '../../Components/Search/Search'
import { Themes } from '../../Components/Themes/Themes'
import { WhomToRead } from '../../Components/Themes/WhomToRead'
import { TweetItem } from '../../Components/TweetItem/TweetItem'
import { TweetForm } from '../../Components/TweetForm/TweetForm'
import { Loader } from '../../Components/Loader/Loader'
import { GoBack } from '../../Components/GoBack/GoBack'
import { TweetDetail } from '../../Components/TweetDetail/TweetDetail'

export const Home: React.FC = () => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsLoading)

    React.useEffect(() => {
        dispatch(fetchTweets())
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div className={classes.main}>
                        <div className={classes.mainHeader}>
                            <Route path="/home/:any">
                                <GoBack />
                            </Route>
                            <Route path={['/home', '/home/search']} exact>
                                <Typography className={classes.mainTitle} variant="h6">
                                    Твиты
                                </Typography>
                            </Route>
                            <Route path="/home/tweet">
                                <Typography className={classes.mainTitle} variant="h6">
                                    Твит
                                </Typography>
                            </Route>
                        </div>

                        <Route path={['/home', '/home/search']} exact>
                            <div className={classes.tweet}>
                                <TweetForm />
                            </div>
                        </Route>

                        <div className={classes.tweetMargin}></div>
                        <Route path="/home" exact>
                            <section className={classes.tweets}>
                                {isLoading ? <Loader /> : tweets.map((tweet) => <TweetItem key={tweet._id} {...tweet} classes={classes} />)}
                            </section>
                        </Route>

                        <Route path="/home/tweet/:id" component={TweetDetail} exact />
                    </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <div className={classes.sidebar}>
                        <Search classes={classes} />
                        <Themes classes={classes} />
                        <WhomToRead classes={classes} />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
