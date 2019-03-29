// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import { UserCard, mapStateToProps, styles} from '../UserCard';

describe('UserCard', () => {
    it('renders UserCard without crashing', () => {
        const wrapper = shallow(
            <UserCard
                classes={{}}
                companyData={{ carrier: {} }}
                geocoded_address_Origin=""
                geocoded_address_Destination=""
                userData={{}}
            />
        ).dive();
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
