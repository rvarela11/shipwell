/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// @material-ui
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Setting material-ui classes
const styles = () => ({
    card_button: {
        color: 'white'
    }
});

const CardButton = (props) => {
    const { classes, label, isCardButtonDisabled } = props;
    return (
        <Link to="/shipwell-results" className={`link ${isCardButtonDisabled ? 'disable-link' : ''}`}>
            <Button
                className={classes.card_button}
                color="primary"
                disabled={isCardButtonDisabled}
                size="large"
                variant="contained"
            >
                {label}
            </Button>
        </Link>
    );
};

CardButton.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    isCardButtonDisabled: PropTypes.bool.isRequired
};

export default withStyles(styles)(CardButton);
