import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Layout from '../../components/layout';
import career from '../../images/Synectiks Logo/Careers.jpg';
import '../../components/layout.css';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';

export class Careers extends React.Component {
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
      <Layout>
        <Helmet>
          <meta
            name="description"
            content="Work where you’re encouraged to explore your passions, where your skills are nurtured and respected. Introduce with leading-edge technologies on absolutely the coolest undertakings you&#39;ll be able to envision. What&#39;s more, get the tools you have to continue learning and developing, so you remain consistently on top of things while making a difference in the world."
          />
          <link
            rel="canonical"
            href="https://synectiks.com/careers/index.html"
          />
        </Helmet>
        <CareerWrapper>
          <SEO title="Careers" />
          <div className="bg-lightgrey">
            <div>
              {/* <img className='  text-center pb-2 ' src={career} width='100%' alt='Careers' /> */}
            </div>
            <div className="container-fluid p-0">
              <div className="">
                <BreadCrumbs
                  title="Home"
                  subtitle="Company"
                  pageTitle="Careers"
                />
                <h1>Careers</h1>
              </div>

              <div className="w-100  text-black ptext">
                <h5 className="ft">Changing the game takes talent - Yours!</h5>
                <p className="lineHeight-24 pb-3 ptext">
                  Work where you’re encouraged to explore your passions, where
                  your skills are nurtured and respected. Introduce with
                  leading-edge technologies on absolutely the coolest
                  undertakings you'll be able to envision. What's more, get the
                  tools you have to continue learning and developing, so you
                  remain consistently on top of things while making a difference
                  in the world.
                  <br /> What’s your passion?
                  <br />
                </p>
                <div className="col-lg-12 d-flex flex-col flex-column flex-md-row">
                  <div className="pt-3 col-sm-4 px-4">
                    <a className="navlink navfont noLine">
                      Data &amp; Analytics
                    </a>
                  </div>
                  <div className="pt-3 col-sm-4 px-4">
                    <a className="navlink navfont noLine">Design &amp; UX</a>
                  </div>
                  <div className="pt-3 col-sm-4 px-4">
                    <a className="navlink navfont noLine">
                      Engineering &amp; Technology
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 d-flex flex-col flex-column flex-md-row">
                  <div className="pt-3 col-sm-4 px-4">
                    <a className="navlink navfont noLine">Internships</a>
                  </div>
                  <div className="pt-3 col-sm-4 px-4">
                    <a className="navlink navfont noLine">
                      Sales &amp; Marketing
                    </a>
                  </div>
                  <div className="pt-3 col-sm-4 px-4">
                    <a className="navlink navfont noLine">
                      Software Development
                    </a>
                  </div>
                </div>
                <div className="my-md-5">
                  <p className="lineHeight-24 borderbtm-grey-1px my-md-3">
                    <h5 className="ft">Open positions in all locations</h5>
                  </p>

