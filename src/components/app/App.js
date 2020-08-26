import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "../header/header";
import Main from "../main/main";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Top from "../top/top";
import {photos} from "../../photo";

function App() {

    let users = JSON.parse(localStorage.getItem('users'))

    let state = users ? users : photos
    const [photo, setPhoto] = useState(state)

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(photo))
    }, [photo])

    return (
        <Router>
            <Switch>
                <Route path={'/top10'}>
                    <Top photo={photo}/>
                </Route>
                <div className="App">
                    <Header/>
                    <Main photo={photo} setPhoto={setPhoto}/>
                </div>
            </Switch>

        </Router>
    );
}

export default App;
