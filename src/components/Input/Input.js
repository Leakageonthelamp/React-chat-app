import React from 'react';
import './Input.css';
import sendIcon from '../../icons/icon2.png';

const Input = ({ message, setMessage, sendMessage }) =>(
    <form className="form">
    <input className="input"
    type="text"
    placeholder="Type a message..."
    value={message}
    onChange={(event) => setMessage(event.target.value)}
    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
    <button className="sendButton" onClick={(event) => sendMessage(event)}><img className="sendIcon" src={sendIcon} alt="online" /></button>
    </form>
)

export default Input;