                  <div>
                    <div>
                      <Button
                        color="primary"
                        className="career-btn text-left"
                        onClick={this.toggle6}
                        style={{ marginBottom: '1rem' }}
                      >
                        Infrastructure&nbsp;Engineer
                      </Button>
                      <Collapse isOpen={this.state.collapse6} className="pb-3">
                        <Card>
                          <CardBody>
                            <p className="ptext">
                              <b>
                                Infrastructure Engineer
                                <br />
                                Master’s w/ 3 yrs exp.
                                <br />
                                Major: Electrical Engg, Comp Sci, Comp Engg or
                                equiv -
                              </b>
                              <br />
                              Princeton, NJ. Job entails working w/ & requires
                              exp including: EMC – VMAX, VMAX3; HDS – VSP, G
                              Series; NetApp; Tegile Storage, VMWare vSAN, Cloud
                              Storage - AWS S3, All Flash Storage, Cisco,
                              Cumulus, FortiGate, VMware, RedHat KVM, Acronis,
                              Linux, Solaris, Perl, UNIX Shell, Windows Batch,
                              OpenStack, symcli, SRDF, SnapView, Clone, Open
                              Replicator; HDS - Command Suite, HTSM, Volume
                              Migration Utility, Universal Volume Manager,
                              ServiceNow & JIRA Tools. Must have experience in
                              installing, configuring, admin & supporting VMware
                              Compute & Desktop Virtualization infrastructure.
                              Relocation & travel to unanticipated locations
                              within USA possible.
                              <br />
                              <b>Send resumes to </b>info@synectiks.com
                              <br />
                              <b>
                                Synectiks Inc., Attn: HR, 300 Alexander Park
                                Dr., Suite 215, Princeton, NJ 08540.
                              </b>
                            </p>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button
                        color="primary"
                        className="career-btn text-left"
                        onClick={this.toggle5}
                        style={{ marginBottom: '1rem' }}
                      >
                        Software&nbsp;Engineer
                      </Button>
                      <Collapse isOpen={this.state.collapse5} className="pb-3">
                        <Card>
                          <CardBody>
                            <p>
                              <b>What You'll Be Doing</b>
                            </p>
                            <p className="ptext">
                              As a Software Engineer, you will be a member of
                              one of our central assembly line teams such as a
                              component development and automation test team.
                              You will be part of the weekly product release
                              cycles and thereby ensure that features/plugins
                              development/bug fixing as quickly as possible for
                              our clients and that you are constantly improving
                              the quality of our products. You will have
                              aggressive daily and weekly targets to work
                              against and you can expect to receive daily and
                              weekly feedback about your performance. The
                              regular feedback is used to help you improve
                              immediately and to help you resolve blockers which
                              may be slowing down your performance.
                            </p>
                            <ul>
                              <p>
                                <b>Key Responsibilities</b>
                              </p>
                              <li>
                                Deliver consistently high-quality
                                components/plugins which has a high “First Time
                                Acceptance Rate” from the engineering
                                leadership.
                              </li>
                              <li>
                                Implement Framework and Libraries developed by
                                Architect.
                              </li>
                              <li>
                                Comply with engineering process playbooks.
                              </li>
                              <li>Design APIs and Build RESTful Services.</li>
                              <li>
                                Develop and maintain CI-CD pipeline for our
                                services to rapidly and safely deploy code and
                                configuration.
                              </li>
                              <li>
                                Ensuring that your output meets the teams
                                quality bars before being passed on to further
                                stages within the process.
                              </li>
                              <li>
                                Meeting your goals, which are set by your
                                manager, on a daily and weekly basis.
                              </li>
                              <li>
                                Escalating issues to your manager as soon as a
                                risk is identified or as soon as you are blocked
                                in your work.
                              </li>
                              <li>
                                Private/Public cloud
                                provisioning/troubleshooting.
                              </li>
                              <li>
                                Expertise and hands on experience on Linux/UNIX.
                              </li>
                              <li>
                                Develop comprehensive monitoring solutions to
                                provide full visibility to the different
                                platform components using tools and services
                                like Kubernetes, Prometheus, Grafana, ELK, and
                                other similar tools.
                              </li>
                              <li>
                                Integrate different components and develop new
                                services with a focus on open source to allow a
                                minimal friction developer interaction with the
                                platform and application services.
                              </li>
                              <li>
                                Experience creating automated tests as part of
                                the development lifecycle.
                              </li>
                              <li>
                                Full working knowledge of Git Version Control.
                              </li>
                              <li>
                                Keep up to date with the latest Software
                                Engineering trends.
                              </li>
                            </ul>
                            <ul>
                              <p>
                                <b>Candidate Requirements</b>
                              </p>
                              <li>
                                9+ years of hands-on software engineering
                                experience in the following: Some of the
                                technologies currently used within Engineering
                                include Java, Scala, Kotlin, Python, Javascript,
                                Typescript, React, Angular, SQL, Spring Boot,
                                ElasticSearch, Docker, NoSQL DBs (Cassandra,
                                Couchbase, MongoDB, DynamoDB), RDBMS (MS SQL,
                                MySQL, PostgreSQL, Oracle), HTML, CSS, and a
                                wide array of AWS services (Lambda, ECS, S3,
                                SQS, Kinesis, DynamoDB, Neptune, Poly, etc..).
                              </li>
                              <li>
                                5+ Years in hard core product development,
                                developed features and modules from scratch,
                                have contributed significantly in GitHub and
                                Open Source ecosystem.
                              </li>
                              <li>
                                Proficient leadership and analytical skills.
                              </li>
                              <li>
                                Ability/Passion to learn new languages and
                                technologies as needed.
                              </li>
                              <li>Demonstrate success as a problem solver.</li>
                              <li>Be a result oriented individual.</li>
                              <li>
                                Comfortable “working virtually” with teammates
                                and customers around the world.
                              </li>
                              <li>
                                Please share your GitHub or any open source
                                product contribution link, this is must to have.
                              </li>
                              <li>
                                Bachelor’s Degree in Engineering, Information
                                Systems, Decision Sciences, Mathematics,
                                Statistics or related field, or a combination of
                                education and work experience that provides the
                                necessary skills to perform the essential job
                                functions.
                              </li>
                            </ul>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button
                        color="primary"
                        className="career-btn text-left"
                        onClick={this.toggle4}
                        style={{ marginBottom: '1rem' }}
                      >
                        Infrastructure&nbsp;Engineer
                      </Button>
                      <Collapse isOpen={this.state.collapse4} className="pb-3">
                        <Card>
                          <CardBody>
                            <p className="ptext">
                              <b>
                                Infrastructure Engineer
                                <br />
                                Master's with 3 years experience or Bachelors
                                with 5 years experience.
                                <br />
                                Major: CS, Applied CS or equivalent.
                                <br /> Other suitable qualifications acceptable
                                -
                              </b>
                              <br />
                              Princeton, NJ. Job entails working with & requires
                              experience including: EMC, Hitachi, NetApp, AIX,
                              Linux, Windows, Solaris, Shell Scripting, Python,
                              NFS, CIFS, TCP/IP, emcopy, rsync, SnapMirror,
                              RoboCopy & Data ONTAP. Must have experience in
                              planning, designing & implementing cross-platform
                              NAS data migration projects. Relocation & travel
                              to unanticipated locations within USA possible.
                              <br />
                              <b>Send resumes to </b>info@synectiks.com
                              <br />
                              <b>
                                Synectiks Inc., Attn: HR, 300 Alexander Park
                                Dr., Suite 215, Princeton, NJ 08540.
                              </b>
                            </p>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button
                        color="primary"
                        className="career-btn text-left"
                        onClick={this.toggle}
                        style={{ marginBottom: '1rem' }}
                      >
                        Sr.&nbsp;Systems&nbsp;Administrator{' '}
                      </Button>
                      <Collapse isOpen={this.state.collapse} className="pb-3">
                        <Card>
                          <CardBody>
                            <p className="ptext">
                              <b>
                                Sr. Systems Administrator
                                <br />
                                Bachelor’s with 5 years experience.
                                <br />
                                Major: CS, Bus Admin or equivalent.
                                <br />
                                Other suitable qualifications acceptable –{' '}
                              </b>
                              <br />
                              In lieu of a four-year US degree, employer will
                              accept one additional year of relevant experience
                              and completion of three years of academic studies
                              towards a relevant Bachelor’s degree at an
                              accredited US college or university or its foreign
                              equivalent (AACRAO EDGE evaluation); Other
                              suitable qualifications acceptable – Princeton,
                              NJ. Job entails working with &amp; requires
                              experience including: KVM, RHEL, VMware, Windows
                              Server OS, Windows Scripting, Perl, Python, UNIX
                              Shell Scripting, Ruby, Puppet, Chef, Ansible,
                              MongoDB, MySQL, OpenStack, vCenter, Docker,
                              OpenShift, AWS and PowerCLI. Relocation and travel
                              to unanticipated locations within USA possible.
                              <br />
                              <b>Send resumes to</b> info@synectiks.com
                              <br />
                              <b>
                                Synectiks Inc., Attn: HR, 300 Alexander Park
                                Dr., Suite 215, Princeton, NJ 08540.
                              </b>
                            </p>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button
                        color="primary"
                        className="career-btn text-left"
                        onClick={this.toggle2}
                        style={{ marginBottom: '1rem' }}
                      >
                        Lead&nbsp;Software&nbsp;Architect
                      </Button>
                      <Collapse isOpen={this.state.collapse2} className="pb-3">
                        <Card>
                          <CardBody>
                            <p className="ptext">
                              <b>
                                Lead Software Architect
                                <br />
                                Master’s with 3 years experience.
                                <br />
                                Bachelor’s with 5 years experience.
                                <br />
                                Major: CS, Engg, Math or equivalent.
                                <br />
                                Other suitable qualifications acceptable –{' '}
                              </b>
                              <br />
                              Princeton, NJ. Job entails working with &amp;
                              requires experience including: OBIEE, OBIA, Data
                              Warehousing, BIAPPS, Discoverer, Business Objects,
                              DAC, Informatica, Pentaho Data integration,
                              Pentaho Business Analysis, Hyperion Essbase,
                              Applications, SQL, PL/SQL, BI Publisher, Java,
                              Windows, UNIX, Linux, HTML, Oracle, Postgres,
                              MySQL and Teradata, TOAD, SQL Developer and Siebel
                              Analytics. Must have experience in designing,
                              developing and implementing applications.
                              Relocation and travel to unanticipated locations
                              within USA possible.
                              <br />
                              <b>Send resumes to </b>info@synectiks.com
                              <br />
                              <b>
                                Synectiks Inc., Attn: HR, 300 Alexander Park
                                Dr., Suite 215, Princeton, NJ 08540.
                              </b>
                            </p>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button
                        color="primary"
                        className="career-btn text-left"
                        onClick={this.toggle3}
                        style={{ marginBottom: '1rem' }}
                      >
                        Infrastructure&nbsp;Engineer
                      </Button>
                      <Collapse isOpen={this.state.collapse3} className="pb-3">
                        <Card>
                          <CardBody>
                            <p className="ptext">
                              <b>
                                Infrastructure Engineer
                                <br />
                                Master’s with 3 years experience or Bachelor’s
                                with 5 years experience.
                                <br />
                                Major: CS, Engg, Math or equivalent.
                                <br />
                                Other suitable qualifications acceptable –{' '}
                              </b>
                              <br />
                              Princeton, NJ. Job entails working with &amp;
                              requires experience including: VMware ESXi, AIX,
                              OEL, RHEL, Windows Server OS, FC and IP networking
                              using Cisco/Brocade Switches and Directors,
                              Oracle, MySQL, Hitachi, EMC, NetApp, CCI Raid
                              Manager, SYMCLI, HUR, True Copy, NetApp Snap
                              Mirror, Snap Vault, SRDF, TimeFinder, EMC SRM,
                              UniSphere, VBlock, SANCopy, Performance Manager,
                              Storage Scope, RecoverPoint, WebLogic, JBoss,
                              Apache Tomcat, Windows Batch, Perl, Python, UNIX
                              Shell Scripting, Ruby, OpenQRM and OpenStack.
                              Relocation and travel to unanticipated locations
                              within USA possible.
                              <br />
                              <b>Send resumes to </b>info@synectiks.com
                              <br />
                              <b>
                                Synectiks Inc., Attn: HR, 300 Alexander Park
                                Dr., Suite 215, Princeton, NJ 08540.
                              </b>
                            </p>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>
                {/*  */}
                <h5 className="ft">Life at SYNECTIKS!</h5>
                <p className="lineHeight-24 pb-3 ptext">
                  <i>Be Happy, Healthy and Inspired!</i>
                  <br />
                  To start with, We provide a competitive salary and
                  employer-paid health benefits. We offer a flexible vacation
                  plan, paid maternal and parental leave, tuition assistance,
                  learning development opportunities, sports events, team
                  lunches, pot-lucks, team outings and annual office
                  celebrations – all for you to connect, refresh and thrive.
                  <br />{' '}
                </p>
                <h5 className="ft">SYNECTIKS for All!</h5>
                <p className="lineHeight-24 ptext">
                  SYNECTIKS is proud to be an equal opportunity workplace. We
                  take great care to evaluate all employees and job applicants
                  equally, based on competence and qualifications. We will not
                  discriminate by age, race, gender, color, religion, national
                  origin, sexual orientation, veteran status, marital status,
                  disability status, or any other protected category. For
                  assistance or reasonable accommodation during the interview
                  process, please contact us by sending an e-mail to &nbsp;
                  <a
                    className="navlink navfont noLine"
                    href="mailto:info@synectiks.com"
                  >
                    hr@synectiks.com
                  </a>
                  <br />
                </p>
              </div>
              <div className="container">
                <div className="d-flex justify-content-around align-items-center mt-5 flex-col" />
              </div>
            </div>
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
        </CareerWrapper>
      </Layout>
    );
  }
}

export default Careers;

const CareerWrapper = styled.div`
   {
    .ptext {
      text-align: left;
    }
    .career-btn {
      width: 100%;
    }
    padding: 1rem;
  }
  @media (min-width: 576px) {
    padding: 2.5rem 4rem;
    .ptext {
      text-align: left;
    }
    .career-btn {
      width: 25%;
    }
  }
`;
