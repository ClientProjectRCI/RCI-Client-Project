import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
    const user = useSelector((store) => store.user);

    return (
      <div className="nav">
        <Link to="/home">
          <img
            src="https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/271946246_241854878125171_2973919186550770978_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=WPCucrS1o30AX-C5APO&tn=SYOArRVUPJXxNmf1&_nc_ht=scontent-msp1-1.xx&oh=00_AT_9R2EkqGCX4WEXmUhE8__kh-sFMby0LFIt0ioqrnvAKQ&oe=631265C9"
            width="340rem"
            height="120rem"
          />
        </Link>
        <div>
          {/* If no user is logged in, show these links */}
          {!user.id && (
            // If there's no user, show login/registration links
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <Link className="navLink" to="/home">
                Home
              </Link>
              <Link className="navLink" to="/mhpprofile">
                MHPProfile
              </Link>
              <Link className="navLink" to="/mhgprofile">
                MHGProfile
              </Link>

              <LogOutButton className="navLink" />
            </>
          )}
          <Link className="navLink" to="/providers">
            Providers
          </Link>
          <Link className="navLink" to="/about">
            About
          </Link>
        </div>
      </div>
    );
}

export default Nav;
