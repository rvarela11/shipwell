/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import TextField from '@material-ui/core/TextField';

// @utils
import { addUSToAddress } from '../../utils';

const AddressInput = (props) => {
    const {
        geocoded_address,
        isAddressValid,
        label,
        onBlur,
        onChange
    } = props;
    return (
        <TextField
            id={`${label} Address`}
            className='address-input'
            fullWidth
            error={!isAddressValid}
            helperText={(!isAddressValid) ? `Did you mean: ${geocoded_address}` : ''}
            label={label}
            margin="normal"
            onBlur={e => onBlur(addUSToAddress(e.target.value))}
            onChange={e => onChange(e.target.value)}
            type="search"
        />
    );
};

AddressInput.propTypes = {
    geocoded_address: PropTypes.string.isRequired,
    isAddressValid: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default AddressInput;
