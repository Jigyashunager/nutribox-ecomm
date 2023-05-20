import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CheckDevice } from '@/shared/check-device';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function LeftDrawer() {
  const [border, setBorder] = useState<string>("menu")

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1500, "paddingRight": "0px" }}
      role="presentation"
      className='left-drawer'
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='main-drawer'>
      <div className='left-drawer-flex'>
          <ClearIcon className='text-black text-9xl' onClick={toggleDrawer(anchor, false)}/> 
        <div>
            <button className='left-drawer-button'>Login / Sign Up</button>
        </div>

      </div>
      <div className='drawer-head'>
        <h2 className={ border === 'menu' ? 'underline text-7xl' : 'text-7xl'} onClick={() => setBorder("menu")}>Main Menu</h2>
        <h2 className={ border === 'shop' ? 'underline text-7xl' : 'text-7xl'} onClick={() => setBorder("shop")}>Shop by category</h2>
      </div>
      {border === "menu" ? <List>
        {['Home', 'Shop', 'Bestsellers',  'Brands', 'Blogs', 'Deals', 'Gift Card', 'Customer Support'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton className='left-drawer'>
              <ListItemText primary={text} className='left-drawer-list'/>
              <ArrowForwardIosIcon className='arrow-icon text-black mr-20'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List> : 
      <List>
      {['Just Released', 'Deals', 'Preworkout',  'Protein', 'Fat Burners', 'Muscle Builders', 'Recovery', 'Wellness', 'Apparel', 'Athletes'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton className='left-drawer'>
            <ListItemText primary={text} className='left-drawer-list'/>
            <ArrowForwardIosIcon className='arrow-icon text-black mr-20'/>
          </ListItemButton>
        </ListItem>
      ))}
    </List>}
      </div>
    </Box>
  );



  return (
    <div className='mobile-left-drawer'>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} ><MenuIcon className="drawer-icon ml-4 text-9xl"/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}