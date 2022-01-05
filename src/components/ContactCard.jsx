import React from "react";
import user from '../images/user.png';
const ContactCard = ({contact}) => {
  return (
    <div className="item">
    <img style={{marginTop:'12px'}}
    className="ui avatar image"
    src={user} alt="user logo" />
      <div className="content">
        <div className="header"> {contact.name}</div>
        <div> {contact.email} </div>
      </div>
      <i
        style={{ color: "red", marginTop: '5px' }}
        id="trash_icon"
        className="trash alternate outline icon"
      ></i>
    </div>
  );
};

export default ContactCard;
