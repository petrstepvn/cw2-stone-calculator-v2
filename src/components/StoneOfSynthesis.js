import React, { useReducer, useState, useContext, useEffect } from 'react';
import { LanguageContext } from '../provider/Language';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { EqTypesSynthesis, Grades, Infected, Synthesis } from '../data';
import {
  EquipmentPicker,
  GradePicker,
  InfectedAttributePicker,
  LevelSlider,
} from './Inputs';
import Details from './Outputs/Details';
import StoneSummary from './Outputs/StoneSummary';
import { calculateTotal } from '../utils';

export const ACTIONS = {
  EQ_TYPE: 'eqType',
  EQ_GRADE: 'eqGrade',
  STONE_GRADE: 'stoneGrade',
  STONE_SELECTED_INFECTED: 'selectedInfected',
  STONE_INFECTED_LEVEL: 'infectedLevel',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.EQ_TYPE:
      return {
        ...state,
        eqType: action.payload.eqType,
      };
    case ACTIONS.EQ_GRADE:
      return {
        ...state,
        eqGrade: action.payload.eqGrade,
      };
    case ACTIONS.STONE_GRADE:
      return {
        ...state,
        stoneGrade: action.payload.stoneGrade,
      };
    case ACTIONS.STONE_SELECTED_INFECTED:
      return {
        ...state,
        [Object.keys(action.payload)[0]]:
          action.payload[Object.keys(action.payload)[0]],
      };
    case ACTIONS.STONE_INFECTED_LEVEL:
      return {
        ...state,
        infectedLevel: action.payload.infectedLevel,
      };
  }
}

const stateConfig = {
  eqType: 'ring',
  eqGrade: 10,
  stoneGrade: 9,
  infectedLevel: 20,
  selectedInfected1: Synthesis[0],
  selectedInfected2: Synthesis[1],
};

const StoneOfSynthesis = () => {
  const [state, dispatch] = useReducer(reducer, stateConfig);
  const [result, setResult] = useState({
    attribute1: {
      eqGrade: 0,
      stoneGrade: 0,
      infectedLevel: 0,
      total: 0,
    },
    attribute2: {
      eqGrade: 0,
      stoneGrade: 0,
      infectedLevel: 0,
      total: 0,
    },
  });
  const [language] = useContext(LanguageContext);

  useEffect(() => {
    const {
      eqGrade,
      stoneGrade,
      infectedLevel,
      selectedInfected1: sel1,
      selectedInfected2: sel2,
    } = state;
    console.log(eqGrade, sel1);
    let res = {
      attribute1: {
        eqGrade: eqGrade * sel1.multEq,
        stoneGrade: stoneGrade * sel1.multStone,
        infectedLevel: sel1.base[infectedLevel],
      },
      attribute2: {
        eqGrade: eqGrade * sel2.multEq,
        stoneGrade: stoneGrade * sel2.multStone,
        infectedLevel: sel2.base[infectedLevel],
      },
    };
    console.log(res);
    res = {
      ...res,
      attribute1: {
        ...res.attribute1,
        total: calculateTotal(Object.values(res.attribute1)),
      },
      attribute2: {
        ...res.attribute2,
        total: calculateTotal(Object.values(res.attribute2)),
      },
    };
    setResult(res);
  }, [state]);

  const detailsObj = (selectedInfected, attribute) => {
    return {
      head: {
        primary: language.attribute[state[selectedInfected].attribute],
        secondary: result[attribute].total,
      },
      body: [
        {
          primary: `${language.label.infectedLevel} ${state.infectedLevel}`,
          secondary: result[attribute].infectedLevel,
        },
        {
          primary: `${language.label.stoneGrade} (${
            language.grade[state.stoneGrade]
          })`,
          secondary: result[attribute].stoneGrade,
        },
        {
          primary: `${language.label.eqGrade} (${
            language.grade[state.eqGrade]
          })`,
          secondary: result[attribute].eqGrade,
        },
      ],
    };
  };

  return (
    <div>
      <Paper variant="outlined">
        <Box p={2}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <EquipmentPicker
                eqType={state.eqType}
                dispatch={dispatch}
                types={EqTypesSynthesis}
              />
            </Grid>
            <Grid item xs={6}>
              <GradePicker
                type="eqGrade"
                value={state.eqGrade}
                dispatch={dispatch}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper variant="outlined" style={{ marginTop: '1rem' }}>
        <Box p={2}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <LevelSlider
                type="infectedLevel"
                value={state.infectedLevel}
                dispatch={dispatch}
              />
            </Grid>
            <Grid item xs={12}>
              <GradePicker
                type="stoneGrade"
                value={state.stoneGrade}
                dispatch={dispatch}
              />
            </Grid>
            <Grid item xs={12}>
              <InfectedAttributePicker
                selectedInfected={state.selectedInfected1}
                dispatch={dispatch}
                eqType={state.eqType}
                isSynthesis={true}
                customLabel="infectedAttribute1"
                customPropName="selectedInfected1"
              />
            </Grid>
            <Grid item xs={12}>
              <InfectedAttributePicker
                selectedInfected={state.selectedInfected2}
                dispatch={dispatch}
                eqType={state.eqType}
                isSynthesis={true}
                customLabel="infectedAttribute2"
                customPropName="selectedInfected2"
                customIndex={1}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper variant="outlined" style={{ marginTop: '1rem' }}>
        <Box p={2}>
          <StoneSummary
            payload={{
              selectedStone: {
                id: 150,
                name: 'synthesis',
              },
              stoneGrade: state.stoneGrade,
              infectedLevel: state.infectedLevel,
              attribute1: {
                primary: state.selectedInfected1.attribute,
                secondary: result.attribute1.total,
              },
              attribute2: {
                primary: state.selectedInfected2.attribute,
                secondary: result.attribute2.total,
              },
            }}
          />
          <Details details={detailsObj('selectedInfected1', 'attribute1')} />
          <Details details={detailsObj('selectedInfected2', 'attribute2')} />
        </Box>
      </Paper>
    </div>
  );
};

export default StoneOfSynthesis;
