import "./App.css";
import logo from "./assets/images/myteam-logo.svg";
import remax from "./assets/images/remax.svg";
import kady from "./assets/images/kady.svg";
import aish from "./assets/images/aisha.svg";
import arthur from "./assets/images/arthur.svg";
import features1 from "./assets/images/features-1.svg";
import features2 from "./assets/images/features-2.svg";
import features3 from "./assets/images/features-3.svg";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__container container">
          <a className="logo-link" href="#">
            <img src={logo} alt="" />
          </a>
          <nav className="sitenav">
            <ul className="sitenav__list">
              <li className="sitenav__item">
                <a className="sitenav__link" href="#">
                  home
                </a>
              </li>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#">
                  about
                </a>
              </li>
            </ul>
          </nav>
          <a className="btn header-btn btn-light" href="#">
            contact us
          </a>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-container container">
            <div className="hero__title-wrapper">
              <h1 className="hero__title">
                Find the <br /> best{" "}
                <span className="text-primary">talent</span>
              </h1>
            </div>
            <div className="hero__info">
              <hr className="hero__divider site-divider" />
              <p className="hero__description">
                Finding the right people and building high performing teams can
                be hard. Most companies aren t tapping into the abundance of
                global talent. We re about to change that.
              </p>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="features__container container">
            <div className="features__info-title">
              <div className="site-divider features__divider"></div>
              <h2 className="features__title">
                Build & manage distributed teams like no one else.
              </h2>
            </div>
            <div className="features__list-wrapper">
              <ul className="features__list">
                <div className="features__item">
                  <img
                    className="features__image"
                    src={features1}
                    alt="Experienced Individuals"
                    width="72"
                    height="72"
                  />
                  <div className="features__info-wrapper">
                    <h3 className="features__item-title">
                      Experienced Individuals
                    </h3>
                    <p className="features__item-description">
                      Our network is made up of highly experienced professionals
                      who are passionate about what they do.
                    </p>
                  </div>
                </div>
                <div className="features__item">
                  <img
                    className="features__image"
                    src={features2}
                    alt="Easy to Implement"
                    width="72"
                    height="72"
                  />
                  <div className="features__info-wrapper">
                    <h3 className="features__item-title">Easy to Implement</h3>
                    <p className="features__item-description">
                      Our processes have been refined over years of
                      implementation meaning our teams always deliver.
                    </p>
                  </div>
                </div>
                <div className="features__item">
                  <img
                    className="features__image"
                    src={features3}
                    alt="Enhanced Productivity"
                    width="72"
                    height="72"
                  />
                  <div className="features__info-wrapper">
                    <h3 className="features__item-title">
                      Enhanced Productivity
                    </h3>
                    <p className="features__item-description">
                      Our customized platform with in-built analytics helps you{" "}
                      manage your distributed teams.
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </section>
        <section className="results">
          <div className="results-container container">
            <h2 className="results__heading">
              Delivering real results for top companies. Some of our{" "}
              <span className="text-secondary">success stories.</span>
            </h2>
            <div className="results__wrapper">
              <div className="results__wrapper-col-3">
                <img
                  className="results__wrapper-images"
                  src={remax}
                  alt="remax-image"
                  width="67"
                  height="56"
                />
                <div className="results-remax">
                  <p className="results__wrapper-description">
                    {" "}
                    “The team perfectly fit the specialized skill set required.
                    They focused on the most essential features helping us
                    launch the platform eight months faster than planned.”
                  </p>
                  <h4 className="results__wrapper-title">Kady Baker</h4>
                  <h5 className="results__wrapper-remaxx">
                    Product Manager at Bookmark
                  </h5>
                  <img
                    className="results__wrapper-remax"
                    src={kady}
                    alt="maneger"
                    width="62"
                    height="62"
                  />
                </div>
              </div>
              <div className="results__wrapper-col-3">
                <img
                  className="results__wrapper-images"
                  src={remax}
                  alt="remax-image"
                  width="67"
                  height="56"
                />
                <div className="results-remax">
                  <p className="results__wrapper-description">
                    “We needed to automate our entire onboarding process. The
                    team came in and built out the whole journey. Since going
                    live, user retention has gone through the roof!”
                  </p>
                  <h4 className="results__wrapper-title">Aiysha Reese</h4>

                  <h5 className="results__wrapper-remaxx">Founder of Manage</h5>
                  <img
                    className="results__wrapper-remax"
                    src={aish}
                    alt="maneger"
                    width="62"
                    height="62"
                  />
                </div>
              </div>
              <div className="results__wrapper-col-3">
                <img
                  className="results__wrapper-images"
                  src={remax}
                  alt="remax-image"
                  width="67"
                  height="56"
                />
                <div className="results-remax">
                  <p className="results__wrapper-description">
                    “Amazing. Our team helped us build an app that delivered a
                    new experience for hiring a physio. The launch was an
                    instant success with 100k downloads in the first month.”
                  </p>
                  <h4 className="results__wrapper-title">Arthur Clarke</h4>
                  <h5 className="results__wrapper-remaxx">
                    Co-founder of MyPhysio
                  </h5>
                  <img
                    className="results__wrapper-remax"
                    src={arthur}
                    alt="maneger"
                    width="62"
                    height="62"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="started drop">
          <div className="started-container container">
            <h2 className="started__title">Ready to get started?</h2>
            <a className="btn started-btn dark-btn" href="#">
              contact us
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-container container">
          <ul className="footer-list">
            <a className="footer__list-logo" href="#">
              <a className="logo-link" href="#">
                <img src={logo} alt="" />
              </a>
            </a>
            <div className="footer__list-page">
              <li className="footer__item">
                <a className="footer__list-link" href="/">
                  home
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__list-link" href="/pages/about">
                  about
                </a>
              </li>
            </div>
          </ul>
          <div className="footer-wrapper">
            <ul className="footer__wrapper-list">
              <li className="footer__wrapper-item">987 Hillcrest Lane</li>
              <li className="footer__wrapper-item">Irvine, CA </li>
              <li className="footer__wrapper-item">California 92714</li>
              <li className="footer__wrapper-item">Call Us : 949-833-7432</li>
            </ul>
          </div>
          <div className="socials">
            <div className="socials__wrap">
              <li className="socials__item">
                <a className="socials__link" href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a className="socials__link" href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.372 0 12C0 17.084 3.163 21.426 7.627 23.174C7.522 22.225 7.427 20.769 7.669 19.733C7.887 18.796 9.076 13.768 9.076 13.768C9.076 13.768 8.717 13.049 8.717 11.986C8.717 10.318 9.684 9.072 10.888 9.072C11.911 9.072 12.406 9.841 12.406 10.762C12.406 11.791 11.751 13.33 11.412 14.757C11.129 15.951 12.011 16.926 13.189 16.926C15.322 16.926 16.961 14.677 16.961 11.431C16.961 8.558 14.897 6.549 11.949 6.549C8.535 6.549 6.531 9.11 6.531 11.756C6.531 12.787 6.928 13.894 7.424 14.494C7.522 14.613 7.536 14.718 7.507 14.839L7.174 16.199C7.121 16.419 7 16.466 6.772 16.36C5.273 15.662 4.336 13.471 4.336 11.711C4.336 7.926 7.086 4.449 12.265 4.449C16.428 4.449 19.663 7.416 19.663 11.38C19.663 15.516 17.056 18.844 13.436 18.844C12.22 18.844 11.077 18.213 10.686 17.466L9.938 20.319C9.667 21.362 8.936 22.669 8.446 23.465C9.57 23.812 10.763 24 12 24C18.627 24 24 18.627 24 12C24 5.372 18.627 0 12 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a className="socials__link" href="#">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 2.55699C23.117 2.94899 22.168 3.21299 21.172 3.33199C22.189 2.72299 22.97 1.75799 23.337 0.607986C22.386 1.17199 21.332 1.58199 20.21 1.80299C19.313 0.845986 18.032 0.247986 16.616 0.247986C13.437 0.247986 11.101 3.21399 11.819 6.29299C7.728 6.08799 4.1 4.12799 1.671 1.14899C0.381 3.36199 1.002 6.25699 3.194 7.72299C2.388 7.69699 1.628 7.47599 0.965 7.10699C0.911 9.38799 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10599C22.505 4.41099 23.34 3.54399 24 2.55699Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </div>
            <p className="socials__description">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
