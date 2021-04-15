import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaBars } from 'react-icons/fa';
import Layout from '../../components/layout';
import HybridCloud from '../../images/Hybrid/Hybrid Cloud.jpg';
import hybridIma from '../../images/Hybrid/HybridCloud.jpg';
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
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import mcit from '../../images/modernization/mcit.png';
import swd from '../../images/modernization/swd.png';
import circle from '../../images/modernization/Application Transformation.svg';
import ds from '../../images/ApplicationTransformation/Continuous Delivery.png';
import ts from '../../images/Hybrid/Transformation Services.png';
import EX from '../../images/Hybrid/Experience.png';
import EM from '../../images/Hybrid/Engagement Model.png';
import CS from '../../images/Hybrid/Compliance&Security.png';
import ms10 from '../../images/Microservices/Microservice_10.png';
import fsub from '../../images/Microservices/Foundation-Subpage.png';
import green from '../../images/ApplicationTransformation/transformation_2.png';
import eptr from '../../images/ApplicationTransformation/Enterprise-Platform.png';
import redev from '../../images/ApplicationTransformation/Redevelopment.png';
import advisory from '../../images/modernization/Advisory.png';
import artifact from '../../images/modernization/Artifacts.png';
import da from '../../images/modernization/Discovery & Assessment.png';
import economics from '../../images/modernization/Economics.png';
import innovation from '../../images/modernization/Innovation.png';
import operatAuto from '../../images/modernization/Operation Automation.png';
import operate from '../../images/modernization/Operation.png';
import pay from '../../images/modernization/Pay As You Use.png';
import sd from '../../images/modernization/Software Defined.png';
import spa from '../../images/modernization/Strategic Planning & Architecture.png';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import ms9 from '../../images/Microservices/infrastructure.svg';
import SEO from '../../components/seo.js';
import EXP from '../../images/Hybrid/Expertise.png';
const ApplicationTransformation = () => {
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
          content="Synectiks application transformation services close the gap between what your current applications can do and what the cloud native services and microservices architecture makes them capable of. That could be greater efficiency, scale, performance and resilience. But it could also mean entirely new capabilities that create lasting advantage, generate value and drive better outcomes for your customers and your employees."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/application-transformation/index.html"
        />
      </Helmet>
      <ApplicationTransformationWrapper>
        <SEO title="Application Transformation" />
        <div className="position-relative">
          <Row>
            <div className="col-sm-12 col-md-12 px-1">
              <BreadCrumbs
                title="Home"
                subtitle="Migration & Modernization"
                pageTitle="Application Transformation"
              />
              <h1 className="mt-2 mt-md-4">Application Transformation</h1>
              <Navbar color="light" light expand="lg" className="topNav">
                <AiOutlineMenu
                  onClick={toggleNavbar}
                  className="mr-2 svgcolor mb-n2"
                />
                <Collapse isOpen={!collapsed} navbar>
                  <Nav className="bgWhite d-flex my-2 my-md-4 w-85">
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
                  </Nav>
                </Collapse>
              </Navbar>

              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div>
                    <h3 className="text-left">
                      Understanding the Application Transformation:{' '}
                    </h3>
                    <p className="ptext">
                      Inside almost every leading business today there’s a
                      world-class software business – driving innovation,
                      agility and outstanding customer experiences from within.
                    </p>
                    <p className="ptext">
                      To accommodate the increasing complexity of functional
                      requirements, and velocity, volume and variety that
                      current business demands, IT applications need to embrace
                      a variety of architectural patterns. Organizations must
                      meet ever-changing business demands — from mainframe
                      applications and client-server to service oriented
                      architecture (SOA) and microservices.
                    </p>
                    <p className="ptext">
                      Our application transformation services close the gap
                      between what your current applications can do and what the
                      cloud native services and microservices architecture makes
                      them capable of. That could be greater efficiency, scale,
                      performance and resilience. But it could also mean
                      entirely new capabilities that create lasting advantage,
                      generate value and drive better outcomes for your
                      customers and your employees.
                    </p>
                    <p className="ptext">
                      Synectiks has a proven approach to help you migrate,
                      modernize, and digitally transform your business. We can
                      help you modernize your application portfolio based on
                      APIs, microservices, containers and DevOps for faster time
                      to market, improved user experience and optimized cost.
                      Application Transformation services provides customer the
                      ability to optimize the existing application as follows:
                    </p>
                    <ul className="ptext">
                      <li>
                        By migrating existing workloads and apps to any
                        cloud—public or private or hybrid cloud.
                      </li>
                      <li>
                        By modernizing traditional applications using
                        containers, microservices and API enablement.
                      </li>
                      <li>
                        By taking advantage of cloud native services without
                        having to rewrite the code.
                      </li>
                      <li>
                        By doing Monolith to SOA transformation. Customers enjoy
                        the flexibility to reuse the Synectiks Foundation
                        Microservices components across many applications.
                      </li>
                      <li>
                        By adopting the hybrid model where some workload moves
                        to public cloud in private address space ensuring
                        security and performance.
                      </li>
                      <li>By having built in security from the start.</li>
                    </ul>
                    <p className="ptext">
                      Synectiks open product driven solutions delivery approach
                      coupled with many large scale application transformation
                      experience delivers the speed, innovations and quality and
                      better economics that your current business demands.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <h3 className="">
                              Getting Started To Application Transformation
                            </h3>
                            <p className="">
                              The first step is for CIOs to connect with the
                              business to establish clear lines of communication
                              and to set common goals. Within the IT
                              organization, CIOs must set policies that identify
                              the need to prepare for Application modernization
                              as a priority for overall IT strategies and create
                              a clearly defined journey with confidence.
                              Synectiks recommend the following steps
                            </p>
                          </div>
                          <div className="confidence row my-md-5">
                            <div className="leftcol col-md-4">
                              <div className="leftcolOne">
                                <span className="leftcolOneh3" />
                                <h3 className="text-left">
                                  Discovery & Assessment
                                </h3>
                                <p className="text-left">
                                  Evaluate the needs to modernize, standardize,
                                  rationalize and consolidate existing
                                  applications for greater efficiency and
                                  economics, risks involved, and ROI achieved
                                  based on real time data and POC’s.
                                </p>
                              </div>
                              <div className="leftcolTwo">
                                <span className="leftcolTwoh3" />
                                <h3 className="text-left">
                                  Strategic Planning & Architecture
                                </h3>
                                <p className="text-left">
                                  Develop a roadmap for modernizing and
                                  migrating applications and data, substantiated
                                  by futuristic architecture.
                                </p>
                              </div>
                            </div>
                            <div className="centercol col-md-4">
                              <img
                                src={circle}
                                alt="Strategic Planning & Architecture"
                                className="w-100"
                              />
                            </div>
                            <div className="rightcol col-md-4 ">
                              <div className="rightcolOne">
                                <span className="rightcolOneh3" />
                                <h3 className="">Application Transformation</h3>
                                <p className="">
                                  Modernize and Consolidate existing
                                  applications based on target architecture and
                                  continuously optimize it.
                                </p>
                              </div>
                              <div className="rightcolTwo">
                                <span className="rightcolTwoh3" />
                                <h3 className="">
                                  People / Process / Technology Alignment
                                </h3>
                                <p className="">
                                  Elevate people skills, operation automation
                                  and service agility to support modernized
                                  applications.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="bottomCol">
                            {/* <span className='bottomColh3' /> */}
                            {/* <h3 className='text-center mt-2 mt-md-4'>Migration</h3> */}
                            <p>
                              Our approach is to use a combination of the latest
                              industry tools, processes, experience and best
                              practices providing the best solutions to our
                              customers.
                            </p>
                            <p className="">
                              The teams perform a quick requirements analysis
                              and GAP analysis to understand the current setup
                              and provide solutions to optimize your
                              applications, storage, databases and overall
                              infrastructure. The very first step discovery and
                              assessment will clearly give you insights on the
                              improved SLA’s and cost savings. You can make
                              informed decisions to balance workloads and
                              optimize resources and thereby to create a roadmap
                              to guide the journey to Application modernization.
                              This roadmap should map people, process,
                              technology change requirement, consider IT policy
                              and operating model factors; and ultimately
                              produce clear, data-based recommendations with a
                              proposed execution plan to enable Application
                              Transformation to happen. Getting there will
                              require significant upliftment of people skills,
                              impart modern tools and technologies, transforming
                              and migrating applications, integrating and
                              orchestrating environments, automating and
                              monitoring business services, enabling digital
                              processes, and integrating data and security.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div>
                    <p className="ptext">
                      Synectiks Application transformation services provides
                      customer the ability to optimize the existing application
                      as follows:{' '}
                    </p>
                    <ul>
                      <li>
                        By taking advantage of cloud native services without
                        having to rewrite the code.
                      </li>
                      <li>
                        By doing Monolith to SOA transformation. Customers enjoy
                        the flexibility to reuse the Synectiks Foundation
                        Microservices components across many applications.
                      </li>
                      <li>
                        By adopting the hybrid model where some workload moves
                        to public cloud in private address space ensuring
                        security and performance.
                      </li>
                    </ul>
                    <p className="ptext">
                      Synectiks accelerated migration and modernization services
                      allows customer to leverage the data processing benefits
                      of cloud sooner, providing cost-savings and solving
                      scalability issues. Following are the values delivered
                    </p>
                    <div>
                      <h2>Legacy Application Migration</h2>
                      <p className="ptext">
                        Two ways to extract value from legacy apps, as below{' '}
                      </p>
                      <p className="ptext">
                        {' '}
                        <span className="fw"> Business Logic:</span> Creating
                        microservices that become APIs enabling business user to
                        assemble various functionalities and truly become a API
                        driven organization with a API centric application
                        architecture. This allows the organization to become a
                        low-code organization where they 'assemble apps' rather
                        than write apps.
                      </p>
                      <p className="ptext">
                        {' '}
                        <span className="fw">Data Lake:</span> Extracting the
                        data in a Data Lake and exposing that data through
                        analytical tools.
                      </p>
                      <img
                        src={ms10}
                        alt="Legacy Application Migration"
                        className="w-hndr mx-auto my-md-5 box-shadow"
                      />
                    </div>
                    <div>
                      <h3>Accelerated Migration</h3>
                      <p className="ptext">
                        With Synectiks Xformation platform, companies can take
                        advantage of an API-driven cloud architecture and get
                        moving faster. Synectiks open Xformation platform offers
                        App/ Delivery/ Automation blocks based on cloud native
                        services that customers can leverage to build
                        application and services rapidly with adequate security
                        and governance.
                      </p>

                      <img
                        src={ms9}
                        alt="Accelerated Migration"
                        className="w-hndr mx-auto my-md-5 box-shadow"
                      />
                    </div>
                    <div>
                      <h3>Delivery Pipeline</h3>
                      <p className="ptext">
                        Synectiks Xformation platform comes with industry
                        standard CI/CD blueprint infrastructure provisioning and
                        validation, container driven services delivery across
                        clouds, functional testing, performance testing and
                        security testing and stagewise production deployment
                        tasks. By truly adopting a DevOps based cultural
                        adoption, customers can ensure their product quality,
                        security and compliance posture is continually
                        maintained along with the capability to rapidly deliver
                        features and services with ever increasing security and
                        compliance guidelines.
                      </p>

                      <img
                        src={green}
                        alt="Delivery Pipeline"
                        className="w-hndr mx-auto my-md-5 box-shadow"
                      />
                    </div>
                    <div>
                      <h3>
                        Redevelopment – Microservices Based App Development
                      </h3>
                      Synectiks application development service offering allows
                      customers to realize the real benefit of using cloud
                      native services and boosting innovation agility. The
                      offerings involves application redevelopment to implement
                      use cases for batch processing, workflow processing ,
                      transient server less functionality or container based
                      microservices. Synectiks open Xformation platform offers
                      App/ Delivery/ Automation blocks based on cloud native
                      services that customers can leverage to build application
                      and services rapidly. A typical microservice based
                      enterprise application component diagram is below:
                      <img
                        src={eptr}
                        alt="Redevelopment – Microservices Based App Development"
                        className="w-hndr mx-auto my-md-5 box-shadow"
                      />
                    </div>
                    <div>
                      <h3>Fast Data & Bigdata Analytics</h3>
                      <p className="ptext">
                        Synectiks analytic service offering allow customers to
                        create data lake for their unstructured, semi structured
                        and structured data and derive real time visibility
                        across their business processes by doing bigdata
                        processing projects. Synectiks simplify the operations
                        complexity by running the multistage transactional
                        services, batch workloads and streaming analytics inside
                        a single platform. Synectiks deep expertise on hardware
                        aggregations coupled with its analytics services
                        offerings, customers can seamlessly run every mission
                        critical workloads inside a single cluster platform and
                        can truly focus on outcomes.
                      </p>

                      <img
                        src={redev}
                        alt="Fast Data & Bigdata Analytics"
                        className="w-hndr mx-auto my-md-5 box-shadow"
                      />
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="4">
                  <div>
                    <p className="ptext">
                      We go beyond creating a strategy: Synectiks helps you plan
                      it, do it, run it and manage it.
                      <br /> Synectiks reduce the application transformation
                      effort at least by 50% by using open Application blocks
                      (common services for any product), automation blocks and
                      component frameworks built by SYNECTIKS team, so that you
                      can leverage lot of existing code and reuse your existing
                      codebase. A typical large transformation project can take
                      a yearlong effort and often don’t yield results. We
                      recommend taking bottom up approach, take a small piece of
                      functionality, and develop the services and foundation for
                      it rapidly by using existing application blocks and
                      automation framework. You would minimize your risks by
                      investing a small time & money and continue to do so when
                      you see a significant ROI. The key aspect is time. The
                      advantage of making us your microservices partner is, our
                      open source contribution helps us to deliver values vary
                      rapidly.
                    </p>
                    <h4 className="text-center mt-2 mt-md-5">
                      Top 9 Reasons to select Synectiks as your Application
                      Modernization Partner:
                    </h4>
                    <div className="my-2 my-md-4">
                      <div className="row">
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img src={EX} alt="Experience" className="tw m-0" />
                            <h4 className="my-2 my-md-3">Experience</h4>
                          </div>
                          <p className="text-center">
                            Large Scale modernization and consolidation
                            experience
                          </p>
                        </div>
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={artifact}
                              alt="Artifacts"
                              className="tw m-0"
                            />
                            <h4 className="my-2 my-md-3">Artifacts</h4>
                          </div>
                          <p className="text-center">
                            App blocks and Automation Bots available in
                            Xformation platform accelerate application
                            modernization effort by 50%.
                          </p>
                        </div>
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={advisory}
                              alt="Advisory"
                              className="tw m-0"
                            />
                            <h4 className="my-2 my-md-3">Advisory</h4>
                          </div>
                          <p className="text-center">
                            Quick Discovery / Assessment and application
                            modernization and migration plan built in weeks, not
                            months.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={EXP}
                              alt="E2E Expertise"
                              className="tw m-0"
                            />
                            <h4 className="my-2 my-md-3">E2E Expertise</h4>
                          </div>
                          <p className="ptext">
                            You will get E2E expertise for new application
                            development or refactoring existing product under a
                            single Roof.
                          </p>
                        </div>
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={economics}
                              alt="Economics"
                              className="tw m-0"
                            />
                            <h4 className="my-2 my-md-3">Economics</h4>
                          </div>
                          <p className="text-center">
                            Our open product-based solution delivery approach
                            reduce 50% time & money from any managed services
                            partner.
                          </p>
                        </div>
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={innovation}
                              alt="Innovations"
                              className="tw m-0"
                            />
                            <h4 className="my-2 my-md-3">Innovations</h4>
                          </div>
                          <p className="text-center">
                            Use our deep expertise on cloud native services
                            especially container ecosystem, serverless ecosystem
                            to deliver services to customer at optimal speed and
                            economies.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={ds}
                              alt="Continuous Delivery"
                              className="tw m-0"
                            />
                            <h4 className="my-2 my-md-3">
                              Continuous Delivery
                            </h4>
                          </div>
                          <p className="text-center">
                            Deliver applications seamlessly across clouds and
                            geographies using existing delivery blueprints
                            ensuring optimal quality and resilience.
                          </p>
                        </div>
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={CS}
                              alt="Security & Compliance"
                              className="tw m-0"
                            />
                            <h4 className="my-2 my-md-3">
                              {' '}
                              Security & Compliance
                            </h4>
                          </div>
                          <p className="text-center">
                            Avail our built in application security blueprints
                            right from the start to deliver application that
                            adheres your enterprise security & compliance
                            guidelines.
                          </p>
                        </div>
                        <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                          <div className="d-flex align-items-center flex-column">
                            <img src={EM} alt="Engagement" className="tw m-0" />
                            <h4 className="my-2 my-md-3">Engagement</h4>
                          </div>
                          <p className="text-center">
                            Our every engagement is focused on empowerment, not
                            dependency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </Row>
        </div>
      </ApplicationTransformationWrapper>
      <Helmet></Helmet>
    </Layout>
  );
};

