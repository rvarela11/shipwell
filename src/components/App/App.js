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
import { fetchUser } from '../../actions';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { fetchUser } = this.props;
        fetchUser();
    }

    render() {
        const { fetchUserLoading, latitude_address_Origin, latitude_address_Destination } = this.props;
        if (fetchUserLoading) {
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
                            <Route exact path="/shipwell" component={AddressCard} />
                            <Route
                                exact
                                path="/shipwell/results"
                                render={() => (
                                    (latitude_address_Origin === null && latitude_address_Destination === null) ? (
                                        <Redirect to="/shipwell" />
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
    fetchUser: () => dispatch(fetchUser())
});

const mapStateToProps = state => ({
    fetchUserLoading: state.fetchUserLoading,
    latitude_address_Origin: state.latitude_address_Origin,
    latitude_address_Destination: state.latitude_address_Destination
});

App.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    fetchUserLoading: PropTypes.bool.isRequired,
    latitude_address_Origin: PropTypes.number,
    latitude_address_Destination: PropTypes.number
};

App.defaultProps = {
    latitude_address_Origin: null,
    latitude_address_Destination: null
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
