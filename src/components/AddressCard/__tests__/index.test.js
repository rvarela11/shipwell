// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import AddressCard from '../AddressCard';

describe('AddressCard', () => {
    const wrapper = shallow(<AddressCard />).dive();
    it('renders AddressCard without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('Card component should have correct className', () => {
        const addressCard = wrapper.find('.AddressCard-address_card-1');
        expect(addressCard.length).toBe(1);
    });
});
