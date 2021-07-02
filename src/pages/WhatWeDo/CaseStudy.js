import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import SM from '../../images/case/CS_Software_Migration.jpg';
import RM from '../../images/case/CS_Realtime_Monitoring.jpg';
import SDFT from '../../images/case/CS_SoftwareDefinedTransformation.jpg';
import ND from '../../images/case/CS_NetworkDesign.jpg';
import ST from '../../images/case/CS_StorageTier.jpg';
import DR from '../../images/case/CS_DisasterRecovery.jpg';
import Layout from '../../components/layout.js';
import Img from 'gatsby-image';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const CaseStudy = () => {
  return (
    <Layout>
      <SEO title="Case Studies" />
      <CaseStudyWrapper>
        <Helmet>
          <link
            rel="canonical"
            href="https://synectiks.com/casestudy/index.html"
          />
        </Helmet>
        <div className="text-justify">
          <BreadCrumbs
            title="Home"
            subtitle="Resources"
            pageTitle="Case Studies"
          />
          <h1 className="">Case Studies</h1>
        </div>
        <div className="content">
          <div className="d-flex flex-column flex-md-row justify-content-between mb-2 mb-md-5">
            <div className="w-450 box-shadow">
              <a href="/software-defined/index.html" className="noLine fw300">
                <div className="">
                  <img src={SDFT} alt="Software Defined" />
                  <div className="text-group align-self-center p-2 bgWhite">
                    <h3 className="textColor">
                      Software Defined Transformation
                    </h3>
                    <p className="pr-2 pr-md- textColor">
                      AWS Cloud migration for a large motor industry.
                    </p>
                    <span className="noLine fw300">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-450 box-shadow">
              <a href="/realtime/index.html" className="noLine fw300">
                <div className="">
                  <img src={RM} alt="Realtime" />
                  <div className="text-group align-self-center p-2 bgWhite">
                    <h3 className="textColor">Realtime Monitoring</h3>
                    <p className="pr-2 pr-md-5 textColor">
                      Highly Scalable extremely customizable realtime monitoring
                      platform.
                    </p>
                    <span className="noLine fw300">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-450 box-shadow">
              <a href="/storage-migration/index.html" className="noLine fw300">
                <div className="">
                  <img src={SM} alt="Storage Migration" />{' '}
                  <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                    <h3 className="textColor">Storage Migration</h3>
                    <p className="pr-5 textColor">
                      Petabytes of storage migration for a large financial
                      company with zero down.
                    </p>{' '}
                    <span className="noLine fw300">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between my-2 my-md-5">
            <a href="/network-design/index.html" className="noLine fw300">
              <div className="w-450 box-shadow">
                <div className="">
                  <img src={ND} alt="Network Design" />{' '}
                  <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                    <h3 className="textColor">Network Design</h3>
                    <p className="pr-5 textColor">
                      Complete network Backbone design with highest security for
                      retail.
                    </p>
                    <span className="noLine fw300">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/storage-tier/index.html" className="noLine fw300">
              <div className="w-450 box-shadow">
                <div className="">
                  <img src={ST} alt="Storage Tier" className="h46" />

                  <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                    <h3 className="textColor">Storage Tier</h3>
                    <p className="pr-5 textColor">
                      Moving Bigdata workloads to aggregated platform for a
                      large telco.
                    </p>
                    <span className="noLine fw300">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/disaster-recovery/index.html" className="noLine fw300">
              <div className="w-450 box-shadow">
                <div className="">
                  <img src={DR} alt="Disaster Recovery" />
                  <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                    <h3 className="textColor">Disaster Recovery</h3>
                    <p className="pr-5 textColor">
                      Lightweight disaster recovery platform for indian Defense.
                      {/* <br />
											<br /> */}
                    </p>
                    <span className="noLine fw300">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </CaseStudyWrapper>
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
export default CaseStudy;

const CaseStudyWrapper = styled.div`
   {
    padding: 2rem 1rem;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      text-align: left;
    }
    .w-450 {
      width: 100%;
      overflow: hidden !important;
    }
    .fw300 {
      overflow: hidden !important;
    }
    .box-shadow {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
      overflow: hidden !important;
      margin: 1rem 0rem;
    }

    .box-shadow img {
      -webkit-transition: 0.4s ease;
      transition: 0.4s ease;
      overflow: hidden !important;
    }
    .fw300:hover .box-shadow img {
      -webkit-transform: scale(1.04);
      transform: scale(1.04);
      overflow: hidden !important;
    }
  }
  @media screen and (min-width: 576px) {
    padding: 2.5rem 4rem;
    .w-450 {
      width: 400px;
      padding: 0 0rem;
    }
  }
`;
