import React from "react";
import Team from '../assets/fonts/ADMIN.svg';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

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

const avatars = [
  {
    alt: "Remy Sharp",
    src: "https://mui.com/static/images/avatar/1.jpg",
    name: "Remy Sharp",
    styling: { position: 'relative', top: 120,left:110 },
    imageUrl: "https://mui.com/static/images/avatar/1.jpg",
    id: 1
  },
  {
    alt: "Another Name",
    src: "https://mui.com/static/images/avatar/2.jpg",
    name: "Another Name",
    styling: { position: 'relative', top: 50 ,left:350},
    imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    id: 2
  },
  {
    alt: "Another Name",
    src: "https://mui.com/static/images/avatar/2.jpg",
    name: "Another Name",
    styling: { position: 'relative', top: 50 ,left:570},
    imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    id: 3
  },
  {
    alt: "Another Name",
    src: "https://mui.com/static/images/avatar/2.jpg",
    name: "Another Name",
    styling: { position: 'relative', top: 200 ,left:235},
    imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    id: 4
  },
  {
    alt: "Another Name",
    src: "https://mui.com/static/images/avatar/2.jpg",
    name: "Another Name",
    styling: { position: 'relative', top: 200 ,left:470},
    imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    id: 5
  },
  {
    alt: "Another Name",
    src: "https://mui.com/static/images/avatar/2.jpg",
    name: "Another Name",
    styling: { position: 'relative', top: 270 ,right:-680},
    imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    id: 6
  },
  {
    alt: "Another Name",
    src: "https://mui.com/static/images/avatar/2.jpg",
    name: "Another Name",
    styling: { position: 'relative', top: 270 ,right:-680},
    imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    id: 7
  },
  {
    alt: "Another Name",
    src: "https://mui.com/static/images/avatar/2.jpg",
    name: "Another Name",
    styling: { position: 'relative', top: 540 ,left:-300},
    imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    id: 8
  },
  {
    alt: "Another Name",
    src: "https://mui.com/static/images/avatar/2.jpg",
    name: "Another Name",
    styling: { position: 'relative', top: 540 ,left:-79},
    imageUrl: "https://mui.com/static/images/avatar/2.jpg",
    id: 9
  },

];

const TeamView = () => {
  const divStyle = {
    backgroundImage: `url(${Team})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', // Set height to cover entire viewport height
    display: 'flex',
  };

  return (
    <>
      <div style={divStyle}>
        <Stack direction="row" spacing={2}>
          {avatars.map(avatar => (
            <div key={avatar.id} style={avatar.styling}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar
                  alt={avatar.alt}
                  src={avatar.src}
                  name={avatar.name}
                  styling={avatar.styling}
                  imageUrl={avatar.imageUrl}
                  id={avatar.id}
                />
              </StyledBadge>
            </div>
          ))}
        </Stack>
      </div>
    </>
  );
};

export default TeamView;
