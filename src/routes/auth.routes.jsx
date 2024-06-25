import {Routes, Route} from "react-router-dom"

import { SignIn } from "../pages/singIn"
import { SignUp } from "../pages/singUp"


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element= {<SignIn/>} />
            <Route path="/register" element= {<SignUp/>} />
        </Routes>  
    )
}