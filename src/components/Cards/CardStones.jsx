import React from 'react';
import LayoutCard from '../Layout/LayoutCard';
import SettingsIcon from '@material-ui/icons/Settings';
import { Grid, Typography } from '@material-ui/core';
import StoneSlot from '../Slots/StoneSlot';

const data = {
  eqType: 'weapon',
  eqGrade: '10',
};

const CardStones = () => {
  return (
    <LayoutCard icon={<SettingsIcon />} iconColor="primary">
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography style={{ fontSize: '28px' }} align="center">
            Weapon (Exotic)
          </Typography>
        </Grid>
        <Grid item>
          <StoneSlot />
        </Grid>
        <Grid item>
          <StoneSlot />
        </Grid>
        <Grid item>
          <StoneSlot />
        </Grid>
      </Grid>
    </LayoutCard>
  );
};

export default CardStones;
