import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useDispatch } from "react-redux";

export const Register = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    function onSubmit(){
        //פה צריך להיות קריאת שרת שמעדכנת את המשתמש
        //אם זה הצליח -  לא היה שום בעיה בדרך 
        //אנחנו נרצה לשמור שיש לנו לקוח מחובר
        //לבן נששתמש ברידאקס
        //dispatch(updateCurrentUser(פה נשלח את הלקוח שחזר מהשרת))
        //וונוט את הלקוח לדף הבית באמצעות useNavigate
    }
    

    return (
        <div className="card flex justify-content-center">
            <input>name</input>
            <input>password</input>
            <input>name</input>
            <button onClick={onSubmit}>register</button>

           </div>)
}


//export default function HelpTextDemo() {
//    return (
       
//    )
//}