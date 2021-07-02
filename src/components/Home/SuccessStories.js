import React from 'react';
import styled from 'styled-components';
import SM from '../../images/case/CS_Software_Migration.jpg';
import RM from '../../images/case/CS_Realtime_Monitoring.jpg';
import SDFT from '../../images/case/CS_SoftwareDefinedTransformation.jpg';
import ND from '../../images/case/CS_NetworkDesign.jpg';
import ST from '../../images/case/CS_StorageTier.jpg';
import DR from '../../images/case/CS_DisasterRecovery.jpg';
import { MdArrowForward, MdArrowBack, MdClose } from 'react-icons/md';

const SuccessStories = () => {
  return (
    <SuccessStoriesWrapper>
      <div className="container-fluid bgWhiteGradient px-3 py-1 px-md-5 py-md-4">
        <div className="row">
          <div className="content d-flex flex-column flex-md-row align-items-center">
            <div className="col-sm-12 col-md-3">
              <div className="my-2 my-md-5 caseText">
                <h2 className="mb-2 mb-md-3">Success Stories </h2>
                <a
                  href="https://synectiks.com/casestudy/index.html"
                  className="text-capitalize"
                >
                  View all success stories &nbsp; >
                </a>
              </div>
              <div className="progressnumb">
                <ul
                  className="progress"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <li>01</li>
                  <li className="slider__label sr-only" /> <li>06</li>
                </ul>
              </div>
              <div className="slickbtns mx-4">
                <div className="prevbtn">
                  <MdArrowBack className="fa-2x" />
                </div>
                <div className="nextbtn">
                  <MdArrowForward className="fa-2x" />
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-md-9 p-0 h70vh">
              <div className="slider">
                <a href="/software-defined/index.html" className="noLine fw300">
                  <div className="case-studies w-450 bshad">
                    <img src={SDFT} alt="Software Defined" />

                    <div className="text-group align-self-center p-2 bgWhite">
                      <h3 className="textColor">
                        Software Defined Transformation
                      </h3>
                      <p className="pr-2 pr-md-5 textColor  mb-1 mb-md-4 mr-0 mr-md-5">
                        AWS Cloud migration for a large motor industry.
                      </p>
                      <a
                        href="/software-defined/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
                <a href="/realtime/index.html" className="noLine fw300">
                  <div className="case-studies w-450 bshad">
                    <img src={RM} alt="Realtime" />{' '}
                    <div className="text-group align-self-center p-2 bgWhite">
                      <h3 className="textColor">Realtime Monitoring</h3>
                      <p className="pr-2 pr-md-5 textColor  mb-1 mb-md-4">
                        Highly Scalable extremely customizable realtime
                        monitoring platform.
                      </p>
                      <a href="/realtime/index.html" className="noLine fw300">
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
                <a
                  href="/storage-migration/index.html"
                  className="noLine fw300"
                >
                  <div className="case-studies w-450 bshad">
                    <img src={SM} alt="Storage Migration" />{' '}
                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="textColor">Storage Migration</h3>
                      <p className="pr-1 textColor  mb-1 mb-md-4">
                        Petabytes of storage migration for a large financial
                        company with zero down time.
                      </p>{' '}
                      <a
                        href="/storage-migration/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
                <a href="/network-design/index.html" className="noLine fw300">
                  <div className="case-studies w-450 bshad">
                    <img src={ND} alt="Network Design" />{' '}
                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="textColor">Network Design</h3>
                      <p className="pr-5 textColor  mb-1 mb-md-4">
                        Complete network Backbone design with highest security
                        for retail.
                      </p>
                      <a
                        href="/network-design/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
                <a href="/storage-tier/index.html" className="noLine fw300">
                  <div className="case-studies w-450 bshad">
                    <img src={ST} alt="Storage Tier" className="h46" />

                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="textColor">Storage Tier</h3>
                      <p className="pr-5 textColor  mb-1 mb-md-4">
                        Moving Bigdata workloads to aggregated platform for a
                        large telco.
                      </p>
                      <a
                        href="/storage-tier/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>

                <a
                  href="/disaster-recovery/index.html"
                  className="noLine fw300"
                >
                  <div className="case-studies w-450 bshad">
                    <img src={DR} alt="Disaster Recovery" />
                    <div className="text-group align-self-center p-1 p-md-2 bgWhite">
                      <h3 className="textColor">Disaster Recovery</h3>
                      <p className="pr-5 textColor mb-1 mb-md-4">
                        Lightweight disaster recovery platform for indian
                        Defense.
                      </p>
                      <a
                        href="/disaster-recovery/index.html"
                        className="noLine fw300"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SuccessStoriesWrapper>
  );
};
export default SuccessStories;

