// @vendors
import React, { Fragment } from 'react';

// @components
import AddressMap from '../AddressMap/AddressMap';
import UserCard from '../UserCard/UserCard';

const AddressResults = () => (
    <Fragment>
        <UserCard />
        <AddressMap isMarkerShown />
    </Fragment>
);

export default AddressResults;
