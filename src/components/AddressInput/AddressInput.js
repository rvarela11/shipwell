/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @material-ui
import TextField from '@material-ui/core/TextField';

// @actions
import { validateAddress } from '../../actions';

const AddressInput = (props) => {
    const { geocoded_address_formatted_address, isToAddressValid, validateAddress } = props;
    return (
        <TextField
            id="To-address"
            fullWidth
            error={!isToAddressValid}
            helperText={(!isToAddressValid) ? `Did you mean: ${geocoded_address_formatted_address}` : ''}
            label="To"
            margin="normal"
            onBlur={e => validateAddress(e.target.value)}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    validateAddress: address => dispatch(validateAddress(address))
});

const mapStateToProps = state => ({
    geocoded_address_formatted_address: state.geocoded_address_formatted_address,
    isToAddressValid: state.isToAddressValid
});

AddressInput.propTypes = {
    geocoded_address_formatted_address: PropTypes.string.isRequired,
    isToAddressValid: PropTypes.bool.isRequired,
    validateAddress: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressInput);
