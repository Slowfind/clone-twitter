import { makeStyles, Theme } from '@material-ui/core/styles'

export const useTweet = makeStyles((theme: Theme) => ({
    normal: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    tweetWrapper: {
        display: 'flex',
    },
    tweetAvatar: {
        marginRight: 12,
        paddingTop: 4,
    },
    tweetContent: {
        flex: 1,
    },
    tweetInput: {
        position: 'relative',
        margin: '15px 0',
        borderBottom: '1px solid rgb(235, 238, 240)',
        '& textarea': {
            border: 'none',
            width: '100%',
            borderRadius: 0,
            outline: 'none!important',
            fontSize: 20,
            padding: 2,
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif',
            resize: 'none',
        },
    },
    tweetAction: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 6,
    },
    tweetIcons: {
        marginRight: 'auto',
        marginLeft: -10,
        '& svg': {
            fontSize: 20,
        },
    },
    tweetBox: {
        display: 'flex',
        alignItems: 'center',
    },
    tweetProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 12px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
}))
