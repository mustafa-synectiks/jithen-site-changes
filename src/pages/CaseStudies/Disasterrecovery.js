import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import ds from '../../images/case/DisasterRecovery_Subpage2.jpg';
import SEO from '../../components/seo.js';
import CaseBreadCrumbs from '../../components/Home/CasestudiesBreads.js';
import styled from 'styled-components';
const Disasterrecovery = () => {
  return (
    <Layout>
      <DisasterWrapper>
        <Helmet>
          <link
            rel="canonical"
            href="https://www.synectiks.com/disaster-recovery/index.html"
          />
        </Helmet>

        <SEO title="Disaster Recovery" />
        <div className="">
          <CaseBreadCrumbs
            title="Home"
            casetitle="Resources"
            subtitle="Case Studies"
            pageTitle="Disaster Recovery"
          />
          <h1>Disaster Recovery</h1>
          <div className="softwareDefined_image">
            <p className="blueBorder pl-2 pl-md-5 py-1 py-3">
              As we all know, a potential business disorder will directly impact
              CAPEX and OPEX of the business. When a proper disaster recovery
              plan is set, any business can continue to run its critical
              operations without thwarting their customer expectations. That is
              exactly what we offered Indian defense, a solution that can manage
              and provide necessary outcomes in case of any DR issues.
            </p>
            <img
              src={ds}
              alt="Disaster Recovery"
              className="w-100 my-3 my-md-0"
            />
          </div>
          <div className="softwareDefined_div d-flex flex-column flex-md-row justify-content-around py-1 py-md-5">
            <div className="column w-100 px-1 px-5 orangeBorder">
              <h5 className="ft"> Sector - Defence</h5>
              <p>Automobiles</p>
            </div>
            <div className="column w-100 px-1 px-5 blueBorder">
              <h5 className="ft"> Business Objective</h5>
              <p>
                Transformation towards becoming hardware / Os / Vender /
                Operation agnostic. Make everything software defined.
              </p>
            </div>
            <div className="column w-100 px-1 px-5 redBorder">
              <h5 className="ft"> Technologies</h5>
              <p> AWS, Infrastructure as a code, microservices, DevOps</p>
            </div>
          </div>
          <div>
            <h5 className="ft"> Overview</h5>
            <p>
              As we all know, a potential business disorder will directly impact
              CAPEX and OPEX of the business. When a proper disaster recovery
              plan is set, any business can continue to run its critical
              operations without thwarting their customer expectations. That is
              exactly what we offered Indian defense, a solution that can manage
              and provide necessary outcomes in case of any DR issues.
            </p>
            <h5 className="ft"> Challenges</h5>
            <p>
              The Indian defense had only 4 Mbps site to site leased line for
              data transfer.{' '}
            </p>
            <p>
              They were using email, intranet and few BPM applications on
              SAN-based storage.
            </p>
            <p>
              They were not comfortable to use array-based replication neither
              the FCIP based switch communication.
            </p>
            <p>
              They were expecting a lightweight, script-based DR solution, that
              is managed with ease and extended as per requirements and with the
              SLA that is less than 10min.
            </p>
          </div>
          <div>
            <h5 className="ft"> Solutions</h5>
            <ul>
              <li>
                Thorough planning and execution proved to be successful.
                Firstly, we used copy-on-write technology advantage that takes
                an incremental snapshot on a purpose-built storage.
              </li>
              <li>
                We performed deduplication of that snapshot and transferred
                across the site by simple Zfs send-receive.
              </li>
              <li>
                In case of failover, we could recover application instantly-
                since it is mare mount of the filesystem, so recovery time was
                almost zero.
              </li>
              <li>
                We used some open source tools that work together with some
                simple scripting and automation and deliver the required
                solution.
              </li>
              <li>
                The solution is extracted from components like snapshot engine-
                pool provisioning –Zfs based storage and virtualization
                technique.
              </li>
              <li>
                The all in one solution comes with the freedom to unlimited
                extension/customization.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="ft">
              {' '}
              That old Cliché “DR is resilient enough to implement in one go” we
              proved it wrong!
            </h5>
            <p>
              Designing and deploying a total DR solution was not a rocket
              science for us. However, there were few challenges to face though;
              we had only 4 Mbps site to site leased line for data transfer. Due
              to pricing aspect, the Indian defense was neither ready to accept
              array-based replication or the FCIP based switch communication.
              They wanted a lightweight solution and a script based DR solution
              to manage their tasks effortlessly. With all these hurdles on the
              path, we managed to script a DR solution that is open and restores
              the data in DR site. In case of a network latency or a failure,
              Indian defense could recover the application in no time and the
              recovery time is almost zero.
            </p>

            <h5 className="ft"> OUTCOME</h5>
            <p>
              The DR solution was 10% low compared to a licensed DR product.
              They were able to restore the data instantly and the recovery time
              was less than 10 min which is almost zero. The lightweight script
              was easily adaptable and manageable.
            </p>
          </div>
        </div>
      </DisasterWrapper>
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

export default Disasterrecovery;

const DisasterWrapper = styled.div`
   {
    padding: 2rem 1rem;
    p {
      text-align: left;
    }
  }
  @media screen and (min-width: 576px) {
    padding: 3rem 4rem;
    p {
      text-align: justify;
    }
  }
`;
