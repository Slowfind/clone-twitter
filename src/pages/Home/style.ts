import { makeStyles, Theme } from '@material-ui/core/styles'

export const useHomeStyles = makeStyles((theme: Theme) => ({
    normal: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    navList: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    navListItem: {
        marginBottom: 8,
    },
    navListText: {
        margin: '0 16px',
        fontWeight: 700,
        lineHeight: '24px',
        fontSize: 20,
    },
    navListIcon: {
        fontSize: 26,
    },
    btnModalTweet: {
        marginTop: 20,
    },
    modalTweet: {
        width: 600,
        '& $tweet': {
            padding: 0,
        },
    },
    modalTweetBtn: {
        marginTop: 20,
        width: 230,
    },
    main: {
        borderLeft: '1px solid rgb(235, 238, 240)',
        borderRight: '1px solid rgb(235, 238, 240)',
        minHeight: '100vh',
        height: '100%',
    },
    mainHeader: {
        padding: '0 16px',
        borderBottom: '1px solid rgb(235, 238, 240)',
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        zIndex: 9,
        display: 'flex',
        alignItems: 'center',
    },
    mainTitle: {
        fontWeight: 700,
        padding: '16px 0',
    },
    tweet: {
        padding: '10px 16px',
    },
    tweets: {},
    tweetsItem: {
        padding: '12px 16px',
        display: 'flex',
        cursor: 'pointer',
        transition: '.3s ease-in-out',
        textDecoration: 'none!important',
        color: 'inherit',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
        },
    },
    tweetsAvatar: {
        width: 48,
        marginRight: 12,
    },
    tweetsContent: {},
    tweetsHeader: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    tweetsDelimetr: {
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 400,
        color: 'rgb(91, 112, 131)',
        padding: '0 6px',
    },
    tweetsName: {
        fontSize: 15,
        fontWeight: 700,
        color: 'rgb(15, 20, 25)',
        lineHeight: '20px',
        whiteSpace: 'nowrap',
        marginRight: 10,
    },
    tweetsLink: {
        textDecoration: 'none',
        '&:hover $tweetsName': {
            textDecoration: 'underline',
        },
    },
    tweetsNickName: {
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 400,
        color: 'rgb(91, 112, 131)',
        overflowWrap: 'break-word',
    },
    tweetsTime: {
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 400,
        color: 'rgb(91, 112, 131)',
        overflowWrap: 'break-word',
    },
    tweetsTimeLink: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    tweetsWysiwyg: {
        '& p': {
            margin: '0 0 10px 0',
        },
    },
    tweetsActions: {
        fontSize: 13,
        lineHeight: '16px',
        padding: '0 12px',
    },
    tweetsActionsIcon: {
        fontSize: 18,
    },
    search: {
        padding: '12px 0',
    },
    searchWrapper: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#EBEEF0',
        borderRadius: 36,
        transition: '.3s ease-in-out',
        '&:focus': {
            backgroundColor: '#fff',
        },
    },
    searchIcon: {
        minWidth: 18,
        height: 18,
        padding: '0 12px',
        '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: 'rgb(91, 112, 131)',
        },
    },
    searchInput: {
        '& .MuiInput-input': {
            padding: '14px 12px 14px 0',
            border: 'none',
            boxShadow: 'none',
            color: 'rgb(91, 112, 131)',
            fontSize: 16,
            lineHeight: '1.5',
        },
    },
    searchBox: {
        width: '100%',
        '& .MuiInputBase-root': {
            width: '100%',
        },
    },
    box: {
        marginBottom: 16,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#F7F9FA',
    },
    listReset: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    listTitle: {
        padding: '12px 16px',
        color: 'rgb(15, 20, 25)',
        borderBottom: '1px solid rgb(235, 238, 240)',
    },
    listItem: {
        borderBottom: '1px solid rgb(235, 238, 240)',
        padding: '12px 16px',
        cursor: 'pointer',
        transition: '.2s ease-in-out',
        '& a': {
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        '& $tweetsName': {
            display: 'block',
            width: '100%',
            marginBottom: 5,
            marginRight: 0,
        },
        '& $tweetsNickName': {
            display: 'block',
            width: '100%',
        },
        '& .MuiButton-root': {
            marginLeft: 8,
        },
        '& .MuiAvatar-root': {
            marginRight: 8,
        },
        '&:last-of-type': {
            borderBottom: 'none',
        },
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.06)',
        },
    },
    listItemInfoBox: {
        maxWidth: 130,

        '& $tweetsName': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        '& $tweetsNickName': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    },
    aside: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
    },
    account: {
        marginTop: 'auto',
        marginBottom: 30,
        '& svg': {
            fontSize: 19,
            color: 'rgb(15, 20, 25)',
        },
    },
    accountBox: {
        marginLeft: 12,
        marginRight: 36,
        '& span': {
            display: 'block',
            margin: 0,
            textAlign: 'left',
        },
    },
    sidebar: {
        position: 'sticky',
        top: 0,
    },
    tweetMargin: {
        height: 12,
        backgroundColor: 'rgb(247, 249, 250)',
        borderTop: '1px solid rgb(235, 238, 240)',
        borderBottom: '1px solid rgb(235, 238, 240)',
    },
}))
