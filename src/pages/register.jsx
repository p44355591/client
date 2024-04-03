import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

export const Register = () => {
    const [value, setValue] = useState('');
    

    return (<>
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
                <small id="username-help">
                    Enter your username to join .
                </small>
            </div>
            <div className="flex flex-column gap-2">
            <label htmlFor="email">Email</label>
                <InputText id="email" aria-describedby="email-help" />
                <small id="email-help">
                    Enter your email .
                </small>
                </div>
                <div className="flex flex-column gap-2">
                <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
                </div>
                <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Sambit" raised />
            </div>
        </div>
    register page</>)
}


//export default function HelpTextDemo() {
//    return (
       
//    )
//}