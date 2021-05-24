import React from 'react'
import { DialogContent, DialogTitle, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { ModalTweet } from '../../interfaces'
import { TweetForm } from '../TweetForm/TweetForm'

export const Tweet: React.FC<ModalTweet> = ({ handleClose, classes }) => {
    return (
        <div className={classes.modalTweet}>
            <DialogTitle>
                <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TweetForm />
            </DialogContent>
        </div>
    )
}
