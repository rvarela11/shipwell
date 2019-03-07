/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import TextField from '@material-ui/core/TextField';

const AddressInput = (props) => {
    const {
        geocoded_address_formatted_address,
        isAddressValid,
        label,
        onBlur
    } = props;
    return (
        <TextField
            id={`${label} Address`}
            fullWidth
            error={!isAddressValid}
            helperText={(!isAddressValid) ? `Did you mean: ${geocoded_address_formatted_address}` : ''}
            label={label}
            margin="normal"
            onBlur={e => onBlur(e.target.value)}
        />
    );
};

AddressInput.propTypes = {
    geocoded_address_formatted_address: PropTypes.string.isRequired,
    isAddressValid: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired
};

export default AddressInput;
