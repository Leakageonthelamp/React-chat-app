import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
    <Router>
            <Route exact path="/" component={Join}></Route>
            <Route path="/chat" component={Chat}></Route>
    </Router>
);


export default App;