const SuccessStoriesWrapper = styled.div`
.slick-slide {
	.case-studies{
		overflow: hidden !important;
		&:hover img{
			-webkit-transform: scale(1.04);
			transform: scale(1.04);
			overflow: hidden !important;
		}
		img{
			height: auto;
			-webkit-transition: 0.4s ease;
			transition: 0.4s ease;
			overflow: hidden !important;
	}
}
.slider .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    left: 0rem;
}

.slider .slick-slide {
    padding: 0px;
    margin: 0px;
}
	.w-450 {
			width: 90% !important;
		}
		.slider .slick-slide img{
	width: 100%;
}
	.progressnumb {
			display: flex;
			justify-content: flex-start;
			align-items: baseline;
			position:relative;
			left:11%;

	.progress {
			display: block;
			width: 45%;
			}
	}

	.caseText{
		text-align: center;
	}
	@media (min-width: 576px){
			.caseText{
		text-align: left;
	}
	.case-studies{
	img{
		height:46vh;
	}
}
		.w-450 {
			width: 90% !important;
		}
		#progressBar {
			width: 100%;
			background: var(--backgroundColor);
		}
			/* Slick Slider Starts */
		.slider .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    left: 0rem;
}
.slider .slick-slide {
    padding: 0 0px;
    margin: 0px 20px;
				/* max-width:400px; */
}
		.h70vh {
			height: 70vh;
		}
		ul.progress > li:first-child {
			position: absolute;
			left: -12%;
			margin-top: -4%;
			font-size: 1.4rem;
		}
		ul.progress > li:last-child {
			position: absolute;
			right: 30%;
			margin-top: -4%;
			font-size: 1.4rem;
		}

		.slider .slick-slide img {
			display: block;
			width: 100%;
		}

		.slick-dots {
			position: absolute;
			top: 5%;
			display: flex;
			width: 100%;
			padding: 1rem;
			margin: 0;
			list-style: none;
			text-align: center;
			flex-direction: column;
			align-items: flex-end;
		}
		.slick-dots li button:before {
			font-family: 'slick';
			font-size: 1.2rem;
			line-height: 20px;
			opacity: 1;
			color: rgb(255, 255, 255);
		}
		.slick-dots li.slick-active button:before {
			opacity: 1;
			color: var(--synectiksOrange);
		}

		.slick-dots li {
			position: relative;
			display: inline-block;
			width: 20px;
			height: 20px;
			margin: 10px 25px;
			padding: 0;
			cursor: pointer;
		}
	.slider	.slick-slide {
			margin-top: 2rem;
			width: 400px;
		}
			.progressnumb {
			display: flex;
			justify-content: flex-start;
			align-items: baseline;
			position:relative;
			left:11%;

		.progress {
			display: block;
			width: 55%;
			height: 3px;
			border-radius: 10px;
			overflow: hidden;
			background-color: rgb(146, 146, 146);
			background-image: -webkit-gradient(linear, left top, right top, from(var(--synectiksOrange)), to(var(--synectiksOrange)));
			background-image: linear-gradient(to right, var(--synectiksOrange), var(--synectiksOrange));
			background-repeat: no-repeat;
			background-size: 0 100%;
			-webkit-transition: background-size .4s ease-in-out;
			transition: background-size .4s ease-in-out;
		}
			}

		.content {
			/* margin: auto; */
			padding: 20px;
			width: 100vw;
			display: flex;
			justify-content: space-around;
			align-items: baseline;
		}

		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			border: 0;
		}
		.slickbtns {
			display: flex;
		justify-content: space-around;
		width: 64%;
			/* display: grid; */
			/* grid-template-columns: 50px 50px;
			grid-gap: 2.4rem;
			margin-left: 13% !important;
			margin-top: 12% !important; */
		}
.f-14{
	font-size: 14px;
}
		.nextbtn:hover {
			border: 1px solid var(--synectiksOrange);
			color: var(--synectiksOrange);
		}
		.prevbtn:hover{
		border: 1px solid var(--synectiksOrange);
		color: var(--synectiksOrange);
		}
		.prevbtn,
		.nextbtn {
			border: 1px solid var(--textColor);
			border-radius: 50%;
			padding: 5px;
			text-align: center;
			width: 3rem;
			height: 3rem;
			cursor: pointer;
		}
		.bshad{
			box-shadow: 0px 0px 12px 2px lightgray;
		}
		/* Slick Slider  Ends */
			.case-studies{
	img{
		height: 20vh;
	}
	h3{
		font-size: 22px;
	}
	p{
		font-size: 1.125rem;
		/* min-height:75px;
		max-height:75px; */
		margin-bottom: 0rem;
	}
}
	}
.progress {
  display: block;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
  background-image: linear-gradient(to right, black, black);
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: background-size .4s ease-in-out;
}
`;
