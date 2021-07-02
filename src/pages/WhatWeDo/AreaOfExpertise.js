import React from 'react';
import Layout from '../../components/layout.js';
import styled from 'styled-components';
import HomeTabs from '../../components/Home/HomeTabs';
import MobTabs from '../../pages/Company/MobTab.js';
import Tabs from '../../components/Home/Tabs';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import img1 from '../../images/ApplicationTransformation/Cloud Management.png';
import img2 from '../../images/ApplicationTransformation/Migration and Modernization.png';
import { Helmet } from 'react-helmet';
const AreaOfExpertise = ({ location }) => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Across our outcome-driven consulting and managed services, it&#39;s our open product driven software solutions, our deep expertise on modern application architecture and our cloud culture that makes the difference."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/area-expertise/index.html"
        />
      </Helmet>
      <SEO title="What We Do" />
      <AreaOfExpertiseWrapper>
        <div className="">
          <BreadCrumbs title="Home" subtitle="What We Do" />
          <h1>What We Do</h1>
        </div>
        <div className="my-4">
          <p>
            Cloud - an opportunity to envision possibilities, Power to
            Transform!
            <br />
            <br />
            To make you realize this: We at SYNECTIKS - design and build
            scalable technology solutions, perform digital transformation at
            speed and scale, bring together applications, infrastructure, and
            security to leverage the full potential of cloud, automate to DevOps
            and PODS, migrate and modernize, optimize and simplify cloud
            management.
          </p>
        </div>
        <div className="my-2 my-md-4">
          <h5 className="text-center my-2 my-md-4 py-2 py-md-4 ft">
            Area of Expertise for Outcome-based Solution offerings
          </h5>
          {/* <HomeTabs /> */}
          <MobTabs />
          <Tabs />
        </div>
      </AreaOfExpertiseWrapper>
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
export default AreaOfExpertise;

const AreaOfExpertiseWrapper = styled.div`
   {
    padding: 2rem 1rem;
    .w-7 {
      width: 7rem;
    }
    .blockquote {
      width: 100% !important;
      margin: 0;
    }
  }
  @media screen and (min-width: 576px) {
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
