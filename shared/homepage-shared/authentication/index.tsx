import React, {useState} from 'react'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Authentication = ({wishlistCount}:{wishlistCount:any}) => {
    const [showLogin, setLoginShow] = useState<boolean>(true);

    const dropDownShow = (event:any) => {
        if(event.defaultPrevented === false){
          setLoginShow(!showLogin)
        }
      }

      console.log(wishlistCount)

  return (
    <>
    <div className="header-right">
            <PersonOutlineIcon className="person-icon" />
            <DropdownButton id="dropdown-basic-button" title="Sign In / Register" show={showLogin} onClick={() => dropDownShow(event)}>
              <Dropdown.Item>
                <div>
                  <div className="sign-in">
                    <h4>Sign in</h4>
                    <h4>Create an Account</h4>
                  </div>
                  <form className="form-login">
                    <p className="form-tags">
                      <label>
                        Username or email
                        <span>*</span>
                      </label>
                      <input placeholder="Username" />
                    </p>
                    <p className="form-tags">
                      <label>
                        Password
                        <span>*</span>
                      </label>
                      <input placeholder="Password" />
                    </p>
                    <button>LOGIN</button>
                    <p className="otp-line">Login/Sign Up with OTP</p>
                    <p className="lost-password-line">Lost your password?</p>
                  </form>
                      </div>
                    </Dropdown.Item>
                  </DropdownButton>
                  <br />
                  <div className="icons">
                    <FavoriteBorderIcon className="heart-icon" />
                    <p className="circle">{wishlistCount}</p>
                    <ShoppingBagOutlinedIcon />
                    <p className="circle">0</p>
                  </div>
                </div>
    </>
  )
}

export default Authentication