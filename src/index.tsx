import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import { App } from './App'
import theme from './theme'
import { store } from './store/store'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </CssBaseline>
    </ThemeProvider>,
    document.getElementById('root')
)
