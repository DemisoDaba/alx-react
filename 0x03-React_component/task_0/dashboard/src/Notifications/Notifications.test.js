import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';


describe('<Notifications />', () => {
    it('Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });


    it('Notifications renders NotificationItem element', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).exists()).toBe(true)
    });

    it('Reder the first NotificationItem with the right html', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const FirstNotificationItem = wrapper.find(NotificationItem).first();
        expect(FirstNotificationItem.prop('type')).toBe('default');
        expect(FirstNotificationItem.prop('value')).toBe('No new notification for now');
    });

    it('Notifications renders menuItem when displayDraer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find("div.menuItem").exists()).toBe(true);
    });

    it('div.Notifications is not being displayed when displayDraer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find("div.Notifications").exists()).toBe(false);
    });

    it('Notifications renders menuItem when displayDraer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find("div.menuItem").exists()).toBe(true);
    });

    it('div.Notifications is being displayed when displayDraer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find("div.Notifications").exists()).toBe(true);
    });
});