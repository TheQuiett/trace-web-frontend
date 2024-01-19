import '../../App.css';

import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import {AutoLogin} from "./AutoLogin";
import TextInput from "../../components/TextInput";
import validators from "../../utils/validator";
import {useEffect, useState} from "react";

export function LoginPage({_username}) {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [idSaveFlag,setIdSaveFlag] = useState("true" == localStorage.getItem("ID_SAVE_FLAG_KEY"));
    const [randomValue] = useState(Math.random().toString());

    console.log(randomValue);

    console.log("ID_SAVE_FLAG_KEY:"+!localStorage.getItem("ID_SAVE_FLAG_KEY"));

    const clickEvent = () => {
        console.log("userName:" + userName + ",userPassword:" + userPassword);
    }

    const idSaveFlagEvent = () => {
        localStorage.setItem("ID_SAVE_FLAG_KEY",!idSaveFlag);

        setIdSaveFlag(!idSaveFlag);

    }

    // useEffect(()=>{
    //
    //     if(3 < userName.length){
    //         alert("입력 범위를 초과하였습니다.1");
    //     }
    //
    //     if(3 < userPassword.length){
    //         alert("입력 범위를 초과하였습니다.2");
    //     }
    //
    // },[userName,userPassword])

    //useState 하는 변수의 변경애 따른 event 처리
    /* useEffect(() => {
         // initial fetch
         // 화면이 1회 그려지고 난뒤 1회 호출
         setUsername("hwang")

     }, []);*/

    /*useEffect(() => {
        console.log("useEffect username " + username)
    }, [username]);*/

    return (
        <div className="App">
            <header className="App-header">
                <input type={"text"} value={userName}
                       onChange={(e) => {
                           if (3 < (e.target.value).length) {
                               setErrorMessage("입력 범위를 초과 하였습니다.");
                           } else {
                               setUserName(e.target.value);
                               setErrorMessage("");
                           }
                       }}
                       placeholder={"사용자이름을 입력하세요"}></input>

                {/*{*/}
                {/*    (!!errorMessage.length ? <p>{errorMessage}</p> : null)*/}
                {/*}*/}
                {!!errorMessage && <p>{errorMessage}</p>}

                <input type={"password"} value={userPassword}
                       onChange={(e) => setUserPassword(e.target.value)}></input>
                <button onClick={clickEvent}>Login</button>
                <AutoLogin/>
                <span>아이디 저장<input type="checkbox" onClick={idSaveFlagEvent} checked={idSaveFlag}/></span>
            </header>
        </div>
    );
}

export default LoginPage;
