import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from './home/Toggler';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { info } from '../info/Info';
import logo from '../img/logo.png';

const links = [
  {
    name: 'Home',
    to: '/',
    active: 'Home',
  },
  {
    name: 'About Me',
    to: '/about',
    active: 'About',
  },
  {
    name: logo,
    type: 'logo',
    to: '/',
    active: 'Home',
  },
  {
    name: 'Portfolio',
    to: '/portfolio',
    active: 'Portfolio',
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === '/'
      ? 'home'
      : location.pathname.slice(1, location.pathname.length)
  );

  return (
    <Box component={'nav'} width={'100%'}>
      <Box
        component={'ul'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={{ xs: '2rem', md: '8rem' }}
        textTransform={'lowercase'}
        fontSize={'1rem'}
      >
        {links.map((link, index) => {
          if (link.type && window.innerWidth <= 400) return null;
          return (
            <Box
              key={index}
              component={'li'}
              className={link.active === active && !link.type && Style.active}
              sx={{
                borderImageSource: info.gradient,
                ...(link.type && {
                  height: 60,
                  width: 60,
                }),
              }}
            >
              <Link
                to={link.to}
                onClick={() => setActive(link.active)}
                className={Style.link}
                style={{ color: darkMode ? 'white' : 'black' }} // Add this line
              >
                {!link.type && (
                  <p style={{ padding: '0.5rem 0' }}>{link.name}</p>
                )}
                {link.type && (
                  <img
                    style={{ height: 60, width: 60 }}
                    src={link.name}
                    alt={'logo'}
                  />
                )}
              </Link>
            </Box>
          );
        })}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
