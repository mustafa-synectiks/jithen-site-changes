import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, DropdownButton, ButtonGroup, Grid, Row, Col } from 'react-bootstrap';
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

const Header = () => {
	return (
		<HeaderNav>
			{/* <div className=''> */}
			<div className='FixedHeader'>
				<div className='bg-top pt-2 pl-md-0 py-md-1'>
					<Topbar />
				</div>
				{/* <DesktopNavMenu />
				<MobileNavMenu /> */}
				<Navbar expand='lg' className='z pl-3 pr-3 px-md-5'>
					<Container fluid={true}>
						<Navbar.Brand href='/'>
							<img src={logo} alt='synectiks' />
						</Navbar.Brand>
						<Navbar.Toggle className='navbar-toggler-right' aria-controls='basic-navbar-nav'>
							{/* <span className='navbar-toggler-icon' /> */}
							<AiOutlineMenu className='navbar-toggler-icon' />
							<AiOutlineClose className='my-1 mx-2 close' />
						</Navbar.Toggle>
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='ml-auto'>
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

								<NavDropdown title='Cloud Services' id='basic-nav-dropdown' className='main-tab'>
									<Container fluid={true}>
										<Row>
											<Col className='p-0'>
												<NavDropdown.Item
													href='/landing-page/index.html'
													className='pl-2 lt-colr py-0'>
													Hosted Infrastructure & Business Continuity
													<GoTriangleLeft className='icon-fnt ml-2 h5 mt-2' />
												</NavDropdown.Item>
												<NavDropdown.Item
													className='p-2'
													href='/aws-managed-services/index.html'>
													AWS Managed Services
												</NavDropdown.Item>
												<NavDropdown.Item className='p-2' href='/office-migration/index.html'>
													O365 Migration
												</NavDropdown.Item>
											</Col>
											<Col className='p-0 bcdl mx-3 pl-md-3'>
												<NavDropdown.Item
													className='main-sub-menu pl-2 py-0 lt-colr '
													href='/business-cyber-sub-landing/index.html'>
													Business Continuity & Cyber Security
													<GoTriangleLeft className='icon-fnt ml-2 h5 mt-2' />
												</NavDropdown.Item>
												<NavDropdown.Item className='main-sub-menu p-2' href='/iaas/index.html'>
													Secure & Custom Hosted Infrastructure
												</NavDropdown.Item>
												<NavDropdown.Item
													className='main-sub-menu p-2'
													href='/digital-workspace/index.html'>
													Cloud-Hosted Virtual Desktop
												</NavDropdown.Item>
											</Col>
											<Col className='p-0 bcdl pl-md-2'>
												<NavDropdown.Item
													className='main-sub-menu p-2'
													href='/protect-cloud/index.html'>
													Protect Cloud
												</NavDropdown.Item>
												<NavDropdown.Item
													className='main-sub-menu p-2'
													href='/business/index.html'>
													Backup as a Service
												</NavDropdown.Item>
												<NavDropdown.Item
													className='main-sub-menu p-2'
													href='/disaster-service/index.html'>
													Disaster Recovery as a Service
												</NavDropdown.Item>
											</Col>
										</Row>
									</Container>
								</NavDropdown>
								<Nav.Link className='fnt-nav' href='/what-we-do/index.html'>
									WHAT WE DO
								</Nav.Link>
								<NavDropdown title='Migration & Modernization' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/infrastructure/index.html'>
										Infrastructure Transformation
									</NavDropdown.Item>
									<NavDropdown.Item href='/application-transformation/index.html'>
										Application Transformation
									</NavDropdown.Item>
									<NavDropdown.Item href='/devops-transformation/index.html'>
										DevOps Transformation
									</NavDropdown.Item>
								</NavDropdown>

								<NavDropdown title='Solutions' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/microservices/index.html'>Microservices</NavDropdown.Item>
									<NavDropdown.Item href='/hybrid-cloud/index.html'>Hybrid Cloud</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Resources' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/featured/index.html'>Featured</NavDropdown.Item>
									<NavDropdown.Item href='/blog/index.html'>Blog</NavDropdown.Item>
									<NavDropdown.Item href='/casestudy/index.html'>Case Studies</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Company' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/about-us/index.html'>About Us</NavDropdown.Item>
									<NavDropdown.Item href='/careers/index.html'>Careers</NavDropdown.Item>
									<NavDropdown.Item href='/Contact-us.html'>Contact Us</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</HeaderNav>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};
export default Header;

const HeaderNav = styled.div`
	.icon-fnt {
		font-size: 2rem;
		color: white;
		margin-right: -2.2rem;
	}
	.fnt-nav {
		font-size: 14px;
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
		color: rgba(0, 0, 0, .5);
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
		padding: .75rem 9.25rem !important;
	}
	.bg-top {
		background: var(--synectiksBlue) !important;
	}
	@media (min-width: 576px) {
		.main-tab.dropdown.nav-item > .dropdown-menu {
			width: max-content;
			position: absolute;
			left: -10rem;
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
