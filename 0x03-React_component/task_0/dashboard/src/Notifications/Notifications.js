import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape';


function Notifications({displayDrawer, listNotifications}) {
    return (
        <div className='placing'> 
            { displayDrawer ? (
                <div className='Notifications'>
                    <div className='menuItem'>
                        Your notifications
                    </div>
                    <button style={{ position: "absolute",
                            top: 20,
                            right: 15,
                            border: "none",
                            background: "transparent"
                        }}
                    aria-label="Close"
                    onClick={() => {console.log('Close button has been clicked');}}>
                        <img src={closeIcon} alt='close-icon' width={"10px"}/>
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications && listNotifications.length > 0 ? (
                            listNotifications.map(({id, type, html, value}) => <NotificationItem key={id} type={type} html={html} value={value} />
                        )) : (
                            <NotificationItem value="No new notification for now" />
                        )};
                    </ul>
                </div>
            ) : (
                <div className='menuItem'>
                    Your notifications
                </div>
            ) }   
        </div>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),

  };
  
  Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

export default Notifications;