import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';

const LayoutMain = ({ children }) => (
  <Container maxWidth="lg">
    <Box my={3}>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Box>
  </Container>
);

export default LayoutMain;
