import React, { useEffect } from 'react';
import styled from 'styled-components';
import aws from '../../images/HomePage/aws.png';
import acro from '../../images/HomePage/Acronis Logo.png';
import gle from '../../images/HomePage/google.png';
import msa from '../../images/HomePage/msa.png';
import vmware from '../../images/HomePage/vmware.png';
const Partners = () => {
	return (
		<div className='customer-logos'>
			<div>
				<div className='w-75 mx-auto mb-2 mb-md-0'>
					<img src={aws} alt='aws' className='w-100' />
				</div>
			</div>
			<div>
				<div className='w-75 mx-auto mb-2 mb-md-0'>
					<img src={gle} alt='google cloud' className='w-100' />
				</div>
			</div>
			<div>
				<div className='w-75 mx-auto mb-2 mb-md-0'>
					<img src={msa} alt='microsoft azure' className='w-100' />
				</div>
			</div>
			<div>
				{' '}
				<div className='w-75 mx-auto mb-2 mb-md-0'>
					<img src={acro} alt='acronis' className='w-100' />
				</div>
			</div>
		</div>
	);
};

export default Partners;

const PartnerWrapper = styled.section``;
