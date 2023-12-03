import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import services from "../services/services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions";



function Login(){

  const [email,setEmaiil] = useState('bob@eample.com')

  const [password,setPassword] = useState('1234')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLogin=()=>{

    services.getByField('users','email',email).then((res)=>{

        dispatch(login())

        navigate('/courses')
 
    }).catch((err)=>{

      alert('Something went wrong try again')

    })

  }


  return(
    <Box sx={{display:'flex',flexDirection:"row",justifyContent:'center'}}>
      <Box sx={{width:'350px',display:"flex", flexDirection:'column',gap:'10px',marginTop:'10%'}}>
    
      <Typography textAlign={'center'} variant="h5">Login</Typography>
      <TextField
       value={email}
       onChange={(e)=>setEmaiil(e.target.value)}
       label='Enter Email Id'
       size="small"
       fullWidth

      />
      <TextField
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      label='Enter Email Id'
      size="small"
      fullWidth

      />
      <Button variant="contained" 
      onClick={handleLogin}
      >Login</Button>
      </Box>
    </Box>
  )

}

export default Login