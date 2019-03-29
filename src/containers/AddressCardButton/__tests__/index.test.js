// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import { mapStateToProps } from '../AddressCardButton';

describe('AddressCardButton', () => {
    it('should show initial state', () => {
        const initialState = {
            label: 'Search',
            isCardButtonDisabled: true,
            path: '/shipwell/results'
        };
        expect(mapStateToProps(initialState)).toEqual({
            label: 'Search',
            isCardButtonDisabled: true,
            path: '/shipwell/results'
        });
    });
});
