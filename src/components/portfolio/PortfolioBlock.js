import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import Terminal from '../about/Terminal';
import { Code, OpenInNew } from '@mui/icons-material';

function PortfolioBlock(props) {
  const { image, live, source, title } = props;
  return (
    <Terminal>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          width={'100%'}
          height={'100%'}
          component={'img'}
          src={image}
          alt={'mockup'}
        />
        <h1 style={{ fontSize: '2rem' }}>{title}</h1>
        <Grid container justifyContent={'center'} className={'portfolio'}>
          {live && (
            <Grid item xs={6}>
              <Grid container justifyContent={'center'}>
                <Button
                  startIcon={<OpenInNew />}
                  variant="contained"
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#27242f', color: 'white' }}
                >
                  Live Demo
                </Button>
              </Grid>
            </Grid>
          )}
          <Grid item xs={6}>
            <Grid container justifyContent={'center'}>
              <Button
                startIcon={<Code />}
                variant="contained"
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#27242f', color: 'white' }}
              >
                Source Code
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Terminal>
  );
}

export default PortfolioBlock;
