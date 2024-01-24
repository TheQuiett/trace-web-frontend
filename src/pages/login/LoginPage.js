import '../../App.css';

import {useNavigate} from "react-router-dom";
import {useState} from "react";

export function LoginPage({_username}) {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [idSaveFlag,setIdSaveFlag] = useState("true" == localStorage.getItem("ID_SAVE_FLAG_KEY"));

    console.log("ID_SAVE_FLAG_KEY:"+!localStorage.getItem("ID_SAVE_FLAG_KEY"));

    const idSaveFlagEvent = () => {
        localStorage.setItem("ID_SAVE_FLAG_KEY",!idSaveFlag);

        setIdSaveFlag(!idSaveFlag);
    }

    const createAccountEvent = () => {

        navigate("/account");
    }

    const loginEvent = ()=>{
        fetch('http://localhost:8080/checkLogin', {
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
            const returnData = data;

            console.log("returnData:"+returnData);

            if(null == returnData || 0 == returnData.length){
                setErrorMessage("해당 사용자 정보가 없습니다.");
            }else{

            }
        })
        .catch(error => {
            // 에러 처리 로직
            console.error('Error fetching data:', error);
        });
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
                <button onClick={loginEvent}>Login</button>
                <span>아이디 저장<input type="checkbox" onClick={idSaveFlagEvent} checked={idSaveFlag} /></span>
                <button onClick={createAccountEvent}>회원가입</button>
            </header>
        </div>
    );
}

export default LoginPage;
