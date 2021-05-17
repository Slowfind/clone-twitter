import { Typography } from '@material-ui/core'
import {
    Dialog,
    DialogActions,
    DialogContent,
    // DialogContentText,
    DialogTitle,
    TextField,
    Button,
} from '@material-ui/core'
import React from 'react'

function ModalBlock() {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Open form dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                {/* <DialogTitle id="form-dialog-title">
                    Войти в Твиттер
                </DialogTitle> */}
                <DialogContent>
                    <Typography
                        variant="h4"
                        gutterBottom
                        // className={classes.loginSideTitle}
                    >
                        Войти в Твиттер
                    </Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
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
                        Войти
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ModalBlock
