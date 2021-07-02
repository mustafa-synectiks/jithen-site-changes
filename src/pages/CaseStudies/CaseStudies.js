import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
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
// const getImages = graphql`
// 	query Images {
// 		fluid: file(relativePath: { eq: "CS_SoftwareDefinedTransformation.jpg" }) {
// 			childImageSharp {
// 				fluid {
// 					...GatsbyImageSharpFluid_tracedSVG
// 				}
// 			}
// 		}
// 	}
// `;

const CaseStudies = () => {
  // const data = useStaticQuery(getImages);
  return (
    <Layout>
      <CaseStudiesWrapper>
        {/* <Helmet>
		<link rel='canonical' href='https://synectiks.com/casestudy/index.html'/>
		<Helmet/> */}
        <SEO title="Case Studies" />
        <div className="text-justify">
          <BreadCrumbs
            title="Home"
            subtitle="Resources"
            pageTitle="Case Studies"
          />
          <h1>Case Studies ok </h1>
        </div>
        <div className="container-fluid mx-auto px-3 py-2 px-md-5 py-md-4">
          <div className="row">
            <div className="content">
              <div className="d-flex flex-column flex-md-row justify-content-center">
                <div className="w-450 box-shadow ">
                  <div className="text-group align-self-center p-2 bgWhite">
                    <h3 className="">Software Defined Transformation</h3>
                    <p className="pr-5">
                      AWS Cloud migration for a large motor industry.
                    </p>{' '}
                    <a
                      href="https://synectiks.com/software-defined/index.html"
                      className="noLine fw300"
                    >
                      Read More <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>

                <div className="w-450">
                  <div className="box-shadow">
                    <img src={RM} alt="Realtime Monitoring" />
                    <div className="text-group align-self-center p-2 bgWhite">
                      <h3 className="">Realtime Monitoring</h3>
                      <p className="pr-2 pr-md-5">
                        Highly Scalable extremely customizable realtime
                        monitoring platform.
                      </p>
                      <a
                        href="https://synectiks.com/realtime/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-450">
                  <div className="box-shadow">
                    <img src={SM} alt="Storage Migration" />{' '}
                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="">Storage Migration</h3>
                      <p className="pr-5">
                        Petabytes of storage migration for a large financial
                        company with zero down.
                      </p>{' '}
                      <a
                        href="https://synectiks.com/storage-migration/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-center py-5">
                <div className="w-450">
                  <div className="box-shadow">
                    <img src={ND} alt="Network Design" />{' '}
                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="">Network Design</h3>
                      <p className="pr-5">
                        Complete network Backbone design with highest security
                        for retail.
                      </p>
                      <a
                        href="https://synectiks.com/network-design/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-450">
                  <div className="box-shadow">
                    <img src={ST} alt="Storage Tier" className="h46" />

                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="">Storage Tier</h3>
                      <p className="pr-5">
                        Moving Bigdata workloads to aggregated platform for a
                        large telco.
                      </p>{' '}
                      <a
                        href="https://synectiks.com/storagetier/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-450">
                  <div className="box-shadow">
                    <img src={DR} alt="Disaster Recovery" />
                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="">Disaster Recovery</h3>
                      <p className="pr-5">
                        Lightweight disaster recovery platform for indian
                        Defense.
                        <br />
                      </p>
                      <a
                        href="https://synectiks.com/disaster-recovery/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CaseStudiesWrapper>
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
export default CaseStudies;

const CaseStudiesWrapper = styled.div`
   {
    padding: 1rem;
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
    }
    .box-shadow {
      box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.4);
    }
  }
  @media screen and (min-width: 576px) {
    padding: 3rem 4rem;
    .w-450 {
      width: 400px;
      padding: 0 2rem;
    }
  }
`;
