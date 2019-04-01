// @components
import { mapStateToProps, mapDispatchToProps } from '../AddressCardInputDestination';

describe('AddressCardInputDestination', () => {
    it('should show initial state', () => {
        const initialState = {
            label: 'To'
        };
        expect(mapStateToProps(initialState)).toEqual({
            label: 'To'
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
