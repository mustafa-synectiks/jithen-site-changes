import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
// import { Modal, ModalHeader, ModalBody } from "reactstrap"
// import ModalContact from "../../components/ModalContact"
import { FaBars } from 'react-icons/fa';
import Layout from '../../components/layout';
// import CloudCommon from '../../images/CloudCommon.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import HybridCloud from '../../images/HybridCloud.jpg';
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
import IconSection from '../../components/Home/IconSection.js';
import one from '../../images/Devops/Technology Shift.jpg';
import two from '../../images/Devops/Technology Transformation.svg';
import speed from '../../images/Devops/speed.svg';
import scale from '../../images/Devops/scale.svg';
import security from '../../images/Devops/Security.png';
import four from '../../images/Devops/Discovery & Assessment.png';
import five from '../../images/Devops/Transformation Services.png';
import six from '../../images/Devops/6.png';
import Expertise from '../../images/Devops/Expertise.png';
import Experience from '../../images/Devops/Experience.png';
import Contribution from '../../images/Devops/Contribution.png';
import Engagement from '../../images/Devops/Engagement Model.png';
import pcpartner from '../../images/Devops/Public Cloud Partnership.png';
import ltretention from '../../images/Devops/Long Term Retention.png';
import E2E from '../../images/Devops/E2E Solution.png';
import Extreme from '../../images/Devops/Extreme Automation.png';
import maxFac from '../../images/Devops/Maximum Flexibility.png';
import fastDeliv from '../../images/Devops/Faster Delivery.png';
import betterQual from '../../images/Devops/Better Quality.png';
import lowCost from '../../images/Devops/Lower Cost.png';

