import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import React from 'react'
import { Classes } from '../../../interfaces'

export const Account: React.FC<Classes> = ({ classes }: Classes) => {
    return (
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
    )
}
