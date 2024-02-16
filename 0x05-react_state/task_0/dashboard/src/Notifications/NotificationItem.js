import React, { PureComponent } from "react";
import PropType from "prop-types";
import { StyleSheet, css } from "aphrodite";



const styles = StyleSheet.create({
  default: {
    color: 'blue',
    "@media (max-width: 900px)": {
      borderBottom: "1px solid black",
      listStyle: "none",
      fontSize: "20px",
      padding: "10px 8px",
    },
  },
  urgent: {
    color: 'red',
    "@media (max-width: 900px)": {
      borderBottom: "1px solid black",
      listStyle: "none",
      fontSize: "20px",
      padding: "10px 8px",
    },
  }
})

class NotificationItem extends PureComponent {
  static PropType = {
    __html: PropType.shape({
      html: PropType.string,
    }),
    type: PropType.string.isRequired,
    value: PropType.string,
    markAsRead: PropType.func,
    id: PropType.number,
  };

  static defaultProps = {
    type: "default",
    markAsRead: () => {
      return;
    },
    id: 0,
  };

  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={() => markAsRead(id)} data-notification-type={type} className={type === "default" ? css(styles.default) : css(styles.urgent)}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            className={css(styles.urgent)}
            onClick={() => markAsRead(id)}
            data-notification-type={type}
            data-urgent
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </>
    );
  }
}

export default NotificationItem;
