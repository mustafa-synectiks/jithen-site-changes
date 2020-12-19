import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Topbar from './topbar';
import logo from '../images/logo.png';
import styled from 'styled-components';
import DesktopNavMenu from './DesktopNav';
import MobileNavMenu from './MobileNav';

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
				<DesktopNavMenu />
				<MobileNavMenu />
				{/* <Navbar expand='lg' className='z pl-3 pr-3 px-md-5'>
					<Container fluid={true}>
						<Navbar.Brand href='/'>
							<img src={logo} alt='synectiks' />
						</Navbar.Brand>
						<Navbar.Toggle className='navbar-toggler-right' aria-controls='basic-navbar-nav'> */}
				{/* <span className='navbar-toggler-icon' /> */}
				{/* <AiOutlineMenu className='navbar-toggler-icon' />
							<AiOutlineClose className='my-1 mx-2 close' />
						</Navbar.Toggle>
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='ml-auto'>
								<NavDropdown title='What we Do' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/area-expertise/index.html'>
										Area Of Expertise
									</NavDropdown.Item>
									<NavDropdown.Item href='/casestudy/index.html'>Case Studies</NavDropdown.Item>
								</NavDropdown>
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
								<NavDropdown
									title='Cloud Services'
									id='basic-nav-dropdown'
									menuAlign={{ lg: 'left' }}
									className='main-tab'>
									<NavDropdown.Item href='/landing-page/index.html' className='main-nav-tab '>
										Synectiks Hosted Infrastructure & Business Continuity
									</NavDropdown.Item>
									<div className='sub-menu-tab-nav'>
										<NavDropdown.Item
											className='main-sub-menu'
											href='/business-cyber-sub-landing/index.html'>
											Business Continuity & Cyber Security
										</NavDropdown.Item>
										<NavDropdown.Item className='main-sub-menu' href='/protect-cloud/index.html'>
											Protect Cloud
										</NavDropdown.Item>
										<NavDropdown.Item className='main-sub-menu' href='/business/index.html'>
											Backup as a Service
										</NavDropdown.Item>
										<NavDropdown.Item className='main-sub-menu' href='/disaster-service/index.html'>
											Disaster Recovery as a Service
										</NavDropdown.Item>
										<NavDropdown.Item className='main-sub-menu' href='/iaas/index.html'>
											Secure & Custom Hosted Infrastructure
										</NavDropdown.Item>
										<NavDropdown.Item
											className='main-sub-menu'
											href='/digital-workspace/index.html'>
											Cloud-Hosted Virtual Desktop
										</NavDropdown.Item>
									</div>
									<NavDropdown.Item className='' href='/aws-managed-services/index.html'>
										AWS Managed Services
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Solutions' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/office-migration/index.html'>
										O365 Migration
									</NavDropdown.Item>
									<NavDropdown.Item href='/microservices/index.html'>Microservices</NavDropdown.Item>
									<NavDropdown.Item href='/hybrid-cloud/index.html'>Hybrid Cloud</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Resources' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/featured/index.html'>Featured</NavDropdown.Item>
									<NavDropdown.Item href='/blog/index.html'>Blog</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Company' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/about-us/index.html'>About Us</NavDropdown.Item>
									<NavDropdown.Item href='/careers/index.html'>Careers</NavDropdown.Item>
									<NavDropdown.Item href='/Contact-us.html'>Contact Us</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse> */}
				{/* </Container>
				</Navbar> */}
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
	a.main-sub-menu.dropdown-item {
		padding-left: 3rem;
		font-size: 0.8rem;
	}
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
