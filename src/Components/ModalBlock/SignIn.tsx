import React from 'react'
import { Button, DialogActions, DialogContent, TextField, Typography } from '@material-ui/core'
import { ModalSign } from '../../interfaces'

const SignIn: React.FC<ModalSign> = ({ handleClose }) => {
    return (
        <>
            <DialogContent>
                <Typography variant="h4" gutterBottom>
                    Войти в Твиттер
                </Typography>
                <TextField autoFocus id="email" label="Email" type="email" fullWidth />
                <TextField id="password" label="password" type="password" fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary" fullWidth>
                    Войти
                </Button>
            </DialogActions>
        </>
    )
}

export default SignIn
