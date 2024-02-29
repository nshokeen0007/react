import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import AdminHead from "./dashboard/adminHeader";

function Nav(){
return(
<BrowserRouter>
<Routes>
    <Route path="/admin" element={AdminHead}></Route>
</Routes>





</BrowserRouter>

)
}

export default Nav