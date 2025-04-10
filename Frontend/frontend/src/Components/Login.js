// import React, { useContext, useState } from 'react'
// import axios from 'axios'
// import {AuthContext} from './AuthContext'
// import { useNavigate } from 'react-router-dom'


// const Login = () => {

//     const [username,setUsername]=useState("");
//     const [password,setPassword]=useState("");
//     const[errorMessage,setErrorMessage]=useState(null);
//     const { setToken }=useContext(AuthContext);
//     const navigate=useNavigate();
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         try{
//             const response= await axios.post('http://localhost:3001/api/auth/login',{
//                 username,
//                 password,
//             });
//             setToken(response.data.token);
//             localStorage.setItem("token",response.data.token);
//             localStorage.setItem("username",username)
//             // console.log('login')
//             navigate('/');
//         }
//         catch(error){
//            console.error("Authentication failed" ,error);
//            setToken(null)
//            localStorage.removeItem("token");
//            if(error.response && error.response.data){
//             setErrorMessage(error.response.data)
//            }
//            else{
//             setErrorMessage("An unexpected error occured")
//            }
//         }
//     };
//   return (
//     <div>
//         {errorMessage && <div style={{ color:"red"}}>{errorMessage}</div>}{""}
//         <form onSubmit={handleSubmit}>
//             <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/> 
//             <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
//             <button type='submit' >Login</button>
//         </form>
        
//     </div>
    
//   )
// }

// export default Login;


import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

// Joy UI imports
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
// import Select from '@mui/joy/Select';
// import Option from '@mui/joy/Option';

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <Button variant="soft">Change mode</Button>;

//   return (
//     <Select
//       variant="soft"
//       value={mode}
//       onChange={(event, newMode) => {
//         setMode(newMode);
//       }}
//       sx={{ width: 'max-content', mb: 2 }}
//     >
//       <Option value="system">System</Option>
//       <Option value="light">Light</Option>
//       <Option value="dark">Dark</Option>
//     </Select>
//   );
// }

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        username,
        password,
      });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', username);
      navigate('/');
    } catch (error) {
      console.error('Authentication failed', error);
      setToken(null);
      localStorage.removeItem('token');
      setErrorMessage(error.response?.data || 'An unexpected error occurred');
    }
  };

  return (
    <CssVarsProvider>
      <CssBaseline />
      <main>
        {/* <ModeToggle /> */}
        <Sheet
          sx={{
            width: 450,
            mx: 'auto',
            my: 25,
            py: 6,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <form onSubmit={handleSubmit}>
            <Typography level="h1" component="h1" style={{marginBottom:10}}>
              <b>Login</b>
            </Typography>
            <Typography level="body-sm">Please enter your credentials</Typography>

            {errorMessage && (
              <Typography level="body-sm" color="danger">
                {errorMessage}
              </Typography>
            )}

            <FormControl>
              <FormLabel style={{marginTop:20}} >Username</FormLabel>
              <Input
                name="username"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

            <FormControl style={{marginTop:20}}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button type="submit" sx={{ my: 3,  }}>
              Login
            </Button>

            <Typography
              endDecorator={<Link href="/register">Sign up</Link>}
              sx={{ fontSize: 'sl', alignSelf: 'center' }}
            >
              Don&apos;t have an account?
            </Typography>
          </form>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
};

export default Login;
