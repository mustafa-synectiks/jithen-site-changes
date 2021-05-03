import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';
import { breakpoints } from '../utils/breakpoints';
import logo from '../images/logo.png';
const DesktopNavMenu = () => {
  const [background, setBackground] = useState(false);
  const navRef = useRef();

  navRef.current = background;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20;
      if (navRef.current !== show) {
        setBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader background={background}>
      <div>
        <img src={logo} alt="synectiks" />
      </div>
      <ul>
        <li>
          <span>What We Do</span>
          <ul className="sub-menu">
            <ul>
              <li>
                <Link to="/area-expertise/index.html">Area Of Expertise</Link>
              </li>
              <li>
                <Link to="/casestudy/index.html">Case Studies</Link>
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <span>Cloud Services</span>
          <ul className="sub-menu">
            <div className="nested-sub-menu">
              <ul className="s1">
                <li>
                  <Link to="/landing-page/index.html">
                    Hosted Infrastructure & Business Continuity
                    <BsArrowRight className="fnt" />
                  </Link>
                </li>
                <li>
                  <Link to="/aws-managed-services/index.html">
                    AWS Managed Services
                  </Link>
                </li>
              </ul>
              <ul className="s2">
                <li>
                  <Link to="/business-cyber-sub-landing/index.html">
                    Business Continuity & Cyber Security
                    <BsArrowRight className="fnt" />
                  </Link>
                </li>
                <li>
                  <Link to="/secure-custom-hosted-infrastructure/index.html">
                    Secure & Custom Hosted Infrastructure
                  </Link>
                </li>
                <li>
                  <Link to="/digital-workspace/index.html">
                    Cloud-Hosted Virtual Desktop
                  </Link>
                </li>
              </ul>
              <ul className="s3">
                <li>
                  <Link to="/protect-cloud/index.html">Protect Cloud</Link>
                </li>
                <li>
                  <Link to="/business/index.html">Backup as a Service</Link>
                </li>
                <li>
                  <Link to="/disaster-service/index.html">
                    Disaster Recovery as a Service
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </li>
        <li>
          <span>Migration & Modernization</span>
          <ul className="sub-menu">
            <ul>
              <li>
                <Link to="/infrastructure/index.html">
                  Infrastructure Transformation
                </Link>
              </li>
              <li>
                <Link to="/application-transformation/index.html">
                  Application Transformation
                </Link>
              </li>
              <li>
                <Link to="/devops-transformation/index.html">
                  DevOps Transformation
                </Link>
              </li>
            </ul>
          </ul>
        </li>

        <li>
          <span>Solutions</span>
          <ul className="sub-menu">
            <ul>
              <li>
                <Link to="/office-migration/index.html">O365 Migration</Link>
              </li>
              <li>
                <Link to="/microservices/index.html">Microservices</Link>
              </li>
              <li>
                <Link to="/hybrid-cloud/index.html">Hybrid Cloud</Link>
              </li>
            </ul>
          </ul>
        </li>

        <li>
          <span>Resources</span>
          <ul className="sub-menu">
            <ul>
              <li>
                <Link to="/featured/index.html">Featured</Link>
              </li>
              <li>
                <Link to="/blog/index.html">Blog</Link>
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <span>Company</span>
          <ul className="sub-menu">
            <ul>
              <li>
                <Link to="/about-us/index.html">About Us</Link>
              </li>
              <li>
                <Link to="/careers/index.html">Careers</Link>
              </li>
              <li>
                <Link to="/Contact-us.html">Contact Us</Link>
              </li>
            </ul>
          </ul>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default DesktopNavMenu;

const StyledHeader = styled.header`
  padding: 0rem 3rem;
  .fnt {
    font-size: 1.5rem;
    margin-left: 5px;
  }
  display: none;
  @media ${breakpoints.lg} {
    display: flex;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    top: 40px;
    z-index: 10;
    padding: 0.99rem 1rem;
    transition: background 300ms;
    background: ${({ background }) => (background ? '#fff' : '#fff')};

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
      margin: 0;

      li {
        list-style: none;
        position: relative;
        margin-right: 2rem;

        a {
          text-decoration: none;
          color: #292929;
          transition: color 300ms;
          font-size: 0.9rem
					:hover {
            color: red;
          }
        }
      }

      ul.sub-menu {
        display: none;
      }

      li:hover ul.sub-menu {
        display: block;
        position: absolute;
        background: transparent;
        padding: 1rem;
        left: -3.5rem;
        top: 0.5rem;
      }

      ul.sub-menu ul li a {
        font-size: 12px;
      }
      ul.sub-menu ul {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        background: white;
        position: absolute;
        top: 1.6rem;
        padding: 0.5rem 1rem;
        width: auto;
      }
      ul.sub-menu ul li {
        padding: 0.5rem 0rem 0.5rem 1rem;
        width: max-content;
      }

      ul.nested-menu {
        display: none !important;
      }
      li.nested-sub-menu:hover ul.nested-menu {
        display: block !important;
        position: absolute;
        right: -8rem;
        top: 2.5rem;
        z-index: 99;
      }
      .nested-sub-menu {
        width: 75vw;
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background: white;
        padding: 1rem;
        position: absolute;
        left: -17rem;
        height: 25vh;
        ul.s1 {
          position: absolute;
          left: 0;
          padding: 0;
        }
        ul.s2 {
          position: absolute;
          left: 24rem;
          padding: 0;
        }
        ul.s3 {
          position: absolute;
          right: 1rem;
          padding: 0;
        }
      }
    }
  }
`;
