import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import lc from '../../images/case/LargeMotorCompany.jpg';
import SEO from '../../components/seo.js';
import styled from 'styled-components';
import CaseBreadCrumbs from '../../components/Home/CasestudiesBreads.js';

const brdr = {
  borderRadius: '0 0.25rem 0.25rem 0'
};

const Softwaredefined = () => {
  return (
    <Layout>
      <SoftwaredefinedWrapper>
        <Helmet>
          <link
            rel="canonical"
            href="https://www.synectiks.com/software-defined/index.html"
          />
        </Helmet>
        <SEO title="Software Defined" />
        <div className="softwareDefined_wrap">
          <CaseBreadCrumbs
            title="Home"
            casetitle="Resources"
            subtitle="Case Studies"
            pageTitle="Software Defined"
          />
          <h1>Software Defined</h1>
          <div className="softwareDefined_image">
            <h5 className="ft">Large Motor Company</h5>
            <p className="blueBorder pl-2 pl-md-5 py-1 py-3">
              The leadership took a decision to become
              Hardware/OS/Operation/vendor agnostic and achieve scalability and
              reliability across the organization. We helped them with all the
              technologies, training to make that happen. Our open platform
              helped them to become complete software defined, automate all
              operations. We helped them to learn to manage IT in most modern
              way.
            </p>
            <img src={lc} alt="Network Design" className="w-100" />
          </div>
          <div className="softwareDefined_div d-flex flex-column flex-md-row justify-content-around py-1 py-md-5">
            <div className="column w-100 px-1 px-5 orangeBorder">
              <h5 className="ft">Industry</h5>
              <p classname="textAlign">Automobiles</p>
            </div>
            <div className="column w-100 px-1 px-5 blueBorder">
              <h5 className="ft">Business Objective</h5>
              <p classname="textAlign">
                Transformation towards becoming hardware / Os / Vender /
                Operation agnostic. Make everything software defined.
              </p>
            </div>
            <div className="column w-100 px-1 px-5 redBorder">
              <h5 className="ft">Technologies</h5>
              <p classname="pleft">
                AWS, Infrastructure as a code, microservices, DevOps
              </p>
            </div>
          </div>
          <div>
            <h5 className="ft">Overview</h5>
            <p classname="textAlign">
              Four data centers and more than two thousand servers running 24/7,
              with twenty plus applications and two hundred operations team,
              Large Motor Company handles massive daily operations round the
              clock to give the best world class service to their customers.
            </p>
            <h5 className="ft">Challenges</h5>
            <p classname="textAlign">
              <b className="fw-500"> Scalability</b>: This was the primary and
              pertinent challenge of Large Motor Company as their applications
              were not horizontally scalable due to which their applications,
              faced many performance issues. <br />
              <b className="fw-500">Reliability</b>: They had difficulty in
              confronting hardware downtime, unplanned outages have directly
              impacted software downtime and baffled their IT operations,
              applications and data. <br />
              <b className="fw-500">Vendor Dependency</b>: They were running
              licensed products for HA clustering, system monitoring and
              security. Most of the products were licensed.
              <br />
              <b className="fw-500">Traditional IT infrastructure</b>: With
              traditional Infrastructure, it is not only difficult to manage a
              data center but also hard to improve costs in maintaining the
              physical resources. The Large Motor company was not using more
              than 10% of their physical resources.
            </p>
          </div>
          <div>
            <h5 className="ft">Solutions</h5>
            <ul>
              <li>
                We remodeled their legacy IT infrastructure into an entirely
                software-defined architecture.
              </li>
              <li>
                Entire operations effort have been shortened and condensed to
                maintain the four data centers.
              </li>
              <li>
                We provided a centralized source, valid data and advanced data
                governance technology.
              </li>
              <li>
                We designed the entire application layer with statelessness,
                ensuring horizontal scalability, better security and visibility
                to the exposed API.
              </li>
              <li>
                We proved our expertise once again by delivering fast and
                accurate releases to meet the growing business demand.
              </li>
              <li>
                We rebuilt and revamped the existing applications to meet
                today’s agility and scalability demands in the market.
              </li>
              <li>
                We reduced high CAPEX and OPEX and made them achieve more with
                less IT budget.
              </li>
              <li> We offered a complete license agnostic solution.</li>
            </ul>
          </div>
          <div>
            <h5 className="ft">
              Synectiks providing a customized solution and targeting the pain
              points of Large Motor Systems.
            </h5>
            <p classname="textAlign">
              When Large Motor Company approached Synectiks, they were handling
              multiple tasks with traditional infrastructure model. They have
              reached a point on the edge where they can no longer withstand the
              outage issues that rippled their business to two folds and finally
              resulted in high potential cost for their business. Initially,
              Large Motor Company’s infrastructure was not tailored as per their
              requirements that resulted in maintaining huge operations effort
              to manage their data centers. They were expecting quick and
              accurate releases to meet their growing business needs. With
              almost high CAPEX and OPEX, their IT budget was already
              skyrocketing and was going beyond their expectations. Their
              primary focus areas were on scalability, agility and reliability
              issues. Once fixed, they can outperform in their core areas and
              compete in their line of business for better business prospects.
            </p>
            <h5 className="ft">
              How did Synectiks Consolidate, Validate and Outline the issues of
              Large Motor Systems?
            </h5>
            <p classname="textAlign">
              We believe in harvesting information as much as possible that will
              yield a better solution. That is exactly what we did with Large
              Motor Company. Upon analyzing their queries on a broader spectrum,
              we did a quick 360° audit on their existing infrastructure and
              harvested some vital insights on key improvement areas and a plan
              for any migration path and risks involved in the following
              process. We conducted multiple PoC’S with Large Motor Company to
              channel a solid understanding of the technologies and modernize
              their IT infrastructure. By translating the entire hardware
              infrastructure into a few lines of software code, we crafted a
              backbone infrastructure effortlessly. Also, we refactored monolith
              applications to multiple microservices and established a complete
              application lifecycle management and operation support system to
              maintain their business operations. Ultimately, by achieving the
              required data security, governance and compliance requirements in
              the cloud.
            </p>

            <h5 className="ft">OUTCOME</h5>
            <p classname="textAlign">
              The entire business system is now managed by few resources
              reducing CAPEX by 80% and OPEX by 70%. Large Motor Company’s
              legacy infrastructure is entirely a new transformed
              software-defined infrastructure. As we promised, they achieved
              scalability, reliability, security, agility and operation SLA’s.
              The entire infrastructure is maintained with the code that we
              created and tailored as per their business requests. Large Motor
              Company achieved elasticity to create, modify, shrink and remove
              infrastructure needs dynamically in no time. For a successful
              delivery pipeline, our DevOps automation helps them to manage the
              lifecycle of multiple microservices through the automated
              platform. To achieve continuous delivery, we release quality codes
              every hour.
            </p>
          </div>
        </div>
      </SoftwaredefinedWrapper>
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

export default Softwaredefined;

const SoftwaredefinedWrapper = styled.div`
   {
    padding: 2rem 1rem;
    .pleft,
    p {
      text-align: left;
    }
  }

  @media screen and (min-width: 576px) {
    padding: 3rem 4rem;
    .pleft {
      text-align: left !important;
    }
    p {
      text-align: justify;
    }
  }
`;
