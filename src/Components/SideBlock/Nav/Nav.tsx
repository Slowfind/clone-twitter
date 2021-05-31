import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import React from 'react'
import { Classes } from '../../../interfaces'

export const Nav: React.FC<Classes> = ({ classes }: Classes) => {
    return (
        <nav>
            <ul className={classes.navList}>
                <li className={classes.navListItem}>
                    <IconButton>
                        <HomeIcon className={classes.navListIcon} />
                        <span className={classes.navListText}>Главная</span>
                    </IconButton>
                </li>
                <li className={classes.navListItem}>
                    <IconButton>
                        <SearchIcon className={classes.navListIcon} />
                        <span className={classes.navListText}>Поиск</span>
                    </IconButton>
                </li>
                <li className={classes.navListItem}>
                    <IconButton>
                        <NotificationsNoneIcon className={classes.navListIcon} />
                        <span className={classes.navListText}>Уведомление</span>
                    </IconButton>
                </li>
                <li className={classes.navListItem}>
                    <IconButton>
                        <MailOutlineIcon className={classes.navListIcon} />
                        <span className={classes.navListText}>Сообщение</span>
                    </IconButton>
                </li>
                <li className={classes.navListItem}>
                    <IconButton>
                        <PersonOutlineIcon className={classes.navListIcon} />
                        <span className={classes.navListText}>Профиль</span>
                    </IconButton>
                </li>
            </ul>
        </nav>
    )
}
