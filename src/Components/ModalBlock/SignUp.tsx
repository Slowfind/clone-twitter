import {
    DialogContent,
    Typography,
    TextField,
    DialogActions,
    Button,
} from '@material-ui/core'
import React from 'react'
import { ModalSign } from '../../interfaces'

const SignUp: React.FC<ModalSign> = ({ handleClose }) => {
    return (
        <>
            <DialogContent>
                <Typography variant="h4" gutterBottom>
                    Создайте учетную запись
                </Typography>
                <TextField
                    autoFocus
                    id="name"
                    label="Name"
                    type="name"
                    fullWidth
                />
                <TextField id="email" label="Email" type="email" fullWidth />
                <TextField
                    id="password"
                    label="password"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Далее
                </Button>
            </DialogActions>
        </>
    )
}
export default SignUp
