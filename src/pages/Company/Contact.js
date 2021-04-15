import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const clearData = e => {
    e.preventDefault();
    alert('Your form submitted successfully');
    setName('');
    setEmail('');
    setCompany('');
    setPhone('');
    setService('');
  };

  var validationArr = {
    f: false,
    // l: false,
    c: false,
    // mb: false,
    ml: false,
    // src: false,
    inds: false
  };
  function inds() {
    let ind = document.getElementById('service');
    let fn = document.getElementsByClassName('errormss');
    let ds = document.getElementsByClassName('inds');
    if (ind.value == 'none') {
      fn[0].innerHTML = 'Please Select any One Service';
      ds[0].style.display = 'none';
      validationArr['inds'] = false;
      //enableDisableButton();
    } else if (ind.value === 'Others') {
      ds[0].style.display = 'block';
      ds[0].style.position = 'relative';
      ds[0].style.left = '-5%';
      ds[0].style.top = '0';
      fn[0].innerHTML = '';
      validationArr['inds'] = false;
      document.getElementById('des').value = '';
      document.getElementById('iText').innerHTML =
        'Please Enter Your Description!';
      //enableDisableButton();
    } else if (
      ind.value === 'Cloud' ||
      ind.value === 'Foundation' ||
      ind.value === 'EnterpriseTransformation' ||
      ind.value === 'MigrationDeployment' ||
      ind.value === 'Optimization' ||
      ind.value === 'Operations' ||
      ind.value === 'HostedInfrastructure' ||
      ind.value === 'backupDRaas' ||
      ind.value === 'ManagedServices' ||
      ind.value === 'Office'
    ) {
      fn[0].innerHTML = '';
      ds[0].style.display = 'none';
      validationArr['inds'] = true;
      //enableDisableButton();
    } else if (ind.value !== 'Others') {
      ds[0].style.display = 'none';
      validationArr['inds'] = true;
      //enableDisableButton();
    } else {
      fn[0].innerHTML = '';
      validationArr['inds'] = true;
      //enableDisableButton();
    }
  }

  return (
    <Layout className="container text-center">
      <div className="py-5">
        <h1 class="ch1 text-center">Get In Touch</h1>
        <div class="cFlex text-center">
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="rIcon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
              <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
            </svg>{' '}
            info@synectiks.com
          </span>
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="rIcon webText"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z"></path>
            </svg>
            609 608 0429 X 102
          </span>
        </div>
        <h6 class="text-dark text-center">
          Get in Touch to See How We Can Help Achieve Your IT Goals
        </h6>
        <form
          form="Cform"
          id="Cform"
          // action="https://synectiks.com/Thankyou.html"
          action="#"
          onSubmit={clearData}
          className="was-validated"
        >
          <input
            type="hidden"
            name="redirect"
            value="https://synectiks.com/Thankyou.html"
          />
          <input
            type="hidden"
            name="retURL"
            value="https://synectiks.com/Thankyou.html"
          />
          <div className="row">
            <div className="text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group">
              <label htmlFor="first_name">Your Name *</label>
              <input
                id="first_name"
                maxlength="80"
                name="first_name"
                size="20"
                type="text"
                onblur="f()"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <div className="error"></div>
            </div>

            <div className="text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                value={email}
                min=""
                name="email"
                size="20"
                type="text"
                onblur="ml(this.value)"
                onChange={e => setEmail(e.target.value)}
                required
              />
              <div className="errorml"></div>
            </div>
          </div>

          <div className="row">
            <div className="text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group">
              <label htmlFor="company">Company Name*</label>
              <input
                id="company"
                value={company}
                maxlength="80"
                name="company"
                size="20"
                type="text"
                onblur="c()"
                onChange={e => setCompany(e.target.value)}
                required
              />
              <div className="errorc"></div>
            </div>

            <div className="text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group">
              <label htmlFor="mobile">Phone</label>
              <input
                id="mobile"
                value={phone}
                minlength="10"
                maxlength="10"
                name="mobile"
                size="20"
                type="tel"
                onChange={e => setPhone(e.target.value)}
              />
              {/* <!-- <div className="errormb"></div> --> */}
            </div>
          </div>
          <div className="row">
            <div
              className="text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group"
              required
            >
              <label htmlFor="service">Select Service *</label>

              <select
                id="service"
                value={service}
                name="service"
                // onChange={e => setService(e.target.value)}
                onChange="inds()"
                required
              >
                <option value="none">--None--</option>
                <option value="Microservices">&nbsp;Microservices</option>
                <option value="Devops">&nbsp;Devops</option>
                <option value="Cloudmigrationservices">
                  &nbsp;Cloud Migration Services
                </option>
                <option value="Publiccloudsolutions">
                  &nbsp;Public Cloud Solutions
                </option>
                <option value="Hybridcloudsolutions">
                  &nbsp;Hybrid Cloud Solutions
                </option>
                <option value="Monitoring&analyticssolutions">
                  &nbsp;Monitoring & Analytics Solutions
                </option>
                <option value="Hostingervices">&nbsp;Hosting Services</option>
                <option value="protectclooud">&nbsp;Protect Cloud</option>
                <option value="Backupservices">&nbsp;Backup Services</option>
                <option value="DisasterRecoveryservices">
                  &nbsp;Disaster Recovery Services
                </option>
                <option value="Microsoft365services">
                  &nbsp;Microsoft 365 Services
                </option>
                <option value="Managedservices">&nbsp;Managed Services</option>
                <option value="Others" id="others">
                  &nbsp;Other
                </option>
              </select>
              <div className="errormss"></div>
              <div class="text-left  col-sm-4  col-md-6 col-lg-6 col-xl-6 field-group inds">
                {/* <!-- <label for="description" >Description</label> --> */}
                <textarea
                  name="description"
                  rows="3"
                  cols="40"
                  placeholder="Write Others's description If selected"
                  id="des"
                  onkeyup="t()"
                ></textarea>
                <div class="texterror" id="iText"></div>
              </div>
            </div>
            <div
              className="col-sm-4 col-md-6 col-lg-6 col-xl-6 field-group"
              style={{ alignSelf: 'baseline', marginTop: '2rem' }}
            >
              <button
                type="submit"
                name="submit"
                value="Submit"
                className="btn btn-primary w-50 pos-3"
                id="submit-btn"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
