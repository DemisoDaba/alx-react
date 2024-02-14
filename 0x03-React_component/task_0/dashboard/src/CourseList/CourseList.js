import React from "react";
import CourseListRow from "./CourseListRow";
import './CourseList.css'
import  CourseShape  from "./CourseShape";
import PropType from 'prop-types'


const CourseList = ({listCourses}) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {
          listCourses.length > 0 ? 
          (<>
            {
              
              listCourses.map((value,index)=>{
                return (<CourseListRow key={value.id} textFirstCell={value.name} textSecondCell={value.credit} />)
              })
            }
          </>):
          (<>
            <CourseList textFirstCell="No course available yet" />
          </>)
        }
        
      </tbody>
    </table>
  );
};

CourseList.prototype = {
  listCourses: PropType.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
