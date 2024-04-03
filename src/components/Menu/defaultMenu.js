import { Outlet } from "react-router"
import { Menubar } from 'primereact/menubar';
import "primeicons/primeicons.css";
import { useNavigate } from 'react-router-dom'


export const DefaultMenu = () => {

    const navigate = useNavigate()

    const items = [
        {
            icon: 'pi pi-user', items: [
                { label: 'Login', command: () => { navigate("login") } },
                { label: 'Register', command: () => { navigate("register") } }
            ]
        },
        { label: 'Home', icon: 'pi pi-home', command: () => { navigate("") } },
    ]

    return (

        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
