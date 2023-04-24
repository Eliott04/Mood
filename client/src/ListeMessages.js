import React from 'react';
import Message from './Message';


const ListeMessages = (props) => {
  
  return (
    <div>
      <nav id="page">
        {props.messages.reverse().map((message) => (
          <Message key={message._id} message={message} userLogin={props.userLogin} handleUserClick = {props.handleUserClick} setUser = {props.setUser}/> 
        ))}
      </nav>
    </div>
  );
};



export default ListeMessages;