/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// @components
import AddressCardButton from '../../containers/AddressCardButton/AddressCardButton';
import AddressCardInputOrigin from '../../containers/AddressCardInputOrigin/AddressCardInputOrigin';
import AddressCardInputDestination from '../../containers/AddressCardInputDestination/AddressCardInputDestination';

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
    const { classes } = props;
    return (
        <Card className={classes.address_card}>
            <CardContent className={classes.address_card_content}>
                <Typography className={`${classes.typography_media_query} ${classes.address_title}`} variant="h5">
                    Address
                </Typography>
                <AddressCardInputOrigin />
                <AddressCardInputDestination />
                <CardActions>
                    <AddressCardButton />
                </CardActions>
            </CardContent>
        </Card>
    );
};

AddressCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddressCard);
