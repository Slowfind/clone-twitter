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
        text: {
            primary: '#0F1419',
        },
    },
    // shadows: [],
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 700,
                padding: '10px 16px',
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            outlinedPrimary: {
                borderColor: 'rgb(29,161,243)',
                padding: '10px 16px',
            },
            contained: {
                '&.Mui-disabled': {
                    color: '#fff',
                    opacity: 0.5,
                    backgroundColor: 'rgb(29,161,242)',
                },
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
            },
        },
        MuiInput: {
            underline: {
                '&:before': {
                    content: 'none',
                },
                '&:after': {
                    content: 'none',
                },
            },
        },
        MuiInputLabel: {
            formControl: {
                left: 8,
                transform: 'translate(0, 36px) scale(1)',
            },
            shrink: {
                transform: 'translate(0, 21px) scale(0.75)',
            },
        },
        MuiInputBase: {
            input: {
                border: '1px solid rgb(196, 207, 214)',
                borderRadius: 4,
                padding: '24px 8px 12px 8px',
                '&:focus': {
                    borderColor: 'rgb(29 161 242)',
                    boxShadow: '0 0 0 1px rgb(29 161 242)',
                },
            },
        },
        MuiIconButton: {
            root: {
                color: 'rgb(15, 20, 25)',
                borderRadius: '9999px',
                '&:hover': {
                    backgroundColor: 'rgba(29,161,242,0.1)',
                    color: 'rgb(29,161,242)',
                },
            },
            colorPrimary: {
                '&:hover': {
                    backgroundColor: 'rgba(29, 161, 242, 0.1)',
                },
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
