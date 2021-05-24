export interface ModalProps {
    open: boolean
    children: React.ReactNode
    handleClose: () => void
}
export interface ModalSign {
    handleClose: () => void
}
export interface ModalTweet {
    handleClose: () => void
    classes: any
}
