import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout.js';
import team from '../../images/Hybrid/AboutUs.jpg';
import styled from 'styled-components';
import EM from '../../images/Hybrid/Engagement Model.png';
import LTR from '../../images/Hybrid/Long Term Retention.png';
import WO from '../../images/Hybrid/Optimization Service.png';
import DE from '../../images/Hybrid/DemoEnvironment.png';
import EA from '../../images/Hybrid/Extreme Automation.png';
import PCP from '../../images/Hybrid/Public Cloud Partnership.png';
import SCP from '../../images/Hybrid/Single Control plane.png';
import CS from '../../images/Hybrid/Compliance&Security.png';
import TM from '../../images/Hybrid/Time & Money.png';
import EE from '../../images/Hybrid/E2E Solution.png';
import EX from '../../images/Hybrid/Experience.png';
import EXP from '../../images/Hybrid/Expertise.png';
import SEO from '.././../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import GetInTouch from '../../components/Home/Getintouch.js';
import '../../components/fonts.css';

const AboutUs = ({ location }) => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Synectiks builds open source software that helps enterprises to migrate and modernize their business rapidly at optimal economy. Customers use our migration and management software platform, Xformation to migrate and modernize their business and create affordable and powerful custom solutions that bring simplicity and absolute confidence to a data-driven decision making. Committed to codifying our know-how, once we solve a problem, we automate the solution. When running our products and solutions in mission-critical environments, our community knows that they can turn to us for world-class support. Customers avoid vendor lock-in and save (much) money! Our open product driven solution approach rapidly delivers high quality solutions and reduce at least 50% time & money compare to typical managed services delivery model."
        />
        <link
          rel="canonical"
          href="https://www.synectiks.com/about-us/index.html"
        />
      </Helmet>
      <AboutWrapper>
        <SEO title="About Synectiks" />
        <div className="">
          <BreadCrumbs
            title="Home"
            subtitle="What We Do"
            pageTitle="About Us"
          />
          <h1>Mission Statement!</h1>
        </div>
        <div className="">
          <p className="ptext">
            Since <span className="fweit">2006</span> as an Open Product based
            Cloud Solution provider, we help enterprises take advantage of
            public & private cloud and its infinite resources to migrate and
            modernize their business so that they outperform their peers by
            becoming truly disruptive.
          </p>
        </div>
        <div className="pt-md-4">
          <h5 className="ft">We’ve always done things differently</h5>
          <p className="ptext">
            Synectiks builds open source software that helps enterprises to
            migrate and modernize their business rapidly at an optimal economy.
            Customers use our migration and management software platform,
            Xformation to migrate and modernize their business and create
            affordable and powerful custom solutions that bring simplicity and
            absolute confidence to data-driven decision making. Committed to
            codifying our know-how, once we solve a problem, we automate the
            solution. When running our products and solutions in
            mission-critical environments, our community knows that they can
            turn to us for world-class support. Customers avoid vendor lock-in
            and save (much) money! Our open product driven solution approach
            rapidly delivers high quality solutions and reduce at least 50% time
            & money compare to typical managed services delivery model.{' '}
          </p>
        </div>
        <div className="pt-md-4">
          <h5 className="py-2 py-md-2 ft">Our Passionate Global Team</h5>
          <img
            src={team}
            alt="Synectiks Team"
            className="my-2 my-md-4 W-100 box-shadow"
            width="100%"
          />
          <p className="mt-md-3">
            Our passionate global team is a real good mix of Highly Experienced
            product developers who has been part of many big success and young
            fully stack developers fully trained to deliver in a DevOps cultural
            environment. Our deep expertise both on Application and
            Infrastructure helps us to deliver cloud native solutions in an
            optimal manner and manage its lifecycle in a DevSecOps way. We have
            learned to deliver software in a predictable and deterministic way.
          </p>
        </div>
        <div className="container-fluid">
          <div className="hybmt mt-2 mt-md-4">
            <h5 className="ft">
              Top 12 reasons to select us as your cloud migration and
              modernization partner!{' '}
            </h5>
            <div className="my-4">
              <div className="row">
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img src={EX} alt="Experience" className="tw m-0" />
                    <h4 className="my-2 my-md-3">Experience</h4>
                  </div>
                  <p className="text-left">
                    {' '}
                    10+ Large Scale Hybrid Cloud Transformation
                  </p>
                </div>
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img src={EXP} alt="Expertise" className="tw m-0" />
                    <h4 className="my-2 my-md-4">Expertise</h4>
                  </div>
                  <p className="text-left">
                    Experience Teams with a proven track record of CloudOps
                    delivery enabled with DevSecOps Capabilities
                  </p>
                </div>
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img src={TM} alt="Time and Money" className="tw m-0" />
                    <h4 className="my-2 my-md-3">Time & Money</h4>
                  </div>
                  <p className="text-left">
                    Our open Product Driven Delivery Model allows customers to
                    quickly build, deliver and orchestrate cross cloud services
                    @50% time & cost.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img src={EE} alt="E2E Solutions" className="tw m-0" />
                    <h4 className="my-4">E2E Solution</h4>
                  </div>
                  <p className="text-left">
                    Single point of contact for Application Migration,
                    Transformation and Integration to cloud-native Apps
                    services.
                  </p>
                </div>
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      src={SCP}
                      alt="Single Control plane"
                      className="tw m-0"
                    />
                    <h4 className="my-3">Single Control plane</h4>
                  </div>
                  <p className="text-left">
                    Xformation is a single interface and platform to manage all
                    your workloads distributed across multiple clouds and
                    boundaries within a single control plane.
                  </p>
                </div>
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      src={CS}
                      alt="Compliance & Security"
                      className="tw m-0"
                    />
                    <h4 className="my-4">Compliance & Security</h4>
                  </div>
                  <p className="text-left">
                    Our compliance and security assessment tools makes sure your
                    hybrid cloud journey meet your business compliance.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img src={EA} alt="Extreme Automation" className="tw m-0" />
                    <h4 className="my-3">Extreme Automation</h4>
                  </div>
                  <p className="text-left">
                    Use our existing automation capabilities to automate
                    infrastructure, operations, security in the hybrid IT
                    environment.
                  </p>
                </div>
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      src={PCP}
                      alt="Public Cloud Partnership"
                      className="tw m-0"
                    />
                    <h4 className="my-4">Public Cloud Partnership</h4>
                  </div>
                  <p className="text-left">
                    Our advanced partnership with major public cloud providers
                    help you to get support at every stage.
                  </p>
                </div>
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex text-center px-0 px-md-5">
                    <div>
                      <div className="d-flex align-items-center flex-column">
                        <img
                          src={DE}
                          alt="Demo Environment"
                          className="tw m-0"
                        />
                        <h4 className="my-3">Demo Environment</h4>
                      </div>
                      <p className="text-left">
                        Avail the opportunity to quickly create demo hybrid
                        cloud setup in our existing hybrid IT environment and
                        testify your key business use cases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="row">
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      src={WO}
                      alt="Optimization Service"
                      className="tw m-0"
                    />
                    <h4 className="my-4">Optimization Service</h4>
                  </div>
                  <p className="text-left">
                    We do optimal resource pooling from multiple clouds.
                  </p>
                </div>
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img src={EM} alt="Engagement Model" className="tw m-0" />
                    <h4 className="my-3">Engagement Model</h4>
                  </div>
                  <p className="text-left">
                    Our every engagement focused on empowerment – not dependency
                  </p>
                </div>
                <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      src={LTR}
                      alt="Long Term Retention"
                      className="tw m-0"
                    />
                    <h4 className="my-4">Long Term Retention</h4>
                  </div>
                  <p className="text-left">100% Customer Retention Rate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <GetInTouch />
        </div>
      </AboutWrapper>
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
export default AboutUs;

const AboutWrapper = styled.div`
   {
    .fweit {
      font-weight: 600;
    }
    .ptext {
      text-align: left;
    }
    padding: 2rem 1rem;
    .hybmt {
      h3 {
        font-size: 1.1rem;
      }
    }
    h3 {
      text-align: center;
    }
    blockquote {
      width: 100% !important;
      margin: 0;
    }
  }
  @media screen and (min-width: 576px) {
    .hybmt {
      h3 {
        font-size: 1.5rem;
      }
    }
    .ptext {
      text-align: justify;
    }
    padding: 2.5rem 4rem;

    .blockquote-custom {
      position: relative;
      font-size: 1.1rem;
    }

    .blockquote-custom-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -25px;
      left: 50px;
    }
  }
`;
