import React, { useState, useEffect, useContext, useRef } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo1.png"; 
import "./header.css";
import { AuthContext } from "../../context/AuthContext";

const nav__links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setMenuOpen(false); 
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
  <header className='header' ref={headerRef}>
     <Container>
        <Row>
           <div className="nav__wrapper d-flex align-items-center justify-content-between">
              {/* ========== LOGO ========== */}
              <div className="logo">
                 <img src={Logo} alt="" />
              </div>
              {/* ========================== */}

              {/* ========== NAVIGATION ========== */}
              <div className={`navigation ${menuOpen ? "show__menu" : ""}`}>
                <ul className="menu">
                  <span className="menu__close" onClick={toggleMenu}>
                    <i className="ri-close-line"></i>
                  </span>
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        onClick={() => setMenuOpen(false)} 
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                  {/* Mobile buttons are now cleanly inside */}
                  <li className="nav__btns__mobile">
                    {user ? (
                      <div className="d-flex flex-column align-items-center gap-3">
                        <h5 className="mb-0">{user.username}</h5>
                        <Button className="btn btn-dark w-100" onClick={logout}>
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <div className="d-flex flex-column align-items-center gap-3">
                        <Button className="btn secondary__btn w-100">
                          <Link to="/login">Login</Link>
                        </Button>
                        <Button className="btn primary__btn w-100">
                          <Link to="/register">Register</Link>
                        </Button>
                      </div>
                    )}
                  </li>
                </ul>
              </div>

            {/* ========== DESKTOP BUTTONS & HAMBURGER ICON ========== */}
            <div className="nav__right">
              <div className="nav__btns__desktop">
                {user ? (
                  <div className="d-flex align-items-center gap-3">
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="d-flex align-items-center gap-3">
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </div>
                )}
              </div>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
