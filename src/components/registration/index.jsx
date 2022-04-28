import React, { useState } from "react";
import {
  Box,
  Card,
  Container,
  CssBaseline,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import './index.css'




const Register = () => {

  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const handleClose = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setTel("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage);
    console.log(firstName, lastName, email,tel, password); //axios post request to the backend server
    handleClose();
  };

  return (
   
    <Container >
     <div  id='InitCont'width='840px' height='800px' ></div>
      <CssBaseline>
        <Card  id='InitCont1' sx={{ margin:'auto',width:2/3}}>
        <Box><Typography sx={{textTransform:'uppercase',fontWeight:'normal',fontSize:'18px' ,fontFamily:'monospace',color:'darkslateblue' ,m:'5%'}}>Join our foodie's community<br/> with simple registration </Typography></Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{display:'flex' ,spacing:'20',borderRadius:'50%'}}>
          <TextField
            sx={{width:1/2,mr:'3px',mt:'2%'}}
            label="First Name"
            variant="filled"
            required
            className="textfield"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
           sx={{ width: 1 / 2 ,mt:'2%'}}
            label="Last Name"
            variant="filled"
            required
            className="textfield"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
</Box>
         
          <FormGroup>
            <TextField
            sx={{mt:'2%'}}
            fullWidth
              label="Email"
              variant="filled"
              type="email"
              required
              className="textfield"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
            sx={{mt:'2%'}}
            fullWidth
              label="Phone"
              variant="filled"
              type="tel"
              required
              className="textfield"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <TextField
            sx={{mt:'2%'}}
            fullWidth
              label="Password"
              variant="filled"
              type="password"
              required
              className="textfield"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Box>
            <Button variant="contained" onClick={handleClose} sx={{mt:'13px' ,mr:'4px'}}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary"sx={{mt:'13px' ,mr:'4px'}}>
              Signup
            </Button>
          </Box>
        </form>
        </Card>
      </CssBaseline>
    </Container>
    
  );
};

export default Register;
