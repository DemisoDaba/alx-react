import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

describe('CoursList', () => {
    it('CourseList rendres without crashing', () => {
        shallow(<CourseList />);
    });

    it('CourseList rendes 5 rows', () => {
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        expect(wrapper.find('thead').children()).toHaveLength(2);
        expect(wrapper.find('tbody').children()).toHaveLength(3);
    });
});