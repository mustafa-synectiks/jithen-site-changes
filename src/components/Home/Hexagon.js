import React, { useState } from 'react';
import styled from 'styled-components';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import hx1 from '../../images/areofxpertise/Microservices.svg';
import hx2 from '../../images/areofxpertise/Area Of Expertise.svg';
import hx3 from '../../images/areofxpertise/Cloud.svg';
import hx4 from '../../images/areofxpertise/Monitoring.svg';
import hx5 from '../../images/areofxpertise/Analytics.svg';
import hx6 from '../../images/areofxpertise/RAD.svg';
import hx7 from '../../images/areofxpertise/DevOps.svg';
import classnames from 'classnames';

const Hexagon = () => {
	const [ activeTab, setActiveTab ] = useState('');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	const hex1 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'show');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'hide');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'hide');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'hide');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'hide');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'hide');
	};
	const hex2 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'hide');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'show');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'hide');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'hide');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'hide');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'hide');
	};
	const hex3 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'hide');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'hide');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'hide');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'hide');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'hide');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'show');
	};
	const hex4 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'hide');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'hide');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'show');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'hide');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'hide');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'hide');
	};
	const hex5 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'hide');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'hide');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'hide');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'hide');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'show');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'hide');
	};
	const hex6 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'hide');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'hide');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'hide');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'show');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'hide');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'hide');
	};
	return (
		<HexagonWrapper>
			<div className='container-fluid'>
				<div className='row bg-white mx-auto'>
					<div className='col-md-6'>
						<ul id='categories' className='clr'>
							<li className='pusher' />
							<li>
								<div className='hx1' onClick={hex1}>
									<img src={hx1} alt='Microservices' />
								</div>
							</li>
							<li>
								<div className='hx2' onClick={hex2}>
									<img src={hx7} alt='Devops' />
								</div>
							</li>
							<li>
								<div className='hx3' onClick={hex3}>
									<img src={hx6} alt='RAD' />
								</div>
							</li>
							<li>
								<div>
									<img src={hx2} alt='Area Of Expertise' className='ct-cent' />
									{/* <h3 className='heading-h3 ct-cent'>Area Of Expertise</h3> */}
								</div>
							</li>
							<li>
								<div className='hx4' onClick={hex4}>
									<img src={hx3} alt='Cloud' />
								</div>
							</li>
							<li className='pusher' />
							<li>
								<div className='hx5' onClick={hex5}>
									<img src={hx5} alt='Analytics' />
								</div>
							</li>
							<li>
								<div className='hx6' onClick={hex6}>
									<img src={hx4} alt='Monitoring' />
								</div>
							</li>
						</ul>
						<h5 className='text-center'>Click on each Hexagon to know more!</h5>
					</div>
					<div className='col-md-6 pr-7'>
						<div className='text-center my-4'>
							<h5 className='ft'>Expertise</h5>
							<p className='text-uppercase mb-4'>
								{/* Delivering purpose-built solutions based on open products and frameworks */}
								Open Solutions Delivered in Multi Cloud Container Ecosystem to supercharge the Data
								Driven Enterprise.
							</p>
						</div>
						<div className='show' id='hc1'>
							<h5 className='ft'>Microservices</h5>
							<p>Modernization traditional application and legacy infrastructure.</p>
						</div>
						<div className='hide' id='hc2'>
							<h5 className='ft'>DevOps</h5>
							<p>
								Empowering Organization to adopt DevOps culture with through specialized people, tools
								and training.
							</p>
						</div>
						<div className='hide' id='hc3'>
							<h5 className='ft'>Cloud</h5>
							<p>
								Accelerating cloud adoption and software defined transformation through open tools and
								frameworks.
							</p>
						</div>
						<div className='hide' id='hc4'>
							<h5 className='ft'>Monitoring</h5>
							<p>Develop purpose-build monitoring solutions based on proven open frameworks.</p>
						</div>
						<div className='hide' id='hc5'>
							<h5 className='ft'>Analytics</h5>
							<p>
								Develop purpose-built Fast Data and Big Data solutions based on proven open frameworks.
							</p>
						</div>
						<div className='hide' id='hc6'>
							<h5 className='ft'>RAD</h5>
							<p>
								Rapidly build App Blocks based business application in predictable and deterministic
								way.
							</p>
						</div>
					</div>
				</div>
			</div>
		</HexagonWrapper>
	);
};

