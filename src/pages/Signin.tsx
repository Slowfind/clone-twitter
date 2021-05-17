import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import { ModalBlock } from '../Components/ModalBlock'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        flex: '0 0 55%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'rgb(29,161,242)',
    },
    blueSideBg: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
    },
    blueSideIcon: {
        width: 400,
        height: 350,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        color: '#fff',
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 45%',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSdeWrapper: {
        padding: '0 16px',
        width: '100%',
        maxWidth: 720,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 68,
        margin: '48px 0',
        color: 'rgb(15, 20, 25)',
    },
    loginSiedActions: {
        maxWidth: '380px',
        marginTop: 32,
    },
}))

function Signin() {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <ModalBlock />
            <section className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideIcon} />
                <img
                    className={classes.blueSideBg}
                    src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"
                    alt=""
                />
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSdeWrapper}>
                    <TwitterIcon
                        color="primary"
                        className={classes.loginSideTwitterIcon}
                    />
                    <Typography
                        variant="h1"
                        gutterBottom
                        className={classes.loginSideTitle}
                    >
                        В курсе происходящего
                    </Typography>
                    <Typography variant="h4">
                        <strong>
                            Присоединяйтесь к Твиттеру прямо сейчас!
                        </strong>
                    </Typography>
                    <div className={classes.loginSiedActions}>
                        <Button
                            style={{ marginBottom: 20 }}
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Зарегистрироваться
                        </Button>
                        <Button variant="outlined" color="primary" fullWidth>
                            Войти
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signin
