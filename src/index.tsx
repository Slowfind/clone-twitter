import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import ReactDOM from 'react-dom'

import { App } from './App'
import theme from './theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <Router>
                <App />
            </Router>
        </CssBaseline>
    </ThemeProvider>,
    document.getElementById('root')
)
