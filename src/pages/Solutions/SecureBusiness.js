import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import styled from 'styled-components';
// import syn from '../../images/secure-cyber.svg';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import SEO from '../../components/seo.js';
import syn from '../../images/Sample.svg';
const SecureBusiness = () => {
	return (
		<Layout>
			<SecureWrapper>
				<div className='text-justify'>
					<BreadCrumbs title='Home' subtitle='Solutions' pageTitle='Secure Hosted & Business Continuity' />
					<SEO title='Secure Hosted & Business Continuity' />
					<h2 className='ml-n1'>Secure Hosted & Business Continuity</h2>
				</div>
				<div className='container-fluid mx-0'>
					<div className='row pt-2'>
						{/* <h2>Secure Hosted Cloud Infrastructure & Business Continuity Solutions</h2> */}
						<p>
							Capture true value of cloud with highly secured, scalable, and customizable SYNECT<span className='text-danger'>I</span>KS
							Hosted Cloud Solutions at an affordable pricing. Modern, Innovative could solutions for wide
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
									Synectiks Cyber Protect Cloud changes the game by integrating Data protection with
									Cybersecurity.
								</p>
							</div>
							<div className='excerpt'>
								<a href='/iaas/index.html'>
									Synectiks Secure & Custom Hosted Infrastructure Solutions:
								</a>
								<p>
									Meet modern IT demands with a scale-out, cost-efficient, and multi-purpose Cloud
									solution.
								</p>
							</div>
							<div className='excerpt'>
								<a href='/digital-workspace/index.html'>Cloud-Hosted Virtual Desktop:</a>
								<p>
									Synectiks is an efficient DaaS provider that scales your workspace to the cloud,
									driving the highest performance in speed, uptime and scalability at an affordable
									price.
								</p>
							</div>
						</div>
						<div className='col-md-6 py-4 px-0'>
							<img src={syn} alt='' />
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
	padding: 3rem 4rem;
`;
