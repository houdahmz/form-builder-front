import {Box, ListItem, ListItemText, Typography} from '@material-ui/core';
import React from 'react';
import List from '@material-ui/core/List';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YoutubeIcon from '@material-ui/icons/YouTube';
import useStyles from './welcome.styles';
function Footer(props) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footerBox}>
        {/* <Box>
          <img width={320} src={'/assets/images/logo-khallasli.png'}></img>
        </Box> */}
        <Box
          display='flex'
          flexDirection='row'
          flexWrap='wrap'
          justifyContent='space-between'>
          <Box order={2}>
            <Typography className={classes.footerTitles}>CONTACT </Typography>
            <List className={classes.footerItems}>
              <ListItem>
                <ListItemText primary='Sousse, Tunisia' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Bremen, Germany' />
              </ListItem>
              <ListItem>
                <ListItemText primary='info@arsela.co' />
              </ListItem>
              <ListItem>
                <ListItemText primary='TN (+216) 26 314 922' />
              </ListItem>
              <ListItem>
                <ListItemText primary='DE +49 421-16187986' />
              </ListItem>
            </List>
          </Box>
          <Box order={1} width={{md: '450px', sm: '350px'}}>
            <Typography className={classes.footerTitles}>
              A PROPOS DE ARSELA
            </Typography>
            <Typography className={classes.footerabout}>
            ARSELA est une start-up de services informatiques qui offre une variété de solutions innovantes qui répondent aux défis de la transformation digitale.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
