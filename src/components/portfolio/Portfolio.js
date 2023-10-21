import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid } from '@mui/material';
import { info } from '../../info/Info';

export default function Portfolio() {
  return (
    // Make the portfolio section responsive
    // Make the portfolio items center and add padding to the left so they arent on the edge
    // <Box>
    //     <Grid container display={'flex'} justifyContent={'center'}>
    //         {info.portfolio.map((project, index) => (
    //            <Grid item xs={12} md={6} key={index}>
    //                <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
    //            </Grid>
    //         ))}
    //     </Grid>
    // </Box>
    <Box sx={{ margin: 1 }}>
      <Grid container display={'flex'} justifyContent={'center'} spacing={2}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
