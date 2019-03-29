// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import { mapStateToProps, mapDispatchToProps } from '../AddressCardInputOrigin';

describe('AddressCardInputOrigin', () => {
    it('should show initial state', () => {
        const initialState = {
            label: 'From'
        };
        expect(mapStateToProps(initialState)).toEqual({
            label: 'From'
        });
    });
    it('should call onBlur', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onBlur();
        expect(dispatch.mock.calls.length).toBe(1);
    });
    it('should call onChange', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onChange();
        expect(dispatch.mock.calls.length).toBe(1);
    });
});
