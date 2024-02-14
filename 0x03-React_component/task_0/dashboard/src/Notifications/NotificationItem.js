import React from 'react'
import PropType from 'prop-types'


NotificationItem.PropType = {
  __html: PropType.shape({
    html: PropType.string
  }),
  type: PropType.string.isRequired,
  value: PropType.string
}

NotificationItem.defaultProps = {
  type: "default"
}

function NotificationItem({type, html, value}) {
  
  return (
    <>
      { type && value ? <li data-notification-type={type}>{value}</li> : null }
      { html ? <li data-notification-type={type} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null }
    </>
    
  );
}


export default NotificationItem