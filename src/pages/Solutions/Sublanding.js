import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import styled from 'styled-components';
// import syn from '../../images/Business.svg';
import syn from '../../images/BC and CS1.png';
// import syn from '../../images/BCNCS.svg';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import SEO from '../../components/seo.js';
const Sublanding = () => {
	return (
		<Layout>
			<SublandingWrapper>
				<div className='text-justify'>
					<BreadCrumbs title='Home' subtitle='Solutions' pageTitle='Business Continuity & Cyber Security' />
					<h2 className='ml-n1'>Business Continuity & Cyber Security</h2>
				</div>
				<div className='container-fluid mx-0 px-0'>
					<div className='row'>
						<div className='col mt-2 mb-n3'>
							<p>
								Build Business Resiliency with modern Synectiks-Business Continuity solutions. Synectiks
								-Protect Cloud changes the game by integrating Data protection with security. This
								synergy eliminates the complexity and makes security a center point of your solutions,
								keeping your Business protected and your costs down. With its full-stack anti-malware
								protection and comprehensive endpoint management, Synectiks -Protect Cloud combats
								advanced cyberattacks with a unique integration of protection technologies while
								simplifying daily IT operations, endpoint deployments and management, and reporting.
								meeting SOC2 & HIPPA compliance standards
							</p>
						</div>
					</div>
				</div>
				<div className=''>
					<div className='row justify-content-center align-items-start'>
						<div className='col-md-6 py-4 px-4 mt-md-4'>
							<div className='excerpt'>
								<a href='/protect-cloud/index.html'>Protect Cloud</a>
								<p>Protect your Host with one single agent and one console.</p>
							</div>
							<div className='excerpt'>
								<a href='/business/index.html'>Secure Cloud Backup as a Service (BaaS):</a>
								<p>Secure, Reliable & Very Affordable Cloud Backup Solution.</p>
							</div>
							<div className='excerpt'>
								<a href='/disaster-service/index.html'>
									Secure Cloud Disaster Recovery as a Service (DRaaS):
								</a>
								<p>Secure & Modern Innovative Cloud Disaster Recovery Solution.</p>
							</div>
						</div>
						<div className='col-md-6 py-4 px-4'>
							<img src={syn} alt='' />
						</div>
					</div>
				</div>
			</SublandingWrapper>
		</Layout>
	);
};

export default Sublanding;

const SublandingWrapper = styled.section`
	/* background-color: rgba(221, 121, 231, .7); */
	padding: 3em 4em;
`;
