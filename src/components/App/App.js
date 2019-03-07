// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

// @components
import AddressInput from '../AddressInput/AddressInput';
import Header from '../Header/Header';

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
                <AddressInput />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
