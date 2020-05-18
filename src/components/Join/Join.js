import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgchat from '../Join/chatroom.jpg'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return(
        <div className="b-container">
            <div className="joinOuterContainer">
                <div className="joinInnerContainer sign-in-container">
                <form>
                        <h2>Join | <strong>chat room</strong></h2>
                            <div className="form-group mt-3">
                                <input className="form-control" required type="text" onChange={(event) => setName(event.target.value)} />
                                <label className="label-name" for="name" onClick="">Display name</label>
                            </div>
                            <div className="form-group">
                                <input className="form-control" required type="text" onChange={(event) => setRoom(event.target.value)} />
                                <label className="label-room" for="name">Chatroom</label>
                            </div>
                                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                                    <Button className="btn-enter mt-3" type="submit">Enter room</Button>
                                </Link>
                    </form>
                </div>
                <div className="overlay-container">
                    <div>
                    <img src={imgchat} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join;