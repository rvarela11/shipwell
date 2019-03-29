// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Header from '../Header';

describe('Header', () => {
    it('renders Header without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});
