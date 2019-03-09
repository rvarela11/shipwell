// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import { UserCard } from '../UserCard';

describe('UserCard', () => {
    it('renders UserCard without crashing', () => {
        shallow(
            <UserCard
                classes={{}}
                companyData={{ carrier: {} }}
                geocoded_address_Origin=""
                geocoded_address_Destination=""
                userData={{}}
            />
        );
    });
});
