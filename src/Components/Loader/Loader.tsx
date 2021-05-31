import CircularProgress from '@material-ui/core/CircularProgress'
import React from 'react'
import { LoaderStyles } from './style'

export const Loader: React.FC = () => {
    const classes = LoaderStyles()
    return (
        <div className={classes.loader}>
            <CircularProgress />
        </div>
    )
}
