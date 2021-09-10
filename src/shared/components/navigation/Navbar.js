import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavLinks from "../../../shared/components/navigation/NavLinks";
import MenuIcon from '../../../assets/menu-icon.svg'
// import Backdrop from "../UIElements/Backdrop";
// import SideDrawer from "../../components/Navigation/SideDrawer";
// import NavLinksMob from "../Navigation/NavLinksMob";

const Navbar = (props) => {
  console.log(props);
  // const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  // const [isColor, setIsColor] = useState(false);
  // const [isPadding, setIsPadding] = useState(false);

  // const navColorHandler = () => {
  //   let position = window.pageYOffset;
  //   console.log(position);
  //   if (position > 120) {
  //     setIsColor(true);
  //     // setIsPadding(true);
  //   } else {
  //     setIsColor(false);
  //     // setIsPadding(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     console.log(window.scrollY);
  //     navColorHandler();
  //   });
  // }, []);

  // const openDrawerHandler = () => {
  //   setDrawerIsOpen(true);
  // };
  // const closeDrawerHandler = () => {
  //   setDrawerIsOpen(false);
  // };

  return (
    <>
      {/* {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinksMob />
      </SideDrawer> */}
      <nav className={ "navbar"}>
        <div className="navbar-container">
          <div
            className={ "navbar-main"}
          >
            <div className="navbar-head">
              <button
                className="navbar-btn"
                type="button"
                // onClick={openDrawerHandler}
              >
                <img src={MenuIcon} alt="menu icon" className="menu-icon" />
              </button>
              <div className="navbar-logo-div">
                <Link to="/" className="navbar-logo">
                  <strong>
                    bnk<span>-homes</span>
                  </strong>
                </Link>
              </div>
            </div>
            <NavLinks  />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
