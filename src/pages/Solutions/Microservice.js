import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaBars } from 'react-icons/fa';
import Layout from '../../components/layout';
// import CloudCommon from '../../images/CloudCommon.png';
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
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../../components/fonts.css';
import ms1 from '../../images/Microservices/Microservice_1.png';
import ms2 from '../../images/Microservices/Monolith to Microservices.jpg';
import ms4 from '../../images/Microservices/Microservice_7.png';
import ms6 from '../../images/Microservices/Microservice_9.png';
import ms7 from '../../images/Microservices/Microservice_10.png';
import ms8 from '../../images/Microservices/Microservice_11.png';
import ms9 from '../../images/Microservices/infrastructure.svg';
import styled from 'styled-components';
import SEO from '.././../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const Microservice = () => {
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
          content="SYNECTIKS, a trusted partner with experience migrating monolithic applications to cloud and microservices architecture, can help make the process seamless. Let us help you make the shift so you can capitalize on business opportunities faster."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/microservices/index.html"
        />
      </Helmet>
      <MicroserviceWrapper>
        <SEO title="Microservices" />
        <div className="container-fluid p-0">
          <div>
            <BreadCrumbs
              title="Home"
              subtitle="Solutions"
              pageTitle="Micro services"
            />
            <h1>Microservices</h1>
          </div>
          <div className="">
            <Row className="position-relative">
              <div className="col-sm-12 col-md-12">
                <Navbar
                  color="light"
                  light="light"
                  expand="xl"
                  className="topNav"
                >
                  {/* <NavbarToggler onClick={toggleNavbar} className='mr-2'>
										<FaBars className='navbar-toggler-icon' />
										<span className='my-1 mx-2 close'>X</span>
									</NavbarToggler> */}
                  <AiOutlineMenu
                    onClick={toggleNavbar}
                    className="mr-2 svgcolor mb-n4"
                  />
                  <Collapse isOpen={!collapsed} navbar="navbar">
                    <Nav className="bgWhite d-flex my-2 my-md-4 w-85">
                      <NavItem className="one">
                        <NavLink
                          id="bgL"
                          className={classnames({
                            active: activeTab === '1'
                          })}
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
                          className={classnames({
                            active: activeTab === '2'
                          })}
                          onClick={() => {
                            toggle('2');
                            toggleTab();
                            onTop();
                          }}
                        >
                          BENEFITS
                        </NavLink>
                      </NavItem>
                      <NavItem className="one">
                        <NavLink
                          id="bgLLL"
                          className={classnames({
                            active: activeTab === '3'
                          })}
                          onClick={() => {
                            toggle('3');
                            toggleTab();
                            onTop();
                          }}
                        >
                          CHALLENGES
                        </NavLink>
                      </NavItem>
                      <NavItem className="one">
                        <NavLink
                          id="bgLLL"
                          className={classnames({
                            active: activeTab === '4'
                          })}
                          onClick={() => {
                            toggle('4');
                            toggleTab();
                            onTop();
                          }}
                        >
                          HOW SYNECTIKS CAN HELP YOU?
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div>
                      <div className="w-100 d-flex flex-column flex-md-row align-items-start py-2 py-md-3">
                        <div className="pr-0 pr-md-5">
                          <p className="ptext">
                            To accommodate the increasing complexity of
                            functional requirements, IT applications have
                            embraced a variety of architectural patterns.
                            Organizations must meet ever-changing business
                            demands — from mainframe applications and
                            client-server to service oriented architecture (SOA)
                            and microservices.
                          </p>
                          <p className="ptext">
                            Microservices architecture is a combination of
                            successful and proven concepts of software
                            engineering such as agile software development, SOA,
                            API-first design and continuous delivery (CD). This
                            architecture and organizational approach to software
                            development is designed to accelerate development
                            cycles, foster innovation and ownership and improve
                            the ability to maintain and scale applications.
                          </p>
                        </div>
                        <img
                          className="microImage imgshadow"
                          height="auto"
                          src={ms1}
                          alt="Microservices"
                        />
                      </div>
                      <div className="my-1 my-md-4">
                        <p className="py-2 py-md-3">
                          Despite technological advancements, 90 percent of
                          business IT applications are legacy and what are known
                          as “monolithic”. These range from mainframe apps where
                          UI, business logic and data storage reside on
                          machines, to client-server applications where layered
                          technologies that support UI, business functionality
                          and data are stored horizontally. Microservices
                          architecture, on the other hand, divides the
                          functionality into cohesive verticals by implementing
                          a specific domain.
                        </p>
                        <img
                          src={ms2}
                          alt="monolllith microservice"
                          className="imgshadow microser mx-auto"
                        />
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div className="">
                      <h5 className="ft">Product Quality.</h5>
                      <ul>
                        <li>
                          Optimize Scalability: React fluidly with smaller,
                          self-contained components
                        </li>
                        <li>
                          Achieve High Quality: Continuously and confidently
                          develop and test
                        </li>
                        <li>
                          Maximize Resource Utilization: Utilize containers for
                          efficient infrastructure consumption
                        </li>
                        <li>Minimize Downtime: Perform isolated maintenance</li>
                        <li>
                          Increase Reuse and Decrease Overhead: Encourage
                          sharing on API driven architecture
                        </li>
                      </ul>

                      <h5 className="mt-2 mt-md-4 ft">Process & Culture.</h5>
                      <ul>
                        <li>
                          Streamline Feature Development: Sprint faster to keep
                          up with changing needs
                        </li>
                        <li>
                          Increase Innovation: Reorganize into domain specific,
                          end-to-end service teams
                        </li>
                        <li>
                          Avoid Tool/Expertise Lock-in: Choose the best
                          technique/technology for the specific problem
                        </li>
                        <li>
                          Adopt Existing Third-party Tools: Integrate easily
                          into API driven ecosystems
                        </li>
                        <li>
                          Grow User Base/Expand Market: Extend capabilities to
                          external parties
                        </li>
                        <li>
                          Enable Business Consumption: Solve small problems with
                          measurable outcomes
                        </li>
                      </ul>
                    </div>
                    <div className="my-2 my-md-3">
                      <p className="ptext">
                        Maintaining monolithic applications often proves
                        challenging because it’s difficult to test and release
                        millions of lines of code for tiny changes (in most
                        cases only a few lines). But migrating to microservices
                        is not as simple as it sounds. It requires a big change
                        management process that often includes new team
                        structures (to say nothing of altering the mindset of
                        the organization!). To support the approach, technology
                        stack must also be upgraded. In the microservices
                        scheme, an application is built with a modular approach,
                        making it scalable and easier to deploy. With the right
                        tools, governance and automation in place, updates come
                        much easier.
                        <br />
                        <br />
                        While Monolith has complexity in codebase, microservices
                        poses the complexity of interaction between many
                        services.
                      </p>

                      <div className="my-2 my-md-4 d-flex flex-column flex-md-row">
                        <div className="bgBlueLight col-md-6 pt-2">
                          <h4 className="btn bgOrange py-0 text-light">
                            Pain Points
                          </h4>
                          <ul>
                            <li>Code complexity & Maintainability</li>
                            <li>
                              Deployment becomes the bottleneck, fear to change,
                              lack of ownership
                            </li>
                            <li>Failure dependencies</li>
                            <li>One size doesn't fit all, hard to scale out</li>
                            <li>
                              Discrete hardware, 10% Utilization across servers
                            </li>
                            <li>Hardware centric culture</li>
                            <li>Operations - infinite mails and tickets</li>
                          </ul>
                        </div>
                        <div className="bgRedLight text-light col-md-6 pt-2">
                          <h4 className="btn bgOrange py-0  text-light ">
                            Benefits / ROI
                          </h4>
                          <ul>
                            <li>
                              Composability / Reusability / Ease of maintenance
                            </li>
                            <li>
                              Autonomy of teams, culture of change, deploy more,
                              deploy faster, deploy better. Ownership and DevOps
                              culture.
                            </li>
                            <li>Failure isolation and resiliency</li>
                            <li>Better scaling (out) and optimizations</li>
                            <li>
                              Hardware aggregated, assign resource to service
                              elastically
                            </li>
                            <li>Software centric culture</li>
                            <li>Complete automated, run in pilot mode</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div className="d-flex flex-column flex-md-row	justify-content-between text-light">
                      <div className="bgOrange w-100  p-3  p-md-3">
                        <ul>
                          <h3>Cultural Challenges</h3>
                          <li>You built, you run it</li>
                        </ul>
                      </div>
                      <div className="bgRed w-100  p-3  p-md-3 mx-0 mx-md-3">
                        <ul>
                          <h3>Architectural Challenges</h3>
                          <li>Dealing with asynchronicity</li>
                          <li>Cascading Failures</li>
                          <li>Discovery and Authentication of Services</li>
                          <li>Integration Tests</li>
                        </ul>
                      </div>
                      <div className="bgBlue w-100 p-3  p-md-3">
                        <ul>
                          <h3>Operational Challenges</h3>
                          <li>Duplication of processes and tools</li>
                          <li>
                            Complexity moves from components to interactions
                          </li>
                          <li>Debugging across components</li>
                          <li>Deployment</li>
                        </ul>
                      </div>
                    </div>
                    <p className="my-0 mt-md-4 pt-md-2">
                      Thankfully, current cloud-based distributed technologies
                      alleviate the burden of managing monolithic applications
                      by providing a platform to develop and deploy on a dime.
                    </p>
                    <div className="my-0 my-md-4	">
                      <h5 className="ft">
                        Three key Technology Drivers to Address Microservices
                        Challenges.
                      </h5>
                      <h5 className="my-0 mb-md-2	ft">Hardware Aggregation.</h5>
                      <p className="ptext">
                        As you refactor one large monolith application into
                        multiple independent services with their own services
                        and data layer, you probably would end up having 25+
                        services, 50+ databases (Cache, Relational, NoSQL,
                        Graph, Bigtable, Bigdata). Having them to deploy in
                        Discrete Hardware (server by server), the deployment
                        complexity itself will multiply to 50X at least. So, you
                        essentially need to aggregate the hardware, say you
                        aggregate your Compute/Network/Storage so that it looks
                        like ONE big unit with combined capacity and you keep
                        deploying your services & databases inside that
                        aggregated cluster transparent of underlying
                        Compute/Network/Storage. Thankfully, current cloud-based
                        distributed technologies offer many avenues to aggregate
                        hardware across data centers and geographies.
                      </p>
                      <div className="mt-2 mt-md-4">
                        <h5 className="my-0 mb-md-2 ft	">
                          Containerization & Continuous Delivery.
                        </h5>
                        <p className="ptext">
                          As you transform monolith to microservices, your big X
                          becomes 100 small x. If you deploy that 100 x as a
                          layered stack in discrete servers in a different way,
                          your deployment complexity would multiply to 1000X. To
                          address this challenge, you definitely need to unify
                          the delivery of services, make sure your services are
                          delivered in the same way and they are staged to the
                          production environment through some stringent quality
                          gates. To unify the delivery of multiple services in
                          the same way, Containerization play a big role and
                          Containers along with the Continuous Delivery channel
                          brings down your 1000X complexity to a factor of X.
                        </p>
                      </div>
                      <div className="d-flex flex-column align-items-start flex-md-row justify-md-between  px-2 px-md-0 mt-2 mt-md-5">
                        <div className="pr-0 pr-md-5 w-100">
                          <h5 className="my-0 mb-md-2	mt-md-n3 ft">
                            Operation Automation.
                          </h5>
                          <p className="ptext">
                            An ideal microservices hosting platform is based on
                            geographically spanned cluster and hardware
                            agnostic. While this platform alleviates the burden
                            of managing many servers, operating systems etc., it
                            brings a new set of operational challenges like
                            debugging, logs tracing, many processes and tools
                            running in a single application. The operation
                            management paradigm is shifted from managing
                            Compute/Network/Storage and operating system to
                            managing geographically distributed clusters and
                            services management, their interaction. Thankfully,
                            current cloud-based service discovery and cluster
                            wide operation management technologies offer avenues
                            to aggregate those operational challenges.
                          </p>
                          <p className="ptext">
                            Essentially in a microservices ecosystem, you will
                            aggregate, extent & automate. You will aggregate
                            your hardware across DC’s and geographies, develop
                            microservices, bigdata, IOT applications based on
                            libraries and reusable services and continue to do
                            cluster and services automation toward running
                            everything in auto pilot mode.
                          </p>
                        </div>
                        <div className="w-100">
                          <img
                            src={ms4}
                            alt="Operation Automation"
                            className="my-2 my-md-0 w-100 imgshadow"
                          />
                        </div>
                      </div>

                      <div className="my-0 my-md-4">
                        <div className="my-2 my-md-4">
                          <div className="d-flex">
                            <div className="d-flex flex-column justify-content-around bgOrange">
                              <div className="rotate bgOrange vert-text">
                                <h6>Activites</h6>
                              </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-md-around bgBlueLight p-md-3">
                              <div className="aggregate col">
                                <div>
                                  <h4 className="btn bgOrange py-0 text-light">
                                    Aggregate
                                  </h4>
                                </div>
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Aggregate computing, storage, network
                                        @software layer from any plublic/private
                                        cloud
                                      </li>
                                      <li>Scale in/out as per need</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="extend col">
                                <div>
                                  <h4 className="btn bgOrange py-0 text-light">
                                    Extend
                                  </h4>
                                </div>
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Develop micro service, <br /> IOT, big
                                        data quickly
                                        <br />
                                      </li>
                                      <li>Extend full proof frameworks</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="devops col">
                                <div>
                                  <h4 className="btn bgOrange py-0 text-light">
                                    DevOps
                                  </h4>
                                </div>
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Establish build/deployment pipeline
                                      </li>
                                      <li>Establish service orchestration</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Operate col">
                                <div>
                                  <h4 className="btn bgOrange py-0 text-light">
                                    Operate
                                  </h4>
                                </div>
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>Establish ALM</li>
                                      <li>
                                        Setup operational tools and frameworks
                                        to put your business in autopilot mode
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex">
                            <div className="d-flex flex-column justify-content-around bgOrange">
                              <div className="rotate bgOrange vert-text">
                                <h6>Output</h6>
                              </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-md-around bgRedLight text-light px-md-3 py-md-1">
                              <div className="aggregate col">
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Automated scripts to do end to end
                                        provisioning of entire platform in
                                        minutes
                                      </li>
                                      <li>
                                        Aggregated cluster capable of deploying
                                        microservice/IOT/Big Data Application
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="extend col">
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Develop micro service, <br /> IOT, big
                                        data quickly
                                        <br />
                                      </li>
                                      <li>Extend full proof frameworks</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="devops col">
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Establish build/deployment pipeline
                                      </li>
                                      <li>Establish service orchestration</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Operate col">
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>Establish ALM</li>
                                      <li>
                                        Setup operational tools and frameworks
                                        to put your business in autopilot mode
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <h5 className="ft">One Key Cultural Driver.</h5>
                        <p className="ptext">
                          Simply speaking the microservice world is “Solve small
                          problems, with small teams with measurable outcomes vs
                          solving 1 big problem with 1 large team.”
                          <br />
                          Since its small teams being responsible for end to end
                          success, it’s much essential to establish a culture
                          that “You built it, you run it”. Dev & Ops married,
                          become DevOps. It means each employee are skilled to
                          Develop small services and able to maintain its
                          complete lifecycle. That involves a big change in
                          structure & skills of the organization. Most of the
                          microservices adoption will be successful if this
                          cultural transformation is done right, we opine that
                          it contributes 90% towards your success. A typical
                          culturally changed organization will look like as
                          below:
                        </p>
                        <img
                          src={ms6}
                          alt="One Key Cultural Driver"
                          className="microser imgshadow mx-auto"
                        />
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="4">
                    <div>
                      <p className="ptext">
                        SYNECTIKS, a trusted partner with experience migrating
                        monolithic applications to cloud and microservices
                        architecture, can help make the process seamless. Let us
                        help you make the shift so you can capitalize on
                        business opportunities faster.
                      </p>
                      <p>
                        SYNECTIKS has a flexible and effective way of migrating
                        monolithic applications to microservices, which includes
                        the following steps:
                      </p>
                      <img
                        src={ms7}
                        alt="migrating monolithic "
                        className="my-2 mt-md-4 microIm imgshadow"
                      />
                    </div>
                    <div>
                      <div className="d-flex flex-column flex-md-row justify-content-between my-0 my-md-5">
                        <div className="bgOrange text-light w-100 p-2 p-md-3">
                          <h3>Discovery and Assessment.</h3>
                          <ul>
                            <li>
                              Meet with the Stakeholders, Infrastructure and
                              Application SME’s to gather detailed information
                              about the applications and databases.
                            </li>
                          </ul>
                        </div>
                        <div className="bgRed text-light w-100 mx-0 mx-md-3 p-2 p-md-3">
                          <h3>Business Readiness.</h3>
                          <ul>
                            <li>Business Transformation Challenges</li>
                            <li>Cultural Readiness</li>
                          </ul>
                        </div>
                        <div className="bgBlue text-light w-100 p-2 p-md-3">
                          <h3>
                            Existing Infrastructure and Applications Review.
                          </h3>
                          <ul>
                            <li>Application Functionality</li>
                            <li>Infrastructure & Deployment</li>
                            <li>Technology Stack</li>
                            <li>Data Structure</li>
                            <li>Interfaces</li>
                            <li>Security & Governance</li>
                            <li>Existing Pain Points</li>
                          </ul>
                        </div>
                      </div>

                      <p className="ptext">
                        Provide modernization options, along with Demo / POC how
                        the transition would look like.
                      </p>

                      <p className="ptext">
                        Based on the SYNECTIKS recommendations, provide proposed
                        LOE (Level of Effort) After mutual agreement, SYNECTIKS
                        begins with agile methodology, including:
                      </p>

                      <ul>
                        <li>
                          Get a deep understanding of the functionality of the
                          existing application.
                        </li>
                        <li>Create Migration RoadMap.</li>
                        <li>Create Risk Plan.</li>
                        <li>Create Target Architectures</li>
                        <li>
                          Create a project plan and share with all the
                          stakeholders.
                        </li>
                        <li>Split the application into smaller domains.</li>
                        <li>
                          Define the boundaries of the domains and
                          microservices.
                        </li>
                        <li>Finalize the technology stack.</li>
                        <li>Generate infrastructure blueprints.</li>
                        <li>
                          Set up the foundation environment Put Continuous
                          Integration/Continuous Delivery (CI/CD) pipelines in
                          place.
                        </li>
                        <li>
                          Begin development sprints (SYNECTIKS prefers
                          test-driven development to minimize manual testing).
                        </li>
                        <li>
                          Help to use SYNECTIKS Application blocks / libraries
                          to do rapid transformation.
                        </li>
                      </ul>
                      <div>
                        <p className="ptext">
                          SYNECTIKS is committed to working with its customers
                          to meet almost any need.
                        </p>
                        <ul>
                          <li>
                            Adapt DevOps culture across organization, essential
                            for developing microservices, foster small,
                            independent teams within the organization to take
                            over ownership of the services.
                          </li>
                          <li>
                            Transform your hardware driven infrastructure to a
                            complete multi-cloud hybrid software driven system
                          </li>
                          <li>Streamline communications to ensure success</li>
                          <li>
                            Embrace CI best practices and automate CI/CD
                            processes
                          </li>
                          <li>
                            Embrace operation automations to manage distributed
                            cluster and services With SYNECTIKS Xformation
                            platform, companies can take advantage of an API
                            driven cloud architecture and get going faster.
                          </li>
                        </ul>
                        <div>
                          <img
                            src={ms9}
                            alt="SYNECTIKS Xformation platform"
                            className="my-2 my-md-5 microser imgshadow mx-auto"
                          />
                        </div>
                        <div>
                          <p className="ptext">
                            How much effort it takes to perform a Monolith to
                            Microservices transformation?
                          </p>
                          <p className="ptext">
                            Though it depends on complexity & sizing of the
                            existing applications, you could accelerate the
                            transformation process by engaging a microservices
                            SYNECTIKS who can help you as follows:
                          </p>
                          <ul>
                            <li>
                              Accelerate the transformation by using open
                              application and automation blocks and frameworks
                              built by SYNECTIKS team, so that you can leverage
                              lot of existing code and reuse your maximum
                              existing codebase. A typical large transformation
                              project can take a year long effort and often
                              don’t yield results. We recommend taking bottom -
                              up approach, take a small piece of functionality,
                              and develop the services and foundation for it
                              rapidly by using existing application blocks and
                              automation framework. You would minimize your
                              risks by investing a small time & money and
                              continue to do so when you see a significant ROI.
                              The key aspect is time. The advantage of making us
                              your microservices partner is, our open source
                              contribution helps us to deliver values that vary
                              rapidly.
                            </li>
                            <li>
                              Embrace DevOps centric culture by delivering you
                              skilled DevOps resources.
                            </li>
                          </ul>
                          <div className="my-0 my-md-5">
                            <h5 className="ft">
                              Why SYNECTIKS should be your trusted microservice
                              partner?
                            </h5>
                            <img
                              src={ms8}
                              alt="microservice partner"
                              className="my-2 mt-md-4 microser70 imgshadow mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </Row>
          </div>
        </div>
      </MicroserviceWrapper>
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
    </Layout>
  );
};

