import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import styled from 'styled-components';
// import syn from '../../images/Business.svg';
import syn from '../../images/protectcloud.svg';
// import syn from '../../images/BCNCS.svg';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import SEO from '../../components/seo.js';
const Sublanding = () => {
	return (
		<Layout>
			<SublandingWrapper>
				<div className='text-justify'>
					<BreadCrumbs
						title='Home'
						subtitle=' Synectiks Hosted Infrastructure & Business Continuity'
						pageTitle='Business Continuity & Cyber Security'
					/>
					<h2 className='ml-n1'>Business Continuity & Cyber Security</h2>
				</div>
				<div className='container-fluid mx-0 px-0'>
					<div className='row'>
						<div className='col mt-2 mb-n3'>
							<p>
								Build Business Resiliency with modern Synectiks-Business Continuity solutions. Synectiks
								-Protect Cloud changes the game by integrating Data protection with high security. This
								synergy eliminates the complexity and makes security a center point of your solutions,
								keeping your Business protected and within you budget with no compromise on quality.
								With its full-stack anti-malware protection and comprehensive endpoint management,
								Synectiks -Protect Cloud combats advanced cyberattacks with a unique integration of
								protection technologies while simplifying daily IT operations, endpoint deployments and
								management, and reporting.
							</p>
						</div>
					</div>
				</div>
				<div className=''>
					<div className='row justify-content-center align-items-start'>
						<div className='col-md-7 py-4 px-4 mt-md-4'>
							<div className='excerpt'>
								<a href='/protect-cloud/index.html'>Protect Cloud:</a>
								<p>
									ALL-IN-ONE Web-Based innovative powerful integrated solution with one-agent on any
									given Server/End-point device to serve all Backup & Disaster Recovery needs along
									with basic necessary features like Anti-Virus, Anti-Malware, Venerability
									Assessment, Windows- Patch management, Remote Diagnostic assistance and
									URL-filtering.
								</p>
							</div>
							<div className='excerpt'>
								<a href='/business/index.html'>Backup as a Service:</a>
								<p>
									Reliable, Secure & Affordable Cloud Backup Solution with AI-based Ransomware
									protection. Synectiks backup solutions provide exceptional, customizable backup and
									storage management solutions for any system setup: physical servers, virtual
									machines, PCs, business-critical applications, Databases and more.
								</p>
							</div>
							<div className='excerpt'>
								<a href='/disaster-service/index.html'>Disaster Recovery as a Service:</a>
								<p>
									Protection for on-premises and cloud workloads with a turn-key disaster recovery
									solution. Protect your workloads when disaster strikes by instantly spinning up
									systems in our Disaster Recovery Cloud. Adding this service ensures the data is
									immediately available – and with Synectiks it’s as easy as flipping a switch. With
									an easy-to-use user interface, you can effortlessly automate runbooks, testing, and
									failover to the Disaster Recovery Cloud during a DR event.
								</p>
							</div>
						</div>
						<div className='col-md-5 py-4 px-4'>
							<img src={syn} alt='' className='w-75' />
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
