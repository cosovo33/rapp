import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";
import { FormControl, Button} from "@mui/material"  ;
import { TextField } from "@mui/material";

const Register =()=> {
 
const [user, setUser]=React.useState({
    userName: "",
    password: "",
    passwordConfrim: "",
  })
  
  const Mychange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setUser({ ...user, [nam]: val });
};
const strCompare=(p,s)=>{
    return p===s;
}
  const passwordMatch = () => {
      console.log(user);
     let v =  strCompare(user.password,user.passwordConfrim) ;
     console.log(v);
     /*if(v===false)
     {alert("password miss match. try again");
    setUser({...user,[user.passwordConfrim]:''})
}else console.log(user);*/
}


  const submitRegistration = e => {
    e.preventDefault();
    passwordMatch();
    }
    
    return (
      <div >
        <CssBaseline />

        <Paper >
          
            <FormControl required fullWidth margin="normal">
              
              <TextField
                autoFocus
                margin="dense"
                name="username"
                id="nameSu"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                onChange={Mychange}
                required
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
            <TextField
                autoFocus
                margin="dense"
                name="password"
                id="pwd"
                label="pasword"
                type="password"
                fullWidth
                variant="standard"
                onChange={Mychange}
                required
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
            <TextField
                autoFocus
                margin="dense"
                name="passwordConfirm"
                id="cpwd"
                label="pasword"
                type="password"
                fullWidth
                variant="standard"
                onChange={Mychange}
                required
              />
            </FormControl>
            <Button
              fullWidth
              variant="outlined"
              
              type="submit"
              onClick={submitRegistration}
            >
              Join
            </Button>
        </Paper>
      </div>
    );
  }


export default Register;