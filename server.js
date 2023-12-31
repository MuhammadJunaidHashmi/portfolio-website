// server.js (Node.js example)
const express = require('express');
const app = express();

// Your Google Analytics Tracking ID stored as an environment variable
const gaTrackingId = process.env.GA_TRACKING_ID;
//const base = "https://muhammadjunaidhashmi.vercel.app/"

app.get('/', (req, res) => {
  // Render your HTML with the dynamically inserted Google Analytics Tracking ID
  const dynamicBasePath = determineBasePath(req);  
const html = `
   <!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <link rel="icon" type="image/svg+xml" href="${dynamicBasePath}assets/img/fav.jpg" />
      <link rel="stylesheet" href="${dynamicBasePath}assets/swiper-bundle.min.css" />
      <link rel="stylesheet" href="${dynamicBasePath}assets/newcss.css" />
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
   <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${gaTrackingId}');
</script>
</head>

<body oncontextmenu="return false">
  <header class="header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo"> <img src="${dynamicBasePath}assets/img/fav.jpg" style="height: 40px;" alt="" class="" /></a>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list grid">
          <li class="nav__item">
            <a href="#home" class="nav__link active-link">
              <i class="uil uil-estate nav__icon"></i>Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">
              <i class="uil uil-user nav__icon"></i>About
            </a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link">
              <i class="uil uil-file-alt nav__icon"></i>Skills
            </a>
          </li>
          <li class="nav__item">
            <a href="#qualification" class="nav__link">
              <i class="uil uil-briefcase-alt nav__icon"></i>Qualification
            </a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link">
              <i class="uil uil-scenery nav__icon"></i>Services
            </a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link">
              <i class="uil uil-scenery nav__icon"></i>Projects
            </a>
          </li>


          <li class="nav__item">
            <a href="#contact" class="nav__link">
              <i class="uil uil-message nav__icon"></i>Contact-Me
            </a>
          </li>
        </ul>
        <i class="uil uil-times nav__close" id="nav-close"></i>
      </div>
      <div class="nav__btns">
        <!-- Theme change button -->
        <i class="uil uil-moon change-theme" id="theme-button"></i>

        <div class="nav__toggle" id="nav-toggle">
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
  <!-- main-->

  <main class="main">
    <!--========================= Home =====================-->

    <section class="home section" id="home">
      <div class="home__container container grid">
        <div class="home__content grid">
          <div class="home__social">
            <a href="https://www.linkedin.com/in/junaidhashmi41/" target="_blank" class="home__social-icon">
              <i class="uil uil-linkedin-alt home__icon"></i>
            </a>

            <a href="https://github.com/muhammadjunaidhashmi" target="_blank" class="home__social-icon">
              <i class="uil uil-github-alt home__icon"></i>
            </a>
          </div>
          <div class="home__img">
            <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                      130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                      97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                      0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                      165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                      129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                     -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                <image class="home__blob-img" x="-79" y="-46" xlink:href="${dynamicBasePath}assets/img/profile.jpg" />
              </g>
            </svg>
          </div>
          <div class="home__data">
            <h1 class="home__title">Hi, I'm Muhammad Junaid Hashmi</h1>
            <h3 class="home__subtitle">
              Software Engineer | React JS developer | Node.js (MERN) Developer | Freelancer
            </h3>
            <!-- <p class="home__description">
                undergraduate Software engineering student at
                <strong>COMSATS University </strong>, Lahore.
              </p> -->
            <a href="#contact" class="button button--flex">
              Contact me<i class="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>

        <div class="home__scroll">
          <a href="#about" class="home__scroll-button button--flex">
            <i class="uil uil-mouse-alt home__scroll-mouse"></i>
            <span class="home__scroll-name">Scroll down</span>
            <i class="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>

    <!--======================= About========================-->

    <section class="about section" id="about">
      <h2 class="section__title">About Me</h2>
      <span class="section__subtitle"></span>

      <div class="about__container container grid">
        <img src="${dynamicBasePath}assets/img/about.jpg" alt="" class="about__img" />

        <div class="about__data">
          <p class="about__description">
            I'm Software Engineer Graduated from COMSATS LHR,I have a self-motivated, I am passionate about creating
            innovative and user-friendly web and mobile applications that solve real-world problems and enhance user
            experience. I am eager to learn new technologies and frameworks, and to collaborate with other developers
            and clients.

          <div class="about__info">


            <div>
              <span class="about__info-title">80+</span>
              <span class="about__info-name">Freelance <br />
                Projects</span>
            </div>
            <div>
              <span class="about__info-title">10+</span>
              <span class="about__info-name">Frontend <br />Projects</span>
            </div>

            <div>
              <span class="about__info-title">1+</span>
              <span class="about__info-name">Years <br />experience</span>
            </div>
          </div>

          <div class="about__buttons">
            <a download="" href="${dynamicBasePath}assets\MyCV.pdf" class="button button--flex">
              Download CV<i class="fas fa-download button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!--===================== SKILLS =====================-->

    <section class="skills section" id="skills">
      <h2 class="section__title">Skills</h2>
      <span class="section__subtitle">My technical level</span>

      <div class="skills__container container grid">
        <div>
          <!--==================== Skill 1 =================-->
          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="fas fa-pencil-ruler skills__icon"></i>

              <div>
                <h1 class="skills__title">Tech Stack</h1>
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">React</h3>
                  <span class="skills__nuber">80%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__80"></span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Mern Stack</h3>
                  <span class="skills__nuber">70%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__70"></span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">React Native</h3>
                  <span class="skills__nuber">80%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__80"></span>
                </div>
              </div>
            </div>
          </div>

          <!--==================== Skill 3 =================-->
          <div class="skills__content skills__close">
            <div class="skills__header">
              <i class="fas fa-swatchbook skills__icon"></i>
              <div>
                <h1 class="skills__title">Languages</h1>
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">HTML</h3>
                  <span class="skills__nuber">80%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__80"></span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">CSS</h3>
                  <span class="skills__nuber">70%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__70"></span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">JavaScript</h3>
                  <span class="skills__nuber">70%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__70"></span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">C++</h3>
                  <span class="skills__nuber">80%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__80"></span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Java</h3>
                  <span class="skills__nuber">70%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__70"></span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">C#</h3>
                  <span class="skills__nuber">70%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__70"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--==================== Qualifications ==================-->

      <section class="qualification__section service__section" id="qualification">
        <h2 class="section__title">Qualification</h2>
      <!   <span class="section__subtitle">My personal journey</span>-->

        <div class="qualification__container container grid services__container">
          <div class="qualification__tabs">
            <div class="qualification__button button--flex qualification__active" data-target="#education">
              <i class="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
          </div>

          <div class="qualification__sections">
            <!--====== Qualification Content 1 ======-->
            <div class="qualification__content qualifiation__active services__content" data-content id="education">
              <!--====== Qualification 1 ======-->
              <div class="qualification__data">
                <div>
                  <div class=""><img style="height: 80px;"
                      src="https://seeklogo.com/images/C/comsats-university-islamabad-logo-B7C2E461B5-seeklogo.com.png"
                      class="mx-auto h-24" alt="Graduation Cap"></div>
                  <h3 class="qualification__title">BS Software engineering</h3>
                  <span class="qualification__subtitle">COMSATS University Islamabad, lahore Campus</span>
                  <div class="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    2019 - 2023
                  </div>
                  <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                  </span>
                  <div class="services__modal">
                    <div class="services__modal-content">
                      <h4 class="services__modal-title">University Summary :</h4>
                      <i class="uil uil-times services__modal-close"></i>
                      <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                          <i class="uil uil-check-circle services__modal-icon"></i>
                          <p>
                            studied core subjects of IT including Programming Fundamental, DSA, OPP, Database, Operating
                            systems etc.
                          </p>
                        </li>
                        <li class="services__modal-service">
                          <i
                            class="uil uil-check-circle services__modal-icon"
                          ></i>
                          <p>Scored B+</p>
                        </li>
                        <li class="services__modal-service">
                          <i class="uil uil-check-circle services__modal-icon"></i>
                          <p>
                            Did final year Project at Crosshair Technology pvt ltd.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              
              
                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>
              </div>

              <!--====== Qualification 2 ======-->
              <div class="qualification__data">
                <div></div>

                <div>
                  <span class="qualification__rounder"></span>
                  <!-- <span class="qualification__line"></span> -->
                </div>
                <div>
                  <div class=""><img style="height: 80px;"
                    src="https://seeklogo.com/images/P/punjab-group-of-colleges-logo-0F6CF800F3-seeklogo.com.png"
                    class="mx-auto h-24" alt="Graduation Cap"></div>
                  <h3 class="qualification__title">HSSC</h3>
                  <span class="qualification__subtitle">Punjab College of Science</span>
                  <div class="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                   2016 - 2018
                  </div>
                  <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                  </span>
                  <div class="services__modal">
                    <div class="services__modal-content">
                      <h4 class="services__modal-title">
                        Class 12th Summary :
                      </h4>
                      <i class="uil uil-times services__modal-close"></i>
                      <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                          <i class="uil uil-check-circle services__moda-icon"></i>

                          <p>
                            Subjects were studied: Physics, Chemistry, Maths,
                            English etc.
                          </p>
                        </li>
                        <li class="services__modal-service">
                          <i class="uil uil-check-circle services__moda-icon"></i>
                          <p>Scored B+</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!--====== Qualification 3 ======-->
            
              <!-- <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">SSC</h3>
                  <span class="qualification__subtitle">GOVT <br />Boys High School</span>
                  <div class="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    - 2016
                  </div>
                  <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                  </span>
                  <div class="services__modal">
                    <div class="services__modal-content">
                      <h4 class="services__modal-title">
                        Class 10th Summary :
                      </h4>
                      <i class="uil uil-times services__modal-close"></i>
                      <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                          <i class="uil uil-check-circle services__moda-icon"></i>
                          <p>
                            Subjects were studied: Computer, Maths, Physics, Chemistry English etc.
                          </p>
                        </li>
                        <li class="services__modal-service">
                          <i class="uil uil-check-circle services__moda-icon"></i>
                          <p>Scored B+</p>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </section>



      <section class="services section" id="services">
        <h2 class="section__title">Services</h2>
      <!   <span class="section__subtitle">Our Services</span>-->

        <div class="services-content">
          <div class="services-box">
            <i class="uil uil-code-branch"></i>
            <h3>Web </br>Development</h3>
            <span class="services__button">
              <a href="/">Learn More <p style="display: inline;" class="uil uil-arrow-right"></p></a>


            </span>
            <div class="services__modal">
              <div class="services__modal-content">
                <h4 class="services__modal-title">Web
                  Development</h4>
                <i class="uil uil-times services__modal-close"></i>
                <ul class="services__modal-services grid">
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      Craft modern and interactive user interfaces with React.js & Mern Stack, ensuring a seamless and
                      engaging user experience.
                    </p>

                  </li>
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      We specialize in crafting cutting-edge web applications,

                      from sleek websites to intricate web-based platforms.
                    </p>

                  </li>
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>From simple websites to complex platforms, innovation is woven into every line of code we
                      produce.</p>
                  </li>
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      Discover a realm where user-friendly meets scalable and robust.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="services-box">
            <i class="uil uil-server-network-alt"></i>
            <h3>Backend </br> Development</h3>
            <span class="services__button">
              <a href="/">Learn More <p style="display: inline;" class="uil uil-arrow-right"></p></a>


            </span>
            <div class="services__modal">
              <div class="services__modal-content">
                <h4 class="services__modal-title">Backend
                  Development</h4>
                <i class="uil uil-times services__modal-close"></i>
                <ul class="services__modal-services grid">
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      Node.js: Harness the power of JavaScript on the server-side with Node.js. Our proficiency in
                      Node.js allows us to build fast and scalable network applications.
                    </p>

                  </li>
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>Express.js: Speed up your backend development with Express.js, a minimal and flexible Node.js web
                      application framework that simplifies the creation of robust APIs.</p>
                  </li>
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      Database Expertise: We excel in utilizing databases such as MongoDB, PostgreSQL, and MySQL to
                      ensure efficient data storage and retrieval.
                    </p>
                  </li>
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      API Development: Craft seamless connections between your frontend and backend with our API
                      development expertise, facilitating smooth data exchange and interaction.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="services-box">
            <i class="uil uil-cloud-bookmark"></i>
            <h3>UI/UX </br>Design</h3>
            <span class="services__button">
              <a href="/">Learn More <p style="display: inline;" class="uil uil-arrow-right"></p></a>


            </span>
            <div class="services__modal">
              <div class="services__modal-content">
                <h4 class="services__modal-title">UI/UX
                  Design</h4>
                <i class="uil uil-times services__modal-close"></i>
                <ul class="services__modal-services grid">
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      Unlock the full potential of your digital presence with UI/UX design services.
                      We are dedicated to creating visually stunning and seamlessly functional interfaces that captivate
                      your audience and elevate your brand.
                    </p>

                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div class="services-box">
            <i class="uil  uil-android"></i>
            <h3>App </br>Development</h3>
            <span class="services__button">
              <a href="/">Learn More <p style="display: inline;" class="uil uil-arrow-right"></p></a>


            </span>
            <div class="services__modal">
              <div class="services__modal-content">
                <h4 class="services__modal-title">App
                  Development</h4>
                <i class="uil uil-times services__modal-close"></i>
                <ul class="services__modal-services grid">
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>
                      React Native: Power your cross-platform apps with React Native, combining the efficiency of React
                      with the performance of native platforms.
                    </p>

                  </li>
                  <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>Firebase: Leverage the power of Google's Firebase for real-time database, authentication, and
                      hosting, ensuring your app is backed by a scalable and reliable infrastructure.</p>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--=================== Portfolio ===================-->
      <section class="portfolio section" id="portfolio">
        <h2 class="section__title">Projects</h2>
        <! <span class="section__subtitle">Most recent work</span>-->

        <div class="portfolio__container container swiper-container">
          <div class="swiper-wrapper">
            <!-- ------------------------portfollio 1-------------------- -->
            <div class="portfolio__content grid swiper-slide">
              <img src="${dynamicBasePath}assets/img/portfolio1.png" class="portfolio__img" />

              <div class="portfolio__data">
                <h3 class="portfolio__title">
                  Cargo Management System
                </h3>
                <p class="portfolio__description">
                  This project cargo management system (CMS) is a Java desktop App that helps businesses manage and
                  track the movement of goods throughout the supply chain.
                </p>
                <a href="https://github.com/MuhammadJunaidHashmi/airline-cargo-management-system"
                  class="button button--flex button--small portfolio__button">
                  GitHub Repository
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a>
                <!-- <a
                  href="https://github.com/muhammadjunaidhashmi"
                  class="button button--flex button--small portfolio__button"
                >
                  See Live
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a> -->
              </div>
            </div>

            <!-- ------------------------portfollio 2-------------------- -->
            <div class="portfolio__content grid swiper-slide">
              <img src="${dynamicBasePath}assets/img/portfolio2.png" class="portfolio__img" />

              <div class="portfolio__data">
                <h3 class="portfolio__title">Researcher Personal Website</h3>
                <p class="portfolio__description">
                  This a Researcher personal website for showcasing their expertise and promoting their work.

                </p>
                <a href="https://github.com/MuhammadJunaidHashmi/research-personal-webiste"
                  class="button button--flex button--small portfolio__button">
                  GitHub Repository
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a>
                <a href="https://michellelynnharper.com/" class="button button--flex button--small portfolio__button">
                  See Live
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a>
              </div>
            </div>
            <!-- ------------------------portfollio 3-------------------- -->
            <div class="portfolio__content grid swiper-slide">
              <img src="${dynamicBasePath}assets/img/portfolio3.png" class="portfolio__img" />

              <div class="portfolio__data">
                <h3 class="portfolio__title">Personality Test App</h3>
                <p class="portfolio__description">
                  I have developed user-friendly App (Personality test ) using react.js and Node.js.
                  Personality test apps use questionnaires to assess your preferences in different areas, such as how
                  you interact with the world, how you make decisions, and how you relate to others.
                  Based on your responses, the app will identify your personality type.
                </p>
                <a href="https://github.com/MuhammadJunaidHashmi/personalityTest "
                  class="button button--flex button--small portfolio__button">
                  GitHub Repository
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a>
                <!-- <a
                  href="https://github.com/muhammadjunaidhashmi"
                  class="button button--flex button--small portfolio__button"
                >
                  See Live
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a> -->
              </div>
            </div>

            <!-- ------------------------portfollio 4-------------------- -->
            <div class="portfolio__content grid swiper-slide">
              <img src="${dynamicBasePath}assets/img/portfolio4.png" class="portfolio__img" />

              <div class="portfolio__data">
                <h3 class="portfolio__title">Portfolio website</h3>
                <p class="portfolio__description">
                  Portfolio website for a Life Coach.
                </p>
                <a href="https://github.com/MuhammadJunaidHashmi/life-coach-website"
                  class="button button--flex button--small portfolio__button">
                  GitHub Repository
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a>
                <a href="http://beautifullyrestored.club/" class="button button--flex button--small portfolio__button">
                  See Live
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- add arrows -->
          <div class="swiper-button-next">
            <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div class="swiper-button-prev">
            <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>
          <!-- add pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </section>

      <!--===================== Contact Me =====================-->
      <section class="contact section" id="contact">
        <h2 class="section__title">Contact Me</h2>
        <span class="section__subtitle">Get in touch</span>

        <div class="contact__container container grid">
          <div>
            <div class="contact__information">
              <i class="uil uil-calling contact__icon"></i>

              <div>
                <h3 class="contact__title">Call Me</h3>
                <span class="contact__subtitle"><a href="tel:6362243314"></a>+92 306 6118092</span>
              </div>
            </div>

            <div class="contact__information">
              <i class="uil uil-envelope-minus contact__icon"></i>

              <div>
                <h3 class="contact__title">Email</h3>
                <span class="contact__subtitle">muhammadjunaidhashmii@gmail.com</span>
              </div>
            </div>

            <div class="contact__information">
              <i class="uil uil-map-marker contact__icon"></i>

              <div>
                <h3 class="contact__title">Location</h3>
                <span class="contact__subtitle">Shalimar, Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          <form action="" class="contact__form grid">
            <div class="contact__inputs grid">
              <div class="contact__content">
                <label for="" class="content__label">Name</label>
                <input type="text" class="contact__input" />
              </div>

              <div class="contact__content">
                <label for="" class="content__label">Email</label>
                <input type="Email" class="contact__input" />
              </div>
            </div>

            <div class="contact__content">
              <label for="" class="content__label">Message</label>
              <textarea name="" id="" cols="0" rows="7" class="contact__input"></textarea>
            </div>

            <div>
              <a href=" mailto: muhammadjunaidhashmii@gmail.com?subject=Testing out mailto! &body=This is only a test!"
                class="button button--flex">
                Send Message
                <i class="uil uil-message button__icon"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
  </main>

  <!--================== Footer ===============-->
  <footer class="footer">
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">M.J.H</h1>
          <span class="footer__subtitle">Software Engineer</span>
        </div>

        <ul class="footer__links">
          <li>
            <a href="#qualification" class="footer__link">Qualification</a>
          </li>
          <li>
            <a href="#portfolio" class="footer__link">Portfolio</a>
          </li>
          <li>
            <a href="#contact" class="footer__link">Contact Me</a>
          </li>
        </ul>

        <div class="footer__socials">
          <a href="https://github.com/muhammadjunaidhashmi/" class="footer__social" target="__blank">
            <i class="uil uil-github-alt"></i>
          </a>

          <a href="https://www.linkedin.com/in/junaidhashmi41/" target="__blank" class="footer__social">
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://twitter.com/mjunaidhashmii" target="__blank" class="footer__social">
            <i class="uil uil-twitter-alt"></i>
          </a>
        </div>
      </div>

      <p class="footer__copy">&#169; M.J.H. All right reserved</p>
    </div>
  </footer>

  <!--================== SCROLL TOP ==================-->
  <a href="#" class="scrollup" id="scroll-up">
    <i class="uil uil-arrow-up scrollup__icon"></i>
  </a>

  <script type="text/javascript" src="${dynamicBasePath}assets/swiper-bundle.min.js"></script>

  <script src="${dynamicBasePath}assets/ptj.js"></script>
</body>

</html>
  `;

  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function determineBasePath(req) {
  // Your logic to determine the base path dynamically based on the request
  // For example, you might check if the request is coming from a specific domain or path.
  // Return the determined base path as a string.
  return "https://muhammadjunaidhashmi.vercel.app/";
}