import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        flex: '0 0 55%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'rgb(29,161,242)',
    },
    blueSideBg: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
    },
    blueSideIcon: {
        width: 400,
        height: 350,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        color: '#fff',
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 45%',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSdeWrapper: {
        padding: '0 16px',
        width: '100%',
        maxWidth: 720,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 68,
        margin: '48px 0',
        color: 'rgb(15, 20, 25)',
    },
    loginSiedActions: {
        maxWidth: '380px',
        marginTop: 32,
    },
}))
