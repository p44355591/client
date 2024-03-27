import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Menu } from "../components/menu"
import { Login } from "../pages/login"
import { GmachBycategory } from "../pages/GmachBycategory"
import { Enter } from "../pages/enter"
import { Kategory } from "../pages/kategory"
import { Addgmach } from "../pages/addgmach"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Menu />}>
                    <Route path="" element={<Home />} >
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="enter" element={<Enter />} />
                    <Route path="kategory" element={<Kategory />} >
                        <Route path=":id"  element={<GmachBycategory />}/>
                        <Route path="addgmach" element={<Addgmach />} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}