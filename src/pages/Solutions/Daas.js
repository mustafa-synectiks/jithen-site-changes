import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FaBars } from 'react-icons/fa';
import '../../components/layout.css';
import styled from 'styled-components';
import self from '../../images/ManagedBackup/Self Service Portal.png';
import cloudImaged from '../../images/synectiks-secure/baas.jpg';
import security from '../../images/ManagedBackup/Security.png';
import geolocation from '../../images/ManagedBackup/MultipleSecureGeoLocations.png';
import backupStorage from '../../images/ManagedBackup/BackupStorage.png';
import efficientStorage from '../../images/ManagedBackup/EfficientBackupStorageUsage.png';
import protection from '../../images/ManagedBackup/ProtectionforAnyworkload.png';
import restore from '../../images/ManagedBackup/Restore.png';
// import support from '../../images/ManagedBackup/Support.png';
import price from '../../images/ManagedBackup/affordableprice.png';
import ARP from '../../images/ManagedBackup/Availability&ReliablePerformance.png';
import MS from '../../images/ManagedBackup/MigrationServices.png';
import SCR from '../../images/ManagedBackup/HSecurity.png';
import SPT from '../../images/ManagedBackup/HSupport.png';
import CS from '../../images/Hybrid/Compliance&Security.png';
import WO from '../../images/Hybrid/Optimization Service.png';
import EA from '../../images/Hybrid/Extreme Automation.png';
import HostedInfra from '../../images/ManagedBackup/HostedInfra.png';
import HW from '../../images/ManagedBackup/Hostanyworkload.png';
import MSGL from '../../images/ManagedBackup/MultiSecureGeoLocations.png';
import ST from '../../images/ManagedBackup/StorageTypesavailable.png';
import AP from '../../images/ManagedBackup/AffordablePricing.png';
import ADT from '../../images/Hybrid/ApplicationDevelopmentandTesting.png';
import agent from '../../images/oneAgentForall.svg';
import complete from '../../images/CompleteProtection.svg';
import support from '../../images/synectiks-secure/support.svg';
import EndComputing from '../../images/EndComputing.svg';
import EndSecurity from '../../images/EndSecurity.svg';
import DigitalWorkspace from '../../images/DigitalWorkspace.svg';
import vdi from '../../images/virtual-desktop.jpg';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Collapse,
  NavbarToggler,
  Navbar
} from 'reactstrap';
import classnames from 'classnames';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const Daas = () => {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [isOpen, setNav] = useState(true);
  const toggleTab = () => {
    setNav(isOpen => !isOpen);
  };
  const onTop = () => {
    window.scroll(0, 0);
  };
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Synectiks Secure Cloud Hosted Services supports a variety of workloads & Disaster Recovery with a high degree of control, security and simplicity. Support your mission-critical applications and workloads with instant and scalable infrastructure. With Synectiks Cloud Hosted Services, you can focus on your business needs instead of spending the time and money it takes to plan, procure, secure and manage the right infrastructure to meet your application demands."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/private-cloud-hosting-services/index.html"
        />
      </Helmet>
      <DaasWrapper>
        <SEO title="Cloud-Hosted Virtual Desktop" />
        <div className="bg-lightgrey container-fluid p-0">
          <div className="text-justify">
            <BreadCrumbs
              title="Home"
              subtitle="Synectiks Hosted Infrastructure & Business Continuity"
              pageTitle="Cloud-Hosted Virtual Desktop"
            />
            <h1>Cloud-Hosted Virtual Desktop</h1>
          </div>
          <Row className="d-flex justify-content-start">
            <div className="px-2 px-md-0 mb-3 col-md-12">
              <div className="bg-lightgrey mb-0 pb-3">
                <div className="">
                  <div className="w-100  pb-md-4 pb-2 flex-column flex-md-row d-flex">
                    <div className="w-100  pl-3  mr-0 mr-md-5">
                      <p className="lineHeight-24 ptext mt-md-2 mt-1">
                        Synectiks Cloud-Hosted Virtual Desktop Service is a
                        modern platform for secure delivery of virtual desktops
                        and apps. Our best-in-class virtualization technologies
                        enable scalability, uptime at an affordable price.
                        Powered by VMware Blast Extreme protocol, delivers an
                        immersive, feature-rich user experience for end users
                        across devices, locations, media and network
                        connections. Enabled by enterprise-grade management
                        capabilities and a deep technology ecosystem, it extends
                        the digital workspace to all apps and secure
                        productivity use cases.
                      </p>
                    </div>
                    {/* <div className='w-100 ml-auto ml-md-5' data-aos='fade-up'>
											<img
												class='w75 ml-md-5 bx'
												src={vdi}
												width='100%'
												alt='Hosted Infrastructure'
											/>
										</div> */}
                  </div>
                  {/* <h4> Why choose SYNECTIKS Cloud Hosted Infrastructure Services? </h4> */}
                  <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start mt-1 mt-md-3">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={EndComputing}
                      alt="Security"
                    />
                    <div>
                      <h5>End-User Computing</h5>
                      <p className="mt-2 pcenter">
                        Easy access to corporate apps and data from any device
                        increases end-user productivity and engagement, but it
                        also requires the highest level of security. Our
                        best-in-class Virtual desktop technologies provide IT
                        with a modern, streamlined approach to deliver, protect
                        and manage Windows and Linux desktops, and applications
                        while containing costs and ensuring that end users can
                        work anytime, anywhere, on any device.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-column flex-md-row  align-items-center align-items-md-start mt-1 mt-md-5">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={EndSecurity}
                      alt="Affordable Pricing"
                    />
                    <div>
                      <h5>End-to-end security</h5>
                      <p className="mt-2 pcenter">
                        With Multi-Factor Authentication and Active Directory
                        integration, Synectiks digital workspace delivers secure
                        remote access to corporate resources and helps provide
                        complete security from the device, across the network,
                        and into the data center and cloud.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-column flex-md-row align-items-center align-items-md-center mt-1 mt-md-5">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={DigitalWorkspace}
                      alt="Self-service portal"
                    />
                    <div>
                      <h5>Best Digital Workspace Experience</h5>
                      <p className="mt-2 pcenter">
                        Personalized desktops deliver optimal performance and an
                        immersive, feature-rich user experience across devices,
                        locations, media and network connections. Remote and
                        mobile workers enjoy workstation-class performance and
                        rich graphics with the Blast Extreme protocol, which
                        offers dynamic optimization even in non-ideal,
                        high-latency, low-bandwidth network conditions.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center align-items-md-center mt-1 mt-md-5">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={support}
                      alt="Support"
                    />
                    <div>
                      <h5>Support</h5>
                      <p className="mt-2 pcenter">
                        Follow the Sun model - 24 / 7 / 365 days support from
                        both onshore and offshore Teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
`
          }}
        /> */}
      </DaasWrapper>
    </Layout>
  );
};

export default Daas;

const DaasWrapper = styled.div`
  .bx {
    border: 5px solid white;
    box-shadow: 0px 0px 9px 0px black;
  }
  .w75 {
    width: 100%;
  }
  .pcenter {
    text-align: left;
  }
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
    color: rgba(0, 0, 0, 0.5);
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
    color: rgba(0, 0, 0, 0.9);
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
    width: 6rem;
  }
  .w-7 {
    width: 7rem;
  }
  .w-8 {
    width: 8rem;
  }
  .position-relative {
    top: 2rem;
  }
  .w-12 {
    width: 25%;
  }

  @media (min-width: 576px) {
    .splhead {
      font-size: 1.3rem !important;
      line-height: 1.4;
    }
    .w75 {
      width: 60%;
    }
    .pcenter {
      text-align: left;
    }
    .ptext {
      text-align: justify !important;
    }
    padding: 2.5rem 4rem;
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
    .w-12 {
      width: 5rem;
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
    a#bgL.active:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: ' ';
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
      content: ' ';
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
      content: ' ';
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
