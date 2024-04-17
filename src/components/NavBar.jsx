import React from "react";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const BadgeAvatars = () => {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      </StyledBadge>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant=""
      >
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
      </StyledBadge>
    </Stack>
  );
}

const NavBar = () => {
  return (
    <div style={{ width: '100%', backgroundColor: "#6777ef", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ marginLeft: 'auto', marginRight: '10px',fontFamily:'DMM',color:'white' }}> Members List</div>
      <div style={{ marginRight: '10px' }}>
        <BadgeAvatars />
      </div>
    </div>
  );
};

export default NavBar;
