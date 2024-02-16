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

describe('handling event', () => {
    it('calls console.log', () => {
        const wrapper = shallow(<Notifications />);
        const spy = jest.spyOn(console, 'log').mockImplementation();
        const instance = wrapper.instance();
        instance.markAsRead(0);
        expect(spy).toBeCalledWith("Notification 0 has been marked as read");
        spy.mockRestore();
    });
});

describe('handling rerendrung', () => {
    const listNotifications = [
        { id: 1, type: 'default', value: 'Notification 1' },
        { id: 2, type: 'urgent', value: 'Notification 2' },
      ];
    it('doesnt render when notificationlist length is the same', () => {
        const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        const initialRenderCount = wrapper.instance().renderCount;
        wrapper.setProps({ listNotifications });
        expect(wrapper.instance().renderCount).toBe(initialRenderCount);
    });

});