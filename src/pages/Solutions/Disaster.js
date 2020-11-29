import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FaBars } from 'react-icons/fa';
import '../../components/layout.css';
import styled from 'styled-components';
import self from '../../images/ManagedBackup/Self Service Portal.png';
import cloudImaged from '../../images/ManagedBackup/backup.png';
// import cloudImaged from '../../images/ManagedBackup/Backup.png';
import security from '../../images/ManagedBackup/Security.png';
import geolocation from '../../images/ManagedBackup/MultipleSecureGeoLocations.png';
import backupStorage from '../../images/ManagedBackup/BackupStorage.png';
import efficientStorage from '../../images/ManagedBackup/EfficientBackupStorageUsage.png';
import protection from '../../images/ManagedBackup/ProtectionforAnyworkload.png';
import restore from '../../images/ManagedBackup/Restore.png';
// import support from '../../images/ManagedBackup/Support.png';
import support from '../../images/synectiks-secure/support.svg';
import CS from '../../images/Hybrid/Compliance&Security.png';
import price from '../../images/ManagedBackup/affordableprice.png';
import AP from '../../images/ManagedBackup/AffordablePricing.png';
import ARP from '../../images/ManagedBackup/Availability&ReliablePerformance.png';
import HW from '../../images/ManagedBackup/Hostanyworkload.png';
import MS from '../../images/ManagedBackup/MigrationServices.png';
import MSGL from '../../images/ManagedBackup/MultiSecureGeoLocations.png';
import SCR from '../../images/ManagedBackup/HSecurity.png';
import ST from '../../images/ManagedBackup/StorageTypesavailable.png';
import SPT from '../../images/ManagedBackup/HSupport.png';
// import HostedInfra from '../../images/synectiks-secure/dras.jpg';
import HostedInfra from '../../images/DRaas_S2.jpg';
import WO from '../../images/Hybrid/Optimization Service.png';
import EA from '../../images/Hybrid/Extreme Automation.png';
import agent from '../../images/oneAgentForall.svg';
import backupDis from '../../images/AllBackup.svg';
import failover from '../../images/failovernrestore.svg';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Collapse, NavbarToggler, Navbar } from 'reactstrap';
import classnames from 'classnames';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import secureDRass from '../../images/Secure-Draas-Solution.svg';
const Disaster = () => {
	const [ activeTab, setActiveTab ] = useState('1');
	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	const [ collapsed, setCollapsed ] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	const [ isOpen, setNav ] = useState(true);
	const toggleTab = () => {
		setNav((isOpen) => !isOpen);
	};
	const onTop = () => {
		window.scroll(0, 0);
	};
	return (
		<Layout>
			<Helmet>
				<meta
					name='description'
					content='Synectiks Secure Cloud Hosted Services supports a variety of workloads & Disaster Recovery with a high degree of control, security and simplicity. Support your mission-critical applications and workloads with instant and scalable infrastructure. With Synectiks Cloud Hosted Services, you can focus on your business needs instead of spending the time and money it takes to plan, procure, secure and manage the right infrastructure to meet your application demands.'
				/>
				<link rel='canonical' href='https://synectiks.com/private-cloud-hosting-services/index.html' />
			</Helmet>
			<SEO title='Disaster Recovery as a Service' />
			<DisasterWrapper>
				<div className='bg-lightgrey'>
					<div className='text-justify'>
						<BreadCrumbs title='Home' subtitle='Solutions' pageTitle='Disaster Recovery as a Service' />
						{/* <h1>Business Continuity & Cyber Security</h1> */}
					</div>

					<div className='' data-aos='fade-up'>
						{/* <img class='box-shadow' src={HostedInfra} width='100%' alt='Hosted Infrastructure' /> */}
						<div className='mt-4'>
							<h2 className='ml-n1'>Secure Cloud Disaster Recovery as a Service</h2>
						</div>
						<div id='background-image' />
					</div>
					<Row className='d-flex justify-content-start p-full contain-fluid'>
						<div className='px-2 px-md-0 mb-3 col-md-12'>
							<div>
								<div className='bg-lightgrey text-black w-100  pb-md-4 pb-2 flex-column  d-flex align-items-center'>
									<div className='w-100  pl-3 pr-3 text-black'>
										<h4 className='my-1 my-md-3'>
											Secure & Modern Innovative Cloud Disaster Recovery Solution.
										</h4>
										<p className='lineHeight-24 ptext mt-md-4 mt-1'>
											Business Continuity with a Turn-key DRaaS Solution. our platform makes it
											seamless to create a comprehensive recovery solution that enables the
											implementation and management of systems, servers, and applications that
											fall under a disaster recovery (DR) scenario using the same management
											model. With an easy-to-use user interface, you can effortlessly automate
											runbooks, testing, and failover to the Synectiks Cyber Disaster Recovery
											Cloud during a DR event.
										</p>
									</div>
								</div>

								{/* <h4>Why choose SYNECTIKS Cloud Backup Solution?</h4> */}
								<div className='d-flex flex-column flex-md-row align-items-center align-items-md-start mt-1 mt-md-3'>
									<img class='w-12 mr-55' src={agent} alt='Security' />
									<div>
										<h5>All-in-one backup and disaster recovery solution</h5>
										<p className='pcenter'>
											Enable multi-layer protection for your entire environment with greater
											ease-of-use and a lower cost – as compared to purchasing and maintaining
											separate DR and backup solutions. Manage and control all your company DR &
											Backups with easy self-service portal. The same self-service portal can be
											used to manage all Windows server Patch management & Anti-Virus.
										</p>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row align-items-center align-items-md-start mt-1 mt-md-3'>
									<img class='w-5 mr-0 mr-56 ml-3' src={AP} alt='Security' />
									<div>
										<h5>No-Compute Hardware Reservation cost</h5>
										<p className='pcenter'>
											In Our Cloud Disaster Recovery services we don’t charge any ongoing Hardware
											reservation fees, pay only when you spin a Virtual Machine billed hourly,
											You just pay for the cloud backup storage consumed on regular monthly basis.
										</p>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row  align-items-center align-items-md-center mt-3'>
									<img class='w-9 mr6' src={backupDis} alt='Availability & Reliable Performance' />
									<div>
										<h5>A secure DRaaS solution</h5>
										<p className='pcenter'>
											Ensure data safety and security with features like encrypted backups during
											failover, proactive AI-based ransomware protection, and two-factor
											authentication for the portal login.
										</p>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row  align-items-center align-items-md-start mt-1 mt-md-5'>
									<img class='w-12 mr-0 mr-6' src={HW} alt='Affordable Pricing' />
									<div>
										<h5>Disaster recovery for virtual and physical workloads</h5>
										<p className='pcenter'>
											Support all popular workloads including Windows and Linux physical servers
											and VMs, major hypervisors, and Microsoft business applications.
										</p>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row  align-items-center align-items-md-start mt-1 mt-md-5'>
									<img class='w-12 mr-0 mr-6' src={self} alt='Affordable Pricing' />
									<div>
										<h5>Off-site failover to the Synectiks cloud recovery site</h5>
										<p className='pcenter'>
											Get back to business in mere minutes no matter how severe the incident is –
											from a single server failure to a full site outage or loss – by switching
											your production workloads to machines in an Synectiks cloud data center at
											varies Geo-location to choose. Achieve both RPOs and RTOs shorter than 15
											minutes*. The innovative RunVM engine enables best-in-class production and
											test failover speed, while flexible backup frequency policies lead to
											tighter RPOs.
										</p>
										<small className='small'>
											* The exact time required to start a copy of the VM on the Synectiks cloud
											recovery site depends on the operating system configuration and usually
											varies from two to five minutes.
										</small>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row  align-items-center align-items-md-start mt-1 mt-md-5'>
									<img class='w-12 mr-0 mr-6' src={efficientStorage} alt='Affordable Pricing' />
									<div>
										<h5>Seamless extension of local networks to the cloud recovery site</h5>
										<p className='pcenter'>
											Extend up to five local networks to the Synectiks cloud recovery site to
											provide transparent remote access to recovery servers in failover mode. Our
											VPN virtual appliance makes it simple.
										</p>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row  align-items-center align-items-md-start mt-1 mt-md-5'>
									<img class='w-12 mr-0 mr-6' src={WO} alt='Affordable Pricing' />
									<div>
										<h5>Disaster recovery orchestration with runbooks</h5>
										<p className='pcenter'>
											Automate key disaster recovery scenarios and ensure your systems will be
											recovered in the correct order to address interdependencies between
											applications.
										</p>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row  align-items-center align-items-md-start mt-1 mt-md-5'>
									<img class='w-12 mr-0 mr-6' src={EA} alt='Affordable Pricing' />
									<div>
										<h5>Automated testing of all key disaster recovery scenarios</h5>
										<p className='pcenter'>
											Verify the integrity of your disaster recovery plans by executing runbooks
											in test-mode via the web console and isolating testing from the production
											network.
										</p>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row  align-items-center align-items-md-start mt-1 mt-md-5'>
									<img class='w-12 mr-0 mr-6' src={protection} alt='Affordable Pricing' />
									<div>
										<h5>Dissimilar hardware recovery with Universal Restore</h5>
										<p className='pcenter'>
											Restore Windows and Linux systems to the same, similar, or dissimilar
											hardware during a failback procedure, including bare-metal, physical,
											virtual, or cloud.
										</p>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row  align-items-center align-items-md-start mt-1 mt-md-5'>
									<img class='w-12 mr-0 mr-6' src={failover} alt='Affordable Pricing' />
									<div>
										<h5>Local failover with Instant Restore</h5>
										<p className='pcenter'>
											In the event of single server failures, you can leverage the existing
											on-premises infrastructure resources by spinning up any physical or virtual
											Windows or Linux system locally in seconds, directly from the backup storage
											on your existing Microsoft Hyper-V or VMware vSphere ESXi host.
										</p>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row align-items-center align-items-md-center mt-1 mt-md-5'>
									<img class='w-12 mr-0 mr-6' src={support} alt='Support' />
									<div>
										<h5>Support</h5>
										<p className='pcenter'>
											Follow the Sun model - 24/7/365 days support from both onshore and offshore
											Teams.
										</p>
									</div>
								</div>
								<div className='d-flex flex-column flex-md-row align-items-center align-items-md-center mt-1 mt-md-5'>
									<img class='w-12 mr-0 mr-6' src={CS} alt='Support' />
									<div>
										<h5>Compliance</h5>
										<p className='pcenter'>SOC2 & HIPPA complaint.</p>
									</div>
								</div>
							</div>
						</div>
					</Row>
				</div>
				<Helmet>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
        `
						}}
					/>
				</Helmet>
			</DisasterWrapper>
		</Layout>
	);
};

export default Disaster;

const DisasterWrapper = styled.div`
	.small {
		font-size: 50% !important;
	}
	.w75 {
		width: 100%;
	}
	.pcenter {
		text-align: center;
	}
	/* .p-full {
	} */
	padding: 5rem 1rem;
	.topNav {
		position: fixed;
		top: 97px;
		z-index: 1;
		background: white;
		width: 100%;
		left: 2%;
	}
	.navbar-light .navbar-toggler {
		color: rgba(0, 0, 0, .5);
		border-color: rgba(0, 0, 0, 0);
	}
	ul,
	h1,
	h2,
	h6 {
		text-align: left;
	}
	.ptext {
		text-align: left !important;
	}
	h4,
	h5,
	h3 {
		text-align: center;
	}

	.w-sm-100 {
		width: 100%;
	}
	.hybridFixed {
		position: fixed;
		top: 6rem;
		left: 0;
		z-index: 99;
	}
	a#bgL,
	a#bgLL,
	a#bgLLL {
		padding: 0.5rem 1.5rem;
		font-size: 12px;
		height: auto;
		text-align: left;
		cursor: pointer;
	}
	a#bgL.active,
	a#bgLL.active,
	a#bgLLL.active {
		text-align: left;
		border-radius: 0px;
		padding: 0.5rem 1.5rem;
		font-size: 12px;
		height: auto;
		width: 100%;
		color: white;
	}
	.imgHyb {
		margin-right: 25px !important;
		width: 55px !important;
		z-index: 999;
		position: relative;
	}
	.one {
		z-index: 99999;
		background: white;
		width: 100%;
	}
	.one:hover {
		z-index: 99999;
		background: rgb(0, 124, 194);
	}
	.navbar-light .navbar-nav .nav-link {
		color: rgba(0, 0, 0, .9);
	}
	.navbar-light .navbar-nav .nav-link:hover {
		color: white;
	}

	ul.tabList.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		left: 0rem;
	}
	.tabList {
		display: block;
		margin-bottom: 4rem;
	}
	.tabsHide {
		display: none;
		margin-bottom: 4rem;
	}
	h1 {
		font-size: 1.4rem;
	}
	h2 {
		font-size: 1.3rem;
	}
	h3 {
		font-size: 1.2rem;
	}
	h4 {
		font-size: 1.1rem;
	}
	.hybmt {
		margin-top: 2.5rem;
	}
	/* .nav-link.active {
		background: rgba(0, 0, 0, 0);
	} */
	.logo-btn {
		font-size: 2rem;
		background: white;
		border: none;
		outline: none;
		width: 100vw;
		padding: 0.6rem;
		text-align: left;
		box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.3);
		color: rgba(0, 0, 0, 0.5);
	}

	.logo-btn:hover {
		cursor: pointer;
	}
	.tab-content > .active {
		padding: 0rem;
	}
	.w-6 {
		width: 5rem;
	}
	.w-7 {
		width: 4rem;
	}
	.w-8 {
		width: 4rem;
	}
	.position-relative {
		top: 2rem;
	}
	.w-12 {
		width: 25%;
	}
	.mr6 {
		margin-right: 0px;
	}
	@media (min-width: 576px) {
		#background-image {
			background-image: url(${HostedInfra});
			width: 100%;
			height: 75vh;
			background-size: cover;
			background-position: center;
		}
		.small {
			font-size: 50% !important;
		}
		.w75 {
			width: 95%;
			height: 50vh;
		}
		.pcenter {
			text-align: left;
		}
		.ptext {
			text-align: justify !important;
		}
		/* .p-full {
		} */
		padding: 3rem 4rem;
		.topNav {
			position: relative;
			top: 0px;
			z-index: 1;
			width: auto;
			left: 0px;
		}
		.one {
			z-index: 99999;
			background: white;
			width: auto;
		}
		.w-5 {
			width: 5rem;
		}
		.w-9 {
			width: 6rem;
		}
		.mr-6 {
			margin-right: 5.5rem !important;
		}
		.mr6 {
			margin-right: 4rem !important;
		}
		.mr-56 {
			margin-right: 4rem !important;
		}
		.mr-55 {
			margin-right: 5rem !important;
		}
		.w-12 {
			width: 4.6rem;
		}
		ul {
			text-align: justify;
		}
		h1,
		h2,
		h4,
		h5,
		h3 {
			text-align: left;
		}
		.w-sm-100 {
			width: 75%;
		}
		.w-2vh {
			width: 15vw;
		}
		.w-8vh {
			width: 75vw;
		}
		.nav-link.active {
			background: var(--synectiksBlue);
			color: var(--synectiksWhite);
		}
		.w-85 {
			width: 100%;
			border: 1px solid var(--textColor);
			background: var(--synectiksWhite);
			justify-content: space-between;
		}
		.w-10 {
			width: 7%;
			float: left;
			margin-right: 2rem;
			margin-bottom: 2rem;
		}
		.wsprt {
			width: 10%;
			float: left;
			margin-right: 2rem;
			margin-bottom: 2rem;
		}
		.w-15 {
			width: 15%;
			float: left;
			margin-right: 1.7rem;
			margin-bottom: 2rem;
		}
		.imgSize {
			width: 15%;
			float: left;
			margin-right: 2rem;
			margin-bottom: 2rem;
		}

		ul.nav.flex-column {
			position: relative;
			z-index: 99999;
			width: 100%;
			/* width: 25vw; */
			left: 0rem;
		}
		.tabList {
			display: block;
		}
		.tabsHide {
			display: block;
		}
		ul.nav.flex-column > li > a {
			width: 100%;
			color: rgba(0, 0, 0, 0.8);
			height: 10vh;
			font-size: 14px;
			cursor: pointer;
			/* padding-left: 3.2rem; */
		}
		ul.nav.flex-column > li > a {
			width: 100%;
			color: rgba(0, 0, 0, 0.8);
			height: 10vh;
			font-size: 15px;
			cursor: pointer;
		}
		.tab-content > .active {
			padding-top: 0rem;
			/* padding-right: 4rem;
			padding-left: 4rem; */
			padding-bottom: 2rem;
		}
		a#bgL,
		a#bgLL,
		a#bgLLL {
			padding: 0.5rem 2.5rem !important;
			text-align: left;
			font-size: 14px;
		}

		.logo-btn {
			display: none;
		}
		.himage {
			width: 50%;
			height: auto;
			box-shadow: 5px 5px 5px #789;
			float: left;
			margin-right: 2rem;
			margin-bottom: 10px;
		}

		.hbh1 {
			font-size: 2.5rem;
		}
		.hybridFixed {
			display: block;
			height: auto;
			position: sticky;
			top: 16%;
			padding-bottom: 21.4rem;
			padding-top: 2.4rem;
		}
		.nav-item > a.active,
		.nav-item > a:active {
			height: auto;
		}
		h2 {
			font-size: 2rem;
		}
		h3 {
			font-size: 1.75rem;
		}
		h4 {
			font-size: 1.5rem;
		}
	}
	@media (min-width: 768px) {
		.small {
			font-size: 50% !important;
		}
		a#bgL.active:after {
			top: 100%;
			left: 50%;
			border: solid transparent;
			content: " ";
			height: 0;
			width: 0;
			position: absolute;
			pointer-events: none;
			border-color: rgba(136, 183, 213, 0);
			border-top-color: var(--synectiksBlue);
			border-width: 20px;
			margin-left: -20px;
		}
		a#bgL.active {
			border-bottom: 5px solid #007cc2;
			position: relative;
			/* padding-left: 1rem !important; */
			/* background: bgBlue !important; */
			font-size: 14px;
		}
		a#bgLL.active {
			border-bottom: 5px solid #007cc2;
			position: relative;
			/* padding-left: 1rem !important; */
			/* background: bgBlue !important; */
			font-size: 14px;
		}
		a#bgLL.active:after {
			top: 100%;
			left: 50%;
			border: solid transparent;
			content: " ";
			height: 0;
			width: 0;
			position: absolute;
			pointer-events: none;
			border-color: rgba(136, 183, 213, 0);
			border-top-color: var(--synectiksBlue);
			border-width: 20px;
			margin-left: -20px;
		}
		a#bgLLL.active {
			position: relative;
			border-bottom: 5px solid #007cc2;
			/* padding-left: 1rem !important; */
			/* background: bgBlue !important; */
			font-size: 14px;
		}
		a#bgLLL.active:after {
			top: 100%;
			left: 50%;
			border: solid transparent;
			content: " ";
			height: 0;
			width: 0;
			position: absolute;
			pointer-events: none;
			border-color: rgba(136, 183, 213, 0);
			border-top-color: var(--synectiksBlue);
			border-width: 20px;
			margin-left: -20px;
		}
		.himage {
			width: 100%;
			height: auto;
			box-shadow: 5px 5px 5px #789;
			margin-right: 2rem;
			margin-bottom: 10px;
		}
	}
	@media (min-width: 1024px) {
		.himage {
			width: 50%;
			height: auto;
			box-shadow: 5px 5px 5px #789;
			float: left;
			margin-right: 2rem;
			margin-bottom: 10px;
		}
	}
`;
