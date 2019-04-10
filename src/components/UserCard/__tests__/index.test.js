// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import { UserCard, mapStateToProps } from '../UserCard';

describe('UserCard', () => {
    const wrapper = shallow(
        <UserCard
            classes={{}}
            companyData={{ carrier: {} }}
            geocoded_address_Origin=""
            geocoded_address_Destination=""
            userData={{}}
        />
    );
    it('renders UserCard without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should show initial state from mapStateToProps', () => {
        const initialState = {
            companyData: [{}],
            geocoded_address_Origin: '',
            geocoded_address_Destination: '',
            userData: [{}]
        };
        expect(mapStateToProps(initialState)).toEqual({
            companyData: {},
            geocoded_address_Origin: '',
            geocoded_address_Destination: '',
            userData: {}
        });
    });
});
