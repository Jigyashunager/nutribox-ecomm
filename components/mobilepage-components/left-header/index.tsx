import * as React from 'react';
import { useState, useEffect } from 'react';
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
import { useRouter } from 'next/router';
import LeftShopContent from '@/shared/left-shop-content';
import LeftBlogContent from '@/shared/productpage-shared/left-blog-content';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function LeftDrawer({ openName, anchor }: { openName: string, anchor: Anchor }) {
  const router = useRouter();

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
        console.log(open)

        setState({ ...state, [anchor]: open });
      };


  const gotoShop = (text: any) => {
    if (text === "Shop") {
      router.push('/shop');
    }
    
    if (text === "Home") {
      router.push('/');
    }

    if (text === "Login") {
      router.push('/my-account');
    }
    
    if (text === "Blogs") {
      router.push('/blogs');
    }
    
    if (text === "Bestsellers") {
      router.push('/bestsellers');
    }
    
    setState({ ...state, [anchor]: false });

  }
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1500, "paddingRight": "0px" }}
      role="presentation"
      className='left-drawer'
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {<div className='main-drawer'>
        <div className='left-drawer-flex'>
          <ClearIcon className='text-black text-9xl' onClick={toggleDrawer(anchor, false)} />
          <div>
            <button onClick={() => gotoShop("Login")} className='left-drawer-button'>Login / Sign Up</button>
          </div>

        </div>
        <div className='drawer-head'>
          <h2 className={border === 'menu' ? 'underline text-7xl' : 'text-7xl'} onClick={() => setBorder("menu")}>Main Menu</h2>
          <h2 className={border === 'shop' ? 'underline text-7xl' : 'text-7xl'} onClick={() => setBorder("shop")}>Shop by category</h2>
        </div>
        {border === "menu" ? <List>
          {['Home', 'Shop', 'Bestsellers', 'Brands', 'Blogs', 'Deals', 'Gift Card', 'Customer Support'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton className='left-drawer'>
                <ListItemText primary={text} onClick={() => gotoShop(text)} className='left-drawer-list' />
                <ArrowForwardIosIcon className='arrow-icon text-black mr-20' />
              </ListItemButton>
            </ListItem>
          ))}
        </List> :
          <List>
            {['Just Released', 'Deals', 'Preworkout', 'Protein', 'Fat Burners', 'Muscle Builders', 'Recovery', 'Wellness', 'Apparel', 'Athletes'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton className='left-drawer'>
                  <ListItemText primary={text} onClick={() => gotoShop(text)} className='left-drawer-list' />
                  <ArrowForwardIosIcon className='arrow-icon text-black mr-20' />
                </ListItemButton>
              </ListItem>
            ))}
          </List>}
      </div>}
    </Box>
  );


  const listShopFilter = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1500, "paddingRight": "0px" }}
      role="presentation"
      className='left-drawer'
    >
      {<div className='main-drawer'>
          <ClearIcon className='text-black text-9xl cross-icon' onClick={toggleDrawer(anchor, false)} />
          <LeftShopContent/>
      </div>}
    </Box>
  );
  
  const listShopBlogs = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1500, "paddingRight": "0px" }}
      role="presentation"
      className='left-drawer'
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {<div className='main-drawer'>
          <ClearIcon className='text-black text-9xl cross-icon' onClick={toggleDrawer(anchor, false)} />
          <LeftBlogContent/>
      </div>}
    </Box>
  );


  return (
    <div className='mobile-left-drawer'>
      {([anchor] as const).map((anchor, index) => (
        <React.Fragment key={index}>
          {openName === "home" ? <Button onClick={toggleDrawer(anchor, true)} ><MenuIcon className="drawer-icon ml-4 text-9xl" /></Button> :
            openName === "shop" || openName === "blogs" ? <><Button onClick={toggleDrawer(anchor, true)}>Filter</Button></> : ""}
          {openName === "home" ? <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer> : openName === "blogs" ?
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {listShopBlogs(anchor)}
            </Drawer> : openName === "shop" ? 
             <Drawer
             anchor={anchor}
             open={state[anchor]}
             onClose={toggleDrawer(anchor, false)}
           >
             {listShopFilter(anchor)}
           </Drawer> : ""
          }
        </React.Fragment>
      ))}
    </div>
  );
}