export default Hexagon;

const HexagonWrapper = styled.section`
	.hx1 > img {
		left: -100%;
		right: -100%;
		width: 100%;
		height: auto;
		margin: 1.2rem 7.3rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.hx2 > img {
		left: -100%;
		right: -100%;
		width: 100%;
		height: auto;
		margin: 1.2rem 7.3rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.hx3 > img {
		left: -100%;
		right: -100%;
		width: 100%;
		height: auto;
		margin: 1.1rem 7.4rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.hx4 > img {
		left: -100%;
		right: -100%;
		width: 100%;
		height: auto;
		margin: 1.5rem 7.6rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.hx5 > img {
		left: -100%;
		right: -100%;
		width: 100%;
		height: auto;
		margin: 1.3rem 7.6rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.hx6 > img {
		left: -100%;
		right: -100%;
		width: 100%;
		height: auto;
		margin: 1.3rem 7.6rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	#hc1,
	#hc2,
	#hc3,
	#hc4,
	#hc5,
	#hc6 {
		padding: 1rem;
		text-align: center;
	}
	#hc1 {
		background: rgb(44, 117, 162);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	#hc2 {
		background: rgb(233, 109, 37);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	#hc3 {
		background: rgb(203, 32, 41);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	#hc4 {
		background: rgb(129, 55, 108);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	#hc5 {
		background: rgb(43, 123, 120);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	#hc6 {
		background: rgb(103, 135, 60);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}

	@media screen and (min-width: 576px) {
		.pr-7 {
			padding-right: 7rem;
		}
		/* Hexagons */
		.show {
			display: block;
		}
		#categories {
			overflow: hidden;
			width: 100%;
			transform: rotate(30deg);
			margin-left: -3rem;
			/* margin:0 auto; */
		}
		.hide {
			display: none;
		}

		.clr:after {
			content: "";
			display: block;
			clear: both;
		}
		#categories li {
			position: relative;
			list-style-type: none;
			width: 27.85714285714286%; /* = (100-2.5) / 3.5 */
			padding-bottom: 32.16760145166612%; /* =  width /0.866 */
			float: left;
			overflow: hidden;
			visibility: hidden;

			-webkit-transform: rotate(-60deg) skewY(30deg);
			-ms-transform: rotate(-60deg) skewY(30deg);
			transform: rotate(-60deg) skewY(30deg);
		}
		#categories li:nth-child(3n + 2) {
			margin: 0 1%;
		}
		#categories li:nth-child(6n + 4) {
			margin-left: 0%;
		}
		#categories li:nth-child(6n + 4),
		#categories li:nth-child(6n + 5),
		#categories li:nth-child(6n + 6) {
			margin-top: -6.9285714285%;
			margin-bottom: -6.9285714285%;

			-webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
			-ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
			transform: translateX(50%) rotate(-60deg) skewY(30deg);
		}
		#categories li:nth-child(6n + 4):last-child,
		#categories li:nth-child(6n + 5):last-child,
		#categories li:nth-child(6n + 6):last-child {
			margin-bottom: 0%;
		}
		#categories li * {
			position: absolute;
			visibility: visible;
		}
		#categories li > div {
			width: 100%;
			height: 100%;
			text-align: center;
			color: #fff;
			overflow: hidden;

			-webkit-transform: skewY(-30deg) rotate(60deg);
			-ms-transform: skewY(-30deg) rotate(60deg);
			transform: skewY(-30deg) rotate(60deg);

			-webkit-backface-visibility: hidden;
		}

		/* HEX CONTENT */
		.hx1 > img {
			left: -100%;
			right: -100%;
			width: 100%;
			height: auto;
			margin: 0 auto;
			transform: rotate(-30deg);
			cursor: pointer;
			top: 12%;
		}
		.hx2 > img {
			left: -100%;
			right: -100%;
			width: 100%;
			height: auto;
			margin: 0 auto;
			transform: rotate(-30deg);
			cursor: pointer;
			top: 12%;
		}
		.hx3 > img {
			left: -100%;
			right: -100%;
			width: 100%;
			height: auto;
			margin: 0 auto;
			transform: rotate(-30deg);
			cursor: pointer;
			top: 12%;
		}
		.hx4 > img {
			left: -100%;
			right: -100%;
			width: 100%;
			height: auto;
			margin: 0 auto;
			transform: rotate(-30deg);
			cursor: pointer;
			top: 12%;
		}
		.hx5 > img {
			left: -100%;
			right: -100%;
			width: 100%;
			height: auto;
			margin: 0 auto;
			top: 12%;
			transform: rotate(-30deg);
			cursor: pointer;
		}
		.hx6 > img {
			left: -100%;
			right: -100%;
			width: 100%;
			height: auto;
			top: 12%;
			margin: 0 auto;
			transform: rotate(-30deg);
			cursor: pointer;
		}

		#categories div h1,
		#categories div p {
			width: 100%;
			padding: 0 5%;
			background-color: #008080;
			background-color: rgba(0, 128, 128, 0.8);

			-webkit-transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
			-ms-transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
			transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
		}
		#categories li h1 {
			bottom: 110%;
			font-style: italic;
			font-weight: normal;
			font-size: 1.5em;
			padding-top: 100%;
			padding-bottom: 100%;
		}
		#categories li h1:after {
			content: '';
			display: block;
			position: absolute;
			bottom: -1px;
			left: 45%;
			width: 10%;
			text-align: center;
			z-index: 1;
			border-bottom: 2px solid #fff;
		}
		#categories li p {
			padding-top: 50%;
			top: 110%;
			padding-bottom: 50%;
		}

		/* HOVER EFFECT  */

		#categories li div:hover h1 {
			bottom: 50%;
			padding-bottom: 10%;
		}

		#categories li div:hover p {
			top: 50%;
			padding-top: 10%;
		}
		#fork {
			position: fixed;
			top: 0;
			left: 0;
			color: #000;
			text-decoration: none;
			border: 1px solid #000;
			padding: .5em .7em;
			margin: 1%;
			transition: color .5s;
			overflow: hidden;
		}
		#fork:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 130%;
			height: 100%;
			background: #000;
			z-index: -1;
			transform-origin: 0 0;
			transform: translateX(-100%) skewX(-45deg);
			transition: transform .5s;
		}
		#fork:hover {
			color: #fff;
		}
		#fork:hover:before {
			transform: translateX(0) skewX(-45deg);
		}
		/* Hexagons */
		#hc1,
		#hc2,
		#hc3,
		#hc4,
		#hc5,
		#hc6 {
			padding: 1rem;
			text-align: center;
		}
		#hc1 {
			background: rgb(44, 117, 162);
			color: var(--synectiksWhite);
			margin-top: 3rem;
		}
		#hc2 {
			background: rgb(233, 109, 37);
			color: var(--synectiksWhite);
			margin-top: 3rem;
		}
		#hc3 {
			background: rgb(203, 32, 41);
			color: var(--synectiksWhite);
			margin-top: 3rem;
		}
		#hc4 {
			background: rgb(129, 55, 108);
			color: var(--synectiksWhite);
			margin-top: 3rem;
		}
		#hc5 {
			background: rgb(43, 123, 120);
			color: var(--synectiksWhite);
			margin-top: 3rem;
		}
		#hc6 {
			background: rgb(103, 135, 60);
			color: var(--synectiksWhite);
			margin-top: 3rem;
		}
		.ct-cent {
			transform: rotate(-30deg);
			width: 100%;
			position: relative;
			top: 8%;
			margin: 0 auto;
		}
	}
	@media screen and (min-width: 768px) {
		.ct-cent {
			transform: rotate(-30deg);
			margin: 0 auto;
		}
	}
	@media screen and (min-width: 1024px) {
		.ct-cent {
			transform: rotate(-30deg);
			margin: 0rem auto;
		}
	}
`;
