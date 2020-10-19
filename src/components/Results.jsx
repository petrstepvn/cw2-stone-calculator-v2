import React, { useContext } from 'react';
import { LanguageContext } from '../provider/Language';
import {
  Avatar,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from '@material-ui/core';
import { Grades } from '../data';
import { thousandSeparator } from '../utils';

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

const Results = ({ inputData, result }) => {
  const [language] = useContext(LanguageContext);
  const classes = useStyles({ lvl: inputData.infectedLevel });

  const {
    eqType,
    eqGrade,
    stoneGrade,
    infected,
    stoneRefinementLevel,
    selectedStone: {
      id: stoneId,
      name: stoneName,
      attribute: stoneAttribute,
      attribute2: stoneAttribute2,
    },
    selectedInfected: { attribute: infectedAttribute },
    infectedLevel,
  } = inputData;

  const { primaryFinal, infectedFinal } = result;

  return (
    <div>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        style={{ color: `#${Grades[eqGrade]}` }}
      >
        {language.eqType[eqType]}
        {eqGrade ? ` (${language.grade[eqGrade]})` : null}
      </Typography>
      <Typography style={{ color: `#${Grades[stoneGrade]}` }}>
        {infected ? language.label.infected + ' ' : null}
        {language.stone[stoneName]} +{stoneRefinementLevel}
        {stoneGrade ? ` (${language.grade[stoneGrade]})` : null}
      </Typography>
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <Avatar
            className={infected ? classes.infectedLevel : null}
            data-text={inputData.infectedLevel}
            variant="square"
            sizes="50px"
            src={
              stoneId
                ? require(`../images/stones/${
                    infected ? '9' : ''
                  }${stoneId}.png`)
                : null
            }
          />
        </Grid>
        <Grid item xs>
          <Typography color="textSecondary">
            {
              language.attribute[
                stoneAttribute2 && stoneGrade ? stoneAttribute2 : stoneAttribute
              ]
            }{' '}
            <Typography color="textPrimary" component="span">
              +{thousandSeparator(primaryFinal)}
            </Typography>
          </Typography>
          {infected && (
            <Typography color="textSecondary">
              {language.attribute[infectedAttribute]}{' '}
              <Typography color="textPrimary" component="span">
                +{thousandSeparator(infectedFinal)}
              </Typography>
            </Typography>
          )}
        </Grid>
      </Grid>
      {inputData.selectedStone.note && (
        <Typography style={{ marginTop: '0.5rem' }} color="error">
          {language.note[inputData.selectedStone.note]}
        </Typography>
      )}
      {/* <TableContainer component={} style={{ marginTop: '1.5rem' }}> */}
      <Paper variant="outlined" style={{ marginTop: '1.5rem' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '1.5em' }}>
                {
                  language.attribute[
                    stoneAttribute2 && stoneGrade
                      ? stoneAttribute2
                      : stoneAttribute
                  ]
                }
              </TableCell>
              <TableCell style={{ fontSize: '1.5em' }} align="right">
                +{result.primaryFinal}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Refinement Level +{stoneRefinementLevel}</TableCell>
              <TableCell align="right">
                +{result.primary.refinementLevel}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipment Grade ({language.grade[eqGrade]})</TableCell>
              <TableCell align="right">+{result.primary.eqGrade}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Stone Grade ({language.grade[stoneGrade]})</TableCell>
              <TableCell align="right">+{result.primary.stoneGrade}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Empower</TableCell>
              <TableCell align="right">+{result.primary.empower}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      {infected && (
        <Paper variant="outlined" style={{ marginTop: '1.5rem' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: '1.5em' }}>
                  {language.attribute[infectedAttribute]}
                </TableCell>
                <TableCell style={{ fontSize: '1.5em' }} align="right">
                  +{result.infectedFinal}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Infected Level {infectedLevel}</TableCell>
                <TableCell align="right">
                  +{result.infected.infectedLevel}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Equipment Grade ({language.grade[eqGrade]})
                </TableCell>
                <TableCell align="right">+{result.infected.eqGrade}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Stone Grade ({language.grade[stoneGrade]})
                </TableCell>
                <TableCell align="right">
                  +{result.infected.stoneGrade}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Empower</TableCell>
                <TableCell align="right">+{result.infected.empower}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
};

export default Results;
