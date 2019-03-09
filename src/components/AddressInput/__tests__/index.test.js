// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import AddressInput from '../AddressInput';

describe('AddressInput', () => {
    it('renders AddressInput without crashing', () => {
        shallow(
            <AddressInput
                geocoded_address=""
                isAddressValid
                label=""
                onBlur={() => {}}
                onChange={() => {}}
            />
        );
    });
});
