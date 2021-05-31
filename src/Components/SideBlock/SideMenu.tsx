import { IconButton, Button } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import React from 'react'

import { ModalBlock } from '../../Components/ModalBlock'
import { Tweet } from '../ModalBlock/Tweet'
import { Classes } from '../../interfaces'
import { Nav } from './Nav/Nav'
import { Account } from './Account/Account'
import { Link } from 'react-router-dom'

export const SideMenu: React.FC<Classes> = ({ classes }: Classes) => {
    const [open, setOpen] = React.useState(false)
    const handleClickOpenModalTweet = (): void => {
        setOpen(true)
    }
    const handleClose = (): void => {
        setOpen(false)
    }
    return (
        <>
            <aside className={classes.aside}>
                <Link to="/home">
                    <IconButton>
                        <TwitterIcon color="primary" className={classes.navListIcon} />
                    </IconButton>
                </Link>
                <Nav classes={classes} />
                <Button onClick={handleClickOpenModalTweet} className={classes.modalTweetBtn} variant="contained" color="primary">
                    Твитнуть
                </Button>
                <Account classes={classes} />
            </aside>
            <ModalBlock open={open} handleClose={handleClose}>
                <Tweet classes={classes} handleClose={handleClose} />
            </ModalBlock>
        </>
    )
}
