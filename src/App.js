import "./App.css";
import * as React from "react";
import PropTypes from "prop-types"; //valider les types des props passées et peret d'exiger des valeurs par default et certains types
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

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
  
  const HandleClose = (path) => {
    setAnchorEl(null);
    /*window.location.href=path;
    props.history.push(path);*/
    navigate(path);
  };
  {
    /*end of specification menu list  */
  }
  return (
    <div className="App">
      <header className="App-header">
        <h4>this is header</h4>
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
               <MenuItem  onClick={()=>{HandleClose(item.path)}} key={item.text} >{item.text}</MenuItem>
                  ))}
                 
                {/*<MenuItem onClick={HandleClose}>Contact us</MenuItem>
                <Divider />
                <MenuItem onClick={HandleClose}> About us</MenuItem>
                <Divider />
                <MenuItem onClick={HandleClose}>Categories</MenuItem>
                <Divider />
                <MenuItem onClick={HandleClose}>Admin</MenuItem>*/}
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
                >
                  Sign in
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<AssignmentIcon />}
                >
                  Sign up
                </Button>
              </Stack>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        {/*not the navbar element what is after this comm */}
        <Container>
          <Box sx={{ my: 2 }}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
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
