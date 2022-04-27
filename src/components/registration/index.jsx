import React, { useState } from "react";
import {
  Box,
  Card,
  Container,
  CssBaseline,
  FormGroup,
  TextField,
} from "@mui/material";
import { Button } from "@mui/material";




const styles = {
  paperContainer: {
      backgroundImage: `url(${"../../../public/leafWP.jpg"})`
  }
};
const Register = () => {

  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password); //axios post request to the backend server
    handleClose();
  };

  return (
   
    <Container styles={styles.paperContainer} sx={{bgcolor:'#ffcdd2',textAlign:'center',width:2/3}} >
      <CssBaseline>
        <Card sx={{ margin:'auto',width:2/3}}>
        <form onSubmit={handleSubmit}>
          <Box sx={{display:'flex'}}>
          <TextField
            sx={{width:1/2}}
            label="First Name"
            variant="filled"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            sx={{width:1/2}}
            label="Last Name"
            variant="filled"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
</Box>
         
          <FormGroup>
            <TextField
            fullWidth
              label="Email"
              variant="filled"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
            fullWidth
              label="Password"
              variant="filled"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Box>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
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
