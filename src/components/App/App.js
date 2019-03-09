/* eslint-disable camelcase */
// @vendors
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

// @components
import AddressCard from '../AddressCard/AddressCard';
import Header from '../Header/Header';
import Results from '../Results/Results';

// @actions
import { getUserData } from '../../actions';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { getUserData } = this.props;
        getUserData();
    }

    render() {
        const { latitude_address_Origin, latitude_address_Destination, userData } = this.props;
        if (!Array.isArray(userData) || !userData.length) {
            return (
                <div className="circular-progress">
                    <CircularProgress />
                </div>
            );
        }
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Fragment>
                        <div className="address-display">
                            <Route exact path="/" component={AddressCard} />
                            <Route
                                exact
                                path="/results"
                                render={() => (
                                    (latitude_address_Origin === null && latitude_address_Destination === null) ? (
                                        <Redirect to="/" />
                                    ) : (
                                        <Results />
                                    )
                                )}
                            />
                        </div>
                    </Fragment>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getUserData: () => dispatch(getUserData())
});

const mapStateToProps = state => ({
    companyData: state.companyData,
    latitude_address_Origin: state.latitude_address_Origin,
    latitude_address_Destination: state.latitude_address_Destination,
    userData: state.userData
});

App.propTypes = {
    getUserData: PropTypes.func.isRequired,
    latitude_address_Origin: PropTypes.number,
    latitude_address_Destination: PropTypes.number,
    userData: PropTypes.array.isRequired
};

App.defaultProps = {
    latitude_address_Origin: null,
    latitude_address_Destination: null
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
