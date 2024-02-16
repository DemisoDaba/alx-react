import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

const styles = StyleSheet.create({
  App: {
    fontFamily: "Arial",
    padding: "10px",
    position: "relative",
    minHeight: "100vh",
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    }

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  handleDisplayDrawer() {
    this.setState(prevState => ({
      displayDrawer: true
    }));
  }

  handleHideDrawer() {
    this.setState(prevState => ({
      displayDrawer: false
    }));
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keydownEvent);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownEvent);
  }

  keydownEvent = (e) => {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className={css(styles.App)}>
        <Notifications listNotifications={listNotifications} 
                        displayDrawer={this.state.displayDrawer}
                        handleDisplayDrawer={this.handleDisplayDrawer}
                        handleHideDrawer={this.handleHideDrawer}/>
        <Header />
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </BodySection>
        <Footer />
      </div>
    );
  }
}

export default App;
