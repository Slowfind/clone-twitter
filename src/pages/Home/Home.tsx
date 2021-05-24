import { Avatar, Button, Container, Grid, Input, Typography } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { SideMenu } from '../../Components/SideBlock/SideMenu'
import { Main } from '../../Components/Main/Main'
import { Link } from 'react-router-dom'
import { useHomeStyles } from './style'

export const Home: React.FC = () => {
    const classes = useHomeStyles()
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Main classes={classes} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <div className={classes.sidebar}>
                        <div className={classes.search}>
                            <div className={classes.searchWrapper}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <div className={classes.searchBox}>
                                    <Input
                                        className={classes.searchInput}
                                        placeholder="Поиск в твиттере"
                                        error
                                        inputProps={{ 'aria-label': 'description' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={classes.box}>
                            <Typography className={classes.listTitle} variant="h6">
                                <strong>Актуальные темы</strong>
                            </Typography>
                            <ul className={classes.listReset}>
                                <li className={classes.listItem}>
                                    <Link to="/">
                                        <span className={classes.tweetsName}>#Короновирус</span>
                                        <span className={classes.tweetsNickName}>Твитов: 1 650</span>
                                    </Link>
                                </li>
                                <li className={classes.listItem}>
                                    <Link to="/">
                                        <span className={classes.tweetsName}>Москва</span>
                                        <span className={classes.tweetsNickName}>Твитов: 2 650</span>
                                    </Link>
                                </li>
                                <li className={classes.listItem}>
                                    <Link to="/">
                                        <span className={classes.tweetsName}>Путин</span>
                                        <span className={classes.tweetsNickName}>Твитов: 650</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.box}>
                            <Typography className={classes.listTitle} variant="h6">
                                <strong>Кого читать</strong>
                            </Typography>
                            <ul className={classes.listReset}>
                                <li className={classes.listItem}>
                                    <Link to="/">
                                        <Avatar
                                            className={classes.normal}
                                            alt="Armin van Buuren"
                                            src="https://pbs.twimg.com/profile_images/1315647532438085632/tqSEjOJB_normal.jpg"
                                        />
                                        <div className={classes.listItemInfoBox}>
                                            <span className={classes.tweetsName}>Armin van Buuren</span>
                                            <span className={classes.tweetsNickName}>@arminvanbuuren</span>
                                        </div>
                                        <Button size="small" variant="outlined" color="primary">
                                            Читать
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
