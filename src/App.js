import "./App.css";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; //valider les types des props passées et peret d'exiger des valeurs par default et certains types
//material-ui components imports
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import Slide from "@mui/material/Slide";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
//material-ui menu used in the dropdown list of links in the appbar
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
//dialog box imports used in sign up and sign in
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//material-ui Icons imports
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssignmentIcon from "@mui/icons-material/Assignment";



/* ***start of styles block*** */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

/* ***end of styles *** */


/* ***start of declaration block(props consts functions used in my main arrow function) *** */

//Hide scroll function****

const HideOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
//links of my homepage
const items = [
  
  {
    path: "/contact",
    text: "Contact us",
  },{
    path: "/",
    text: "Home",
  },{
    path: "/admin",
    text: "Admin",
  },{
    path: "/categories",
    text: "Categories",
  },
  {
    path: "/about",
    text: "About us",
  },
  
];

/* *** end of declaration block(props consts functions used in my main arrow function) *** */
const App = (props) => {
  {
    /*the specification of menu list */
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate=useNavigate();
   /* handle close for menuitem list of links */
  const HandleClose = (path) => {
    setAnchorEl(null);
    navigate(path);
  };
  {
    /*end of specification menu list  */
  }

  {
    /*the specification of sign in and sign up dialog box */
  }
  const [openSi, setOpenSi] = React.useState(false);//for sign in
  //const [openSu, setOpenSu] = React.useState(false);//for sign up
  const [userSI, setUserSI] =React.useState({username :'', password:'' })

  const MychangeSI = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setUserSI({ ...userSI, [nam]: val });
};
  const  handleSignInSubmit = ()=>{
    alert(userSI.username+''+userSI.password);
    /* ***test 26/04/2022 :***
     ++ Retrievind data from text fields works just fine . ++
    !! -- axios POST call to verify credentials -- !!
    !! -- if user is logged redirect to account page -- !!
    ???sign in and sign up must appear as long as there is no token and no session???
    */
    setUserSI({username :'', password:'' }); //to clean the placeholders and reset the state
  }
  const handleClickOpen = (p) => {
    if (p === "openSi") setOpenSi(true);
    //else if (p === "openSu") setOpenSu(true);
  };

  const handleClickClose = (p) => {
    if (p === "openSi") setOpenSi(false);
   // else if (p === "openSu") setOpenSu(false); 
   };
  {
    /*end of specification sign in and sign up dialog box  */
  }


  return (
    <div className="App">
      <header className="App-header">
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              {/* menuItemsto be shown */}
              <IconButton
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={HandleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {items.map((item) => (
                  <MenuItem
                    onClick={() => {
                      HandleClose(item.path);
                    }}
                    key={item.text}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                YUMMY.TN
              </Typography>

              <Stack direction="row" spacing={2}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AssignmentIndIcon />}
                  onClick={() => {
                    handleClickOpen("openSi");
                  }}
                >
                  Sign in
                </Button>
                {/* opens up when sign in is clicked :: statehandling with openSi */}
                <Dialog
                  open={openSi}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => {
                    handleClickClose("openSi");
                  }}
                >
                  <DialogTitle>Sign In </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                    To log in to your account please enter your email and your password.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      name="username"
                      id="nameSi"
                      label="Email Address"
                      type="email"
                      fullWidth
                      onChange={MychangeSI}
                      variant="standard"
                      value={userSI.username}

                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name="password"
                      id="passwordSi"
                      label="password"
                      type="password"
                      fullWidth
                      onChange={MychangeSI}
                      value={userSI.password}
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => {
                        handleClickClose("openSi");
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        handleSignInSubmit();
                        handleClickClose("openSi");
                      }}
                    >
                      Login
                    </Button>
                  </DialogActions>
                </Dialog>
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<AssignmentIcon />}
                  onClick={() => {
                    //handleClickOpen("openSu");
                    navigate('/Register');
                  }}
                >
                  Sign up
                </Button>
                {/* opens up when sign in is clicked :: statehandling with openSu */}
                {/*<Dialog
                  open={openSu}
                  onClose={() => {
                    handleClickClose("openSu");
                  }}
                  TransitionComponent={Transition}
                  keepMounted
                >
                  <DialogTitle>Sign In Form</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      To register to our website ;please fill the following form. 
                      ps: it will be a component with props passed through .
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="nameSU"
                      label="Email "
                      type="email"
                      fullWidth
                      onChange={(e)=>{console.log(e.target.value);}}
                      variant="standard"
                      //value={''}

                    />

                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => {
                        handleClickClose("openSu");
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        handleClickClose("openSu");
                      }}
                    >
                      Subscribe
                    </Button>
                  </DialogActions>
                    </Dialog>*/}
              </Stack>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        {/*not the navbar element what is after this comm */}
        <Container>
          <Box sx={{ my: 2 }}>
            {/*[...new Array(10)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")*/}

              <h4>this is header</h4>

          </Box>
        </Container>
      </header>
      <div>the main core</div>
      <footer>
        <h6>this is footer</h6>
      </footer>
    </div>
  );
};

export default App;
