import React, { useState, useEffect, useReducer } from 'react';
import { Box, Paper, Grid } from '@material-ui/core';

import {
  EquipmentPicker,
  GradePicker,
  InfectedAttributePicker,
  LevelSlider,
  StonePicker,
  SwitcherEmpower,
  SwitcherInfected,
} from './Inputs';
import Results from './Results';

export const ACTIONS = {
  EQ_TYPE: 'eqType',
  EQ_GRADE: 'eqGrade',
  STONE_GRADE: 'stoneGrade',
  STONE_REFINEMENT_LEVEL: 'stoneRefinementLevel',
  STONE_SELECTED: 'selectedStone',
  EMPOWER: 'empower',
  STONE_INFECTED: 'infected',
  STONE_SELECTED_INFECTED: 'selectedInfected',
  STONE_INFECTED_LEVEL: 'infectedLevel',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.EQ_TYPE:
      const { eqType } = action.payload;
      const regex = /^(ring|belt)$/;
      return {
        ...state,
        eqType: eqType,
        empower: regex.test(eqType) ? false : state.empower,
      };
    case ACTIONS.EQ_GRADE:
      return { ...state, eqGrade: action.payload.eqGrade };
    case ACTIONS.STONE_GRADE:
      const { stoneGrade } = action.payload;
      const { stoneRefinementLevel } = state;
      return {
        ...state,
        stoneGrade: stoneGrade,
        stoneRefinementLevel: stoneGrade > 0 ? 12 : stoneRefinementLevel,
      };
    case ACTIONS.STONE_REFINEMENT_LEVEL:
      return {
        ...state,
        stoneRefinementLevel: action.payload.stoneRefinementLevel,
      };
    case ACTIONS.STONE_SELECTED:
      const { selectedStone } = action.payload;
      return {
        ...state,
        selectedStone: selectedStone,
        empower: selectedStone.id === 120 ? false : state.empower,
        // infected:
      };
    case ACTIONS.EMPOWER:
      return {
        ...state,
        empower: action.payload.empower,
      };
    case ACTIONS.STONE_INFECTED:
      return {
        ...state,
        infected: action.payload.infected,
      };
    case ACTIONS.STONE_SELECTED_INFECTED:
      return {
        ...state,
        selectedInfected: action.payload.selectedInfected,
      };
    case ACTIONS.STONE_INFECTED_LEVEL:
      return {
        ...state,
        infectedLevel: action.payload.infectedLevel,
      };
    default:
      return state;
  }
}

const stateConfig = {
  eqType: 'armor',
  eqGrade: 10,
  stoneGrade: 10,
  stoneRefinementLevel: 12,
  empower: true,
  selectedStone: {
    id: 100,
    refinementLevel: 0,
    stoneGrade: 0,
    multEq: 0,
  },
  infected: true,
  selectedInfected: {
    base: 0,
    stoneGrade: 0,
    multEq: 0,
  },
  infectedLevel: 20,
};

const StoneCalculator = () => {
  const [state, dispatch] = useReducer(
    reducer,
    localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state'))
      : stateConfig
  );

  console.log(localStorage.getItem('state') ? 'ok' : 'nope');

  const [result, setResult] = useState({
    primary: {
      refinementLevel: 0,
      eqGrade: 0,
      stoneGrade: 0,
      empower: 0,
    },
    infected: {
      infectedLevel: 0,
      eqGrade: 0,
      stoneGrade: 0,
      empower: 0,
    },
    primaryFinal: 0,
    infectedFinal: 0,
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
    const {
      eqGrade,
      stoneGrade,
      selectedStone,
      stoneRefinementLevel,
      selectedInfected,
      infectedLevel,
      empower,
    } = state;

    setResult({
      ...result,
      primary: {
        refinementLevel:
          selectedStone.attribute2 && stoneGrade
            ? 0
            : selectedStone.refinementLevel[stoneRefinementLevel],
        eqGrade: selectedStone.multEq * eqGrade,
        stoneGrade: selectedStone.stoneGrade[stoneGrade],
        empower: empower ? selectedStone.multEq * 15 : 0,
      },
      infected: {
        infectedLevel: selectedInfected.base[infectedLevel],
        eqGrade: selectedInfected.multEq * eqGrade,
        stoneGrade: selectedInfected.multStone * stoneGrade,
        empower:
          empower || selectedStone.id === 120
            ? selectedInfected.multEq * 15
            : 0,
      },
      primaryFinal:
        (selectedStone.attribute2 && stoneGrade
          ? 0
          : selectedStone.refinementLevel[stoneRefinementLevel]) +
        selectedStone.multEq * eqGrade +
        selectedStone.stoneGrade[stoneGrade] +
        (empower ? selectedStone.multEq * 15 : 0),
      infectedFinal:
        selectedInfected.base[infectedLevel] +
        selectedInfected.multEq * eqGrade +
        selectedInfected.multStone * stoneGrade +
        (empower || selectedStone.id === 120
          ? selectedInfected.multEq * 15
          : 0),
    });
    // eslint-disable-next-line
  }, [state]);

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <EquipmentPicker eqType={state.eqType} dispatch={dispatch} />
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

      <Paper style={{ marginTop: '1rem' }}>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StonePicker
                selectedStone={state.selectedStone}
                dispatch={dispatch}
                eqType={state.eqType}
                infected={state.infected}
              />
            </Grid>
            <Grid item xs={12}>
              <LevelSlider
                type="stoneRefinementLevel"
                value={state.stoneRefinementLevel}
                dispatch={dispatch}
                stoneGrade={state.stoneGrade}
              />
            </Grid>
            <Grid item xs={6}>
              <GradePicker
                type="stoneGrade"
                value={state.stoneGrade}
                dispatch={dispatch}
              />
            </Grid>
            <Grid item xs={6}>
              <Grid
                container
                // justify="center"
              >
                <SwitcherInfected
                  infected={state.infected}
                  dispatch={dispatch}
                />
                {(state.eqType === 'weapon' || state.eqType === 'armor') &&
                  state.selectedStone.id !== 120 && (
                    <SwitcherEmpower
                      empower={state.empower}
                      dispatch={dispatch}
                    />
                  )}
              </Grid>
            </Grid>
            {state.infected && (
              <>
                <Grid item xs={12}>
                  <InfectedAttributePicker
                    selectedInfected={state.selectedInfected}
                    dispatch={dispatch}
                    eqType={state.eqType}
                    selectedStoneIsEmpower={
                      state.selectedStone.id === 120 ? true : false
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <LevelSlider
                    type="infectedLevel"
                    value={state.infectedLevel}
                    dispatch={dispatch}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      </Paper>

      <Paper style={{ marginTop: '1rem' }}>
        <Box p={2}>
          <Results inputData={state} result={result} />
        </Box>
      </Paper>
    </Box>
  );
};

export default StoneCalculator;
