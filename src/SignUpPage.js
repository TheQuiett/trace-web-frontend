import logo from './img/new_logo 1.svg';
import './App.css';

import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

export function SignUpPage() {
    const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo"/>
        <p>
          Trace iOT
        </p>
        <input type='text'/>
        <input type="text"/>
        <button>Login</button>
        <span>
          아이디 저장
          <input type="checkbox"/>
        </span>

      </header>
    </div>
  );
}

export function Login(){
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo"/>
          <p>
            Trace iOT
          </p>
          <input type='text'/>
          <input type="text"/>
          <button>Login</button>
          <span>
          아이디 저장
          <input type="checkbox"/>
              <a href={"/account"}>signup</a>
        </span>

        </header>
      </div>
  );
}

export default SignUpPage;
