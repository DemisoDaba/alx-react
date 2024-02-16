import React, { Component } from 'react'
import BodySection from './BodySection'
import PropTypes from 'prop-types'
import { StyleSheet, css } from "aphrodite";


class BodySectionWithMarginBottom extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    };

  render() {
    return (
      <div className={css(styles.BodySectionWithMarginStyle)}>
        <BodySection {...this.props} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  BodySectionWithMarginStyle: {
    marginBottom: '40px'
  }
});

export default BodySectionWithMarginBottom