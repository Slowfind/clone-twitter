import { useHomeStyles } from './pages/Home/style'

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
export interface Classes {
    classes: ReturnType<typeof useHomeStyles>
}
export interface TweetProps extends Classes {
    _id: string
    text: string
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
}
