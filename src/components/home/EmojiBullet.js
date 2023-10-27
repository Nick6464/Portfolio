import React from 'react';
import { Box } from '@mui/material';

function EmojiBullet(props) {
  const { emoji, text } = props;

  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (emailPattern.test(text)) {
    return (
      <Box
        component="li"
        fontSize="1rem"
        lineHeight={1.5}
        style={{ cursor: 'pointer' }}
        onClick={() => window.open(`mailto:${text}`)}
      >
        <Box
          component="span"
          aria-label="cheese"
          role="img"
          mr={{ xs: '0.5rem', md: '1rem' }}
          style={{ cursor: 'pointer' }}
          fontSize="1.5rem"
          onClick={() => window.open(`mailto:${text}`)}
        >
          {emoji}
        </Box>
        {text}
      </Box>
    );
  } else {
    return (
      <Box
        component="li"
        fontSize="1rem"
        lineHeight={1.5}
        style={{ cursor: 'default' }}
      >
        <Box
          component="span"
          aria-label="cheese"
          role="img"
          mr={{ xs: '0.5rem', md: '1rem' }}
          fontSize="1.5rem"
        >
          {emoji}
        </Box>
        {text}
      </Box>
    );
  }
}

export default EmojiBullet;
