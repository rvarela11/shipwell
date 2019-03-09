// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

// @containers
import Root from './components/App/App';

// @reducers
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Setting the Material-UI theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#72bcd4'
        }
    },
    typography: {
        useNextVariants: true
    }
});

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Root />
    </MuiThemeProvider>
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
