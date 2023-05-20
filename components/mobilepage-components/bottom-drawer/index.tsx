import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import Image from "next/image";
import ClearIcon from '@mui/icons-material/Clear';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function ContentDrawer({ anchor, openName }: { anchor: Anchor, openName: string }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        console.log(open)
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      className='mobile-drawer-open'
    >
      {openName === "weight" ? <>
        <div >

          <div className='product-flex'>
            <Image
              alt="nutritrix"
              src={"/fatp.png"}
              width={400}
              height={400}
              priority
            />
            <div>
              <h5>MuscleBlaze Biozyme Performance Whey, 4.4lb...</h5>
              <h6>$300 <span className='discounted-price'>$500</span> <span className='discounted-percent'>25% OFF</span></h6>
            </div>
            <ClearIcon className='text-black text-9xl' onClick={toggleDrawer(anchor, false)} />
          </div>
        </div>

        <Divider className='divider' />
        <div>
          <div className='weight-flex'>
            <h6>
              Weight
            </h6>
            <div className='div-flex'>
              <h6>LB</h6>
              <h6>KG</h6>
            </div>
          </div>
          <div className='weight-grid'>
            <div className='weight-box'>
              <p>4.4Lb</p>
              <h6>$300</h6>
            </div>
            <div className='weight-box'>
              <p>0.079Lb</p>
              <h6>$20</h6>
            </div>
            <div className='weight-box'>
              <p>1.1Lb</p>
              <h6>$50</h6>
            </div>
            <div className='weight-box'>
              <p>1.65Lb</p>
              <h6>$150</h6>
            </div>
            <div className='weight-box'>
              <p>1.87Lb</p>
              <h6>$180</h6>
            </div>
            <div className='weight-box'>
              <p>2.2Lb</p>
              <h6>$200</h6>
            </div>
          </div>
        </div>
        <button>Apply</button>
      </> : openName === "flavour" ?
        <div>
          <div>
            <div className='product-flex'>
              <Image
                alt="nutritrix"
                src={"/fatp.png"}
                width={400}
                height={400}
                priority
              />
              <div>
                <h5>MuscleBlaze Biozyme Performance Whey, 4.4lb...</h5>
                <h6>$300 <span className='discounted-price'>$500</span> <span className='discounted-percent'>25% OFF</span></h6>
              </div>
              <ClearIcon className='text-black text-9xl' onClick={toggleDrawer(anchor, false)} />
            </div>
            <Divider className='divider' />
            <div className='flavor-grid'>
            <div className='weight-box'>
              <button>Rich Chocolate</button>
            </div>
            <div className='weight-box'>
              <button>Blue Tokai Coffee</button>
            </div>
            <div className='weight-box'>
              <button>Choco Banana Smoothie</button>
            </div>
            <div className='weight-box'>
              <button>Choco Cinnamon Swirl</button>
            </div>
            <div className='weight-box'>
              <button>Choco Crispers</button>
            </div>
            <div className='weight-box'>
              <button>Chocolate Cake</button>
            </div>
          </div>
          <button>Apply</button>

          </div>

        </div> : ""}
    </Box>
  );

  return (
    <>
      <div className='mobile-bottom-drawer'>
        {([anchor] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            {openName === "weight" ?
              <>
                <div onClick={toggleDrawer(anchor, true)} className='button-flex'>
                  <div>
                    <h6><MonitorWeightIcon className='weight-icon' /> Weight: <span>4.4 lb</span></h6>
                  </div>
                  <h6><span>7 more</span><ArrowForwardIosIcon className='arrow-icon' /></h6>
                </div>
              </> :
              openName === "flavour" ?
                <>
                  <div onClick={toggleDrawer(anchor, true)} className='button-flex'>
                    <div>
                      <h6><LocalCafeIcon className='weight-icon' /> Flavour: <span>Rich Chocolate</span></h6>
                    </div>
                    <h6><span>7 more</span><ArrowForwardIosIcon className='arrow-icon' /></h6>
                  </div>
                </> : ""}
            <div>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                className='border-radius'
              >
                {list(anchor)}
              </Drawer>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}