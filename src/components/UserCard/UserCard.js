// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Setting material-ui classes
const styles = theme => ({
    user_card: {
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
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

const UserCard = (props) => {
    const {
        classes
    } = props;
    return (
        <Card className={classes.user_card}>
            <CardContent className={classes.user_card_content}>
                <Typography className={`${classes.typography_media_query} ${classes.user_title}`} variant="h5">
                    User
                </Typography>
            </CardContent>
        </Card>
    );
};

UserCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserCard);
