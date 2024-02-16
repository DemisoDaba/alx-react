import { checkPropTypes } from 'prop-types'
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from "aphrodite";



const styles = StyleSheet.create({
    headerRow: {
        backgroundColor: "#deb5b545"
    },
    defaultRow: {
        backgroundColor: "#f5f5f5ab"
    },
    td: {
        paddingLeft: '8px'
    }
})

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    if (isHeader === true) {
        if (textSecondCell === null || textSecondCell === undefined) {
            return (
                <tr className={css(styles.headerRow)}>
                    <th colSpan={2}>{ textFirstCell }</th>
                </tr>
            )
        } else {
            return (
                <tr className={css(styles.headerRow)}>
                    <th>{ textFirstCell }</th>
                    <th>{ textSecondCell }</th>
                </tr>
            )
        }
    } 
    else {
        return (
        <tr className={css(styles.defaultRow)}>
            <td className={css(styles.td)}>{ textFirstCell }</td>
            <td className={css(styles.td)}>{ textSecondCell }</td>
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