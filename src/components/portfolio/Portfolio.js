import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid } from '@mui/material';
import { info } from '../../info/Info';

export default function Portfolio() {
  return (
    <Box
      sx={{
        margin: 2,
        maxWidth: 1920,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Grid container display={'flex'} justifyContent={'center'} spacing={2}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            /></Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
