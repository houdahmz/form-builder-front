import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  listItem: {
    '& .MuiListItemText-root': {
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
      },
    },
  },
  row: {
    flexGrow: 1,
  },
  vl: {
    borderLeft: '2px solid #172b4d',
    height: '31px',
  },
  grow: {
    flexGrow: 2,
  },
  container: {
    width: '85%',
    margin: 'auto',
  },
  buttonFontSize: {
    fontSize: '1.3vw',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    color: '#003255',
    marginLeft: '20px',
  },
  iconColor: {color: '#ffff'},

  AppBar: {
    //height:400,
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
    backgroundColor: '#0D0A32',
    backgroundSize: 'cover',
  },
  mainLogo: {
    color: '#a1a1a1',
    justifyContent: 'left',
    '&:hover': {
      background: 'transparent',
    },
  },

  avatar: {
    height: '100%',
    borderRadius: 0,
    width: '270px',
    [theme.breakpoints.down('sm')]: {
      width: '200px',
    },
  },

  loginButton: {
    background: '#9519db',
    color: '#fff',
    borderRadius: '3px',
    padding: '0px 25px',

    '&:hover': {
      background: '#023f6b',
      boxShadow: '0px 2px 10px #888888',
    },
  },

  aboutTitle: {
    fontSize: '2.5rem',
    fontFamily: 'Segoe UI',
    fontWeight: 900,
    color: '#003255',
    margin: 50,
    [theme.breakpoints.down('md')]: {
      fontSize: '25px',
      margin: 20,
    },
  },
  about: {
    fontSize: '1.9vw',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    color: '#003255',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  aboutDesc: {
    fontSize: '1.2vw',
    fontFamily: 'Segoe UI',
    color: '#7A7A7A',
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  aboutBox: {
    //marginTop:'30px',
    width: '35%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  aboutImg: {
    marginTop: '39px',
    marginLeft: '50px',
    width: '27vw',

    [theme.breakpoints.down('sm')]: {
      width: '40%',
      marginTop: '10px',
      marginLeft: '0px',
      borderRadius: '8px',
    },

    [theme.breakpoints.down('sm')]: {
      width: '66%',
      marginTop: '10px',
      marginLeft: '0px',
      borderRadius: '8px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: '10px',
      marginLeft: '0px',
      borderRadius: '8px',
    },
  },
  aboutRadius: {
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {borderRadius: '0px'},
  },
  foncBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    flexWrap: 'nowrap',
    borderRadius: '25% 10%',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
      width: '45%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },

  foncImg: {
    padding: 20,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {width: '80%'},
  },
  foncImgs: {
    //padding: '10px 10px 20px 10px',
    width: '100%',
    borderRadius: '50px',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('sm')]: {width: '100%', padding: 0},
  },
  foncSubBox: {
    width: '100%',
    marginTop: '-5px',
    marginLeft: '0px',
    borderBottomRightRadius: '38px',
    backgroundColor: '#c7d8fbc9',
    height: 'fit-content',
    // boxShadow: '10px 5px 5px rgba(0, 0, 255, .2)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-5px',
      marginLeft: '0px',
    },
  },
  foncDesc: {
    fontSize: '16px',
    padding: '15px 42px',
    fontFamily: 'Segoe UI',
    color: '#3e3d3d',
    // fontWeight: Fonts.MEDIUM,

    width: '100%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      width: '100%',
      margin: 0,
    },
  },
  foncTitle: {
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    color: '#003255',
    margin: '20px 30px 0px 30px',
    [theme.breakpoints.down('sm')]: {fontSize: '20px'},
  },
  carousselBG: {
    backgroundColor: '#8EB9D8',
  },
  footerBox: {
    backgroundColor: '#0D0A32',
    width: '100%',
    padding: 60,
    [theme.breakpoints.down('sm')]: {
      padding: 30,
    },
  },
  footerItems: {
    fontSize: '5vw',
    fontFamily: 'Segoe UI',
    color: '#FFFFFF',
    marginTop: '20px',
  },
  footerTitles: {
    fontSize: '1.5vw',
    fontFamily: 'Segoe UI',
    color: '#FFFFFF',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  footerabout: {
    fontSize: '1vw',
    fontFamily: 'Segoe UI',
    color: '#FFFFFF',
    marginTop: '20px',
    letterSpacing: 1.5,
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  mainBoxPartners: {
    //  backgroundColor: '#f5f6f7',
    display: 'flex',
    marginTop: '0px',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: '40px',
  },
  mainBoxHowTo: {
    backgroundColor: 'white',
    display: 'flex',
    marginTop: '0px',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: '40px',
  },
  mainBoxItems: {
    marginTop: '0px',
    backgroundColor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-50px',
    },
  },
  nosServicesBox: {
    marginTop: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    // [theme.breakpoints.down('xs')]: {
    //   marginTop: '-50px',
    // },
  },
  colorPrimary: {
    color: '#ffff',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  zindex: {zIndex: 10},
  foncWidth: {
    width: '67%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: '10px',
      marginLeft: '0px',
      borderRadius: '8px',
    },

    [theme.breakpoints.down('sm')]: {
      width: '66%',
      marginTop: '10px',
      marginLeft: '0px',
      borderRadius: '8px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: '10px',
      marginLeft: '0px',
      borderRadius: '8px',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#FFFFFF !important',
  },
  linkBtn: {
    textDecoration: 'none',
    color: '#ffff',
  },
  loginWhiteButton: {
    background: '#f5f6f7',
    color: '#003255',
    borderRadius: '3px',
    padding: '0px 25px',
    border: 'solid',
    borderColor: '#003255',
    borderWidth: '0.5px',
    // '&:hover': {
    //   background: '#9ac6e4',
    //   boxShadow: '0px 2px 10px #888888',
    // },
  },
  seemore: {
    background: '#003255',
    color: '#fff',
    borderRadius: '3px',
    padding: '10px 25px',
    fontSize: '18px',
    margin: 40,
  },
  drawerContainer: {
    padding: '20px 30px',
  },
  subBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 'fit-content',
    // [theme.breakpoints.down('md')]: {
    //   height: 'fit-content',
    // },
    // [theme.breakpoints.down('xs')]: {
    //   height: '1940px',
    // },
  },
  slideImg: {borderTopLeftRadius: '60px'},
  boxHowTo: {
    display: 'flex',
    flexDirection: 'row',

    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  howToImg: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'block',
    },
    width: '80%',
  },
  foncBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#0032509c',
    border: 'none',
    borderBottomRightRadius: '36px',
    color: 'white',
    fontWeight: 900,
  },
}));
export default useStyles;
