import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2 border-right-w">
              <img src="/assets/img/footerlogo.png" className="footlogo" />
            </div>
            <div className="col-md-4 pl-0 border-right-w">
              <div className="get-in-touch">
                <h4>Get in touch</h4>
                <p>Helpline number: 0800 83 85 87</p>
                <p>
                  <span>Opening hours:</span>
                  <br />
                  <span>Weekdays: Monday-Thursday 6pm to 2am</span>
                  <br />
                  <span>Weekend: Friday 6pm-Monday 6am</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 border-right-w">
              <h4>Other information</h4>
              <ul className="imp-links">
                <li>
                  {' '}
                  <a accessKey={3} href="/news/">
                    News
                  </a>
                </li>
                <li>
                  <a href="/about-us/get-in-touch#promo">
                    Promotional materials
                  </a>
                </li>
                <li>
                  <a href="/about-us/get-in-touch#press">Press information</a>
                </li>
                <li>
                  <a href="/about-us/privacy/">Privacy</a>
                </li>
                <li>
                  <a accessKey="k" href="/about-us/accessibility/">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a accessKey="f" href="/feedback/">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="/sitemap/" accessKey={4}>
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="/how-we-can-help/what-we-do/" accessKey={0}>
                    What we do
                  </a>
                </li>
                <li>
                  <a href="/information-support/your-mood/" accessKey={1}>
                    Your mood?
                  </a>
                </li>
                <li>
                  <a href="/about-us/who-we-are/" accessKey={2}>
                    Who we are
                  </a>{' '}
                </li>
              </ul>
            </div>
            <div className="col-md-3 border-right-w">
              <div className="other-info">
                <p>Recognition Scheme Award for Organisations</p>
                <img src="/assets/img/cosca_small_black_v2.png" />
                <p>Counselling &amp; Psychotherapy in Scotland</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