export default Microservice;

const MicroserviceWrapper = styled.div`{
	.vert-text{
		width: 10px;
    padding: 0px 18px 0px 10px;
	}
.nav-link{
  /* background: var(--synectiksBlue); */
  color: var(--synectiksWhite);
	padding: 0.5rem 1rem;
}
.nav-link{
  /* background: var(--synectiksBlue); */
  color: var(--synectiksWhite);
	padding: 0.5rem 1rem;
}
.nav-link.active{
  background: var(--synectiksBlue);
  color: var(--synectiksWhite);
	padding: 0.5rem 1rem;
}
.ptext{
	text-align:left;
}
	.svgcolor{
	font-size: 2rem;
    color: rgba(0,0,0,0.5);
		margin: 10px 5px;
		display: block;
}
padding: 5rem 1rem;
.microser,.microser70{
	width: 100%;
}
.microImage,.microIm{
	width: 100%;
}
.imgshadow{
	box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.1);
}
.topNav{
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
    /* width:100%; */
		padding: 0.5rem 3rem;
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
	background: rgb(0,124,194);
	color: var(--synectiksWhite);
}
ul.tabList.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		left: 0rem;
	}
.hybmt{
  margin-top: 2.5rem;
}
.w-85{
  /* width: 87vw; */
	position: relative;
	top:30px;
	left: 0px;
    border: 1px solid var(--textColor);
    background: var(--synectiksWhite);
    justify-content: flex-start;
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
.tab-content>.active {
    padding: 2rem 0.5rem;
}
.nav-link:nth-child(1).active{
  background: var(--synectiksBlue);
  color: var(--synectiksWhite);
	padding: 0.5rem 1rem;
}
}

@media (min-width: 576px){
	.svgcolor{
	font-size: 2rem;
    color: rgba(0,0,0,0.5);
		margin: 10px 5px;
		display:none;
}
	.ptext{
	text-align:justify;
}
	.microser{
		width:75%;
	}
	.microser70{
		width:70%;
	}
	.rotate{
	width: auto;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    margin: 0 -60px;
    padding: 3px;
    text-align: center;
    color: var(--synectiksWhite);
}
	padding: 2.5rem 4rem;
	p{
		text-align: justify;
	}
	.tab-content>.active {
    padding: 0rem 0.5rem;
}
.microIm{
	width: 75%;
		margin:0 auto;
}
	.microImage{
		width: 33%;
		margin:0 auto;
	}
	.topNav{
	position: relative;
	top: 0px;
	z-index: 999;
}
	.one {
	z-index: 99999;
	background: white;
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
		top:0px;
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
}
a#bgLL.active {
  border-bottom: 5px solid #007cc2;
  position: relative;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
	/* padding-left: 7rem ;
	padding-right: 7rem ; */
   font-size: 14px;
}
a#bgLLL.active {
  position: relative;
	border-bottom: 5px solid #007cc2;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
   font-size: 14px;
	 /* padding-left: 4rem ;
	padding-right: 4rem ; */
}

   .logo-btn {
    display: none;
  }

  .bxshd{
    box-shadow: 0px 0px 0px 0px lightgray;
  }
.nav-link:nth-child(1){
  /* background: var(--synectiksBlue); */
  color: var(--textColor);
	padding: 0.5rem 3rem;
}
.nav-link:nth-child(1).active{
  background: var(--synectiksBlue);
  color: var(--synectiksWhite);
	padding: 0.5rem 3rem;
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
h2{
  font-size: 2rem;
}
h3{
  font-size:1.75rem;
}
h4{
   font-size: 1.5rem;
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
