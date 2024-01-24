import '../../App.css';
import React, {useState} from "react";

export function CreateAccountForm(){

    const [userName,setUserName] = useState("");
    const [userPassword,setUserPassword] = useState("");

    const handleSubmit = ()=>{

        // console.log("userName:"+userName+",userPassword:"+userPassword);

        fetch('http://localhost:8080/createAccount', {
            method: "post",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                "userName":userName,
                "userPassword":userPassword
            }),
        })
        .then(response => response.json())
        .then(data => {
            // API 응답 데이터를 처리하는 로직

        })
        .catch(error => {
            // 에러 처리 로직
            // console.error('Error fetching data:', error);
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <input type={"text"}        value={userName}        onChange={(e) => setUserName(e.target.value)}></input>
                <input type={"password"}    value={userPassword}    onChange={(e) => setUserPassword(e.target.value)}></input>
                <button onClick={handleSubmit}>저장</button>
            </header>
        </div>
    );
}

export default CreateAccountForm;
