import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Avatar,
  Box,
  useMediaQuery,
  IconButton,
  ListItemIcon,
  Collapse,
  ListItem,
  Drawer,
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './welcome.styles';
import MenuIcon from '@material-ui/icons/Menu';
import { HashLink, NavHashLink } from 'react-router-hash-link';

function NavbarComponent(props) {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const classes = useStyles();
  let history = useHistory();

  function handleClick() {
    history.push("/form/create");
  }
  return (
    <div className={classes.root}>
      {isMobile ? (
        <Toolbar>
          <IconButton
            {...{
              edge: 'start',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}>
            <MenuIcon />
          </IconButton>

          <Drawer
            {...{
              anchor: 'left',
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}>
            <div className={classes.drawerContainer}>
              <Box ml={5} color='inherit' className={classes.buttonFontSize}>
                <a href='/form/create'>

                  Create Form
                </a>
              </Box>
              <Box ml={5} color='inherit' className={[classes.buttonFontSize]}>
                <a href='/form'>

                  Form
                </a>
              </Box>
              <Box ml={5} color='inherit' className={[classes.buttonFontSize]}>
                <a href='/forms'>

                  Answers
                </a>
              </Box>
            </div>
          </Drawer>
        </Toolbar>
      ) : (
        <AppBar position='fixed' color='default' className={classes.AppBar}>
          <Grid item sm={12} xs={12} className={classes.container}>
            <Toolbar>
              <Grid className={classes.grow}>
                <Box display='flex' flexDirection='colmn'>
                  <Box display='flex' flexDirection='colmn'>
                    <PhoneIcon color='primary' />
                    <Box ml={2} fontSize={18} className={classes.link}>
                      {' '}
                      TN (+216) 26 314 922
                    </Box>
                  </Box>
                  <Box ml={2} display='flex' flexDirection='colmn'>
                    <EmailIcon color='primary' />
                    <Box ml={2} fontSize={18} className={classes.link}>
                      info@arsela.co
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Box ml={5} color='inherit' className={classes.buttonFontSize}>
                <a href='/form/create' className={classes.link}>

                  Create Form
                </a>
              </Box>
              <Box ml={5} color='inherit' className={[classes.buttonFontSize]}>
                <a href='/form' className={classes.link}>

                  Form
                </a>
              </Box>
              <Box ml={5} color='inherit' className={[classes.buttonFontSize]}>
                <a href='/forms' className={classes.link}>

                  Answers
                </a>
              </Box>
            </Toolbar>
          </Grid>
        </AppBar>
      )
      }
    </div >
  );
}

export default NavbarComponent;
