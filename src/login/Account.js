import logo from './img/new_logo 1.svg';
import './App.css';

import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

export function CreateAccountForm(){
    return (
        <div className="App">
            <header className="App-header">
                <input type='text' name="username"/>
                <input type="password" name="password..."/>
                <button onClick={"CreateAccount"}>저장</button>
            </header>
        </div>
    );
}

export function CreateAccount() {
    fetch("http://localhost", {
        body: {
            username,
        }
    }).then(res => res.json()).then((res) => {
        setErrorMessage(' error occured');
    });
}

export default CreateAccountForm;
