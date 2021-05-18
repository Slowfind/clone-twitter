import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Ubuntu',
            'Helvetica Neue',
            'sans-serif',
        ].join(', '),
    },
    palette: {
        primary: {
            main: 'rgb(29,161,242)',
            dark: 'rgb(26,145,218)',
            contrastText: '#fff',
        },
        secondary: {
            main: 'rgb(26,145,218)',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    // shadows: [],
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 48,
                fontWeight: 700,
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            outlinedPrimary: {
                borderColor: 'rgb(29,161,243)',
            },
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: '2px',
                },
                '&:before': {
                    borderColor: 'red',
                    borderBottomWidth: '2px',
                },
            },
            input: {
                backgroundColor: 'rgb(245,248,250)',
                color: 'red',
            },
        },
        MuiInputBase: {
            input: {
                border: '1px solid rgb(196, 207, 214)',
                borderRadius: 4,
                borderWidth: 1,
            },
        },
        MuiDialog: {
            paper: {
                borderRadius: 16,
            },
        },
        MuiDialogActions: {
            root: {
                padding: '8px 24px',
                marginBottom: 20,
            },
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(204,214,221)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800,
                },
                '& button': {
                    padding: 8,
                    marginRight: 20,
                },
            },
        },
    },
})

export default theme
