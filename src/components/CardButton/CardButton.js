/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
            <Link to="/results" className="link">
                {label}
            </Link>
        </Button>
    );
};

CardButton.propTypes = {
    label: PropTypes.string.isRequired,
    isCardButtonDisabled: PropTypes.bool.isRequired
};

export default CardButton;
