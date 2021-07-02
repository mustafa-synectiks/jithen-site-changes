import * as React from 'react';
import { Helmet } from 'react-helmet';
import cb from '../../images/case/StorageMigration.jpg';
import as from '../../images/case/Application-Services-Slider.png';
import Layout from '../../components/layout';
import SEO from '../../components/seo.js';
import CaseBreadCrumbs from '../../components/Home/CasestudiesBreads.js';
import styled from 'styled-components';

const Storagemigration = () => {
  return (
    <Layout>
      <StorageWrapper>
        <Helmet>
          <link
            rel="canonical"
            href="https://www.synectiks.com/storage-migration/index.html"
          />
        </Helmet>
        <SEO title="Storage Migration" />
        <div className="softwareDefined_wrap">
          <CaseBreadCrumbs
            title="Home"
            casetitle="Resources"
            subtitle="Case Studies"
            pageTitle="Storage Migration"
          />
          <h1>Storage Migration</h1>
          <div className="softwareDefined_image">
            <h5 className="ft">
              SAN connectivity via Synectiks Storage Network Solutions
            </h5>
            <p className="blueBorder pl-2 pl-md-5 py-1 py-3">
              The leadership took a decision to become
              hardware/OS/Operation/vendor agnostic and achieve scalability and
              reliability across the organisation. We helped them with all the
              technologies, training to make that happen. Our open platform
              helped them to become complete software defined, automate all
              operations. We helped them to learn to manage IT in most modern
              way.
            </p>
            <img src={cb} alt="Storage Migration" className="w-100" />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-around py-2 py-md-5">
            <div className="px-2 px-md-5">
              <h5 className="ft">Cloud Implement Services</h5>
              <p>
                Production servers require storage consolidation to scale the
                growth of digital data. Business requires efficient and robust
                storage solutions based on application needs. ERP, Big Data
                Analysis and IOT require a latest all-flash solution. Synectiks
                provides a wide range of storage solutions and has years of
                expertise in this domain. We enable enterprises, around the
                globe to connect to cloud-based IT capabilities, help optimize
                costs, enhance productivity and bring innovation to IT
                operations.
              </p>
            </div>
            <div>
              <img src={as} alt="Cloud Implement Services" className="w-100" />
            </div>
          </div>
          <div>
            <h5 className="ft"> Synectiks SAN model</h5>
            <p>
              Over the years, we have developed expertise around SAN storage
              that led us in creating robust solutions for organizations across
              the globe in different domains and stages
            </p>
          </div>
          <div className="softwareDefined_div d-flex flex-column flex-md-row justify-content-around py-1 py-md-5">
            <div className="column w-100 px-1 px-5 orangeBorder">
              <h5 className="ft">Network Model</h5>
              <p className="pleft">
                Our unique core-edge SAN network offering works best for the
                applications providing availability and load balancing.
              </p>
            </div>
            <div className="column w-100 px-1 px-5 blueBorder">
              <h5 className="ft"> Business Objective </h5>
              <p className="pleft">
                Our strength in offering raw block devices of various sizes
                delivers best i/o response time with a high-end performance of
                the applications. We design and implement 3 data center, 4 data
                center block replications.
              </p>
            </div>
            <div className="column w-100 px-1 px-5 redBorder">
              <h5 className="ft">File Model</h5>
              <p>
                We design and build customized NAS solutions for enterprises
                based on their needs and demands. We construct robust networking
                file access to windows and Unix based clients.
              </p>
            </div>
          </div>
          <div>
            <h5 className="ft">Synectiks Cloud Solutions</h5>
          </div>
          <div className="softwareDefined_div d-flex flex-column flex-md-row justify-content-around py-1 py-md-5">
            <div className="column w-100 px-1 px-5 orangeBorder">
              <h5 className="ft">L1-L2-L3-L4 support</h5>
              <p>
                It is our support to enterprises at various levels brought us
                where we are today. We support operations at multiple stages to
                achieve customer SLAs and we succeeded. Desktops or applications
                to be accessed anytime, anywhere and in any device.
              </p>
            </div>
            <div className="column w-100 px-1 px-5 blueBorder">
              <h5 className="ft">Build Solutions</h5>
              <p>
                We offer a wide range of industry-specific storage box builds
                for specific niche industry domains.
              </p>
            </div>
            <div className="column w-100 px-1 px-5 redBorder">
              <h5 className="ft"> Active - Active Solutions</h5>
              <p>
                Our active-active solutions enable application clusters to work
                and maintain zero downtime.
              </p>
            </div>
          </div>
          <div>
            <h5 className="ft">
              We follow ITIL process and methodologies to support various levels
              of supports for the enterprises.
            </h5>
            <div className="d-flex flex-column flex-md-row">
              <div className="px-2 px-md-5">
                <h5 className="ft">Storage Automation</h5>
                <p>
                  Our core strength is to automate the end to end storage
                  operations. We use various DevOps tools to automate most of
                  the storage jobs and with this, we receive customer requests
                  at a faster rate.
                </p>
              </div>
              <div className="px-2 px-md-5">
                <h5 className="ft">Block and File migration</h5>
                <p>
                  We are experts in migrating block data across multiple storage
                  boxes. We offer solutions and services to accelerate the
                  migration of storage hardware and data.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h5 className="ft">
              Cloud across the globe with 187 data centers foot print.
            </h5>
            <ul>
              <li>180+ Data centers across the globe.</li>
              <li>50+ Storage experts.</li>
              <li>Handled 150 + PB of storage Data.</li>
              <li>10+ cloud services offering with successful POCs.</li>
              <li>3 partnerships for joint solutions.</li>
              <li>Storage assessment.</li>
              <li>Storage Implementations.</li>
              <li>Latest innovations in cloud.</li>
              <li>Building competencies.</li>
              <li>
                Domain experience for industries like BFSI, healthcare
                manufacturing and others.
              </li>
            </ul>
          </div>
        </div>
      </StorageWrapper>
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
export default Storagemigration;

const StorageWrapper = styled.div`
   {
    padding: 2rem 1rem;
    .pleft,
    p {
      text-align: left;
    }
  }
  @media (min-width: 576px) {
    padding: 3rem 4rem;
    .pleft {
      text-align: left;
    }
    p {
      text-align: justify;
    }
  }
`;
