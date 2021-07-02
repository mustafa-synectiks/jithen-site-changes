import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import ApplicationServices from '../../images/ApplicationServices.jpg';
import Office365 from '../../images/Office365.jpg';
import '../../components/layout.css';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';

export class OfficeMigraton extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <meta
            name="description"
            content="Microsoft is the recognized leader in cloud productivity solutions for business with Office 365 transforming the workplace experience. With a certified team of Microsoft Partner Professionals, SYNECTIKS delivers on all Microsoft Cloud Solutions, including Office 365, SharePoint, Skype for Business, Teams, Power BI, Microsoft 365 (Office 365 + Enterprise Mobility + Security) and Azure."
          />
          <link
            rel="canonical"
            href="https://synectiks.com/office-migration/index.html"
          />
        </Helmet>
        <OfficeMigratonWrapper>
          <div>
            <SEO title="Microsoft 365 Services" />
            <BreadCrumbs
              title="Home"
              subtitle="Cloud Services"
              pageTitle="Microsoft 365 Services"
            />
            <h1>Microsoft 365 Services</h1>
          </div>
          <div className="bg-lightgrey">
            <div class="">
              <div />
              <div
                className="px-1 "
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="">
                  <div className="pt-3 text-center">
                    <img
                      src={Office365}
                      width="100%"
                      alt="Office365"
                      className="imgBx"
                    />{' '}
                  </div>
                </div>
              </div>

              <div
                className=" text-black w-100 mt-3 text-white  pb-2 pt-5 flex-col d-flex text-justify"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="w-100  text-black">
                  <p className="lineHeight-24 ptext">
                    Microsoft is the recognized leader in cloud productivity
                    solutions for business with Office 365 transforming the
                    workplace experience.
                  </p>
                  <p className="lineHeight-24 ptext">
                    With a certified team of Microsoft Partner Professionals,
                    SYNECTIKS delivers on all Microsoft Cloud Solutions,
                    including Office 365, SharePoint, Skype for Business, Teams,
                    Power BI, Microsoft 365 (Windows 10 + Office 365 +
                    Enterprise Mobility + Security) and Azure.
                    <br />
                  </p>
                  <p className="lineHeight-24">
                    Imagine what we can do for you!
                  </p>
                  <p className="lineHeight-24 ptext">
                    We don’t just move you to Office 365. We help you create and
                    sustain a cost-efficient, highly responsive and secure
                    evergreen workplace platform. We provide a holistic set of
                    transformational and managed services to modernize your
                    workplace.
                    <br />
                  </p>
                  <p className="lineHeight-24">
                    <h5 className="ft">
                      We can help accelerate your move to a digital workplace
                      through our:
                    </h5>
                    <ul className="lineHeight-34 text-left">
                      <li>
                        Experience in unlocking the full productivity potential
                        of Office 365
                      </li>
                      <li>
                        Giving you cost-effective and collaborative tools,
                        including Microsoft Teams, Skype for Business and
                        SharePoint Online.
                      </li>
                      <li>
                        Insights from self-service and data discovery with
                        Microsoft Power BI for Office 365.
                      </li>
                      <li>
                        Ability to extend standard Office 365 service offerings
                        with managed services
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <div
                className="w-100 text-black"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h5 className="ft lineHeight-24">
                  Find Out Why Users Are Choosing Office 365
                </h5>
              </div>
              <div
                className="d-flex  py-3 flex-col flex-column flex-md-row text-center col-lg-12 text-light"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center bgOrange">
                  <div className="w-100 ">
                    <p>
                      <b>Work Better Together</b>
                    </p>
                    <p className="text-left">
                      Work Anywhere, Anytime, on Any Device with Office 365.
                      Empower your employees with the tools they need.
                    </p>
                  </div>
                </div>

                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center bgRed">
                  <div className="w-100 ">
                    <p>
                      <b>Get More Done</b>
                    </p>
                    <p className="text-left">
                      Enjoy access to the latest versions, security updates and
                      feature releases.
                    </p>
                  </div>
                </div>

                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center bgBlue">
                  <div className="w-100 ">
                    <p>
                      <b>Work Securely</b>
                    </p>
                    <p className="text-left">
                      Work and Share files confidently with built-in security
                      and privacy controls that help keep your data safe and
                      secure.
                    </p>
                  </div>
                </div>
                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center Dreen">
                  <div className="w-100 ">
                    <p>
                      <b>Simplified for You</b>
                    </p>
                    <p className="text-left">
                      Choose solutions that are right for your business. Get
                      more value for your money.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className=" text-black w-100 mt-3 text-white  py-2 flex-col d-flex text-justify"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="w-100  text-black">
                  <p className="lineHeight-24 ">
                    <h5 className="ft">
                      Built by Microsoft, Made Easy by SYNECTIKS
                    </h5>
                    <ul className="lineHeight-34 ptext">
                      <li>
                        <b>Reliable Support:</b> 24x7x365 support via phone or
                        ticket. 15-minute response time on Sev-1 tickets. SLA
                        based proactive support with Microsoft support
                        escalations.
                      </li>
                      <li>
                        <b>Migration Assistance:</b> Let our dedicated team of
                        specialists help you plan and perform your office 365
                        workload migration.
                      </li>
                      <li>
                        <b>Dedicated to Your Success:</b> It’s our mission to
                        enable your continued success by advising you and your
                        team on the right technologies &amp; tools to deliver
                        the desired results.
                      </li>
                      <li>
                        <b>License Management:</b> We can provide all required
                        Office 365 licensing for your organization on one
                        consolidated invoice.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* //           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//             var vv_base_id = 'q00IB13hyn';
// var vv_ext_id = '5d53ed9a';
// var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
// (function () {
// var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
// `
//             }}
//           /> */}
        </OfficeMigratonWrapper>
      </Layout>
    );
  }
}

export default OfficeMigraton;

const OfficeMigratonWrapper = styled.div`
   {
    padding: 2rem 1rem;
    .ptext {
      text-align: left;
    }
  }
  @media (min-width: 576px) {
    padding: 2.5rem 4rem;
    .ptext {
      text-align: left;
    }
  }
`;
