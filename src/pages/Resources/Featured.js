import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import FS from '../../images/featured/FeDevOps-Strategies.png';
import FT from '../../images/featured/FeEnterprise-Transformation.png';
import FMP from '../../images/featured/FeMicroservice-Platform.png';
import FP from '../../images/featured/FeOpen-Platform.png';
import '../../components/layout.css';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';
import SEO from '../../components/seo.js';

export class Featured extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <FeaturedWrapper>
          <Helmet>
            <link
              rel="canonical"
              href="https://synectiks.com/featured/index.html"
            />
          </Helmet>
          <div className="bg-lightgrey">
            <SEO title="Featured" />
            <div>
              <BreadCrumbs
                title="Home"
                subtitle="Resources"
                pageTitle="Featured"
              />
              <h1 className="">Featured</h1>
            </div>

            <div className="">
              <div className="d-flex flex-column flex-md-row justify-content-around flex-fill  align-items-center flex-col">
                <div>
                  <div className="p-1 p-md-5">
                    <img
                      src={FS}
                      width="100%"
                      alt="Featured"
                      className="imgBx"
                    />
                    <div className="text-group align-self-center">
                      <h6 className="font-weight-bold pt-2">
                        Discover the business value of Synectiks Open Xformation
                        Platform and how it optimizes Enterprise DevOps
                        Strategies.{' '}
                      </h6>
                      <a
                        href="https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Enterprise-DevOps-Strategies.pdf"
                        target="_blank"
                        rel="noopener noreferrer dofollow"
                      >
                        Learn more <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="p-1 p-md-5">
                    <img
                      className="border-grey-2px imgBx"
                      src={FT}
                      width="100%"
                      alt="Synectiks open products"
                    />
                    <div className="text-group align-self-center ">
                      <h6 className="font-weight-bold pt-2">
                        Discover how Synectiks open products based service
                        delivery approach creating significant differences in
                        service sector.{' '}
                      </h6>
                      <a
                        href="https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Enterprise-Transformation.pdf"
                        target="_blank"
                        rel="noopener noreferrer dofollow"
                      >
                        Learn more <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="d-flex flex-column flex-md-row justify-content-around pt-2 flex-fill  align-items-center flex-col">
                  <div className="col-md-6">
                    <div className="p-1 p-md-5">
                      <img
                        src={FMP}
                        width="100%"
                        alt="microservices delivery
													partner"
                        className="imgBx"
                      />{' '}
                      <div className="text-group align-self-center">
                        <h6 className="font-weight-bold pt-2">
                          Why to choose Synectiks as your preferred
                          microservices delivery partner.
                        </h6>

                        <a
                          href="https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Microservice-Platform.pdf"
                          target="_blank"
                          rel="noopener noreferrer dofollow"
                        >
                          Learn more <i className="fa fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-1 p-md-5">
                      <img
                        src={FP}
                        width="100%"
                        alt="Enterprise-Transformation"
                        className="imgBx"
                      />{' '}
                      <div className="text-group align-self-center">
                        <h6 className="font-weight-bold pt-2">
                          Synectiks Xformation Platform accelerate any
                          transformation project @50% cost &amp; Time.
                        </h6>

                        <a
                          href="https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Open-Platform.pdf"
                          target="_blank"
                          rel="noopener noreferrer dofollow"
                        >
                          Learn more <i className="fa fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FeaturedWrapper>
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
  }
}
export default Featured;

const FeaturedWrapper = styled.div`
  padding: 2rem 1rem;
  .w-img {
    width: 100% !important;
  }
  @media (min-width: 576px) {
    padding: 2.5rem 4rem;
    .w-img {
      width: 100% !important;
    }
  }
`;
