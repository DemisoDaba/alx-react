import React, { Component } from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    }

    this.isDisplayed = this.isDisplayed.bind(this);
    this.isHidden = this.isHidden.bind(this);
    }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  isDisplayed() {
    this.props.handleDisplayDrawer();
        this.setState(prevState => ({
            displayDrawer: true
        }));
  }

  isHidden() {
    this.props.handleDisplayDrawer();
        this.setState(prevState => ({
            displayDrawer: false
        }));
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.listNotifications.length > this.props.listNotifications.length ||
      this.state.displayDrawer !== nextState.displayDrawer){
        return true;
      }
    return false;
  }

  render() {
    const { listNotifications } = this.props;
    return (
      <div className={css(styles.placing)}>
        {this.state.displayDrawer ? (
          <div className={css(styles.NotificationSyle)}>
            
            <button
              style={{
                position: "absolute",
                top: 20,
                right: 15,
                border: "none",
                background: "transparent",
              }}
              aria-label="Close"
              onClick={() => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close-icon" width={"10px"} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map((val, idx) => (
                  <NotificationItem
                    key={val.id}
                    type={val.type}
                    html={val.html}
                    value={val.value}
                    markAsRead={this.markAsRead}
                    id={val.id}
                  />
                ))
              ) : (
                <NotificationItem value="No new notification for now" />
              )}
            </ul>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>Your notifications</div>
        )}
      </div>
    );
  }
}

const opacityFrames = {
  'from': {
      opacity: '0.5'
  },
  'to': {
      opacity: '1'
  }
}

const bouncingFrames = {
  '0%': {
      transform: 'translateY(0)'
  },
  '25%': {
      transform: 'translateY(5px)'
  },
  '50%': {
      transform: 'translateY(-5px)'
  },
  '75%': {
      transform: 'translateY(5px)'
  },

}

const styles = StyleSheet.create({
  NotificationSyle: {
    position: 'relative',
    border: '1px dashed #c1384c',
    padding: '20px',
    width: '400px',
    '@media (max-width: 900px)': {
      display: "block",
      height: "100vh",
      width: "100vw",
      marginLeft: "auto",
      marginRight: "auto",
      borderStyle: 'none',
      fontSize: "20px",
      paddingLeft: '100px',
      padding: "20px",
      backgroundColor: "white",

    }
  },

  placing: {
    position: 'absolute',
    top: '0',
    right: '10px',
  },
  menuItem: {
    textAlign: 'end',
    backgroundColor: '#fff8f8',
    float: 'right',
    ":hover": {
      cursor: "pointer",
      animationName: [opacityFrames, bouncingFrames],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  }
})

export default Notifications;
