import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpPage, {Login} from "./SignUpPage";
import Account from "./login/Account";

export function App() {
    return  <BrowserRouter>
        <Routes>
            <Route path={"login"} Component={Login}></Route>
            <Route path={"account"} Component={Account}></Route>
            <Route path={"*"} Component={() => "default"}></Route>
        </Routes>
    </BrowserRouter>
}