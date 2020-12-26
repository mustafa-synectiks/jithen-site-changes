import React from 'react';
import styled from 'styled-components';
import Social from './social-icons';
import logo from '../images/Synectiks Logo/synectiks-text-logo.png';
import { MdArrowForward, MdArrowBack, MdClose } from 'react-icons/md';
import './layout.css';
export class Footer extends React.Component {
	render() {
		return (
			<FooterWrapper>
				{/* <div className='text-center text-light fixed-bottom bgBlue content'>
					<button className='bgBlue text-light fa fa-times float-right' type='submit' id='hide' />
					<p className='mb-1 pt-2 px-3 fsize08'>
						We use cookies to make sure you have better experience on our website. Read about how we use
						cookies in our Privacy Policy
						<a className=' navfont  text-light' href='/privacy-policy/index.html'>
							<small className='fsize08'>
								&nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
							</small>
						</a>
						If you continue to use this site, you consent to our use of cookies and our
						<a className=' navfont  text-light' href='/privacy-policy/index.html'>
							<small className='fsize08'>
								&nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
							</small>
						</a>
					</p>
				</div> */}
				<div className='text-center fixed-bottom Footerbg prvtpolicy'>
					<p className='mb-1 pt-1 px-3 fsize08'>
						We use cookies to make sure you have better experience on our website. Read about how we use
						cookies in our
						<a className='navfont Footerbg' href='/privacy-policy/index.html'>
							&nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
						</a>
					</p>
					<MdClose className='closeBtn' type='submit' id='hide' />
				</div>

				<div className='d-sm-flex justify-content-sm-between d-md-flex  justify-content-md-center d-lg-flex justify-content-lg-center d-xl-flex justify-content-xl-center bgFooter px-2 pt-2 pb-3 px-md-5 pt-md-5'>
					<div className='w-35vw mx-0 mx-md-4 px-2 px-md-0'>
						{/* <h3 className='text-light text-capitalize'>Synectiks</h3> */}
						<a href='/'>
							<img src={logo} alt='' className='w-65 mt-0 mt-md-2' />
						</a>
						{/* <h4 className='text-light text-capitalize'>U.S.A</h4> */}
						<p className='text-light mt-0 mt-md-3 text-left lht'>
							{/* We are a team of highly qualified and experienced professionals from various fields who are
							determined and dedicated to delivering world class professional services to our patrons. */}
							As an Open Product based Cloud Solution provider, we help enterprises take advantage of
							public & private cloud and its infinite resources to migrate and modernize their business so
							that they outperform their peers by becoming truly disruptive.
						</p>
					</div>
					<div className='w-30vw mx-0 mx-md-5  px-2 px-md-0'>
						<h3 className='text-light text-capitalize'>USA</h3>
						<p className='text-light mt-0 mt-md-3'>300 Alexander Park Drive, Suite 215,</p>
						<p className='text-light'> Princeton, NJ 08540 </p>
						<span className='text-light webText'>Sales: +1 (609) 608-0429 X 102 </span>
						<br />
						<span className='text-light webText'>Office: +1 (609) 608-0429</span>
						{/* <h3 className='text-light text-capitalize py-3'>privacy &copy; 2020</h3> */}
					</div>
					<div className='w-30vw mx-0 ml-md-3  px-2 px-md-0'>
						<h3 className='text-light text-capitalize'>INDIA</h3>
						<p className='text-light mt-0 mt-md-3 footaddleft'>
							Ground Floor, SK Feature, <br />Plot 105 & 106, Lumbini Layout,
						</p>
						<p className='text-light footaddleft'> Hitech City Main Rd, </p>
						<p className='text-light footaddleft'> Gachibowli, Hyderabad 500032 </p>
						<p className='text-light webText'>Office: +91 (40) 4857 4411</p>
					</div>
					<div className='w-35vw mx-0 ml-md-3 pl-1 pl-md- my-4 my-md-0'>
						<div className='ml-0 ml-md-5'>
							<h4 className='text-light text-capitalize mb-3'>
								<a
									href='https://synectiks.com/privacy-policy/index.html'
									className='text-light text-underline h4'>
									<u>Privacy Policy</u>
								</a>
							</h4>
							<h3 className='text-light  text-capitalize mt-2 mt-md-3'>Social</h3>
							<div className='d-flex flex-column'>
								{Social.map((item, index) => {
									return (
										<a
											key={index}
											href={item.url}
											target='_blank'
											rel='noopener noreferrer'
											className='text-light text-capitalize d-flex align-content-center mb-2'>
											<span className='text-warning'>{item.icon}</span>
											<span className='ml-3 text-capitalize m5t'>{item.text}</span>
										</a>
									);
								})}
							</div>
							<h3 className='text-light text-capitalize py-3'>privacy &copy; 2020</h3>
						</div>
					</div>
				</div>
			</FooterWrapper>
		);
	}
}

export default Footer;

const FooterWrapper = styled.div`
	 {
		.footaddleft {
			text-align: left;
		}
		.webText {
			webkit-text-fill-color: white;
		}
		.ptext {
			text-align: left;
		}
		.lht {
			line-height: 1.5;
		}
		.w-65 {
			width: 50%;
		}
		background: var(--textColor);
		p {
			font-size: 1rem;
			line-height: 2.3;
			margin-bottom: 0px;
			font-style: normal;
			font-weight: 200;
		}
		ul {
			line-height: 2.3;
			list-style: none;
			font-size: 1rem;
		}
		a {
			font-weight: 300;
		}
		.m5t {
			margin-top: 5px;
		}

		.prvtpolicy {
			height: 45px;
			line-height: 10px;
			margin-top: 0px;
			padding: 0px 30px;
			display: none;
			#hide {
				position: absolute;
				top: 0;
				right: 0;
				padding: 10px;
				font-size: 2.5rem;
				margin-top: 5px;
			}
		}
		.navfont {
			position: relative;
			top: 0px;
			font-size: 8px;
		}

		.fsize08 {
			font-size: 8px;
			position: relative;
			top: 0px;
		}
	}
	@media (min-width: 576px) {
		.navfont,
		.fsize08 {
			font-size: 16px;
			position: relative;
			top: 0%;
		}
		.prvtpolicy {
			height: 40px;
			padding: 0;
			display: none;
			#hide {
				position: absolute;
				top: 0;
				right: 0;
			}
		}
		.ptext {
			text-align: justify;
		}
		.fsize08 {
			font-size: 10px;
		}
		.w-65 {
			width: 55%;
		}
		.w-35vw {
			width: 40vw;
		}
		.w-30vw {
			width: 35vw;
		}
		background: var(--textColor);
		a {
			font-weight: 300;
		}
		p {
			font-size: 1rem;
			line-height: 2.3;
			margin-bottom: 0px;
			font-style: normal;
			font-weight: 200;
		}
		ul {
			line-height: 2.3;
			list-style: none;
			font-size: 1rem;
		}
	}
`;
