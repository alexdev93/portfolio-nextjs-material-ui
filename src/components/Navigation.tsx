import React, { useRef } from 'react';
import { IconButton } from '@mui/material';
import { ControlsContainer, Control, NavigationIcon } from './NavigationStyles'; // Ensure these styles are correctly imported
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Description as DescriptionIcon,
  MailOutline as MailOutlineIcon,
} from '@mui/icons-material';

const iconStyle = { width: 28, height: 28, fill: '#dbe1e8' }

const navigationItems = [
  { id: 'home', icon: <HomeIcon sx={iconStyle} /> },
  { id: 'about', icon: <PersonIcon sx={iconStyle} /> },
  { id: 'projects', icon: <WorkIcon sx={iconStyle} /> },
  { id: 'blogs', icon: <DescriptionIcon sx={iconStyle} /> },
  { id: 'contact', icon: <MailOutlineIcon sx={iconStyle} /> },
];

const Navigation: React.FC = () => {
  const navRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleClick = (id: string) => () => {
    const scrollTo = navRefs.current[id];
    if (scrollTo) {
      console.log(scrollTo)
      scrollTo.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ControlsContainer>
      {navigationItems.map(({ id, icon }) => (
        <Control
          key={id}
          ref={(el: any) => (navRefs.current[id] = el)}
          className="control"
          onClick={handleClick(id)}
        >
          <IconButton>{icon}</IconButton>
        </Control>
      ))}
    </ControlsContainer>
  );
};

export default Navigation;
