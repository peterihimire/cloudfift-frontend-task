import React from "react";
import "./NavLinks.css";
import { NavLink, Link } from "react-router-dom";
// import { AuthContext } from "../../context/auth-context";
// import SignOutModal from "../UIElements/SignOutModal";

const NavLinks = (props) => {
  // const [showSignOut, setShowSignOut] = useState(false);
  // const { scrollColor } = props;
  // let history = useHistory();
  // console.log(props);

  // const auth = useContext(AuthContext);
  // console.log(auth);

  // const showSignOutHandler = () => {
  //   setShowSignOut(true);
  //   // auth.logout;
  //   // setSignOut(auth.logout)
  // };
  // const cancelSignOutHandler = () => {
  //   setShowSignOut(false);
  // };

  // const mainLogout = () => {
  //   // clears out the user data to log user out
  //   auth.logout();
  //   // redirects to homepage when logged out
  //   history.push("/");
  //   // removes the stuck logout modal , when you logout from the homepage.
  //   const timer = setTimeout(() => {
  //     console.log("has to work after 5 secs.");
  //     cancelSignOutHandler();
  //   }, 500);
  //   return () => clearTimeout(timer);
  // };

  return (
    <>
      {/* <SignOutModal
        show={showSignOutHandler}
        onConfirm={mainLogout}
        onCancel={cancelSignOutHandler}
        onSignOut={showSignOut}
      /> */}
      <div className="navbar-main-links">
        <ul className="navbar-links">
          <li className="navbar-item">
            <NavLink
              exact
              activeClassName="active"
              className={"navbar-single-link"}
              to="/"
            >
              companies
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink
              activeClassName="active"
              className={"navbar-single-link"}
              to="/profile"
            >
              candidate
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink
              activeClassName="active"
              className={"navbar-single-link"}
              to="/properties"
            >
              assessment
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              activeClassName="active"
              className={"navbar-single-link"}
              to="/about"
            >
              post a job
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              activeClassName="active"
              className={"navbar-single-link"}
              to="/about"
            >
              career advice
            </NavLink>
          </li>
        </ul>
        {/* <ul className="navbar-links make-payment-link">
          <li className="navbar-item">
            <NavLink
              activeClassName="active"
              className={"navbar-single-link"}
              to="/property/new"
            >
              add property
            </NavLink>
          </li>
        </ul> */}
        <div className="navbar-links-buttons">
          {/* <div className="navbar-item-button">
            <button
              // activeClassName="active"
              className={"navbar-signout"}
              // onClick={showSignOutHandler}
            >
              sign out
            </button>
          </div> */}

          <div className="navbar-item-button">
            <NavLink
              activeClassName="active"
              className={"navbar-single-link"}
              to="/login"
            >
              sign up
            </NavLink>
          </div>

          <div className="navbar-links-getstarted">
            <Link to="/register">
              <button className="btn">login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
