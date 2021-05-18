import { Dialog } from '@material-ui/core'
import React from 'react'
import { ModalProps } from '../../interfaces'

const ModalBlock: React.FC<ModalProps> = ({ handleClose, open, children }) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                {children}
            </Dialog>
        </div>
    )
}

export default ModalBlock
