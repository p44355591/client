import { Outlet } from "react-router"
import { Menubar } from 'primereact/menubar';
import "primeicons/primeicons.css";
import { useSelector } from "react-redux";
import { UserMenu } from "./userMenu";
import { DefaultMenu } from "./defaultMenu";


export const Menu = () => {

    const currentUser = useSelector(s=> s.users.currentUser)

    return (

        <div>
            {currentUser ? <UserMenu /> : <DefaultMenu />}
            <Outlet />
        </div>
        // <>
        //     <>
        //         <Link to="">home</Link>
        //         <Link to="/login">login</Link>
        //     </>

        // </>
    )
}