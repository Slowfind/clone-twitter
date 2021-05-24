import React from 'react'
import { Button, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import { ModalBlock, SignIn, SignUp } from '../../Components/ModalBlock'
import { useStyles } from '../SignIn/styles'

export const Signin: React.FC = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>()

    const handleClickOpenModalSignUp = (): void => {
        setVisibleModal('signUp')
        setOpen(true)
    }
    const handleClickOpenModalSignIn = (): void => {
        setVisibleModal('signIn')
        setOpen(true)
    }
    const handleClose = (): void => {
        setOpen(false)
    }

    return (
        <div className={classes.wrapper}>
            <ModalBlock open={open} handleClose={handleClose}>
                {visibleModal === 'signIn' ? <SignIn handleClose={handleClose} /> : <SignUp handleClose={handleClose} />}
            </ModalBlock>
            <section className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideIcon} />
                <img className={classes.blueSideBg} src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" alt="" />
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSdeWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography variant="h1" gutterBottom className={classes.loginSideTitle}>
                        В курсе происходящего
                    </Typography>
                    <Typography variant="h4">
                        <strong>Присоединяйтесь к Твиттеру прямо сейчас!</strong>
                    </Typography>
                    <div className={classes.loginSiedActions}>
                        <Button
                            style={{ marginBottom: 20 }}
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleClickOpenModalSignUp}
                        >
                            Зарегистрироваться
                        </Button>
                        <Button onClick={handleClickOpenModalSignIn} variant="outlined" color="primary" fullWidth>
                            Войти
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
