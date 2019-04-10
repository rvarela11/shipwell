// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import CardButton from '../CardButton';

describe('CardButton', () => {
    const wrapper = shallow(
        <CardButton
            classes={{}}
            label=""
            isCardButtonDisabled
            path=""
        />
    ).dive();
    it('renders CardButton without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('isCardButtonDisabled =  false', () => {
        wrapper.setProps({ isCardButtonDisabled: false });
        expect(wrapper.find('.disable-link').length).toBe(0);
    });
});
