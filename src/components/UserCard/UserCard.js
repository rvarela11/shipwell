/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @material-ui
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';

// @styles
import './UserCard.scss';

// Setting material-ui classes
const styles = theme => ({
    user_card: {
        width: '100%',
        height: '50vh',
        display: 'flex',
        alignItems: 'center'
    },
    user_card_content: {
        width: '75%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    user_title: {
        textAlign: 'center'
    },
    typography_media_query: {
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.25rem'
        }
    }
});

export const UserCard = (props) => {
    const {
        classes,
        companyData,
        geocoded_address_Origin,
        geocoded_address_Destination,
        userData
    } = props;
    const {
        first_name,
        last_name,
        email,
        phone_number
    } = userData;
    const {
        display_name,
        display_primary_email,
        display_primary_phone_number
    } = companyData.carrier;
    return (
        <Card className={classes.user_card}>
            <CardHeader
                avatar={(
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                    N
                    </Avatar>
                )}
                title={`${first_name} ${last_name}`}
                subheader={`${email} ${phone_number}`}
            />
            <CardContent className={classes.user_card_content}>
                <div className="route">
                    <h4 className="route-info-title">Route</h4>
                    <h5 className="route-info">{`A: ${geocoded_address_Origin}`}</h5>
                    <h5 className="route-info">{`B: ${geocoded_address_Destination}`}</h5>
                    <h4 className="route-info-title">Carrier</h4>
                    <h5 className="route-info">{display_name}</h5>
                    <h5 className="route-info">{display_primary_email}</h5>
                    <h5 className="route-info">{display_primary_phone_number}</h5>
                </div>
            </CardContent>
        </Card>
    );
};

const mapStateToProps = state => ({
    companyData: state.companyData[0],
    geocoded_address_Origin: state.geocoded_address_Origin,
    geocoded_address_Destination: state.geocoded_address_Destination,
    userData: state.userData[0]
});

UserCard.propTypes = {
    classes: PropTypes.object.isRequired,
    companyData: PropTypes.object.isRequired,
    geocoded_address_Origin: PropTypes.string.isRequired,
    geocoded_address_Destination: PropTypes.string.isRequired,
    userData: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(withStyles(styles)(UserCard));
