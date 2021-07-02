import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import styled from 'styled-components';
// import syn from '../../images/secure-cyber.svg';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import SEO from '../../components/seo.js';
import syn from '../../images/BC and CS_Updated.svg';
const SecureBusiness = () => {
  return (
    <Layout>
      <SecureWrapper>
        <div className="text-justify">
          <BreadCrumbs
            title="Home"
            subtitle="Cloud Services"
            pageTitle="Business Continuity & Cyber Security"
          />
          <SEO title="Business Continuity & Cyber Security" />
          <h1>Business Continuity & Cyber Security</h1>
        </div>
        <div className="container-fluid mx-0">
          <div className="row pt-2">
            {/* <h2>Secure Hosted Cloud Infrastructure & Business Continuity Solutions</h2> */}
            <p>
              Build Business Resilience with modern Synectiks-Business
              Continuity solutions. Synectiks -Protect Cloud changes the game by
              integrating Data protection with high security. This synergy
              eliminates the complexity and makes security a center point of
              your solutions, keeping your Business protected and within your
              budget with no compromise on quality. With its full-stack
              anti-malware protection and comprehensive endpoint management,
              Synectiks -Protect Cloud combats advanced cyberattacks with a
              unique integration of protection technologies while simplifying
              daily IT operations, endpoint deployments, management, and
              reporting.
            </p>
          </div>
        </div>
        <div className="container-fluid my-n5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 py-4 px-0">
              <div className="excerpt mt-4 mt-md-0">
                <a href="/protect-cloud/index.html">Protect Cloud</a>
                <p>
                  Innovative and powerful web-based ALL-IN-ONE solution with
                  one-agent on any given Server/End-point device to serve all
                  Backup & Disaster Recovery needs along with basic necessary
                  features like Anti-Virus, Anti-Malware, Vulnerability
                  Assessment, Windows- Patch management, Remote Diagnostic
                  assistance, and URL-filtering.
                </p>
              </div>
              <div className="excerpt">
                <a href="/cloud-backup-service/index.html">
                  Backup as a Service
                </a>
                <p>
                  Reliable, Secure & Affordable Cloud Backup Solution with
                  AI-based Ransomware protection. Synectiks backup solutions
                  provide exceptional, customizable backup and storage
                  management for any system setup: physical servers, virtual
                  machines, PCs, business-critical applications, Databases and
                  more.
                </p>
              </div>
              <div className="excerpt">
                <a href="/cloud-disaster-recovery-service/index.html">
                  Disaster Recovery as a Service
                </a>
                <p>
                  Protection for on-premises and cloud workloads with a turn-key
                  disaster recovery solution. Protect your workloads when
                  disaster strikes, by instantly spinning up systems in our
                  Disaster Recovery Cloud. Adding this service ensures the data
                  is immediately available – and with Synectiks, it’s as easy as
                  flipping a switch. With an easy-to-use user interface, you can
                  effortlessly automate runbooks, testing, and failover to the
                  Disaster Recovery Cloud during a DR event.
                </p>
              </div>
            </div>
            <div className="col-md-6 py-4 px-0">
              <img src={syn} alt="" className="w-60" />
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
      </SecureWrapper>
    </Layout>
  );
};

export default SecureBusiness;

const SecureWrapper = styled.section`
  /* background-color: rgba(221, 121, 231, .7); */
  .w-60 {
    width: 100%;
  }
  padding: 2rem 1rem;
  h2 {
    font-weight: 400 !important;
    font-style: normal !important;
    font-size: 1.6rem !important;
    /* line-height: 44px !important; */
    text-align: left !important;
    letter-spacing: normal !important;
  }
  @media (min-width: 576px) {
    .w-60 {
      width: 60%;
    }
    h2 {
      font-weight: 400 !important;
      font-style: normal !important;
      font-size: 2.56rem !important;
      line-height: 44px !important;
      letter-spacing: normal !important;
    }
    padding: 2.5rem 4rem;
  }
`;
