import { Box, Grid, IconButton, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));

const LayoutCard = ({
  children,
  width = 4,
  propClass,
  elevation = 0,
  padding = 2,
  icon,
  iconColor = 'primary',
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={width}>
      <Paper
        className={`${propClass} ${classes.wrapper}`}
        elevation={elevation}
      >
        <Box p={padding}>
          {children}
          {icon && (
            <IconButton color={iconColor} className={classes.icon}>
              {icon}
            </IconButton>
          )}
        </Box>
      </Paper>
    </Grid>
  );
};

export default LayoutCard;
