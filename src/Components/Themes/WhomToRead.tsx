import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import { Classes } from '../../interfaces'

export const WhomToRead: React.FC<Classes> = ({ classes }: Classes) => {
    return (
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
    )
}
