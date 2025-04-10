// import React, { useState } from 'react'
// import axios from "axios"

// const Register = () => {
//     const[username,setUsername]=useState("");
//     const[password,setPassword]=useState("");
//     const[message,setMessage]=useState("");

//     const handleSubmit=async (e)=>{
//         e.preventDefault();
//         try{
//           const response= await axios.post('http://localhost:3001/api/auth/register',{
//             username,
//             password
//           })
//           setMessage(response.data.message)
//         }
//         catch(error){
//             console.error("Registration Failed:",error.response.data.error);
//             setMessage(error.response.data.error)
//         }
//     }
//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' required />
//         <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' required />
//         <button type='submit'>Register</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   )
// }

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Joy UI imports
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/register', {
        username,
        password,
      });
      setMessage(response.data.message);
      navigate('/login')
    } catch (error) {
      console.error('Registration Failed:', error.response?.data?.error);
      setMessage(error.response?.data?.error || 'Registration failed.');
    }
  };

  return (
    <CssVarsProvider>
      <CssBaseline />
      <main>
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
            <Typography level="h1" component="h1" sx={{ mb: 2 }}>
              <b>Register</b>
            </Typography>
            <Typography level="body-sl">Create a new account</Typography>

            {message && (
              <Typography level="body-sm" color="primary" sx={{ mt: 1 }}>
                {message}
              </Typography>
            )}

            <FormControl sx={{ mt: 2 }}>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                placeholder="Enter a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormControl>

            <FormControl sx={{ mt: 2 }}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>

            <Button type="submit" sx={{ my: 3 }} >
              Register
            </Button>

            <Typography
              endDecorator={<Link href="/login">Back to login</Link>}
              sx={{ fontSize: 'sl', alignSelf: 'center' }}
            >
              Already have an account?
            </Typography>
          </form>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
};

export default Register;
