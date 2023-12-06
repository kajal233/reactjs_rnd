import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row px-20 d-flex-mob">
              <div className="col-xs-4 col-sm-2 col-md-3 col-lg-5 w-auto-mob">
                <div className="logo_block">
                  <a href="#">
                    <img
                      src="assets/images/toplogo.png"
                      alt="Breathing Space"
                    />
                  </a>
                  <figure>
                    <img
                      src="assets/images/bstop.png"
                      alt="Open up when you're feeling down"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-xs-8 col-sm-10 col-md-9 col-lg-7">
                <div className="row">
                  <div className="col-xs-6 col-sm-5 col-md-6">
                    <div className="need_help">
                      <p>
                        Need help now? Call free on{' '}
                        <span>
                          <a href="tel:0800838587">0800 83 85 87</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-7 col-md-6">
                    <div className="open_time">
                      <p>Opening hours</p>
                      <p>
                        <strong>Weekdays: </strong>Monday-Thursday 6pm to 2am
                      </p>
                      <p>
                        <strong>Weekdays: </strong>Friday 6pm-Monday 6am
                      </p>
                      <p>This service is for people in Scotland</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
 
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <div className="container">
            <div className="px-20 w-100">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      How can we help
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          What we do
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Need to talk?
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Other languages
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Information &amp; support
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Your mood
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Your problems
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Worried about someone?
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Resources
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      About us
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Who we are
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Get in touch
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Partnerships
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Accessibility
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Donations
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      News
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          2023
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2022
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2021
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2020
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
