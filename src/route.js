import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route as ReactRouter} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Account from "./pages/login/Account";
import {HomePage} from "./pages/HomePage";

export function Route() {
  return <BrowserRouter>
    <Routes>
      <ReactRouter path={"/login"} Component={LoginPage}></ReactRouter>
      <ReactRouter path={"/account"} Component={Account}></ReactRouter>
      <ReactRouter path={"/home"} Component={HomePage}></ReactRouter>
      <ReactRouter path={"*"} Component={() => "default"}></ReactRouter>
    </Routes>
  </BrowserRouter>
}
