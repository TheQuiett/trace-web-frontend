import logo from './img/new_logo 1.svg';
import './App.css';

import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

export function Login(){
    return (
        <div className="App">
            <header className="App-header">
                <input type='text'      name="username"/>
                <input type="password"  name="password"/>
                <button>Login</button>
                <span>아이디 저장<input type="checkbox"/></span>

            </header>
        </div>
    );
}

export default CreateAccount;
