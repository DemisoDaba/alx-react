import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';



describe('<Header />', () => {
    it('Header renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toBeDefined();
    });

    it('Header renders img', () => {
        const wrapper = shallow(<Header />);
        const element = wrapper.find('img').hasClass('App-logo');
        expect(element).toBe(true);
    });

    it('Header renders h1', () => {
        const wrapper = shallow(<Header />);
        const element = wrapper.find('h1').text();
        expect(element).toEqual('School dashboard');
    });
})

