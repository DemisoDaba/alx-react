import React from "react";
import CourseListRow from "./CourseListRow";
import  CourseShape  from "./CourseShape";
import PropType from 'prop-types'
import { StyleSheet, css } from "aphrodite";



const CourseList = ({listCourses}) => {
  return (
    <table id="CourseList" className={css(styles.table)}>
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

const styles = StyleSheet.create({
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
      border: '1px solid lightgray'
  },
  
  th: {
    borderBottom: '2px solid rgba(255, 0, 234, 0.423)',
    padding: '2px 8px'
},
  tr: {
    ':nth-child(2)': {
        textAlign: 'left'
    }
},
  td: {
    padding: '2px 8px'
}
});

CourseList.prototype = {
  listCourses: PropType.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
