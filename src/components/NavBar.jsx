import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { db } from "../Firebase";
import { collection, getDocs } from 'firebase/firestore'; // Update the path to your firebase configuration

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
  const [userAvatars, setUserAvatars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserAvatars(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      {userAvatars.map(user => (
        <StyledBadge
          key={user.id}
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant={user.status ? "dot" : ""}
        >
          <Avatar alt={user.name} src={user.img} />
        </StyledBadge>
      ))}
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
