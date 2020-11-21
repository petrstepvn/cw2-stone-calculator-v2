import React, { useContext } from 'react';
import { LanguageContext } from '../../provider/Language';
import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import { Grades } from '../../data';
import { thousandSeparator } from '../../utils';

const useStyles = makeStyles({
  infectedLevel: {
    '&:before': {
      content: 'attr(data-text)',
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: '1px 1px 0',
      fontSize: '0.65em',
      fontWeight: 'bold',
      color: 'black',
      background: 'rgb(19, 191, 0)',
    },
  },
});

const StoneSummary = ({ payload }: any) => {
  const [language] = useContext(LanguageContext);
  const classes = useStyles({ lvl: 0 });

  const ssssdfsdfsds = {
    selectedStone: {
      id: 0,
      name: 'synt',
      note: '',
    },
    infected: false,
    stoneRefinementLevel: 12,
    stoneGrade: 2,
    infectedLevel: 20,
    attribute1: {
      primary: 'asdf',
      secondary: 7,
    },
    attribute2: {
      primary: 'asadfsdf',
      secondary: 17,
    },
  };

  return (
    <div>
      <Typography style={{ color: `#${Grades[payload.stoneGrade]}` }}>
        {payload.infected && language.label.infected + ' '}
        {language.stone[payload.selectedStone.name]}
        {payload.stoneRefinementLevel && ' ' + payload.stoneRefinementLevel}
        {payload.stoneGrade > 0 && ` (${language.grade[payload.stoneGrade]})`}
      </Typography>
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <Avatar
            className={payload.infected ? classes.infectedLevel : undefined}
            data-text={payload.infectedLevel}
            variant="square"
            sizes="50px"
            src={
              payload.selectedStone.id
                ? require(`../../images/stones/${payload.infected ? '9' : ''}${
                    payload.selectedStone.id
                  }.png`)
                : null
            }
          />
        </Grid>
        <Grid item xs>
          <Typography color="textSecondary">
            {language.attribute[payload.attribute1.primary]}{' '}
            <Typography color="textPrimary" component="span">
              +{thousandSeparator(payload.attribute1.secondary)}
            </Typography>
          </Typography>
          {(payload.infected || payload.selectedStone.id === 150) && (
            <Typography color="textSecondary">
              {language.attribute[payload.attribute2.primary]}{' '}
              <Typography color="textPrimary" component="span">
                +{thousandSeparator(payload.attribute2.secondary)}
              </Typography>
            </Typography>
          )}
        </Grid>
      </Grid>
      {payload.selectedStone.note && (
        <Typography style={{ marginTop: '0.5rem' }} color="error">
          {language.note[payload.selectedStone.note]}
        </Typography>
      )}
    </div>
  );
};

export default StoneSummary;
