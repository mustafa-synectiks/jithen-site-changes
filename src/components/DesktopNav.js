import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../utils/breakpoints';
import logo from '../images/logo.png';
const DesktopNavMenu = () => {
	const [ background, setBackground ] = useState(false);
	const navRef = useRef();

	navRef.current = background;
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 20;
			if (navRef.current !== show) {
				setBackground(show);
			}
		};
		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<StyledHeader background={background}>
			<div>
				<img src={logo} alt='synectiks' />
			</div>
			<ul>
				<li>
					<span>What We Do</span>
					<ul className='sub-menu-wwd'>
						<ul>
							<li>
								<Link to='/area-expertise/index.html'>Area Of Expertise</Link>
							</li>
							<li>
								<Link to='/casestudy/index.html'>Case Studies</Link>
							</li>
						</ul>
					</ul>
				</li>
				<li>
					<span>Migration & Modernization</span>
					<ul className='sub-menu-mm'>
						<ul>
							<li>
								<Link to='/infrastructure/index.html'>Infrastructure Transformation</Link>
							</li>
							<li>
								<Link to='/application-transformation/index.html'>Application Transformation</Link>
							</li>
							<li>
								<Link to='/devops-transformation/index.html'>DevOps Transformation</Link>
							</li>
						</ul>
					</ul>
				</li>
				<li>
					<span>Solutions</span>
					<ul className='sub-menu-solutions'>
						<li>
							<Link to='/office-migration/index.html'>O365 Migration</Link>
						</li>
						<li>
							<Link to='/microservices/index.html'>Microservices</Link>
						</li>
						<li>
							<Link to='/hybrid-cloud/index.html'>Hybrid Cloud</Link>
						</li>
					</ul>
				</li>
				<li>
					<span>Cloud Services</span>
					<ul className='sub-menu-cloud'>
						<li>
							<Link to='/landing-page/index.html'>
								Synectiks Hosted Infrastructure & Business Continuity
							</Link>
						</li>

						<li>
							<Link to='/iaas/index.html'>Secure & Custom Hosted Infrastructure</Link>
						</li>

						<li>
							<Link to='/digital-workspace/index.html'>Cloud-Hosted Virtual Desktop</Link>
						</li>
					</ul>
				</li>
				<li>
					<span>Resources</span>
					<ul className='sub-menu-resources'>
						<li>
							<Link to='/featured/index.html'>Featured</Link>
						</li>
						<li>
							<Link to='/blog/index.html'>Blog</Link>
						</li>
					</ul>
				</li>
				<li>
					<span>Company</span>
					<ul className='sub-menu-com'>
						<li>
							<Link to='/about-us/index.html'>About Us</Link>
						</li>
						<li>
							<Link to='/careers/index.html'>Careers</Link>
						</li>
						<li>
							<Link to='/Contact-us.html'>Contact Us</Link>
						</li>
					</ul>
				</li>
			</ul>
		</StyledHeader>
	);
};

export default DesktopNavMenu;

const StyledHeader = styled.header`
	display: none;
	@media ${breakpoints.lg} {
		display: flex;
		position: fixed;
		width: 100%;
		top: 40px;
		z-index: 10;
		padding: 0.99rem 1rem;
		transition: background 300ms;
		background: ${({ background }) => (background ? '#fff' : '#fff')};

		ul {
			display: flex;
			align-items: center;
			width: 100%;
			justify-content: space-around;
			margin: 0;

			li {
				list-style: none;
				position: relative;

				a {
					text-decoration: none;
					color: #292929;
					transition: color 300ms;

					:hover {
						color: red;
					}
				}
			}

			ul.sub-menu-wwd,
			ul.sub-menu-mm,
			ul.sub-menu-com,
			ul.sub-menu-resources,
			ul.sub-menu-cloud,
			ul.sub-menu-solutions {
				display: none;
			}

			li:hover ul.sub-menu-wwd {
				display: block;
				position: absolute;
				background: transparent;
				padding: 1rem;
				width: auto;
				left: -3.5rem;
				top: 0;
				width: 25rem;
			}
			li:hover ul.sub-menu-mm {
				display: block;
				position: absolute;
				background: transparent;
				padding: 1rem;
				width: auto;
				left: -3.5rem;
				top: 0;
				width: 25rem;
			}
			li:hover ul.sub-menu-solutions {
				display: block;
				position: absolute;
				background: transparent;
				padding: 1rem;
				width: auto;
				left: -3.5rem;
				top: 0;
				width: 25rem;
			}
			li:hover ul.sub-menu-com {
				display: block;
				position: absolute;
				background: transparent;
				padding: 1rem;
				width: auto;
				left: -3.5rem;
				top: 0;
				width: 25rem;
			}
			li:hover ul.sub-menu-resources {
				display: block;
				position: absolute;
				background: transparent;
				padding: 1rem;
				width: auto;
				left: -3.5rem;
				top: 0;
				width: 25rem;
			}
			li:hover ul.sub-menu-cloud {
				display: block;
				position: absolute;
				background: transparent;
				padding: 1rem;
				width: auto;
				left: -3.5rem;
				top: 0;
				width: 25rem;
			}
			ul.sub-menu-wwd ul {
				display: flex;
				flex-direction: column;
				align-items: baseline;
				background: white;
			}
			ul.sub-menu-mm ul {
				display: flex;
				flex-direction: column;
				align-items: baseline;
				background: white;
			}
			ul.sub-menu-com ul {
				display: flex;
				flex-direction: column;
				align-items: baseline;
				background: white;
			}
			ul.sub-menu-cloud ul {
				display: flex;
				flex-direction: column;
				align-items: baseline;
				background: white;
			}
			ul.sub-menu-resources ul {
				display: flex;
				flex-direction: column;
				align-items: baseline;
				background: white;
			}
			ul.sub-menu-solutions ul {
				display: flex;
				flex-direction: column;
				align-items: baseline;
				background: white;
			}
		}
	}
`;