export default ApplicationTransformation;

const ApplicationTransformationWrapper = styled.div`
	.w-85 {
	position: relative;
	top:15px;
	left: 0px;
  border: 1px solid var(--textColor);
  background: var(--synectiksWhite);
  justify-content: flex-start;
			}
.svgcolor{
	font-size: 2rem;
    color: rgba(0,0,0,0.5);
		margin: 10px 5px;
		display:block;
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
  left: 0%;
	}

	.bottomColh3{
		width: 10%;
		height: 10px;
		background: #CB2029;
		display: block;
		margin: 0 auto;
	}
	.leftcolOneh3{
		width: 30%;
		height: 10px;
		background: #67873C;
		display: block;
		margin-bottom: 20px;
	}
	.leftcolTwoh3{
		width: 30%;
		height: 10px;
		background: #81376C;
		display: block;
		margin-bottom: 20px;}

	.rightcolOneh3{
		content:'';
		width: 30%;
		height: 10px;
		background: #2C75A2;
		display: block;
		margin-bottom: 20px;
	}
	.rightcolTwoh3{
		width: 30%;
		height: 10px;
		background: #E96D25;
		display: block;
		margin-bottom: 20px;
	}

	.rightcolOne,.rightcolTwo{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		h3,p{
			text-align: left;
		}
	}

	.leftcol, .rightcol {
		display: flex;
		justify-content space-between;
		flex-flow: column;
	}
padding: 5rem 1rem;
.w-hndr{
	width: 100%
}
	.ptext{
		text-align: left;
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
	}
h1,h2,h3,h4,h5,h5,p,ul{
  text-align: left;
}
.hybJumbo{
  display:flex;
  flex-direction: column;
  align-items: center;
  .himage {
		width: 100%;
    height: auto;
    float: none;
		box-shadow: 5px 5px 5px #789;
		margin-bottom: 10px;
    margin-left:0rem;
  }
}
.marHybrid{
  margin-left: 0rem;
}
.w-sm-100{
  width: 100%;
}
.hybridFixed{
  position: fixed;
  top:6rem;
  left:0;
  z-index: 99;
}
a#bgL{
	padding-left: 0rem;
}
a#bgL,
a#bgLL,
a#bgLLL {
    padding: 0.5rem 1.5rem;
    font-size: 12px;
    height: auto;
    /* background: white !important; */
    text-align: left;
    /* display:flex;
    justify-content: space-between; */
}
a#bgL.active,
a#bgLL.active,
a#bgLLL.active  {
    border-bottom: 5px solid #007cc2;
    background: bgBlue !important;
    text-align: left;
    color: var(--synectiksWhite);
    border-radius: 0px;
    /* padding: 0.5rem 1.5rem; */
    font-size: 12px;
    height: auto;
    width:100%;
}
.imgHyb {
	margin-right: 25px !important;
  width: 55px !important;
  z-index: 999;
  position: relative;
}
.one {
	z-index: 99999;
	background: transparent !important;
	width: 100%;
}
ul.tabList.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		left: 0rem;
	}
	.tabList {
    display:block;
  }
  .tabsHide {
    display: none;
  }

.hybmt{
  margin-top: 2.5rem;
}
.nav-link.active{
  background: var(--synectiksBlue);
  color: var(--synectiksWhite);
}
.logo-btn {
    font-size:2rem;
    background: white;
    border: none;
    outline: none;
    width: 100vw;
    padding: 0.6rem;
    text-align: left;
    box-shadow: 2px 1px 10px rgba(0,0,0,0.3);
    color: rgba(0,0,0,0.5);
}

    .logo-btn:hover {
      cursor: pointer;
    }
      .tab-content>.active{
        padding:0rem 0.5rem;
      }
      	.whbd9 {
		width: 25%;
  }
  	.whbd7 {
		width:25%;
  }
 .w20{
		width:25%;
  }
  .w15 {
	width: 25%;
}


@media (min-width: 576px){
.svgcolor{
	font-size: 2rem;
    color: rgba(0,0,0,0.5);
		margin: 10px 5px;
		display:none;
}
.fw{
	font-weight:600;
}
		.bottomColh3{
		width: 10%;
		height: 10px;
		background: #CB2029;
		display: block;
		margin: 0 auto;
	}
	.leftcolOneh3{
		width: 30%;
		height: 10px;
		background: #67873C;
		display: block;
		margin-bottom: 20px;
	}
	.leftcolTwoh3{
		width: 30%;
		height: 10px;
		background: #81376C;
		display: block;
		margin-bottom: 20px;}

	.rightcolOneh3{
		content:'';
		width: 30%;
		height: 10px;
		background: #2C75A2;
		display: block;
		margin-bottom: 20px;
	}
	.rightcolTwoh3{
		width: 30%;
		height: 10px;
		background: #E96D25;
		display: block;
		margin-bottom: 20px;
	}

	.rightcolOne,.rightcolTwo{
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		h3,p{
			text-align: right;
		}
	}

	.leftcol, .rightcol {
		display: flex;
		justify-content space-between;
		flex-flow: column;
	}
	.ptext{
		text-align: justify;
	}
	padding:3rem 5rem;
	.w-hndr{
	width: 75%
}
	a#bgL{
	padding-left: 5rem;
	padding-right: 5rem;
}
	a#bgLL{
	padding-left:3rem;
	padding-right: 3rem;
}
	a#bgLLL{
	padding-left: 3rem;
	padding-right: 3rem;
}
	.topNav{
	position: relative;
	top: 0px;
	left: -3%;
	z-index: 999;
}
	.one {
	z-index: 99999;
	background: transparent !important;
	width: auto;
}
  .hybJumbo{
    display:block;
    	.himage {
		width: 50%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		float: right;
		margin-left: 2rem;
		margin-bottom: 10px;
  }
  }
  .w15 {
	width: 8%;
}
  	.whbd7 {
		width: 7%;
	}
  	.whbd9 {
		width: 8%;
  }
  .w18{
    width:
  }
  .w20{
    width: 16%;
  }
.w-85{
  /* width: 87vw; */
	position: relative;
	top: 0px;
	left: 3%;
    border: 1px solid var(--textColor);
    background: var(--synectiksWhite);
    justify-content: flex-start;
}
  ul.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		/* width: 25vw; */
		left: 0rem;
  }

	ul.nav.flex-column > li > a {
		width: 100%;
		color: rgba(0, 0, 0, 0.8);
		height: 10vh;
		font-size:14px;
		cursor: pointer;
		/* padding-left: 3.2rem; */
  }
  ul.nav.flex-column > li > a {
    width: 100%;
    color: rgba(0,0,0,0.8);
    height: 10vh;
    font-size: 15px;
    cursor: pointer;
  }
 .tab-content>.active{
        padding:0rem 0rem;
      }
	}
  a#bgL,a#bgLL,a#bgLLL{
    background: bgBlue !important;
    text-align: left;
     font-size: 14px;
     cursor: pointer;
  }


a#bgL.active {
  border-bottom: 5px solid #007cc2;
  position: relative;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
  font-size: 14px;
  /* padding-left:6rem;
  padding-right:6rem; */
}
a#bgLL.active {
  border-bottom: 5px solid #007cc2;
  position: relative;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
   font-size: 14px;
}
a#bgLLL.active {
  position: relative;
	border-bottom: 5px solid #007cc2;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
   font-size: 14px;
}

   .logo-btn {
    display: none;
  }

  .bxshd{
    box-shadow: 0px 0px 0px 0px lightgray;
  }
.nav-link.active{
  background: var(--synectiksBlue);
  color: var(--synectiksWhite);
}
.hbh1 {
    font-size: 2.5rem;
}
.hybridFixed{
       display: block;
    height: auto;
    position: sticky;
    top: 16%;
    padding-bottom: 21.4rem;
    padding-top: 2.4rem;
}
.nav-item > a.active, .nav-item > a:active{
  height: auto;
}

}
@media(min-width:768px){
	a#bgLLL.active:after{
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
	a#bgL.active:after{
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
a#bgLL.active:after{
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
  .w-sm-100{
  width: 75%;
}
  	.himage {
		width: 100%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		margin-right: 2rem;
		margin-bottom: 10px;
  }
  .bxshd{
    box-shadow: 0px 0px 0px 0px lightgray;
  }
}
@media(min-width:1024px){
 	.himage {
		width: 50%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		margin-left: 2rem;
		margin-bottom: 10px;
  }
  .bxshd{
    box-shadow: 0px 0px 0px 0px lightgray;
  }
}
`;
