
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import './style.css'
import Button from '@mui/material/Button';



export const Login = () => {
    const [firsName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [userName, setuserName] = useState("");
const [password, setpassword] = useState("");

const enterValues=()=>{
    console.log('הכנס נתונים לדטה בייס')
}

const handleFirstName = (event) => {
    setfirstName(event.target.value)
}

const handleLastName = (event) => {
    setlastName(event.target.value)
}

const handlePhone = (event) => {
    setphone(event.target.value)
}

const handleEmail = (event) => {
    setemail(event.target.value)
}

const handleUserName = (event) => {
    setuserName(event.target.value)
}

const handlepassword = (event) => {
    setpassword(event.target.value)
}

    return (<div className='enter-container'>
        <TextField id="outlined-basic" label="שם פרטי" variant="outlined" value={firsName}  onChange={handleFirstName}/>
        <TextField id="outlined-basic" label="שם משפחה" variant="outlined" value={lastName} onChange={handleLastName} />
        <TextField id="outlined-basic" label="טלפון " variant="outlined" value={phone} onChange={handlePhone}/>
        <TextField id="outlined-basic" label="מייל " variant="outlined"  value={email} onChange={handleEmail}/>
        <TextField id="outlined-basic" label="שם משתמש" variant="outlined"  value={userName} onChange={handleUserName}/>
        <TextField id="outlined-basic" label="סיסמא " variant="outlined"value={password} onChange={handlepassword}/>
        <Button variant="outlined" onClick={()=>enterValues()}>הכנס</Button>

    </div>)
}