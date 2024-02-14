import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('<NotificationItem />', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });

});