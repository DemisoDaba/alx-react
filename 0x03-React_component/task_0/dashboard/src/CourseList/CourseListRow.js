import { checkPropTypes } from 'prop-types'
import React from 'react'
import PropTypes from 'prop-types'

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    if (isHeader === true) {
        if (textSecondCell === null || textSecondCell === undefined) {
            return (
                <tr>
                    <th colSpan={2}>{ textFirstCell }</th>
                </tr>
            )
        } else {
            return (
                <tr>
                    <th>{ textFirstCell }</th>
                    <th>{ textSecondCell }</th>
                </tr>
            )
        }
    } 
    else {
        return (
        <tr>
            <th>{ textFirstCell }</th>
            <th>{ textSecondCell }</th>
        </tr>
        )
    }
}

CourseListRow.prototype = {
    isHeader: checkPropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
}

export default CourseListRow