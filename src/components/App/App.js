// @vendors
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

// @components
import AddressCard from '../AddressCard/AddressCard';
import Header from '../Header/Header';
import AddressResults from '../AddressResults/AddressResults';

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
        const { userData } = this.props;
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
                        <div className="address-info-display">
                            <Route exact path="/" component={AddressCard} />
                            <Route exact path="/results" component={AddressResults} />
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
    userData: state.userData
});

App.propTypes = {
    getUserData: PropTypes.func.isRequired,
    userData: PropTypes.array.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
