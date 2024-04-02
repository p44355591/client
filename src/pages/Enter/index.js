import './style.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export const Enter = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isValidValues, setIsValidValues] = useState(true);

    const handleUserName = (event) => {
        setUserName(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const checkValues = () => {
        console.log("שליחת הנתונים של שם משתמש וסיסמא לסרבר ובדיקה אם קיימים בדטה בייס", userName, password);
        const valiValues = false; // נקבל את התשובה מהסרבר
        if(valiValues){
            //הכנס לגמחים
        }
        else{
            setIsValidValues(false)
        }
    }

    return (<div className='enter-container'>
        <TextField id="outlined-basic" label="שם משתמש" variant="outlined" value={userName} onChange={handleUserName}/>
        <TextField id="outlined-basic" label="סיסמא" variant="outlined" value={password} onChange={handlePassword}/>

        <Button variant="outlined" onClick={()=>checkValues()}>הכנס</Button>

        {!isValidValues && <div>המשתמש אינו קיים במערכת</div>}

    </div>)
}