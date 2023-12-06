import React, { Component } from 'react';

export class HomePage extends Component {
  render() {
    return (
      <div>
        {/* Custom Script */}
        <div className="my-4">&nbsp;</div>
        <div className="container">
          <div className="row px-20">
            <div className="col-md-8">
              <div className="row hero-card card-primary">
                <div className="col-md-4 d-flex-center">
                  <div className="card-title">
                    <h2>How we can help</h2>
                  </div>
                </div>
                <div className="col-md-8">
                  <p>
                    Sometimes our thoughts and feelings can overwhelm us. It
                    helps to get some Breathing Space. Pick up the phone - we're
                    here to listen.
                  </p>
                </div>
              </div>
              <div className="sub-card">
                <div className="row pt-0 sub-card-primary">
                  <div className="col-4 col-md-4 dark">
                    <a href>
                      <img src="/assets/img/icon_whatwedo.png" />
                      <p>How we can help</p>
                    </a>
                  </div>
                  <div className="col-4 col-md-4 light">
                    <img src="/assets/img/icon_needtotalk.png" />
                    <p>Need to talk</p>
                  </div>
                  <div className="col-4 col-md-4 dark">
                    <img src="/assets/img/icon_bslservice.png" />
                    <p>Other languages</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 pl-20">
              {/* Carousel */}
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators/dots */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide-to={0}
                    className="active"
                  />
                  <button
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide-to={1}
                  />
                  <button
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide-to={2}
                  />
                  <button
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide-to={3}
                  />
                </div>
                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="item_detail">
                      <img
                        src="assets/img/s1.jpg"
                        alt="Los Angeles"
                        className="d-block"
                        style={{ width: '100%' }}
                      />
                      <div className="carousel-captions">
                        <h3>
                          <a href="/news/2023/new-breathing-space-bench-in-selkirk/">
                            More online resources at NHSinform.scot
                          </a>
                        </h3>
                        <p>You don't have to deal with problems alone.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="item_detail">
                      <img
                        src="assets/img/s2.png"
                        alt="Chicago"
                        className="d-block"
                        style={{ width: '100%' }}
                      />
                      <div className="carousel-captions">
                        <h3>
                          <a href="/news/2023/new-breathing-space-bench-in-selkirk/">
                            {' '}
                            Mental wellbeing of people in Scotland
                          </a>
                        </h3>
                        <p>
                          Our advisors provide listening, information and advice
                          for people in Scotland feeling low, stressed or
                          anxious
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="item_detail">
                      <img
                        src="assets/img/s3.jpg"
                        alt="New York"
                        className="d-block"
                        style={{ width: '100%' }}
                      />
                      <div className="carousel-captions">
                        <h3>
                          <a href="/news/2023/new-breathing-space-bench-in-selkirk/">
                            {' '}
                            Need to talk?
                          </a>
                        </h3>
                        <p>
                          We're here to listen. Find out more about the support
                          offered through our phone and webchat services{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="item_detail">
                      <img
                        src="assets/img/s4.jpg"
                        alt="New York"
                        className="d-block"
                        style={{ width: '100%' }}
                      />
                      <div className="carousel-captions">
                        <h3>
                          <a href="/news/2023/new-breathing-space-bench-in-selkirk/">
                            Scotland's new Mental Health and Wellbeing Strategy
                          </a>
                        </h3>
                        <p>
                          A new strategy to improve the mental health and
                          wellbeing of people across Scotland has been
                          published.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Left and right controls/icons */}
              </div>
              {/* End Carousel */}
            </div>
          </div>
          <div className="row px-20">
            <div className="col-md-8">
              <div className="row hero-card card-success">
                <div className="col-md-4 d-flex-center">
                  <div className="card-title">
                    <h2>How we can help</h2>
                  </div>
                </div>
                <div className="col-md-8">
                  <p>
                    The whole spectrum of life is reflected in the calls we
                    receive to Breathing Space. The sooner you talk to us the
                    better you might feel. (Please note that Breathing Space is
                    a service for people in Scotland)
                  </p>
                </div>
              </div>
              <div className="sub-card">
                <div className="row pt-0 sub-card-success">
                  <div className="col-4 col-md-4 dark">
                    <img src="/assets/img/icon_yourmood.png" />
                    <p>Your mood</p>
                  </div>
                  <div className="col-4  col-md-4 light">
                    <img src="/assets/img/icon_yourproblems.png" />
                    <p>Your problems</p>
                  </div>
                  <div className="col-4  col-md-4 dark">
                    <img src="/assets/img/icon_worried.png" />
                    <p>Worried about someone ?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 pl-20">
              {/*Card section*/}
              <div className="card-s  card-violet">
                <div className="row">
                  <div className="col-md-7">
                    <h2>Need help now?</h2>
                  </div>
                  <div className="col-md-5">
                    <img src="/assets/img/phone.png" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="card-s card-blue">
                <div className="row">
                  <div className="col-md-7">
                    <h2>Your feedback</h2>
                  </div>
                  <div className="col-md-5">
                    <img
                      src="/assets/img/clipboard.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-s card-green">
                <div className="row">
                  <div className="col-md-7">
                    <h2>Living Life information</h2>
                  </div>
                  <div className="col-md-5">
                    <img
                      src="/assets/img/brollyman.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/*End card section*/}
            </div>
          </div>
          <section className="news-section mt-5">
            <div className="row border-top-bottom mb-4">
              <div className="col-md-4">
                <div className="text-violet news-heading">
                  <h3>About Breathing Space</h3>
                </div>
              </div>
              <div className="col-md-8">
                <div className="text-darkorange news-heading">
                  <h3>News</h3>
                </div>
              </div>
            </div>
            <div className="row news-overview">
              <div className="col-md-4">
                <div className="news-subhead">
                  <p>
                    A confidential phoneline for anyone in Scotland over the age
                    of 16, feeling low, anxious or depressed.
                  </p>
                  <a href="/about-us/who-we-are/" title="Who we are">
                    &gt; Who we are
                  </a>
                  <a href="/about-us/get-in-touch/" title="Get in touch">
                    &gt; Get in touch
                  </a>
                  <a href="/about-us/partnerships/" title="Partnerships">
                    &gt; Partnerships
                  </a>
                  <a href="/about-us/privacy/" title="Privacy">
                    &gt; Privacy
                  </a>
                </div>
              </div>
              <div className="col-md-8 news">
                <div className="row border-bottom mt-3">
                  <div className="col-md-6 mb-5 ">
                    <div className="row">
                      <div className="col-md-4 p-0">
                        <img src="/assets/img/batonofhope.jpg" />
                      </div>
                      <div className="col-md-8">
                        <div className="news-details">
                          <h3 className="news-title">26th June 2023</h3>
                          <p>Breathing Space support the Baton of Hope tour</p>
                          <a href className="news-link">
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="row">
                      <div className="col-md-4 p-0">
                        <img src="/assets/img/20230524_113744.jpg" />
                      </div>
                      <div className="col-md-8">
                        <div className="news-details">
                          <h3 className="news-title">1st June 2023</h3>
                          <p>Our latest bench at the Haining Estate, Selkirk</p>
                          <a href className="news-link">
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  border-bottom mt-3">
                  <div className="col-md-6 mb-5">
                    <div className="row">
                      <div className="col-md-4 p-0">
                        <img src="/assets/img/nhsinformlogo.png" />
                      </div>
                      <div className="col-md-8">
                        <div className="news-details">
                          <h3 className="news-title">20th May 2023</h3>
                          <p>
                            Free online resources for support with mental
                            wellbeing
                          </p>
                          <a href className="news-link">
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="row">
                      <div className="col-md-4 p-0">
                        <img src="/assets/img/leadhills-bench.jpg" />
                      </div>
                      <div className="col-md-8">
                        <div className="news-details">
                          <h3 className="news-title">17th February 2023</h3>
                          <p>Bench installed with Leadhills community</p>
                          <a href className="news-link">
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom mt-3">
                  <div className="col-md-6 mb-3">
                    <div className="row">
                      <div className="col-md-4 p-0">
                        <img src="/assets/img/bsd-film-2023.jpg" />
                      </div>
                      <div className="col-md-8">
                        <div className="news-details">
                          <h3 className="news-title">1st February 2023</h3>
                          <p>
                            Breathing Space Day approaches on 1st February 2023
                          </p>
                          <a href className="news-link">
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <a href="/News/">View all news</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HomePage;
