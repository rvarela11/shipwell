/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import Button from '@material-ui/core/Button';

const CardButton = (props) => {
    const {
        label,
        isCardButtonDisabled
    } = props;
    return (
        <Button
            color="primary"
            disabled={isCardButtonDisabled}
            size="large"
            variant="contained"
        >
            {label}
        </Button>
    );
};

CardButton.propTypes = {
    label: PropTypes.string.isRequired,
    isCardButtonDisabled: PropTypes.bool.isRequired
};

export default CardButton;
