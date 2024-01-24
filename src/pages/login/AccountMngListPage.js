import '../../App.css';
import React, {useEffect, useState} from "react";

export function CreateAccountForm(){

    const [userName,setUserName] = useState("");
    const [userPassword,setUserPassword] = useState("");
const [list, setList] = useState([]);
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

    useEffect(() => {
        // init
        // fetch data
        setList([{id:1, name:"hwawerng", age:22},
            {id:2,name:"hwang", age:22},
            {id:3, name:"hwarrng", age:22}])
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <input type={"text"}        value={userName}        onChange={(e) => setUserName(e.target.value)}></input>
                <input type={"password"}    value={userPassword}    onChange={(e) => setUserPassword(e.target.value)}></input>
                <button onClick={handleSubmit}>저장</button>
                {
                    list.map(item => <div id={item.id}>{item.name}</div>)
                }
            </header>
        </div>
    );
}

export default CreateAccountForm;
