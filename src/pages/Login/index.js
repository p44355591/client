
// import TextField from '@mui/material/TextField';
// import './style.css'
// import Button from '@mui/material/Button';
// import { useState } from 'react';

// const [firsName, setfirstName] = useState("");
// const [lastName, setlastName] = useState("");
// const [phone, setphone] = useState("");
// const [email, setemail] = useState("");
// const [userName, setuserName] = useState("");
// const [password, setpassword] = useState("");

// const enterValues=()=>{
//     console.log('הכנס נתונים לדטה בייס')
// }

// const handlePassword = (event) => {
//     setPassword(event.target.value)
// }

// export const Login = () => {
//     return (<div className='enter-container'>
//         <TextField id="outlined-basic" label="שם פרטי" variant="outlined" value={firsName}  onChange={handleUserName}/>
//         <TextField id="outlined-basic" label="שם משפחה" variant="outlined" value={lastName} onChange={handleUserName} />
//         <TextField id="outlined-basic" label="טלפון " variant="outlined" value={phone} onChange={handleUserName}/>
//         <TextField id="outlined-basic" label="מייל " variant="outlined"  value={email} onChange={handleUserName}/>
//         <TextField id="outlined-basic" label="שם משתמש" variant="outlined"  value={userName} onChange={handleUserName}/>
//         <TextField id="outlined-basic" label="סיסמא " variant="outlined"value={password} onChange={handleUserName}/>
//         <Button variant="outlined" onClick={()=>enterValues()}>הכנס</Button>

//     </div>)
// }