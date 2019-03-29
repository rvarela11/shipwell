// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import { AddressMap } from '../AddressMap';

describe('AddressMap', () => {
    it('renders AddressMap without crashing', () => {
        const wrapper = shallow(
            <AddressMap />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
