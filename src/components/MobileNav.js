// import React, { useState } from 'react';
// import { Link } from 'gatsby';
// import styled from 'styled-components';
// import { breakpoints } from '../utils/breakpoints';
// import logo from '../images/logo.png';
// const MobileNavMenu = () => {
// 	const [ menuOpen, toggleMenuOpen ] = useState(false);

// 	return (
// 		<MenuBar>
// 			<div>
// 				<img src={logo} alt='synectiks' />
// 			</div>
// 			<MenuIconContainer>
// 				<MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
// 					<div />
// 					<div />
// 					<div />
// 				</MenuIcon>
// 			</MenuIconContainer>
// 			<MenuLinks menuOpen={menuOpen}>
// 				<ul>
// 					<li>
// 						<Link to='/'>Home</Link>
// 					</li>
// 					<li>
// 						<Link to='/about'>About</Link>
// 					</li>
// 					<li>
// 						<Link to='/merch'>Merch</Link>
// 					</li>
// 					<li>
// 						<Link to='/about'>Contact</Link>
// 					</li>
// 				</ul>
// 			</MenuLinks>
// 		</MenuBar>
// 	);
// };

// export default MobileNavMenu;

// const MenuBar = styled.header`
// 	@media ${breakpoints.lg} {
// 		display: none;
// 	}
// 	height: 3rem;
// 	position: fixed;
// 	width: 100%;
// 	background: white;
// 	border-bottom: "blue";
// 	z-index: 10;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// `;

// const MenuIconContainer = styled.div`
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: center;
// `;

// const MenuIcon = styled.button`
// 	cursor: pointer;
// 	background: transparent;
// 	border: none;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-around;
// 	height: 2rem;
// 	outline: thin-dotted;
// 	z-index: 11;

// 	div {
// 		width: 2rem;
// 		height: 0.25rem;
// 		background: ${({ menuOpen }) => (menuOpen ? 'red' : 'black')};
// 		border-radius: 10px;
// 		transform-origin: 1px;
// 		transition: opacity 300ms, transform 300ms;

// 		:first-child {
// 			transform: ${({ menuOpen }) => (menuOpen ? 'rotate(45deg)' : 'rotate(0)')};
// 		}

// 		:nth-child(2) {
// 			opacity: ${({ menuOpen }) => (menuOpen ? '0' : '1')};
// 			transform: ${({ menuOpen }) => (menuOpen ? 'translateX(-20px)' : 'translateX(0)')};
// 		}

// 		:nth-child(3) {
// 			transform: ${({ menuOpen }) => (menuOpen ? 'rotate(-45deg)' : 'rotate(0)')};
// 		}
// 	}
// `;

// const MenuLinks = styled.nav`
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	display: flex;
// 	background: blue;
// 	position: absolute;
// 	z-index: 5;
// 	top: 0;
// 	right: 0;
// 	height: 100vh;
// 	width: 100%;
// 	transition: transform 300ms;
// 	transform: ${({ menuOpen }) => (menuOpen ? 'translateX(0)' : 'translateX(100%)')};

// 	ul {
// 		width: 100%;
// 		margin: 0;
// 		flex-direction: column;
// 		justify-content: center;
// 		align-items: center;
// 		display: flex;

// 		li {
// 			list-style: none;

// 			a {
// 				text-decoration: none;
// 				color: white;
// 			}
// 		}
// 	}
// `;

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  DropdownButton,
  ButtonGroup,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { GoTriangleLeft } from 'react-icons/go';
import Topbar from './topbar';
import logo from '../images/logo.png';
import styled from 'styled-components';
import DesktopNavMenu from './DesktopNav';
import MobileNavMenu from './MobileNav';
import 'bootstrap/dist/css/bootstrap.min.css';

// const z = {
//   zIndex: "9999 !important",
// }

