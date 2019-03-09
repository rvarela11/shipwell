// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import { AddressMap } from '../AddressMap';

describe('AddressMap', () => {
    it('renders AddressMap without crashing', () => {
        shallow(
            <AddressMap />
        );
    });
});
