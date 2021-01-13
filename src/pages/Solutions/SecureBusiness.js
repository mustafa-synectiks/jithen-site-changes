import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import styled from 'styled-components';
// import syn from '../../images/secure-cyber.svg';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import SEO from '../../components/seo.js';
import syn from '../../images/secure-hosted.svg';
const SecureBusiness = () => {
	return (
		<Layout>
			<SecureWrapper>
				<div className='text-justify'>
					<BreadCrumbs
						title='Home'
						subtitle='Cloud Services'
						pageTitle='Synectiks Hosted Infrastructure & Business Continuity'
					/>
					<SEO title='Secure Hosted & Business Continuity' />
					<h1>Synectiks Hosted Infrastructure & Business Continuity</h1>
				</div>
				<div className='container-fluid mx-0'>
					<div className='row pt-2'>
						{/* <h2>Secure Hosted Cloud Infrastructure & Business Continuity Solutions</h2> */}
						<p>
							Capture true value of cloud with highly secured, scalable, and customizable SYNECT<span className='text-danger'>I</span>KS
							Hosted Cloud Solutions at an affordable pricing. Modern, Innovative cloud solutions for wide
							range of Server workloads, Cloud-Hosted Desktops/Workspaces, and Containers along with
							highly Secure Backup & Disaster Recovery options meeting SOC2 & HIPPA compliance standards.
						</p>
					</div>
				</div>
				<div className='container-fluid my-n5'>
					<div className='row justify-content-center align-items-center'>
						<div className='col-md-6 py-4 px-0'>
							<div className='excerpt'>
								<a href='/business-cyber-sub-landing/index.html'>
									Business Continuity & Cyber Security:
								</a>
								<p>
									Build Business Resiliency with modern Synectiks-Business Continuity solutions.
									Synectiks Protect Cloud changes the game by integrating Data protection with
									Cybersecurity.
								</p>
							</div>
							<div className='excerpt'>
								<a href='/iaas/index.html'>Secure & Custom Hosted Infrastructure:</a>
								<p>
									Meet modern IT demands with a scalable, cost-efficient, and multi-purpose cloud
									solution. Synectiks Secure Cloud Hosted Services supports a wide variety of
									workloads with a high degree of control, security, and simplicity.
								</p>
							</div>
							<div className='excerpt'>
								<a href='/digital-workspace/index.html'>Cloud-Hosted Virtual Desktop:</a>
								<p>
									Synectiks is an efficient Desktop as a Service provider that scales your workspace
									to the cloud, driving the highest performance in speed, uptime and scalability at an
									affordable price.
								</p>
							</div>
						</div>
						<div className='col-md-6 py-4 px-0'>
							<img src={syn} alt='' className='w-75' />
						</div>
					</div>
				</div>
			</SecureWrapper>
		</Layout>
	);
};

export default SecureBusiness;

const SecureWrapper = styled.section`
	/* background-color: rgba(221, 121, 231, .7); */
	padding: 2rem 1rem;
	h2 {
		font-weight: 400 !important;
		font-style: normal !important;
		font-size: 1.6rem !important;
		/* line-height: 44px !important; */
		text-align: left !important;
		letter-spacing: normal !important;
	}
	@media (min-width: 576px) {
		h2 {
			font-weight: 400 !important;
			font-style: normal !important;
			font-size: 2.56rem !important;
			line-height: 44px !important;
			letter-spacing: normal !important;
		}
		padding: 2.5rem 4rem;
	}
`;
