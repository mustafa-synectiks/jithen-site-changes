import React from 'react';
import Layout from '../../components/layout.js';
import styled from 'styled-components';
import HomeTabs from '../../components/Home/HomeTabs';
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
					name='description'
					content='Across our outcome-driven consulting and managed services, it&#39;s our open product driven software solutions, our deep expertise on modern application architecture and our cloud culture that makes the difference.'
				/>
				<link rel='canonical' href='https://synectiks.com/area-expertise/index.html' />
			</Helmet>
			<SEO title='Area of Expertise' />
			<AreaOfExpertiseWrapper>
				<div className=''>
					<BreadCrumbs title='Home' subtitle='What We Do' pageTitle='Area Of Expertise' />
				</div>
				<div className='my-4'>
					<h1>Area Of Expertise</h1>
					<p>
						Across our outcome-driven consulting and managed services, it's our open product driven software
						solutions, our deep expertise on modern application architecture and our cloud culture that
						makes the difference. We primarily help customers in Cloud Migration, Modernization &
						Management. Modernize your legacy applications and Infrastructure using cloud-native
						technologies and deliver predictive and deterministic business outcome. Fully manage cloud
						environment with CloudOps delivery enabled with DevSecOPs capabilities.
					</p>
				</div>
				{/* <div className='my-2 my-md-4'>
					<h3 className='my-2 text-center text-md-left'>
						We are primarily helping customers on the following areas:
					</h3>
					<div className='d-flex flex-column align-items-center flex-md-row justify-md-content-start my-2 my-md-4'>
						<div className=''>
							<img src={img2} alt='Migration & Modernization' className='w-7 mr-md-5' />
						</div>
						<div>
							<h4 className='text-center text-md-left'>Migration & Modernization</h4>
							<p>
								Modernize your legacy applications and Infrastructure using cloud-native technologies
								and deliver predictive and deterministic business outcome.
							</p>
						</div>
					</div>
					<div className='d-flex flex-column align-items-center flex-md-row justify-md-content-start my-2 my-md-4'>
						<div className=''>
							<img src={img1} alt='Cloud Management' className='w-7 mr-md-5' />
						</div>
						<div>
							<h4 className='text-center text-md-left'>Cloud Management</h4>
							<p>
								Fully manage your customers cloud environment with CloudOps delivery enabled with
								DevSecOPs capabilities.
							</p>
						</div>
					</div>
				</div> */}
				<div className='my-2 my-md-4'>
					<h2 className='text-center my-2 my-md-4 py-2 py-md-4'>
						Area of Expertise for Outcome-based Solution offerings
					</h2>
					<HomeTabs />
					<Tabs />
				</div>
			</AreaOfExpertiseWrapper>
			<Helmet>
				<script
					dangerouslySetInnerHTML={{
						__html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
        `
					}}
				/>
			</Helmet>
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
		padding: 3rem 4rem;
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
