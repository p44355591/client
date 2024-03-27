import { Outlet } from "react-router"
import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <>
            <>
                <Link to="">home</Link>
                <Link to="/login">login</Link>
            </>

            <Outlet />
        </>
    )
}