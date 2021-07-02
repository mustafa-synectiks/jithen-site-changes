import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Layout from '../../components/layout';
import { FaBars } from 'react-icons/fa';
import '../../components/layout.css';
import styled from 'styled-components';
import CS from '../../images/Hybrid/Compliance&Security.png';
import host from '../../images/synectiks-secure/host.svg';
import migration from '../../images/synectiks-secure/migration.svg';
import multiple from '../../images/synectiks-secure/multiple.svg';
import pricing from '../../images/synectiks-secure/pricing.svg';
import single from '../../images/synectiks-secure/single.svg';
import storage from '../../images/synectiks-secure/storage.svg';
import support from '../../images/synectiks-secure/support.svg';
import HostedInfra from '../../images/synectiks-secure/syn-secure.jpg';
import HW from '../../images/ManagedBackup/Hostanyworkload.png';
import MSGL from '../../images/ManagedBackup/MultiSecureGeoLocations.png';
import ST from '../../images/ManagedBackup/StorageTypesavailable.png';
import AP from '../../images/ManagedBackup/AffordablePricing.png';
import ADT from '../../images/Hybrid/ApplicationDevelopmentandTesting.png';

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
const Iaas = () => {
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
      <IaasWrapper>
        <SEO title="Secure & Custom Hosted Infrastructure Solutions" />
        <div className="bg-lightgrey container-fluid px-0">
          <div>
            <BreadCrumbs
              title="Home"
              subtitle="Synectiks Hosted Infrastructure & Business Continuity"
              pageTitle="Secure & Custom Hosted Infrastructure"
            />
            <h1>Secure & Custom Hosted Infrastructure</h1>
          </div>
          <Row className="d-flex justify-content-start">
            <div className="px-2 px-md-0 mb-3 col-md-12">
              <div className="bg-lightgrey mb-0 pb-3">
                <div className="">
                  <div className="text-black w-100  pb-md-4 pb-2 flex-column flex-md-row d-flex">
                    <div className="w-100  pl-3 pr-3 text-black">
                      <p className="lineHeight-24 ptext mt-md-2 mt-1">
                        Synectiks Secure Cloud Hosted Services support a wide
                        variety of workloads & Disaster Recovery with a high
                        degree of control, security, and simplicity. Support
                        your mission-critical applications and workloads with
                        instant and scalable infrastructure, meeting business
                        compliance standards. With Synectiks Cloud Hosted
                        Services, you can focus on your business needs instead
                        of spending the time and money it takes to plan,
                        procure, secure, and manage the right infrastructure
                        that meets your business demands.
                      </p>
                    </div>
                    {/* <div className='w-100 ml-md-auto' data-aos='fade-up'>
											<img
												class='w75 ml-md-5 bshadow'
												src={HostedInfra}
												width='100%'
												alt='Hosted Infrastructure'
											/>
										</div> */}
                  </div>
                  {/* <h4> Why choose SYNECTIKS Cloud Hosted Infrastructure Services? </h4> */}
                  <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start mt-1 mt-md-3">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={multiple}
                      alt="Security"
                    />
                    <div>
                      <h5>Multi-Layered Security</h5>
                      <p className="mt-2 pcenter">
                        "Never trade-off security when moving to cloud”.
                        Synectiks Secure Cloud incorporates Multi-factor
                        Authentication, SSL-VPN, Data-At-Rest Encryption,
                        Anti-Virus, Anti-Malware, Vulnerability Scans, Intrusion
                        Prevention System (IPS), Denial of Service (DoS), IOC
                        Detection with Traffic Segmentation, AI-based Ransomware
                        Protection.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row  align-items-center align-items-md-center mt-3">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={single}
                      alt="Availability & Reliable Performance"
                    />
                    <div>
                      <h5>Self-Service Portal</h5>
                      <p className="mt-2 pcenter">
                        Manage and control all your company Hosted
                        infrastructure, Backup, DR, Anti-Virus, Patch Management
                        with an easy self-service portal.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row  align-items-center align-items-md-start mt-1 mt-md-5">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={AP}
                      alt="Affordable Pricing"
                    />
                    <div>
                      <h5>Affordable Pricing</h5>
                      <p className="mt-2 pcenter">
                        Our customized secure Hosted solutions Pricing is very
                        aggressive and affordable when compared with any Cloud
                        Service Provider available in the Market. Contact us at
                        &nbsp;
                        <a href="mailto:info@synectiks.com" target="_top">
                          info@synectiks.com
                        </a>
                        &nbsp; for a quick affordable customized quote.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-column flex-md-row align-items-center align-items-md-center mt-1 mt-md-5">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={host}
                      alt="Self-service portal"
                    />
                    <div>
                      <h5>Host wide variety of workloads</h5>
                      <p className="mt-2 pcenter">
                        Your mission-critical applications powered by Linux,
                        Windows, major Applications and Databases, Synectiks
                        offers support for these and other workloads, including
                        your favorite Open Source Technologies. Choose from a
                        wide variety of Virtual Machine Configuration and
                        Storage Performance classes configured for specific
                        types of workloads.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row  align-items-center  align-items-md-end mt-1 mt-md-5">
                    <img
                      class="w-12 mr-0 mr-md-5 align-self-center"
                      src={storage}
                      alt="Multi Secure Geo Locations"
                    />
                    <div>
                      <h5>Storage</h5>
                      <p className="mt-2 pcenter">
                        Safeguard data at rest with AES-256 encryption. Scale
                        from terabytes to tens of petabytes for seamless
                        business growth. No CapEx. We offer a wide variety of
                        Storage Solutions at an Aggressive and Affordable
                        Monthly Pricing.
                      </p>
                      <small>
                        S3 Storage as low as $0.015 per GB with no Ingress &
                        Egress Charges (only charged for the Storage Consumed).
                        <br />
                        Backup Storage as low as $0.015 per GB with no Ingress &
                        Egress charges (only charged for the Storage Consumed
                        after deep compression).
                        <br />
                        High Performance SSD block Storage for Server or VDI’s -
                        as low as $0.06 per GB.
                      </small>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row  align-items-center  align-items-md-end mt-1 mt-md-5">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={MSGL}
                      alt="Multi Secure Geo Locations"
                    />
                    <div>
                      <h5>Multi-Secure Geo Locations</h5>
                      <p className="mt-2 pcenter">
                        Multiple Secure Geo Locations for Customers to choose
                        from. Each location separated by Seismic Zone, Power
                        Grid to make sure your Infrastructure is always
                        available when disaster strikes at one location.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex  flex-column flex-md-row align-items-center  align-items-md-start  mt-1 mt-md-5">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={HW}
                      alt="Host any workload"
                    />
                    <div>
                      <h5>Availability & Reliable Performance</h5>
                      <p className="mt-2 pcenter">
                        Built with best of the bread technologies, our
                        infrastructure can support any workload with reliable
                        and consistent performance.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row  align-items-center align-items-md-center mt-4">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={ST}
                      alt="Storage Types available:"
                    />
                    <div>
                      <h5>Secure Backup & Disaster Recovery Options</h5>
                      <p className="mt-2 pcenter">
                        Business Continuity is one of our important core values
                        in the Hosted Cloud Solution, whether it is a mission
                        critical server or any end point device. Choose from the
                        wide variety of Cloud Backup & Disaster Recovery Options
                        available with an in-built Cyber Protection feature.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row  align-items-center  align-items-md-center mt-1 mt-md-5">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={migration}
                      alt="Migration Services"
                    />
                    <div>
                      <h5>Cloud Migration & Modernization</h5>
                      <p className="mt-2 pcenter">
                        Our Expert Migration & Application Development Teams can
                        Modernize your Legacy/Current Infrastructure &
                        Applications using cloud-native technologies and deliver
                        predictive and deterministic business outcome.
                      </p>
                    </div>
                  </div>
                  {/* <div className='d-flex flex-column flex-md-row align-items-center align-items-md-center mt-1 mt-md-5'>
										<img class='w-12 mr-0 mr-md-5' src={ADT} alt='Support' />
										<div>
											<h5>Application Modernization</h5>
											<p className='mt-2 pcenter'>No Content...</p>
										</div>
									</div> */}
                  <div className="d-flex flex-column flex-md-row align-items-center align-items-md-center mt-1 mt-md-5">
                    <img
                      class="w-12 mr-0 mr-md-5"
                      src={support}
                      alt="Support"
                    />
                    <div>
                      <h5>Support</h5>
                      <p className="mt-2 pcenter">
                        Follow the Sun-Model - 24 / 7 / 365 Support from
                        On-shore and Off-shore Teams.
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
      </IaasWrapper>
    </Layout>
  );
};

export default Iaas;

const IaasWrapper = styled.div`
  .bshadow {
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
    .spl-head {
      font-size: 1.2rem !important;
      line-height: 1.8;
    }
    .w75 {
      width: 88%;
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
