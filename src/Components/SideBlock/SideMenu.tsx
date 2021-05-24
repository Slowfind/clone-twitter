import { IconButton, Button, Avatar } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useHomeStyles } from '../../pages/Home/style'
import { ModalBlock } from '../../Components/ModalBlock'
import { Tweet } from '../ModalBlock/Tweet'
interface classes {
    classes: ReturnType<typeof useHomeStyles>
}
export const SideMenu: React.FC<classes> = ({ classes }: classes) => {
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
                <div>
                    <IconButton aria-label="delete">
                        <TwitterIcon color="primary" className={classes.navListIcon} />
                    </IconButton>
                </div>
                <nav>
                    <ul className={classes.navList}>
                        <li className={classes.navListItem}>
                            <IconButton aria-label="delete">
                                <HomeIcon className={classes.navListIcon} />
                                <span className={classes.navListText}>Главная</span>
                            </IconButton>
                        </li>
                        <li className={classes.navListItem}>
                            <IconButton aria-label="delete">
                                <SearchIcon className={classes.navListIcon} />
                                <span className={classes.navListText}>Поиск</span>
                            </IconButton>
                        </li>
                        <li className={classes.navListItem}>
                            <IconButton aria-label="delete">
                                <NotificationsNoneIcon className={classes.navListIcon} />
                                <span className={classes.navListText}>Уведомление</span>
                            </IconButton>
                        </li>
                        <li className={classes.navListItem}>
                            <IconButton aria-label="delete">
                                <MailOutlineIcon className={classes.navListIcon} />
                                <span className={classes.navListText}>Сообщение</span>
                            </IconButton>
                        </li>
                        <li className={classes.navListItem}>
                            <IconButton aria-label="delete">
                                <PersonOutlineIcon className={classes.navListIcon} />
                                <span className={classes.navListText}>Профиль</span>
                            </IconButton>
                        </li>
                    </ul>
                </nav>
                <Button onClick={handleClickOpenModalTweet} className={classes.modalTweetBtn} variant="contained" color="primary">
                    Твитнуть
                </Button>
                <div className={classes.account}>
                    <IconButton>
                        <Avatar
                            className={classes.small}
                            alt="Armin van Buuren"
                            src="https://pbs.twimg.com/profile_images/1315647532438085632/tqSEjOJB_normal.jpg"
                        />
                        <div className={classes.accountBox}>
                            <span className={classes.tweetsName}>Armin van Buuren</span>
                            <span className={classes.tweetsNickName}>@arminvanbuuren</span>
                        </div>
                        <MoreHorizIcon />
                    </IconButton>
                </div>
            </aside>
            <ModalBlock open={open} handleClose={handleClose}>
                <Tweet classes={classes} handleClose={handleClose} />
            </ModalBlock>
        </>
    )
}
