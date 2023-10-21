import React from 'react'
import {Box, Typography, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { appleLogo, navData } from '../constants/constant';


const Component = styled(Box)({
  backgroundColor: "#f5f5f7",
  height: 44, 
  position: 'fixed',
  top: 0,
  width: '100%',
  opacity: 1
})

const Navbar = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  cursor: 'pointer',
  '& > *': {
    color: 'rgba(0, 0, 0, .8)',
    fontWeight: 600,
    opacity: 0.8,
    padding: '0 21px',
    fontSize: 12,
    transition: 'opacity 0.3s', 
  },
  '& > *:hover': {
    opacity: 2,
  },
});


const Header = () => {
  return (
    <Component>
      <Navbar>
      <img src={appleLogo} alt='logo' style={{width: 25}} />
        {
          navData.map(nav => (
            <Typography style={{fontSize: 12, fontWeight: 600}}>{nav}</Typography>
          ))
        }
        <SearchIcon fontSize="small" />
        <WorkOutlineIcon fontSize="small" />
      </Navbar>
    </Component>
  )
}

export default Header;
