import React, { useState } from "react";
import {
  Box,
  Card,
  Container,
  CssBaseline,
  FormGroup,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./index.css";

const ContactPage = () => {
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setTel("");
    setDescription("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, tel, description); //axios post request to the backend server
    handleClose();
  };

  return (
    <Container>
      <div id="InitCont22" width="840px" height="800px"></div>
      <CssBaseline>
        <Container id="wrapper1" sx={{display:'flex', justifyContent:"space-around", width: 1 }}>
        <Card id="InitCont11" sx={{ margin: "auto", width: 2 / 3 }}>
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "Helvetica",
                color: "darkslateblue",
                mt: "4%",mb:"8%"
              }}
            >
              How can we help you
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", spacing: "20", borderRadius: "50%" }}>
              <TextField
                sx={{ width: 1 / 2, mr: "2%" ,mt:'2%'}}
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
                label="Description"
                variant="filled"
                type="text"
                multiline
                maxRows={8}
                required
                className="textfield"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <Box>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{ mt: "13px", mr: "4px" }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: "13px", mr: "4px" }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Card>
        <Card id="InitCont112" sx={{ margin: "auto", width: 2 / 3 }}>
          <Box>
            <Typography sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "Helvetica",
                color: "darkslateblue",
                mt: "5%",mb:'8%'
              }}>Contact Us Page</Typography>
            <Typography sx={{
                textTransform: "uppercase",
                fontWeight: "normal",
                fontSize: "16px",
                fontFamily: "Helvetica",
                color: "InfoText",
                m: "1%",
                textAlign:'justify'
              }}>If you need help or You want to contact us about your restaurant
             you can fill the  form aside or via these following medias: </Typography>
             <List >
              
                <ListItem>
                  <ListItemIcon>
                    <PhoneInTalkIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Our Phone assistance :"
                    secondary="+21600011122"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Our Email for promotions :"
                    secondary="yummy.blog@gmail.com.tn"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="or you can visit us at:"
                    secondary="ZI Chotrana I BP4 Parc Technologique El Ghazela, Ariana 2088"
                  />
                </ListItem>
            </List>
          </Box>
        </Card>
        </Container>
      </CssBaseline>
    </Container>
  );
};

export default ContactPage;
