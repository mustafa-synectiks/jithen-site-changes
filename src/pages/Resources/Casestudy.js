import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import SoftwareMigration from '../../images/case/CS_Software_Migration.jpg';
import RealtimeMonitoring from '../../images/case/CS_Realtime_Monitoring.jpg';
import SoftwareDefinedTransformation from '../../images/case/CS_SoftwareDefinedTransformation.jpg';
import NetworkDesign from '../../images/case/CS_NetworkDesign.jpg';
import StorageTier from '../../images/case/CS_StorageTier.jpg';
import DisasterRecovery from '../../images/case/CS_DisasterRecovery.jpg';
import SEO from '../../components/seo.js';

const Casestudy = () => {
  return (
    <Layout>
      <SEO title="Case Studies" />
      <div className="bg-lightgrey container">
        <div className="pt-5">
          <div className="text-center w-100 pb-3">
            <h1 className="text-center bg-logoblue text-white">
              Success Stories
            </h1>
          </div>

          <div className="d-flex justify-content-around pt-1 flex-fill mt-3 align-items-center flex-col">
            <a
              href="https://synectiks.com/software-defined/index.html"
              className="noLine"
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={SoftwareDefinedTransformation}
                      width="100%"
                      alt="Software Defined Transformation"
                    />{' '}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold pt-2 text-black">
                      Software Defined Transformation{' '}
                    </h4>
                    <p className="text-black">
                      Moving to AWS cloud with Data Center retirement for Motor
                      Industry.
                    </p>{' '}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://synectiks.com/realtime/index.html"
              className="noLine"
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={RealtimeMonitoring}
                      width="100%"
                      alt="Realtime Monitoring"
                    />{' '}
                  </div>
                  <div className="text-group p-3 align-self-center ">
                    <h4 className="font-weight-bold pt-2 text-black">
                      Realtime Monitoring{' '}
                    </h4>
                    <p className="text-black">
                      Highly Scalable extremely customizable realtime monitoring
                      platform for a large telco.
                    </p>{' '}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://synectiks.com/storage-migration/index.html"
              className="noLine"
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={SoftwareMigration}
                      width="100%"
                      alt="Software Migration"
                    />{' '}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold pt-2 text-black">
                      Storage Migration{' '}
                    </h4>
                    <p className="text-black">
                      Zero downtime, Zero Fault Petabytes storage migration of
                      Largest Financial Sector.
                    </p>{' '}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div
            className="d-flex justify-content-around pt-2 flex-fill mt-3 pb-3 align-items-center flex-col"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <a
              href="https://synectiks.com/network-design/index.html"
              className="noLine"
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={NetworkDesign}
                      width="100%"
                      alt="Network Design"
                    />{' '}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Network Design{' '}
                    </h4>
                    <p className="text-black">
                      Complete Network Backbone Design with highest security for
                      retail.
                    </p>{' '}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://synectiks.com/storagetier/index.html"
              className="noLine"
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src={StorageTier} width="100%" alt="Storage Tier" />{' '}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Storage Tier{' '}
                    </h4>
                    <p className="text-black">
                      Moving Bigdata Workloads to aggregated platform for a
                      large telco.
                    </p>{' '}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://synectiks.com/disaster-recovery/index.html"
              className="noLine"
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={DisasterRecovery}
                      width="100%"
                      alt="Disaster Recovery"
                    />{' '}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Disaster Recovery{' '}
                    </h4>
                    <p className="text-black">
                      Lightweight disaster recovery platform for Indian Defense.
                    </p>{' '}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
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
    </Layout>
  );
};

export default Casestudy;
