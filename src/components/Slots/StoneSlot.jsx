import React, { useContext } from 'react';
import LayoutCard from '../Layout/LayoutCard';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { Grades } from '../../data';
import { LanguageContext } from '../../provider/Language';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    minHeight: '80px',
    height: '100%',
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  image: {
    width: '50px',
    height: '50px',
    display: 'block',
    borderRadius: '50%',
  },
  imageWrapper: {
    position: 'relative',
    marginRight: '10px',
  },
  infectedLevel: {
    '&:before': {
      content: 'attr(data-lvl)',
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: '1px 1px 0',
      fontSize: '0.8rem',
      fontWeight: '700',
      color: 'black',
      background: 'rgb(19, 191, 0)',
    },
  },
}));

const data = {
  noData: false,
  stoneGrade: 9,
  refinementLevel: 5,
  name: 'haste',
  id: 101,
  infected: true,
  infectedLevel: 22,
  attribute1: {
    name: 'fks',
    value: 32,
  },
  attribute2: {
    exists: true,
    name: 'hp',
    value: 32,
  },
};

const StoneSlot = () => {
  const [language] = useContext(LanguageContext);
  const classes = useStyles();

  const {
    noData,
    stoneGrade,
    refinementLevel,
    name,
    id,
    infected,
    infectedLevel,
    attribute1,
    attribute2,
  } = data;

  return (
    <Paper variant="outlined" className={classes.wrapper}>
      <Box
        p={1}
        //   style={{ minHeight: '80px' }}
      >
        {noData ? (
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: '100%' }}
          >
            <Typography>sadge</Typography>
          </Grid>
        ) : (
          <>
            <Typography style={{ color: '#' + Grades[stoneGrade] }}>
              {infected && language.label.infected + ' '}
              {language.stone[name]}
              {refinementLevel >= 0 ? ` +${refinementLevel} ` : null}
              {stoneGrade ? ` (${language.grade[stoneGrade]})` : null}
            </Typography>
            <Grid container>
              <Grid
                item
                style={{ position: 'relative' }}
                className={`${classes.imageWrapper} ${
                  infected ? classes.infectedLevel : null
                }`}
                data-lvl={infectedLevel}
              >
                <img
                  className={classes.image}
                  src={
                    id
                      ? require(`../../images/stones/${
                          infected ? '9' : ''
                        }${id}.png`)
                      : null
                  }
                  alt="name"
                />
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="space-between"
                  style={{ height: '100%' }}
                >
                  <Box>
                    <Typography component="span" color="textSecondary">
                      {language.attribute[attribute1.name]}
                    </Typography>
                    <Typography component="span">
                      {' '}
                      +{attribute1.value}
                    </Typography>
                  </Box>
                  {attribute2.exists ? (
                    <Box>
                      <Typography component="span" color="textSecondary">
                        {language.attribute[attribute2.name]}
                      </Typography>
                      <Typography component="span">
                        {' '}
                        +{attribute2.value}
                      </Typography>
                    </Box>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>{' '}
          </>
        )}
        <IconButton color="primary" className={classes.icon}>
          <SettingsIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default StoneSlot;
