import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Collapse, Button, CardBody, Card, Col, Row } from 'reactstrap';
import Layout from '../../components/layout';
import career from '../../images/Synectiks Logo/Careers.jpg';
import '../../components/layout.css';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';
import PoweredBySynectiks from '../../images/HomePage/PoweredBySynectiks.png';
import HomeTabs from '../../components/Home/HomeTabs.js';

class MobTabs extends React.Component {
  state;
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
    this.state = { collapse: false };
    this.state = { collapse2: false };
    this.state = { collapse3: false };
    this.state = { collapse4: false };
    this.state = { collapse5: false };
    this.state = { collapse6: false };
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  toggle2() {
    this.setState(state => ({ collapse2: !state.collapse2 }));
  }
  toggle3() {
    this.setState(state => ({ collapse3: !state.collapse3 }));
  }
  toggle4() {
    this.setState(state => ({ collapse4: !state.collapse4 }));
  }
  toggle5() {
    this.setState(state => ({ collapse5: !state.collapse5 }));
  }
  toggle6() {
    this.setState(state => ({ collapse6: !state.collapse6 }));
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <CareerWrapper>
        <Helmet>
          <meta
            name="description"
            content="Work where you’re encouraged to explore your passions, where your skills are nurtured and respected. Introduce with leading-edge technologies on absolutely the coolest undertakings you&#39;ll be able to envision. What&#39;s more, get the tools you have to continue learning and developing, so you remain consistently on top of things while making a difference in the world."
          />
          <link
            rel="canonical"
            href="https://synectiks.com/area-expertise/index.html"
          />
        </Helmet>
        {/* <SEO title='What We Do' /> */}
        <div className="bg-lightgrey disMob">
          <div className="container-fluid p-0">
            <div className="w-100  text-black ptext">
              <div className="my-md-5">
                <div>
                  <div>
                    {/* toggle 6 */}
                    <Button
                      color="primary"
                      id="headingOne"
                      className="career-btn text-left text-uppercase"
                      onClick={this.toggle6}
                      style={{ marginBottom: '1rem' }}
                    >
                      Transformation
                    </Button>
                    <Collapse isOpen={this.state.collapse6} className="pb-3">
                      <Card>
                        <CardBody className="px-4">
                          <div className="row">
                            <div className="col-sm-12">
                              <h5 className="text-left ft">
                                Transformation Services{' '}
                              </h5>
                              <p className="py-1 py-md-3">
                                Synectiks Transformation services elevate your
                                business by optimizing every aspect of your
                                operations for the public cloud or Hybrid cloud
                                – your people, infrastructure, applications and
                                data.
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12  p-1">
                              <div className="py-1">
                                <div className="border-bottom my-n1 my-md-n0 text-center">
                                  <a
                                    href="/infrastructure/index.html"
                                    className="text-center heading-h3"
                                  >
                                    Infrastructure Transformation
                                  </a>
                                  <p className="ptext  f-14 px-1 px-md-4 text-left">
                                    Ensure every bit of your hardware
                                    environment is directly supporting your
                                    business objectives. The transition from a
                                    hardware-centric to a software-defined
                                    organization makes a huge difference in
                                    CapEx and OpEx.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12  p-1">
                              <div className="py-1">
                                <div className="border-bottom my-n1 my-md-n0 text-center">
                                  <a
                                    href="/application-transformation/index.html"
                                    className="text-center heading-h3"
                                  >
                                    Application Transformation
                                  </a>
                                  <p className="ptext  f-14 px-1 px-md-4 text-left">
                                    Applications that power your enterprise are
                                    key to generating a strong competitive
                                    advantage. Bring innovation, agility and
                                    outstanding customer experience through
                                    modern architectures and a cloud-first
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-12  p-1">
                              <div className="py-1">
                                <div className="border-bottom my-n1 my-md-n0 text-center">
                                  <a
                                    href="/devops-transformation/index.html"
                                    className="text-center heading-h3"
                                  >
                                    DevOps Transformation
                                  </a>
                                  <p className="ptext  f-14 px-1 px-md-4 text-left">
                                    Adopting a DevOps culture starts by
                                    transforming your people, technology and
                                    processes. Accelerate your DevOps adaption
                                    by using our open Automation platform and
                                    skilled resources.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                </div>
                <div>
                  <div>
                    {/* toggle 5 */}
                    <Button
                      color="primary"
                      id="headingTwo"
                      className="career-btn text-left text-uppercase"
                      onClick={this.toggle5}
                      style={{ marginBottom: '1rem' }}
                    >
                      Open&nbsp;Platfrom
                    </Button>
                    <Collapse isOpen={this.state.collapse5} className="pb-3">
                      <Card>
                        <CardBody>
                          <div className="p-2 p-md-4">
                            <img
                              src={PoweredBySynectiks}
                              width="100%"
                              alt="Xformation"
                              className="w-100"
                            />
                          </div>
                          <div className="px-4">
                            <h2>What is Xformation?</h2>
                            <p>
                              It's a platform that provides peace of mind,
                              governance, efficiency and control of multi-cloud
                              environments. Xformation helps you to migrate and
                              modernize your legacy business, take advantage of
                              cloud and microservice architecture and thereby
                              accelerate your transformation journey @50% time &
                              cost.  <br />{' '}
                              <span className="h5 b">
                                Its primary goals are:
                              </span>
                            </p>
                            <ul className="showul">
                              <li>Accelerated Cloud Adoption</li>
                              <li>Multi-cloud container orchestration</li>
                              <li>App-centric Optimization </li>
                              <li>
                                Continuous Delivery / Compliance / Automation.
                              </li>
                              <li>
                                {' '}
                                Automated Performance Monitoring and Cost
                                Control
                              </li>
                            </ul>
                          </div>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                </div>
                <div>
                  <div>
                    {/* toggle 4 */}
                    <Button
                      color="primary"
                      id="headingThree"
                      className="career-btn text-left text-uppercase"
                      onClick={this.toggle4}
                      style={{ marginBottom: '1rem' }}
                    >
                      Solutions
                    </Button>
                    <Collapse isOpen={this.state.collapse4} className="pb-3">
                      <Card>
                        <CardBody>
                          <HomeTabs />
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                </div>
                <div>
                  {/* toggle 3 */}
                  <div>
                    <Button
                      id="headingFour"
                      color="primary"
                      className="career-btn text-left text-uppercase"
                      onClick={this.toggle3}
                      style={{ marginBottom: '1rem' }}
                    >
                      Cloud Services
                    </Button>
                    <Collapse isOpen={this.state.collapse3} className="pb-3">
                      <Card className="">
                        <Row className="px-4">
                          <p>
                            Capture true value of cloud with highly secured,
                            scalable, and customizable SYNECTIKS Hosted Cloud
                            Solutions at an affordable pricing. Modern,
                            Innovative could solutions for wide range of Server
                            workloads, Cloud-Hosted Desktops/Workspaces, and
                            Containers along with highly Secure Backup &
                            Disaster Recovery options meeting SOC2 & HIPPA
                            compliance standards.
                          </p>
                        </Row>
                        <Row>
                          <Col sm="12" className="p-1">
                            <div className="py-1 py-md-3 h-100">
                              <div className="border-right text-center">
                                <a
                                  href="/business-cyber-sub-landing/index.html"
                                  className="text-center heading-h3 h6"
                                >
                                  Business Continuity & Cyber Security Services
                                </a>
                                <p className="f-14 px-4 text-left">
                                  Build Business Resiliency with modern
                                  Synectiks-Business Continuity solutions.
                                  Synectiks -Protect Cloud changes the game by
                                  integrating Data protection with high
                                  security. This synergy eliminates the
                                  complexity and makes security a center point
                                  of your solutions, keeping your Business
                                  protected and within you budget with no
                                  compromise on quality.
                                </p>
                              </div>
                            </div>
                          </Col>
                          <Col sm="12" className="p-1">
                            <div className="py-3 h-100">
                              <div className="border-right text-center">
                                <a
                                  href="/secure-custom-hosted-infrastructure/index.html"
                                  className="text-center heading-h3 h6"
                                >
                                  Secure & Custom Hosted Infrastructure Services
                                </a>
                                <p className="f-14 px-4 text-left">
                                  Synectiks Secure Cloud Hosted Services
                                  supports a wide variety of workloads &
                                  Disaster Recovery with a high degree of
                                  control, security, and simplicity. Supports
                                  your mission-critical applications and
                                  workloads with instant and scalable
                                  infrastructure meeting business compliance
                                  standards.
                                </p>
                              </div>
                            </div>
                          </Col>
                          {/* <Col sm='12' className='p-1'>
														<div className='py-1 py-md-3 h-100'>
															<div className='border-right text-center'>
																<a
																	href='/digital-workspace/index.html'
																	className='text-center heading-h3 h6'>
																	Cloud-Hosted Virtual Desktop <br />Services
																</a>
																<p className='f-14 px-1 px-md-4 text-left'>
																	Synectiks Cloud-Hosted Virtual Desktop Service is a
																	modern platform for secure delivery of virtual
																	desktops and apps. Our best-in-class virtualization
																	technologies enables scalability, uptime at an
																	affordable price. Powered by VMware Blast Extreme
																	protocol, delivers an immersive, feature-rich user
																	experience for end users across devices, locations,
																	media and network connections.
																	<br />
																	<br />
																</p>
															</div>
														</div>
													</Col> */}
                          <Col sm="12" className="p-1">
                            <div className="py-1 py-md-3 h-100">
                              <div className="border-right text-center">
                                <a
                                  href="/aws-managed-services/index.html"
                                  className="text-center heading-h3 h6"
                                >
                                  AWS managed Services
                                </a>
                                <p className="f-14 px-4 text-left">
                                  SYNECTIKS aws Managed Services enables
                                  companies to accelerate the adoption of the
                                  public cloud, lower operating costs, and
                                  mitigate security and compliance risks in a
                                  cost-effective monthly consumption model. As
                                  AWS Consulting Services Partner, our experts
                                  ensure that your workloads meet the
                                  requirements of the AWS Well-Architected
                                  Framework for efficient migration and
                                  operation in the AWS secured landing zones.
                                  <br />
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Collapse>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
            <div className="container">
              <div className="d-flex justify-content-around align-items-center mt-5 flex-col" />
            </div>
          </div>
        </div>

        {/* <script
//           dangerouslySetInnerHTML={{
//             __html: `
//             var vv_base_id = 'q00IB13hyn';
// var vv_ext_id = '5d53ed9a';
// var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
// (function () {
// var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
//         `
//           }}
//         /> */}
      </CareerWrapper>
    );
  }
}

export default MobTabs;

const CareerWrapper = styled.div`
  /* .disMob {
		display: none !important;
	} */
   {
    #headingThree {
      background: var(--synectiksBlue);
      color: var(--synectiksWhite);
      border: var(--synectiksBlue);
    }
    #headingTwo {
      background: var(--synectiksRed);
      color: var(--synectiksWhite);
      border: var(--synectiksRed);
    }
    #headingOne {
      background: var(--synectiksOrange);
      color: var(--synectiksWhite);
      border: var(--synectiksOrange);
    }
    #headingFour {
      background: var(--synectiksGreen);
      color: var(--synectiksWhite);
      border: var(--synectiksGreen);
    }
    margin-bottom: -3rem !important;
    .ptext {
      text-align: left;
    }
    .career-btn {
      width: 100%;
    }

    /* padding: 1rem; */
  }
  @media (min-width: 576px) {
    .disMob {
      display: none !important;
    }
    margin-bottom: 2rem !important;
    /* padding: 2.5rem 4rem; */
    .ptext {
      text-align: left;
    }
    .career-btn {
      width: 25%;
    }
  }
`;
