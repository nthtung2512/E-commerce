import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import "@styles/globals.css";
import { animateScroll as scroll } from 'react-scroll'; // Import react-scroll

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    scroll.scrollToTop({
      duration: 400, // Duration of the scroll animation in milliseconds
      smooth: 'ease', // Easing function for smooth animation
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: '6rem', right: '3rem' }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <div className='flex flex-col'>
      <CssBaseline />
      <div id="back-to-top-anchor"/>
      {props.children}
      <ScrollTop {...props}>
        <Fab size="large" aria-label="scroll back to top" sx={{border: "1px solid purple", color: "purple"}} >
          <KeyboardArrowUpIcon sx={{fontSize: "2em"}}/>
        </Fab>
      </ScrollTop>
    </div>
  );
}