const MobileHeader = () => {
  return (
    <MobileNav>
      {/* <div className=''> */}
      <div className="FixedHeader">
        <div className="bg-top pt-2 pl-md-0 py-md-1">
          <Topbar />
        </div>
        {/* <DesktopNavMenu />
				<MobileNavMenu /> */}
        <Navbar expand="lg" className="z pl-3 pr-3 px-md-5">
          <Container fluid={true}>
            <Navbar.Brand href="/">
              <img src={logo} alt="synectiks" />
            </Navbar.Brand>
            <Navbar.Toggle
              className="navbar-toggler-right"
              aria-controls="basic-navbar-nav"
            >
              {/* <span className='navbar-toggler-icon' /> */}
              <AiOutlineMenu className="navbar-toggler-icon" />
              <AiOutlineClose className="my-1 mx-2 close" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" as="ul" id="navitemlink">
                {/*
								<NavDropdown
									title='What we Do'
									href='/area-expertise/index.html'
									id='basic-nav-dropdown'>
									 <NavDropdown.Item >
										Area Of Expertise
									</NavDropdown.Item>
								</NavDropdown>
									 */}
                <Nav.Item as="li">
                  <Nav.Link
                    className="fnt-nav w-mx"
                    href="/what-we-do/index.html"
                  >
                    WHAT WE DO
                  </Nav.Link>
                </Nav.Item>

                <NavDropdown
                  title="Cloud Services"
                  id="basic-nav-dropdown"
                  className="main-tab"
                >
                  <Container fluid={true}>
                    <Row>
                      <Col className="p-0">
                        <NavDropdown.Item
                          className="main-sub-menu p-2"
                          href="/protect-cloud/index.html"
                        >
                          Protect Cloud
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="main-sub-menu p-2"
                          href="/business/index.html"
                        >
                          Backup as a Service
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="main-sub-menu p-2"
                          href="/disaster-service/index.html"
                        >
                          Disaster Recovery as a Service
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="main-sub-menu p-2"
                          href="/iaas/index.html"
                        >
                          Secure & Custom Hosted Infrastructure
                        </NavDropdown.Item>
                        {/* <NavDropdown.Item
													className='main-sub-menu p-2'
													href='/digital-workspace/index.html'>
													Cloud-Hosted Virtual Desktop
												</NavDropdown.Item> */}

                        <NavDropdown.Item
                          className="p-2"
                          href="/aws-managed-services/index.html"
                        >
                          AWS Managed Services
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="p-2"
                          href="/office-migration/index.html"
                        >
                          Microsoft 365 Services
                        </NavDropdown.Item>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className="ml-01"
                  title="Migration & Modernization"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/infrastructure/index.html">
                    Infrastructure Transformation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/application-transformation/index.html">
                    Application Transformation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/devops-transformation/index.html">
                    DevOps Transformation
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="ml-01"
                  title="Solutions"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/microservices/index.html">
                    Microservices
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/hybrid-cloud/index.html">
                    Hybrid Cloud
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="ml-01"
                  title="Resources"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/featured/index.html">
                    Featured
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/blog/index.html">
                    Blog
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/casestudy/index.html">
                    Case Studies
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="ml-01"
                  title="Company"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/about-us/index.html">
                    About Us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/careers/index.html">
                    Careers
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/contact/index.html">
                    Contact Us
                  </NavDropdown.Item> */}
                  <NavDropdown.Item href="/Contact-us.html">
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </MobileNav>
  );
};

MobileHeader.propTypes = {
  siteTitle: PropTypes.string
};

MobileHeader.defaultProps = {
  siteTitle: ``
};
export default MobileHeader;

const MobileNav = styled.div`
  display: block !important;
  .main-tab {
    margin-left: -12px !important;
  }
  .icon-fnt {
    font-size: 2rem;
    color: white;
    margin-right: -2.2rem;
  }
  .fnt-nav {
    font-size: 14px;
    margin-top: 2px;
    margin-left: 8px;
  }
  .bcdr {
    border-right: 1px solid rgba(0, 0, 0, 0.09) !important;
  }
  .bcdl {
    border-left: 1px solid rgba(0, 0, 0, 0.09) !important;
  }
  .lt-colr {
    background: rgba(0, 0, 0, 0.09) !important;
    color: rgba(0, 0, 0, 0.5);
  }
  .lt-colr:hover {
    background: #fbba00 !important;
    color: rgba(0, 0, 0, 0.5);
  }
  /* a.main-sub-menu.dropdown-item {
		padding-left: 0rem;
		font-size: 0.8rem;
	} */
  a.sublist.dropdown-item {
    padding-left: 5rem;
    font-size: 0.7rem;
  }
  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0);
  }
  .navbar-toggler > .close {
    display: inline;
  }
  .navbar-toggler > .navbar-toggler-icon {
    display: none;
  }
  .navbar-toggler:not(.collapsed) > .close {
    display: none;
  }
  .navbar-toggler:not(.collapsed) > .navbar-toggler-icon {
    display: inline;
    background-image: none;
  }
  .card-header {
    padding: 0.75rem 9.25rem !important;
  }
  .bg-top {
    background: var(--synectiksBlue) !important;
  }

  .ml-01 {
    margin-left: -10px !important;
  }
  @media (min-width: 576px) {
    display: none !important;
    .ml-01 {
      margin-left: 0px !important;
    }
    .main-tab {
      margin-left: 0 !important;
    }
    .main-tab.dropdown.nav-item > .dropdown-menu {
      width: max-content;
      position: absolute;
      left: -15rem;
    }
    .nav-item > a.active,
    .nav-item > a:active {
      background-color: #c9ddf1 !important;
      border-radius: 0.25rem;
      height: 2.75rem;
    }
    .bg-top {
      background: var(--synectiksBlue) !important;
      height: auto;
    }
    .px-5 {
      padding-left: 3.75rem !important;
      padding-right: 3.75rem !important;
    }
    .dropdown-item {
      background-color: var(--synectiksWhite);
      color: var(--textColor);
    }
    .dropdown-menu {
      background: var(--synectiksWhite);
    }
  }
`;
