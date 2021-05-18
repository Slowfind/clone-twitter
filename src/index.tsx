import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './index.css'
import theme from './theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <App />
        </CssBaseline>
    </ThemeProvider>,
    document.getElementById('root')
)
