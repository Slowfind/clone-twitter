import IconButton from '@material-ui/core/IconButton'
import React from 'react'
import { useHistory } from 'react-router'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const GoBack: React.FC = () => {
    const history = useHistory()
    const handelClick = () => {
        history.goBack()
    }
    return (
        <IconButton style={{ marginRight: 15 }} onClick={handelClick} color="primary">
            <ArrowBackIcon />
        </IconButton>
    )
}
