// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import { AddressCard } from '../AddressCard';

describe('AddressCard Container', () => {
    it('renders AddressCard without crashing', () => {
        shallow(
            <AddressCard />
        );
    });
});
