// @vendors
import React from 'react';
import { shallow, mount } from 'enzyme';

// @components
import AddressInput from '../AddressInput';

describe('AddressInput', () => {
    const wrapper = shallow(
        <AddressInput
            geocoded_address=""
            isAddressValid
            helperText=""
            label=""
            onBlur={() => {}}
            onChange={() => {}}
        />
    );

    it('renders AddressInput without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('TextField props', () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const wrapper = mount(
        <AddressInput
            geocoded_address=""
            isAddressValid
            helperText=""
            label=""
            onBlur={onBlur}
            onChange={onChange}
        />
    );
    wrapper.setProps({
        geocoded_address: '515 Congress',
        isAddressValid: false,
        label: 'Destination'
    });
    const TextField = wrapper.find('.address-input');
    const input = wrapper.find('input');
    const event = {
        target: { value: 'the-value, US' }
    };
    it('id', () => {
        expect(TextField.at(0).props().id).toEqual('Destination Address');
    });
    it('className', () => {
        expect(TextField.at(0).props().className).toEqual('address-input');
    });
    it('error', () => {
        expect(TextField.at(0).props().error).toEqual(true);
    });
    it('helperText', () => {
        expect(TextField.at(0).props().helperText).toEqual('Did you mean: 515 Congress');
    });
    it('label', () => {
        expect(TextField.at(0).props().label).toEqual('Destination');
    });
    it('margin', () => {
        expect(TextField.at(0).props().margin).toEqual('normal');
    });
    it('onBlur', () => {
        input.simulate('blur', event);
        expect(onBlur).toBeCalledWith(event.target.value);
    });
    it('onChange', () => {
        input.simulate('change', event);
        expect(onChange).toBeCalledWith(event.target.value);
    });
    it('type', () => {
        expect(TextField.at(0).props().type).toEqual('search');
    });
});
