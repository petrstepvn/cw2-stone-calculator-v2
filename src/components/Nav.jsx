import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  Link,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import LanguageSelector from './LanguageSelector';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfectedExperienceCalculator from './InfectedExperienceCalculator';
import StoneCalculator from './StoneCalculator';
import CardNotification from './Cards/CardNotification';
import LayoutMain from './Layout/LayoutMain';
import CardStones from './Cards/CardStones';
import { LanguageContext } from '../provider/Language';
// import LaunchIcon from '@material-ui/icons/Launch';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.background.paper,
  },
  link: {
    height: '100%',
    fontWeight: '600',
    fontSize: '20px',
    padding: '10px 20px ',

    '&': {
      transition: 'color 0.2s',
    },

    '&:hover': {
      color: '#fff',
    },
  },
  tab: {
    position: 'relative',

    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: '4px',
      background: theme.palette.primary.main,
      transition: 'width .3s',
    },
  },
  activeTab: {
    color: '#fff',

    '&::before': {
      width: '100%',
    },
  },
}));

const externalLinks = {
  'CW2 Website': 'https://celestial-world.com/',
  Forum: 'https://board.celestial-world.com/',
  Wiki: 'https://celestialworldv2.fandom.com/',
};

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentTab, setCurrentTab] = useState('stone');
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const [language] = useContext(LanguageContext);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTabChange = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.getAttribute('data-tabid'));
  };

  let externalLinksEl = [];
  for (const name in externalLinks) {
    externalLinksEl.push(
      <Link
        key="name"
        href={externalLinks[name]}
        rel="noopener"
        target="_blank"
      >
        <MenuItem onClick={handleClose}>{name}</MenuItem>
      </Link>
    );
  }

  let tabEl = [];
  for (const tab in language.header) {
    tabEl.push(
      <Link
        key={tab}
        href="/"
        className={`${classes.tab} ${classes.link} ${
          currentTab === tab ? classes.activeTab : null
        }`}
        underline="none"
        color="textSecondary"
        data-tabid={tab}
        onClick={handleTabChange}
      >
        <Grid item style={{ pointerEvents: 'none' }}>
          {language.header[tab].short}
        </Grid>
      </Link>
    );
  }

  return (
    <>
      <AppBar position="static" className={classes.wrapper}>
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Grid container alignItems="baseline">
                <Typography
                  variant="h5"
                  style={{ fontWeight: '600', marginRight: '1em' }}
                >
                  Celestial World 2.0
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Box>
                <Typography variant="h6" style={{ fontWeight: '300' }}>
                  {language.header[currentTab].long}
                </Typography>
                <IconButton
                  onClick={() => setToggleDrawer(true)}
                  style={{ marginLeft: 'auto' }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item>
                <Grid container alignItems="center">
                  {tabEl}
                  <Grid
                    item
                    className={classes.link}
                    style={{ paddingRight: '0px' }}
                  >
                    <Button
                      endIcon={<ExpandMoreIcon />}
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      Links
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {externalLinksEl}
                    </Menu>
                  </Grid>
                  <Grid
                    item
                    className={classes.link}
                    style={{ paddingRight: '0px' }}
                  >
                    <LanguageSelector />
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>

            {/* <Hidden mdUp>
              <IconButton onClick={() => setToggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden> */}
            <Drawer
              anchor="right"
              open={toggleDrawer}
              onClose={() => setToggleDrawer(false)}
            >
              <IconButton onClick={() => setToggleDrawer(false)}>
                <MenuOpenIcon />
              </IconButton>
              <Grid container alignItems="center" direction="column">
                {tabEl}
                <Grid
                  item
                  className={classes.link}
                  style={{ paddingRight: '0px' }}
                >
                  <Button
                    endIcon={<ExpandMoreIcon />}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    Links
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    {externalLinksEl}
                  </Menu>
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  style={{ paddingRight: '0px' }}
                >
                  <LanguageSelector />
                </Grid>
              </Grid>
            </Drawer>
          </Grid>
        </Container>
      </AppBar>
      <LayoutMain>
        <CardNotification />
        <CardStones />
        {/* <CardStones /> */}
      </LayoutMain>
      {/* <Container>
          {value === 0 && <StoneCalculator />}
          {value === 1 && <InfectedExperienceCalculator />}
      </Container> */}
    </>
  );
};

export default Nav;
