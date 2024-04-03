import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Menu } from "../components/Menu/menu"
import { Login } from "../pages/Login"
import { GmachBycategory } from "../pages/GmachBycategory"
import { Enter } from "../pages/Enter"
import { Kategory } from "../pages/kategory"
import { Addgmach } from "../pages/addgmach"
import { Register } from "../pages/register"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Menu />}>
                    <Route path="" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="enter" element={<Enter />} />
                    <Route path="kategory" element={<Kategory />} >
                        <Route path=":id" element={<GmachBycategory />} />
                        <Route path="addgmach" element={<Addgmach />} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}