import styled from 'styled-components';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const DevopsTransformation = ({ location }) => {
  const [activeTab, setActiveTab] = useState('1');
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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
          content="DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/devops-transformation/index.html"
        />
      </Helmet>
      <SEO title="DevOps Transformation" />

      <DevopsTWrapper>
        <div className="">
          <div className="text-justify">
            <BreadCrumbs
              title="Home"
              subtitle="Migration / Modernization"
              pageTitle="Devops Transformation"
            />
            <h1 className="text-left mt-md-4 ml-n1">DevOps Transformation</h1>
          </div>
          <div className="">
            <Row className="position-relative">
              <div className="col-md-12">
                <Navbar
                  color="light"
                  light
                  expand="lg"
                  className="topNav"
                  id="devopsTabs"
                >
                  {/* <NavbarToggler onClick={toggleNavbar} className='mr-2'> */}
                  <AiOutlineMenu
                    onClick={toggleNavbar}
                    className="mr-2 svgcolor mobile-show mb-n4"
                  />
                  {/* </NavbarToggler> */}
                  <Collapse isOpen={!collapsed} navbar>
                    <Nav className="d-flex my-4  w-85">
                      <NavItem className="one">
                        <NavLink
                          id="bgL"
                          className={classnames({ active: activeTab === '1' })}
                          onClick={() => {
                            toggle('1');
                            toggleTab();
                            onTop();
                          }}
                        >
                          BRIEF
                        </NavLink>
                      </NavItem>

                      <NavItem className="one">
                        <NavLink
                          id="bgLL"
                          className={classnames({ active: activeTab === '2' })}
                          onClick={() => {
                            toggle('2');
                            toggleTab();
                            onTop();
                          }}
                        >
                          GETTING STARTED
                        </NavLink>
                      </NavItem>
                      <NavItem className="one">
                        <NavLink
                          id="bgLLL"
                          className={classnames({ active: activeTab === '3' })}
                          onClick={() => {
                            toggle('3');
                            toggleTab();
                            onTop();
                          }}
                        >
                          HOW SYNECTIKS CAN HELP YOU?
                        </NavLink>
                      </NavItem>
                      <NavItem className="one">
                        <NavLink
                          id="bgLLL"
                          className={classnames({ active: activeTab === '4' })}
                          onClick={() => {
                            toggle('4');
                            toggleTab();
                            onTop();
                          }}
                        >
                          SYNECTIKS DIFFERENTIATOR
                        </NavLink>
                      </NavItem>
                      <NavItem className="one">
                        <NavLink
                          id="bgLLL"
                          className={classnames({ active: activeTab === '5' })}
                          onClick={() => {
                            toggle('5');
                            toggleTab();
                            onTop();
                          }}
                        >
                          KEY BENEFITS
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>

                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div>
                      <h3 className="text--left">
                        Understanding the DevOps Transformation
                      </h3>
                      <p className="ptext">
                        DevOps is the combination of cultural philosophies,
                        practices, and tools that increases an organization’s
                        ability to deliver applications and services at high
                        velocity: evolving and improving products at a faster
                        pace than organizations using traditional software
                        development and infrastructure management processes.
                        This speed enables organizations to better serve their
                        customers and compete more effectively in the market.
                      </p>
                    </div>

                    <div className="">
                      <h3>
                        Why DevOps Transformation matter in Today’s Business?
                      </h3>
                      <div className="my-3 d-flex flex-row justify-content-around">
                        {/* <img src={AI} alt="" className="w-50" /> */}
                        <p className="ptext">
                          Competition, new products and continuing pressure to
                          monetize older services severely taxing many
                          businesses driven by legacy applications and
                          infrastructure. To maintain the competitive edge in a
                          highly dynamic market, business need to re-imagine the
                          customer experience in lower economics. Enterprises
                          looking for modernization of their legacy stack and
                          operate in more fast and competitive way taking DevOps
                          as key strategic drivers. As companies embrace DevOps,
                          they must address both technology and the human side
                          of change. The most important need for technology and
                          human side are as follows:
                        </p>
                      </div>
                      <div className="my-3 d-flex  justify-content-around align-items-start flex-column">
                        <div>
                          <h3>Technology Shift</h3>
                          <p className="">
                            Small services delivered in extreme agile manner and
                            runs in multi cloud hybrid ecosystem in lowest Capex
                            & Opex with highest security.
                          </p>
                        </div>
                        <div className="mx-auto">
                          <img
                            src={one}
                            alt="Technology Shift"
                            className="w-100 box-shadow"
                          />
                        </div>
                      </div>
                      <div className="my-3 d-flex flex-column justify-content-around align-items-center">
                        <div>
                          <h3>Cultural Shift</h3>
                          <p className="">
                            A culture with less roles, much E2E
                            responsibilities, which innovates fast accepting
                            high speed feedback and respond with super-fast
                            delivery coupled with stringent security and lower
                            economics.
                          </p>
                        </div>
                        <img
                          src={two}
                          alt="Cultural Shift"
                          className="w-100 box-shadow	"
                        />
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div>
                      <h3 className="">Getting Started To DevOps</h3>
                      <p className="ptext">
                        The first step is for CIOs to connect with the business
                        to establish clear lines of communication and to set
                        common goals. Within the IT organization, CIOs must set
                        policies that identify the need to prepare for DevOps as
                        a priority for overall IT strategies. Courageous
                        leadership is key for success in adopting an enterprise
                        wide DevOps culture.
                        <br />
                        <br />
                        Then we recommend assessing the company’s People,
                        Process and Technology estate using some standard
                        maturity model. The Synectiks maturity model for a quick
                        DevOps assessment is as follows:
                      </p>
                    </div>
                    <div className="text-center ">
                      <h2 className="my-5">
                        Where do you find your current DevOps Maturity?
                      </h2>
                      <div className="w-100 mx-auto">
                        <img
                          src={six}
                          alt="Devops Maturity"
                          className="boxshdd w-100 mobile-show"
                        />
                      </div>

                      <div className="d-flex justify-content-start flex-column flex-md-row my-2 my-md-4 mobile-hide">
                        <div className="w-11">
                          <h4 className="py-3"> </h4>
                          <div className="Dulture ulht d-flex align-items-center  border-ra mb-2">
                            <h5 className="py-5  px-2 text-center w-11">
                              Culture <br />
                              Skill
                            </h5>
                          </div>
                          <div className="DesignArc ulht  d-flex align-items-center  border-ra mt-3">
                            <h5 className=" py-5 px-2 text-center  w-11">
                              Design <br />
                              Architecture
                            </h5>
                          </div>
                          <div className="Duild ulht d-flex align-items-center  border-ra mt-3">
                            <h5 className=" py-5 px-2 text-center  w-11">
                              Build <br />
                              Deploy
                            </h5>
                          </div>
                          <div className="Dest ulht38  d-flex align-items-center  border-ra my-3">
                            <h5 className=" py-5 px-2 text-center  w-11">
                              <br /> Test
                            </h5>
                          </div>
                          <div className="Doperate ulht38 d-flex align-items-center  border-ra mt-2">
                            <h5 className=" py-5 px-2 text-center  w-11">
                              <br /> Operate
                            </h5>
                          </div>
                        </div>
                        <div className="Durple w-50 py-2 mr-2">
                          <h4 className="text-light">Basic</h4>
                          <div className="Durple d-flex align-items-center">
                            <ul className="pt-3 DurpleLight ulfont ulht w-100">
                              <li>Prioritized work</li>
                              <li>Large team</li>
                              <li>
                                Multiple Roles(Architect, Developer,Tester,...)
                              </li>
                              <li>Defined & documented process</li>
                              <li>Quarterly release</li>
                            </ul>
                          </div>
                          <div className="Durple d-flex align-items-center">
                            <ul className="pt-3 DurpleLight ulfont ulht w-100">
                              <li>Monolith product</li>
                              <li>Consolidate platform</li>
                              <li>System into Modules</li>
                              <li>Library management</li>
                              <li>Api management</li>
                              <li>Basic Automations</li>
                            </ul>
                          </div>
                          <div className="Durple d-flex align-items-center">
                            <ul className="pt-3 DurpleLight ulfont ulht w-100">
                              <li>Scripted Build</li>
                              <li>Continuous Integration</li>
                              <li>Dedicated build & release server</li>
                              <li>Multiplatform packages</li>
                              <li>Basic test automation</li>
                              <li>
                                Manual staging environments(dev, stage,test,
                                prod) promotion
                              </li>
                            </ul>
                          </div>
                          <div className="Durple d-flex align-items-center">
                            <ul className="pt-3 DurpleLight ulfont ulht38	 w-100">
                              <li>Basic test automation</li>
                              <li>Continuous tests integration</li>
                              <li>Risk based manual tests</li>
                            </ul>
                          </div>
                          <div className="Durple d-flex align-items-center">
                            <ul className="pt-3 DurpleLight ulfont ulht38 w-100">
                              <li>ITSM tools & Operating SLA's</li>
                              <li>Performance monitoring</li>
                              <li>Log monitoring</li>
                              <li>Alerts monitoring</li>
                              <li>Manual resource provisioning</li>
                              <li>Security audit</li>
                            </ul>
                          </div>
                        </div>
                        <div className="Dred w-50 py-2 mr-2">
                          <h4 className="text-light">Intermediate</h4>
                          <div className="Dulture">
                            <ul className="pt-3 DredLight ulfont ulht w-100">
                              <li>Stable teams</li>
                              <li>Share pain</li>
                              <li>Remove boundary(Dev & Test)</li>
                              <li>Agile process</li>
                              <li>Monthly release</li>
                              <li>Act on metrics</li>
                            </ul>
                          </div>
                          <div className="DesignArc">
                            <ul className="pt-3 DredLight ulfont ulht w-100">
                              <li>Component engineering</li>
                              <li>Config as code</li>
                              <li>Event architecture</li>
                              <li>service api interaction</li>
                              <li>Api management</li>
                              <li>Test / release automation</li>
                            </ul>
                          </div>
                          <div className="Duild">
                            <ul className="pt-3 DredLight ulfont ulht w-100">
                              <li>Pollen build </li>
                              <li>Manual version & tagging</li>
                              <li>Automated Staging</li>
                              <li>
                                Automated unit / Integration / UI / Regression
                                /Performance / Code / Security / Code Quality /
                                Coverage /Acceptance tests
                              </li>
                            </ul>
                          </div>
                          <div className="Dest">
                            <ul className="pt-3 DredLight ulfont ulht38 w-100">
                              <li>
                                Automated unit / Integration / UI / Regression
                                /Performance / Code / Security / Code Quality /
                                Coverage /Acceptance tests
                              </li>
                              <li>Test results Consolidate</li>
                              <li>Component wise tests</li>
                            </ul>
                          </div>
                          <div className="Doperate">
                            <ul className="pt-3 DredLight ulfont ulht38 w-100">
                              <li>Diagnostics</li>
                              <li>Advanced monitoring through scripts</li>
                              <li>Log Analysis</li>
                              <li>
                                Automated ticket recommendation and workflows
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="Dellow w-50 py-2 mr-2">
                          <h4 className="text-light">Standard</h4>
                          <div className="Dulture">
                            <ul className="pt-3 DellowLight ulfont ulht w-100">
                              <li>Team responsible all the way prod</li>
                              <li>Dedicated tools team</li>
                              <li>Remove boundary(Dev & Ops)</li>
                              <li>Deploy disconnected from release</li>
                              <li>Continuous improvement</li>
                              <li>Component ownership</li>
                              <li>Decentralized decisions</li>
                            </ul>
                          </div>
                          <div className="DesignArc">
                            <ul className="pt-3 DellowLight ulfont ulht w-100">
                              <li>Distributed Architecture</li>
                              <li>Horizontal scalability</li>
                              <li>Cloud centric, SASS model</li>
                              <li>Deployment automation</li>
                              <li>Framework</li>
                              <li>Operation automation framework</li>
                            </ul>
                          </div>
                          <div className="Duild">
                            <ul className="pt-3 DellowLight ulfont ulht w-100">
                              <li>Quality gates</li>
                              <li>Realtime build metrics</li>
                              <li>Deployment & compliance trend</li>
                              <li>Test results consolidation</li>
                              <li>TDD framework integration</li>
                              <li>Dynamic environment provisioning</li>
                            </ul>
                          </div>
                          <div className="Dest">
                            <ul className="pt-3 DellowLight ulfont ulht38 w-100">
                              <li>well defined TDD and BDD framework</li>
                              <li>BDD tests written in DSL</li>
                              <li>Test rule based stage Automation</li>
                              <li>Test case tool to automation</li>
                              <li>Tests integration</li>
                            </ul>
                          </div>
                          <div className="Doperate">
                            <ul className="pt-3 DellowLight ulfont ulht38 w-100">
                              <li>
                                Automated hyperscale cluster & cloud
                                provisioning
                              </li>
                              <li>Elastic auto provisioning</li>
                              <li>Resilience scripts</li>
                              <li>Dynamic vdms/ VDss provisioning</li>
                            </ul>
                          </div>
                        </div>
                        <div className="Dreen w-50 py-2 mr-2">
                          <h4 className="text-light">Advanced</h4>
                          <div className="Dulture">
                            <ul className="pt-3 DreenLight ulfont ulht w-100">
                              <li>All full stacks experts</li>
                              <li>Cross functional small teams</li>
                              <li>Speedy feedback</li>
                              <li>Advanced frameworks driven</li>
                              <li>RAD</li>
                              <li>Excellent training framework</li>
                            </ul>
                          </div>
                          <div className="DesignArc">
                            <ul className="pt-3 DreenLight ulfont ulht w-100">
                              <li>Hybrid cloud, cloud agnostics, elastics</li>
                              <li>Complete software defined(IAAC)</li>
                              <li>Multi cloud compete SOA</li>
                              <li>Simplified automated framework</li>
                              <li>Aggregated hardware</li>
                              <li>Container / Services</li>
                              <li>Optimized pooling</li>
                            </ul>
                          </div>
                          <div className="Duild">
                            <ul className="pt-3 DreenLight ulfont ulht w-100">
                              <li>Zero touch deployment</li>
                              <li>Elastic automation cluster</li>
                              <li>Parallel continuous delivery</li>
                              <li>
                                Containerized build environments for different
                                language
                              </li>
                              <li>Simplified build Orchestration framework</li>
                            </ul>
                          </div>
                          <div className="Dest">
                            <ul className="pt-3 DreenLight ulfont ulht38 w-100">
                              <li>Service wise test results consolidation</li>
                              <li>Tests Trend analytics</li>
                              <li>Continuous tests in production</li>
                            </ul>
                          </div>
                          <div className="Doperate">
                            <ul className="pt-3 DreenLight ulfont ulht38 w-100">
                              <li>
                                Hardware / Os / App server / license agnostics
                              </li>
                              <li>Continuous security / Audit / Billing</li>
                              <li>
                                Centralized tools for monitoring different
                                environments, products, services, clouds
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-center mt-3 mt-md-5">
                          Our DevOps Gap analysis process briefly as follows:
                        </h2>

                        <div>
                          <h3 className="fw6 text-center">Gap Analysis</h3>
                          <h6 className="text-center">4 Phased - 5 days</h6>
                        </div>

                        <div className="row py-3">
                          <div className="container-fluid">
                            <div className="d-flex flex-column flex-md-row justify-content-around">
                              <div className="col-md-3 p-0 mx-3 my-3 my-md-0 border boxshd">
                                <div className="count bgOrange py-2 py-md-2">
                                  <div className="counters brclr">1</div>
                                  <h6 className="text-center mt-2">
                                    Day 1<br /> Project kick-off
                                  </h6>
                                </div>
                                <h6 className="mt-4">Initial Meetings</h6>
                                <ul className="pt-3 text-left f14 pr-2">
                                  <li>
                                    Meeting with decision makers to get an
                                    insight on client pain-points and desired
                                    future-state
                                  </li>
                                  <li>
                                    Kick-Off meeting with DevOps assessment
                                    stakeholders
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 p-0 mx-3 my-3 my-md-0 border boxshd">
                                <div className="count bgRed text-light py-2 py-md-2">
                                  <div className="counters">2</div>
                                  <h6 className="text-center mt-2">
                                    Day 2 <br />
                                    Assessment
                                  </h6>
                                </div>
                                <h6 className="mt-4">Questions Based Audit</h6>
                                <ul className="pt-3 text-left  f14">
                                  <li>A DevOps briefing for all interviews</li>
                                  <li>Audit on following key focus areas</li>

                                  <li>Organization</li>
                                  <li>Automation</li>
                                  <li>
                                    As-Is Analyzer people process Tools,
                                    Technology
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 p-0 mx-3 my-3 my-md-0 border boxshd">
                                <div className="count hx3 text-light py-2 py-md-2">
                                  <div className="counters">3</div>
                                  <h6 className="text-center mt-2">
                                    Day 3 <br />
                                    Report preparation
                                  </h6>
                                </div>
                                <h6 className="mt-4">Report Generation</h6>
                                <ul className="pt-3 text-left f14">
                                  <li>
                                    Preparation of findings report DevOps
                                    transformation plan and Roadmap
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 p-0 mx-3 my-3 my-md-0 border boxshd">
                                <div className="count bgBlue text-light py-2 py-md-2">
                                  <div className="counters">4</div>
                                  <h6 className="text-center mt-2">
                                    Day 4 <br />
                                    Presentation
                                  </h6>
                                </div>
                                <h6 className="mt-1 mt-md-4">Presentation</h6>
                                <ul className="pt-3 text-left f14 pr-1 pr-md-2">
                                  <li>
                                    Presentation of the report and plans to
                                    stakeholders, following plans are delivered.
                                  </li>
                                  <li>Phase wise maturity development</li>
                                  <li>Tools & Technology Adoption</li>
                                  <li>Skill Development</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="py-2 py-md-5">
                        For your self-assessment, please refer &nbsp;
                        <h3> DevOps assessment Questionnaires</h3>
                        {/* <a href="">DevOps assessment Questionnaires</a> */}
                      </h5>
                      <p className="ptext">
                        The standard maturity model-based assessment will
                        clearly give you insights on the current and future
                        capability to create a business case for improvement in
                        each capability and thereby helping you to create a
                        roadmap to guide the journey to DevOps centric
                        organization. This roadmap should map people, process,
                        technology change requirement, consider IT policy and
                        operating model factors; and ultimately produce clear,
                        data-based recommendations with a proposed execution
                        plan to enable DevOps transformation to happen. Getting
                        there will require significant upliftment of people
                        skills, impart modern tools and technologies,
                        transforming and migrating applications, integrating and
                        orchestrating environments, automating and monitoring
                        business services, enabling digital processes, and
                        integrating data and security.
                      </p>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div>
                      <h3> How Synectiks can help?</h3>
                      <p className="ptext">
                        Enterprises looking for modernization of their legacy
                        stack and operate in more fast and competitive way, can
                        use the Synectiks open platform and specialized
                        resources to bring the cultural transformation and
                        agility needed for today’s business. Whether it is a new
                        business application or transformation of legacy
                        applications, our open platform coupled with our
                        experience and expertise accelerate the project
                        execution @50% time & cost.
                      </p>
                      <h3>Technology Transformation</h3>
                      <p className="ptext">
                        “Over 85% of enterprise IT organizations will commit to
                        multi-cloud architectures by 2018, IDC. End User
                        experience, Security, Agility, Flexibility, Consumption
                        Based pricing are most important five priorities for
                        CIO’s today. Synectiks is one of very few technology
                        companies, who delivers professional services on
                        advanced technologies backed by an open xformation
                        platform that accelerates your DevOps transformation
                        journey @50% time & cost.”
                      </p>

                      <p className="ptext">
                        Synectiks build the most powerful open product that
                        helps customers to provision resources across clouds in
                        complete software defined way and deliver modern
                        container and FAAS driven workloads on it. The platform
                        takes care of Continuous delivery, Continuous
                        Deployment, Continuous security and continuous
                        compliance continuous automation to make sure the
                        workload runs seamlessly with highest security,
                        performance, scalability and availability.
                      </p>
                      <h3>Cultural Transformation </h3>
                      <p className="ptext">
                        Need? A culture with less Roles , much E2E
                        responsibilities Innovate / Deliver Fast High Speed
                        Feedback and Superfast Delivery Lower Capex, Opex
                        <br />
                        <br />
                        Why Us? Experience in addressing Technology & Cultural
                        Changes Accelerate DevOps adoption with Open Platform &
                        Skilled resources. Assess DevOps maturity and address
                        Gaps.
                      </p>

                      <p className="ptext">
                        Ensuring that you stay ahead of race and keep disrupting
                        by adopting most modern technologies intelligently and
                        effectively, requires an Open Product Based Professional
                        Services partner who understand your requirements for:
                      </p>
                      <div className="my-1 my-md-3">
                        <div className="my-1 my-md-3 d-flex flex-column flex-md-row align-items-center">
                          <div className="w125px text-center mr-1 mr-md-5">
                            <img src={speed} alt="speed" className="w125px" />
                          </div>
                          <div className="">
                            <h4 className="my-1 my-md-3">Speed</h4>
                            <p>
                              Introduction of New products or transforming your
                              existing legacy monolith application to
                              microservices faster While Maintaining Operational
                              Control and Customer Visibility.
                            </p>
                          </div>
                        </div>
                        <div className=" my-3 d-flex flex-column flex-md-row align-items-center">
                          <div className="w125px text-center mr-1 mr-md-5">
                            <img src={scale} alt="scale" className="w125px" />
                          </div>
                          <div>
                            <h5 className="my-1 my-md-3">Scale</h5>
                            <p>
                              Grow cost-effectively to meet new organizational
                              and business requirements across the enterprise
                              using a highly scalable architecture that can
                              distribute the workloads across clouds, enables
                              hybrid cloud adoption with maximum security and
                              highest flexibility.
                            </p>
                          </div>
                        </div>
                        <div className="my-3 d-flex flex-column flex-md-row align-items-center">
                          <div className="w125px text-center mr-1 mr-md-5">
                            <img
                              src={security}
                              alt="security"
                              className=" w125px"
                            />
                          </div>
                          <div className="">
                            <h5 className="my-1 my-md-3">Security</h5>
                            <p>
                              Provision and Manage infrastructure, application
                              services in complete software defined way with
                              maximum automation so that you never fall into
                              security loopholes. Enables continuous Audit,
                              Continuous Security/- Compliance to have real time
                              checks and visibility on security guidelines.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <h3 className="pt-0 pt-md-0 pb-2 pb-md-3">
                          Synectiks can enable your enterprise journey to
                          DevOps, regardless of your starting point.
                        </h3>
                        <div className="d-flex flex-column flex-md-row align-items-center">
                          <img
                            src={four}
                            alt="Discover and Assessment"
                            className="w15 mr-5"
                          />
                          <div>
                            <h5>Discover & Assessment</h5>
                            <p>
                              Our discovery and assessment services can help you
                              draft a DevOps roadmap with a clearly defined
                              business case and mapping of peoples / process /
                              technologies along with prioritized
                              recommendations. Our recommendations reflect deep
                              industry knowledge and contextual knowledge about
                              your business.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center">
                          <img
                            src={five}
                            alt="Transformation Services"
                            className="w9 mr-5"
                          />
                          <div className="ml-4">
                            <h5>Transformation Services</h5>
                            <p>
                              You can access our open Xformation platform
                              products and resource teams to adopt technology
                              and cultural changes quickly from Application
                              modernization, people skill and process
                              transformation and integration to cloud-native
                              apps development, containerization, platform
                              services and microservices to enable your
                              enterprise to thrive in Hybrid IT environments.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="4">
                    <div>
                      <p>
                        We go beyond creating a strategy: Synectiks helps you
                        plan it, do it, run it and manage it.
                      </p>

                      <h4 className="text-center my-5">
                        Top 8 Reasons to select Synectiks as your DevOps
                        Partner:
                      </h4>
                    </div>

                    <div className="my-4">
                      <div className="row">
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={Expertise}
                              alt="Expertise"
                              className="tw m-0 h-75"
                            />
                            <h5 className="mb-4">Expertise</h5>
                          </div>
                          <p>
                            Experience Team with proven track record of CloudOps
                            delivery enabled with DevSecOps Capabilities.
                          </p>
                        </div>
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={Experience}
                              alt="Experience"
                              className="tw m-0"
                            />
                            <h5 className="mt-3">Experience</h5>
                          </div>
                          <p>
                            We have done large Transformation projects with
                            Toyota, Reliance and cultural challenges effectively
                            and brought the changes, resulting significant
                            improvement and savings.
                          </p>
                        </div>

                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={Contribution}
                              alt="Contribution"
                              className="tw m-0"
                            />
                            <h5 className="mt-3">Contribution</h5>
                          </div>
                          <p>
                            We are continuously contributing open XFormation
                            platform that is accelerating the transformation
                            @50% Time & Cost.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4 col-md-4 text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={Engagement}
                            alt="Engagement Model"
                            className="tw m-0"
                          />
                          <h5 className="mt-3">Engagement Model</h5>
                        </div>
                        <p>
                          Our every engagement focused on empowerment not
                          dependency.
                        </p>
                      </div>
                      <div className="col-sm-4 col-md-4 text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={pcpartner}
                            alt="Public Cloud Partnership"
                            className="tw m-0"
                          />
                          <h5 className="">Public Cloud Partnership</h5>
                        </div>
                        <p>
                          Our advanced partnership with major public cloud
                          providers help you to get support at every stage.
                        </p>
                      </div>
                      <div className="col-sm-4 col-md-4 text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={ltretention}
                            alt="Long Term Retention"
                            className="tw m-0"
                          />
                          <h5 className="mt-2">Long Term Retention</h5>
                        </div>
                        <p>100% Customer Retention Rate.</p>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={E2E}
                            alt="E2E Solution"
                            className="tw m-0"
                          />
                          <h5 className="mt-3">E2E Solution</h5>
                        </div>
                        <p>
                          Single point of contact for Application Migration,
                          Transformation and Integration to cloud-native Apps
                          services.
                        </p>
                      </div>
                      <div className="col-sm-4 col-md-4 text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={Extreme}
                            alt="Extreme Automation"
                            className="tw m-0"
                          />
                          <h5 className="">Extreme Automation</h5>
                        </div>
                        <p>
                          Use our existing automation capabilities to automate
                          infrastructure , operations, security in hybrid IT
                          environment.
                        </p>
                      </div>
                      <div>
                        <p>
                          Finally, we help you to do people / process /
                          technology transformation it all at a lower cost using
                          CloudOps delivery enabled with DevSecOps capabilities
                          and extreme automation from our Synectiks Xformation
                          platform driven solutions delivery model. Xformation
                          Platform allows to quickly build and deliver and
                          orchestrate cross cloud services , at-scale,
                          repeatable offerings and solutions that help to drive
                          your DevOps journey @50% time & cost.
                        </p>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="5">
                    <div>
                      <h3>
                        Key benefits you get by choosing Synectiks as DevOps
                        partner
                      </h3>

                      <h4 className="pt-0 pt-md-0 pb-2 pb-md-3">
                        Synectiks can enable your enterprise journey to DevOps,
                        regardless of your starting point.
                      </h4>
                      <div className="row">
                        <div className="d-flex flex-column flex-md-row align-items-center">
                          <img
                            src={maxFac}
                            alt="Maximum Flexibility"
                            className="w9 mr-5"
                          />
                          <div>
                            <h5>Maximum Flexibility</h5>
                            <p className="mb-1 mb-md-4">
                              Synectiks xformation platform coupled with its
                              Hybrid cross cloud infrastructure delivers you the
                              maximum flexibility to run/move your high
                              performant workloads across clouds and manage them
                              through a single pane of glass.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center mt-0 mt-md-3">
                          <img
                            src={fastDeliv}
                            alt="Faster Delivery"
                            className="w9 mr-5"
                          />
                          <div className="ml-2">
                            <h5>Faster Delivery</h5>
                            <p className="mb-1 mb-4">
                              Synectiks xformation platform enabled
                              infrastructure and application provisioning in
                              complete software defined manner with regulatory
                              compliant architectures. The existing assets and
                              best practices enable project delivery in weeks
                              than months.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center mt-0 mt-md-3">
                          <img
                            src={betterQual}
                            alt="Better Quality"
                            className="w7 mr-5"
                          />
                          <div className="ml-4">
                            <h5>Better Quality</h5>
                            <p className=" mb-1 mb-4 ptext">
                              Through Synectiks Xformation platform, you can
                              continuously deliver containerized and serverless
                              microservices verified through stringent quality
                              gates that run across clouds and geographies
                              ensuring 100% availability and maximum
                              performance.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center mt-0 mt-md-3">
                          <img
                            src={lowCost}
                            alt="Lower Costs"
                            className="w9 mr-5"
                          />
                          <div className="ml-2">
                            <h5>Lower Costs</h5>
                            <p className="ptext">
                              Everything software defined and maximum automation
                              ensure lowest TCO. A successful Digital
                              Modernization project delivers 10X agility, 30X
                              reliability and 10X operational efficiency. At
                              least 50% TCO is reduced because of 80% operation,
                              50% hardware and 100% license cost savings.
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="ptext">
                        Now is the time to act. Don’t be disrupted be the
                        disruptor. Let us help you innovate and transform to
                        differentiate with speed and quality. That’s Synectiks.
                        That’s transformation Delivered in open product based
                        solutioning model.
                      </p>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </Row>
          </div>
        </div>
      </DevopsTWrapper>
      <Helmet></Helmet>
    </Layout>
  );
};

