/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @material-ui
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// @components
import FromAddressInput from '../../containers/FromAddressInput';
import ToAddressInput from '../../containers/ToAddressInput';

// Setting material-ui classes
const styles = theme => ({
    address_card: {
        width: '60%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '75%'
        }
    },
    address_card_content: {
        width: '75%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    address_title: {
        textAlign: 'center'
    },
    typography_media_query: {
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.25rem'
        }
    }
});

const AddressCard = (props) => {
    const {
        classes,
        formatted_address_From,
        formatted_address_To,
        isAddressValid_From,
        isAddressValid_To,
        isAddressCardButtonDisabled
    } = props;
    // Disable button when input is blank, has an error, or is onFocus
    // This will avoid polluting the database
    const isButtonDisabled = ((formatted_address_From === '' || formatted_address_To === '') || (!isAddressValid_From || !isAddressValid_To) || isAddressCardButtonDisabled);
    return (
        <Card className={classes.address_card}>
            <CardContent className={classes.address_card_content}>
                <Typography className={`${classes.typography_media_query} ${classes.address_title}`} variant="h5">
                    Address
                </Typography>
                <FromAddressInput />
                <ToAddressInput />
                <CardActions>
                    <Button
                        color="primary"
                        disabled={isButtonDisabled}
                        size="large"
                        variant="contained"
                    >
                        Search
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

const mapStateToProps = state => ({
    formatted_address_From: state.formatted_address_From,
    formatted_address_To: state.formatted_address_To,
    isAddressValid_From: state.isAddressValid_From,
    isAddressValid_To: state.isAddressValid_To,
    isAddressCardButtonDisabled: state.isAddressCardButtonDisabled
});

AddressCard.propTypes = {
    classes: PropTypes.object.isRequired,
    formatted_address_From: PropTypes.string.isRequired,
    formatted_address_To: PropTypes.string.isRequired,
    isAddressValid_From: PropTypes.bool.isRequired,
    isAddressValid_To: PropTypes.bool.isRequired,
    isAddressCardButtonDisabled: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, null)(withStyles(styles)(AddressCard));
