import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Account from "./pages/login/Account";

export function App() {
    return  <BrowserRouter>
        <Routes>
            <Route path={"login"} Component={LoginPage}></Route>
            <Route path={"account"} Component={Account}></Route>
            <Route path={"*"} Component={() => "default"}></Route>
        </Routes>
    </BrowserRouter>
}