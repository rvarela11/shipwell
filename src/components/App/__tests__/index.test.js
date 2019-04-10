// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import App from '../App';

describe('App', () => {
    const wrapper = shallow(
        <App
            fetchUserLoading
            latitude_address_Origin={0}
            latitude_address_Destination={0}
        />
    );
    it('renders App without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