export default DevopsTransformation;

const DevopsTWrapper = styled.div`
.svgcolor{
	font-size: 2rem;
    color: rgba(0,0,0,0.5);
		margin: 10px 5px;
	display: block;
}

.mobile-hide{
	display: none !important;
}
.ptext{
	text-align: left;
}
padding:6rem 1rem;
	h1 {
		font-size: 1.875rem;
	}
	h2 {
		font-size: 1.6rem;
	}
	h3 {
		font-size: 1.2rem;
	}
	p {
		font-size: 1rem;
	}
	.w-11 {
		width: 10rem;
		color: white;
	}
	.border-ra {
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
	}
	.w-21 {
		width: 16rem;
	}
	.justify-content-evenly {
		justify-content: space-evenly;
	}
	.ulfont {
		font-size: 14px;
	}
	.ulht {
		height: 43vh;
		text-align: left;
	}
	.ulht38{
		height: 36vh;
		text-align: left;
	}

	.navbar-light .navbar-toggler {
		color: rgba(0, 0, 0, .5);
		border-color: rgba(0, 0, 0, 0);
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
		padding: 0.5rem 2.15rem;
		font-size: 12px;
		height: auto;
		width: auto;
		text-align: center;
	}
	a#bgL.active,
	a#bgLL.active,
	a#bgLLL.active {
		border-bottom: 5px solid #007cc2;
		background: bgBlue !important;
		text-align: left;
		color: var(--synectiksWhite);
		border-radius: 0px;
		font-size: 12px;
		height: auto;
		width: auto;
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
	ul.tabList.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		left: 0rem;
	}
	.tabList {
		display: block;
	}
	.tabsHide {
		display: none;
	}

	.hybmt {
		margin-top: 2.5rem;
	}
	.nav-link.active {
		background: var(--synectiksBlue);
		color: var(--synectiksWhite);
	}
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
		padding: 0rem 0rem;
	}
	.w125px {
		width: 50%;
	}
	.w15 {
		width: 25%;
	}
	.w9 {
		width: 25%;
	}
	.w7{
		width: 25%;
	}
	.counters {
		width: 4rem;
		height: 4rem;
		border-radius: 50px;
		border: 3px solid #f5f5f5;
		padding: 18px 25px;
		text-align: center;
		font-weight: 700;
		margin: 0 auto;
	}
	.w12{
			width:100%;
		}
			.w-85 {
	position: relative;
	top:15px;
	left: 0px;
  border: 1px solid var(--textColor);
  background: var(--synectiksWhite);
  justify-content: flex-start;
			}

	.topNav {
		position: fixed;
	z-index: 9999;
	top: 97px;
  background: white;
  z-index: 9999;
  width: 100%;
  height: 60px;
  padding: 0 0 20px 0;
  left: 0px;
	}
	@media (min-width: 576px) {
	.svgcolor{
	font-size: 2rem;
    color: rgba(0,0,0,0.5);
		margin: 10px 5px;
	display: none;
}
.w7{
	width: 7%;
}
.w-85{
  /* width: 87vw; */
	position: relative;
	top: 0px;
	/* left: 3%; */
    border: 1px solid var(--textColor);
    background: var(--synectiksWhite);
    justify-content: flex-start;
}
.ptext{
	text-align: justify;
}
.mobile-hide{
	display: none !important;
}
		padding: 0rem;
	.topNav{
	position: relative;
	top: 0px;
	z-index: 999;
}
 p {
				font-size: 1rem;
			}
			h1 {
				font-family: montserrat, sans-serif;
				font-weight: 300;
				font-style: normal;
				font-size: 3.6rem;
				line-height: 62px;
				letter-spacing: normal;
				/* color: #007cc2 !important; */
			}
			h2 {
				font-family: montserrat, sans-serif;
				font-weight: 400;
				font-style: normal;
				font-size: 2.56rem;
				line-height: 44px;
				letter-spacing: normal;
				/* color: #007cc2 !important; */
			}
			h3 {
				font-family: montserrat, sans-serif;
				font-weight: 500;
				font-style: normal;
				font-size: 1.6rem;
				line-height: 32px;
				letter-spacing: normal;
				/* color: #007cc2 !important; */
			}
			h4 {
				font-family: montserrat, sans-serif;
				font-weight: 600;
				font-style: normal;
				font-size: 1.125rem;
				line-height: 22px;
				letter-spacing: normal;
				/* color: #007cc2 !important; */
			}
			.Dreen,
			.Dellow,
			.Dred,
			.Durple {
				border-radius: 25px;
			}
			.one {
				width: auto;
			}
			.w15 {
				width: 10%;
			}
			.w125px {
				width: 115px;
			}
			.w-40 {
				width: 40%;
			}
			.f14 {
				font-size: 14px;
			}
			.w9 {
				width: 8%;
			}
			.boxshd {
				box-shadow: 0px 0px 3px 1px lightgrey;
			}
			.boxshdd {
				box-shadow: 0px 0px 5px 3px gray;
			}
			.counters {
				width: 4rem;
				height: 4rem;
				border-radius: 50px;
				border: 3px solid #f5f5f5;
				padding: 18px 25px;
				text-align: center;
				font-weight: 700;
			}
			.count {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				padding: 10px 0px;
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
				/* padding: 2rem 4.2rem; */
			}
		}
		a#bgL,
		a#bgLL,
		a#bgLLL {
			background: bgBlue !important;
			text-align: left;
			font-size: 14px;
			cursor: pointer;
			width: 100%;
		}
		a#bgL.active,
		a#bgLL.active,
		a#bgLLL.active {
			width: 100%;
		}

		a#bgL.active {
			border-bottom: 5px solid #007cc2;
			position: relative;
			background: bgBlue !important;
			font-size: 14px;
		}
		a#bgLL.active {
			border-bottom: 5px solid #007cc2;
			position: relative;
			background: bgBlue !important;
			font-size: 14px;
		}

		a#bgLLL.active {
			position: relative;
			border-bottom: 5px solid #007cc2;
			background: bgBlue !important;
			font-size: 14px;
		}

		.logo-btn {
			display: none;
		}
		.himage {
			width: 50%;
			height: auto;
			box-shadow: 5px 5px 5px #789;
			float: right;
			margin-left: 2rem;
			margin-bottom: 10px;
		}
		.nav-link.active {
			background: var(--synectiksBlue);
			color: var(--synectiksWhite);
		}
		.hbh1 {
			font-size: 2.5rem;
		}
		.w12{
			width:12rem;
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
	}
	@media (min-width: 768px) {

	.ulfont {
		font-size: 1rem;
	}
		.mobile-show{
	display: none;
}
.mobile-hide{
	display: flex !important;
}
		padding: 2rem 4.2rem;
		.navbar{
			padding: 0 !important;
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
			float: right;
			margin-left: 2rem;
			margin-bottom: 10px;
		}
	}
`;
