// import styles from "./styles.module.css";
import aboutus from './img/aboutus.jpg';
import whychooseus from './img/why choose us.jpg';
import webd from './img/webd.jpg';
import data from './img/data.jpg';
import seo from './img/seo.jpg';
import digital from './img/digital.jpg';
import './index.css';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div>
		<>
  {/* Spinner Start */}
  <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div className="spinner" />
  </div>
  {/* Navbar*/}
  {/* Navbar*/}
  <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <i className="fa fa-bars" style={{ color: "white", fontSize: 28 }} />
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#services"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#services">
                  Web Development
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#services">
                  Data Science &amp; Analytics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#services">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#services">
                  SEO Website Strategy
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#courses-section"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Courses
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#courses-section">
                  SQL for Data Analytics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#courses-section">
                  Python for Data Analytics{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#courses-section">
                  Web Development{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#courses-section">
                  Data Science with Machine Learning
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Academia
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Educational Partnerships
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Blogs
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Blog Grid
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Blog Details
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#about">
              About
            </a>
          </li>
          <li className="nav-item nav-button">
            {/* <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"></butaton> */}
            <a href="#contact" className=" nav-link-button btn  py-2 px-4 ms-3">
              Contact-Us
            </a>
          </li>
		  <li className="nav-item nav-button">
            {/* <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"></butaton> */}
            <a href="#contact" className=" nav-link-button btn  py-2 px-4 ms-3" onClick={handleLogout}>
              Log-out
            </a>
			</li>
        </ul>
      </div>
    </div>
  </nav>

  <div>
    <section id="home-section">
      <div id="home-section-card">
        <p id="home-section-card-para">Best in Class Digital Solutions</p>
        <h1 id="home-section-card-heading">
          <b>Tailored for your Needs</b>
        </h1>
        <p
          style={{ textAlign: "center", paddingTop: 30 }}
          id="home-section-card-para"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          minima provident iure Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde recusandae provident nemo corporis, consectetur
          illum quod ab doloremque hic facere.n
        </p>
        <div id="home-section-interest">
          <input
            id="home-section-interest-input"
            name="E-mail"
            type="email"
            placeholder="Your email"
          />
          <button type="submit" id="home-section-card-btn">
            {" "}
            Yes, I'm interested
          </button>
        </div>
        {/* </form> */}
      </div>
    </section>
  </div>
  {/* Navbar & Carousel End */}
  {/* Full Screen Search Start */}
  <div className="modal fade" id="searchModal" tabIndex={-1}>
    <div className="modal-dialog modal-fullscreen">
      <div
        className="modal-content"
        style={{ background: "rgba(9, 30, 62, .7)" }}
      >
        <div className="modal-header border-0">
          <button
            type="button"
            className="btn bg-white btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ maxWidth: 600 }}>
            <input
              type="text"
              className="form-control bg-transparent border-primary p-3"
              placeholder="Type search keyword"
            />
            <button className="btn btn-primary px-4">
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div
    id="about"
    className="container-fluid py-5 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-uppercase">About Us</h5>
            <h1 className="mb-0">
              The <span style={{ color: "cornflowerblue" }}>Best</span> IT
              Solution With 10 Years of Experience
            </h1>
          </div>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor eirmod magna dolore erat amet
          </p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-3">
                <i
                  style={{ color: "cornflowerblue" }}
                  className="fa fa-check  me-3"
                />
                Award Winning
              </h5>
              <h5 className="mb-3">
                <i
                  style={{ color: "cornflowerblue" }}
                  className="fa fa-check  me-3"
                />
                Professional Staff
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-3">
                <i
                  style={{ color: "cornflowerblue" }}
                  className="fa fa-check  me-3"
                />
                24/7 Support
              </h5>
              <h5 className="mb-3">
                <i
                  style={{ color: "cornflowerblue" }}
                  className="fa fa-check  me-3"
                />
                Fair Prices
              </h5>
            </div>
          </div>
          <div
            className="d-flex align-items-center mb-4 wow fadeIn"
            data-wow-delay="0.6s"
          ></div>
        </div>
        <div className="col-lg-5" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src={aboutus}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Features Start */}
  <section>
    <div
      id="feature"
      className="container-fluid py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold  text-uppercase">Why Choose Us</h5>
          <h1 className="mb-0">
            We Are Here to{" "}
            <span style={{ color: "cornflowerblue" }}>Grow </span> Your Business
            Exponentially
          </h1>
        </div>
        <div className="row g-5">
          <div
            className="col-lg-4  wow zoomIn"
            data-wow-delay="0.9s"
            style={{ minHeight: 350 }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.1s"
                src={whychooseus}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                <div
                  className="bg-dark rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-cubes text-white" />
                </div>
                <h4>Best In Industry</h4>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                  diam dolor
                </p>
              </div>
              <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                <div
                  className="bg-dark rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-award text-white" />
                </div>
                <h4>Award Winning</h4>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                  diam dolor
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                <div
                  className="bg-dark rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-users-cog text-white" />
                </div>
                <h4>Professional Staff</h4>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                  diam dolor
                </p>
              </div>
              <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                <div
                  className="bg-dark rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <h4>24/7 Support</h4>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                  diam dolor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Features Start */}
  {/* Service Start */}
  <div
    id="services"
    className="container-fluid py-5 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold  text-uppercase">Our Services</h5>
        <h1 className="mb-0">
          Custom IT Solutions for Your{" "}
          <span style={{ color: "cornflowerblue" }}>Successful </span> Business
        </h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="card">
            <img
              className="card-img-top"
              src={webd}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                style={{ backgroundColor: "grey" }}
                href="#"
                className="btn btn-primary text-light"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div
          className="bg-blurr col-lg-4 col-md-6 wow zoomIn"
          data-wow-delay="0.6s"
        >
          <div className="card">
            <img
              className="card-img-top"
              src={data}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Data Science &amp; Analytics</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                style={{ backgroundColor: "grey" }}
                href="#"
                className="btn btn-primary text-light"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
          <div className="card">
            <img
              className="card-img-top"
              src={seo}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">SEO - Search Engine Optimization</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                style={{ backgroundColor: "grey" }}
                href="#"
                className="btn btn-primary text-light"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6  zoomIn" data-wow-delay="0.3s">
          <div className="card">
            <img
              className="card-img-top"
              src={digital}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Digital Marketing </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                style={{ backgroundColor: "grey" }}
                href="#"
                className="btn btn-primary text-light"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div className="card">
            <img
              className="card-img-top"
              src={seo}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">SEO Website Strategy</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                style={{ backgroundColor: "grey" }}
                href="#"
                className="btn btn-primary text-light"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
          <div
            style={{ backgroundColor: "#434344" }}
            className="position-relative rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5"
          >
            <h3 className="text-white mb-3">More Services for You</h3>
            <p className="text-white mb-3">
              Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est
              magna stet eirmod
            </p>
            <h2 className="text-white mb-0">+91 9960573660</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* couser section start  */}
  <section id="courses-section">
    <h1 style={{ textAlign: "center", marginBottom: 50 }}>Courses </h1>
    <div className="card course-card ms-5 me-5">
      <div className="card-header">course</div>
      <div className="card-body cardbody">
        <div className="cardbody-img" style={{ float: "left", width: "30%" }}>
          <img
            className="cardbody-main-img"
            style={{ width: "70%" }}
            src={seo}
          />
        </div>
        <div className="cardbody-text" style={{ float: "right", width: "70%" }}>
          <h5 className="card-title">SQL for Data Analytics</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            reiciendis quae tempora autem, perferendis ducimus, ut quisquam
            praesentium velit laudantium voluptatum minus ab eos ratione, quo
            accusamus! Ratione voluptas totam aspernatur quis nemo amet non in,
            adipisci ex vero corporis consequatur, nam quae! Eos, earum quis
            nobis commodi eaque aspernatur!.
          </p>
          <a
            href="#"
            style={{ backgroundColor: "grey" }}
            className="btn btn-primary text-light"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
    <div className="card course-card ms-5 me-5 mt-5">
      <div className="card-header">Course</div>
      <div className="card-body cardbody">
        <div className="cardbody-img" style={{ float: "left", width: "30%" }}>
          <img
            className="cardbody-main-img"
            style={{ width: "70%" }}
            src={data}
          />
        </div>
        <div className="cardbody-text" style={{ float: "right", width: "70%" }}>
          <h5 className="card-title">Phython for Data Analytics</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            reiciendis quae tempora autem, perferendis ducimus, ut quisquam
            praesentium velit laudantium voluptatum minus ab eos ratione, quo
            accusamus! Ratione voluptas totam aspernatur quis nemo amet non in,
            adipisci ex vero corporis consequatur, nam quae! Eos, earum quis
            nobis commodi eaque aspernatur!.
          </p>
          <a
            href="#"
            style={{ backgroundColor: "grey" }}
            className="btn btn-primary text-light"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
    <div className="card course-card ms-5 me-5 mt-5">
      <div className="card-header">Course</div>
      <div className="card-body cardbody">
        <div className="cardbody-img" style={{ float: "left", width: "30%" }}>
          <img
            className="cardbody-main-img"
            style={{ width: "70%" }}
            src={webd}
          />
        </div>
        <div className="cardbody-text" style={{ float: "right", width: "70%" }}>
          <h5 className="card-title">Web Development</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            reiciendis quae tempora autem, perferendis ducimus, ut quisquam
            praesentium velit laudantium voluptatum minus ab eos ratione, quo
            accusamus! Ratione voluptas totam aspernatur quis nemo amet non in,
            adipisci ex vero corporis consequatur, nam quae! Eos, earum quis
            nobis commodi eaque aspernatur!.
          </p>
          <a
            href="#"
            style={{ backgroundColor: "grey" }}
            className="btn btn-primary text-light"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
    <div className="card course-card ms-5 me-5 mt-5">
      <div className="card-header">Course</div>
      <div className="card-body cardbody">
        <div className="cardbody-img" style={{ float: "left", width: "30%" }}>
          <img
            className="cardbody-main-img"
            style={{ width: "70%" }}
            src={data}
          />
        </div>
        <div className="cardbody-text" style={{ float: "right", width: "70%" }}>
          <h5 className="card-title">Data Science with Machine Learning</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            reiciendis quae tempora autem, perferendis ducimus, ut quisquam
            praesentium velit laudantium voluptatum minus ab eos ratione, quo
            accusamus! Ratione voluptas totam aspernatur quis nemo amet non in,
            adipisci ex vero corporis consequatur, nam quae! Eos, earum quis
            nobis commodi eaque aspernatur!.
          </p>
          <a
            href="#"
            style={{ backgroundColor: "grey" }}
            className="btn btn-primary text-light"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* courses section end  */}
  {/* Pricing Plan Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Pricing Plans</h5>
          <h1 class="mb-0">We are Offering Competitive Prices for Our Clients</h1>
      </div>
      <div class="row g-0">
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div class="bg-light rounded">
                  <div class="border-bottom py-4 px-5 mb-4">
                      <h4 class="text-primary mb-1">Basic Plan</h4>
                      <small class="text-uppercase">For Small Size Business</small>
                  </div>
                  <div class="p-5 pt-0">
                      <h1 class="display-5 mb-3">
                          <small class="align-top" style="font-size: 22px; line-height: 45px;">$</small>49.00<small
                              class="align-bottom" style="font-size: 16px; line-height: 40px;">/ Month</small>
                      </h1>
                      <div class="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i class="fa fa-check text-primary pt-1"></i></div>
                      <div class="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i class="fa fa-check text-primary pt-1"></i></div>
                      <div class="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i class="fa fa-times text-danger pt-1"></i></div>
                      <div class="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i class="fa fa-times text-danger pt-1"></i></div>
                      <a href="" class="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div class="bg-white rounded shadow position-relative" style="z-index: 1;">
                  <div class="border-bottom py-4 px-5 mb-4">
                      <h4 class="text-primary mb-1">Standard Plan</h4>
                      <small class="text-uppercase">For Medium Size Business</small>
                  </div>
                  <div class="p-5 pt-0">
                      <h1 class="display-5 mb-3">
                          <small class="align-top" style="font-size: 22px; line-height: 45px;">$</small>99.00<small
                              class="align-bottom" style="font-size: 16px; line-height: 40px;">/ Month</small>
                      </h1>
                      <div class="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i class="fa fa-check text-primary pt-1"></i></div>
                      <div class="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i class="fa fa-check text-primary pt-1"></i></div>
                      <div class="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i class="fa fa-check text-primary pt-1"></i></div>
                      <div class="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i class="fa fa-times text-danger pt-1"></i></div>
                      <a href="" class="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div class="bg-light rounded">
                  <div class="border-bottom py-4 px-5 mb-4">
                      <h4 class="text-primary mb-1">Advanced Plan</h4>
                      <small class="text-uppercase">For Large Size Business</small>
                  </div>
                  <div class="p-5 pt-0">
                      <h1 class="display-5 mb-3">
                          <small class="align-top" style="font-size: 22px; line-height: 45px;">$</small>149.00<small
                              class="align-bottom" style="font-size: 16px; line-height: 40px;">/ Month</small>
                      </h1>
                      <div class="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i class="fa fa-check text-primary pt-1"></i></div>
                      <div class="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i class="fa fa-check text-primary pt-1"></i></div>
                      <div class="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i class="fa fa-check text-primary pt-1"></i></div>
                      <div class="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i class="fa fa-check text-primary pt-1"></i></div>
                      <a href="" class="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Pricing Plan End */}
  {/* Quote Start */}
  <div
    id="contact"
    className="container-fluid py-5 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-dark text-uppercase">
              Request A Quote
            </h5>
            <h1 className="mb-0">
              Need A Free Quote? Please Feel Free to{" "}
              <span style={{ color: "cornflowerblue", padding: "0 5px 0 5px" }}>
                Contact Us
              </span>
            </h1>
          </div>
          <div className="row gx-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-4">
                <i
                  style={{ color: "cornflowerblue" }}
                  className="fa fa-reply  me-3"
                />
                Reply within 24 hours
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-4">
                <i
                  style={{ color: "cornflowerblue" }}
                  className="fa fa-phone-alt  me-3"
                />
                24 hrs telephone support
              </h5>
            </div>
          </div>
          <p className="mb-4">
            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
            ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
            rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
            et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea
            dolore sanctus sed et. Takimata takimata sanctus sed.
          </p>
          <div
            className="d-flex align-items-center mt-2 wow zoomIn"
            data-wow-delay="0.6s"
          >
            <div
              className="bg-dark d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className=" mb-0">+012 345 6789</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div
            style={{ backgroundColor: "#434344" }}
            className=" border-3 rounded h-100 d-flex align-items-center p-5 wow zoomIn"
            data-wow-delay="0.9s"
          >
            <form
              name="'submit-to-google-sheet'"
              method="post"
              action="https://script.google.com/macros/s/AKfycbypZABdRNb5m5leS0CkvV3bFcRdcVeAXo1mdTeJT4vioRXbqt73JagvQ85Ky8VtW5189A/exec"
            >
              <div className="row g-3">
                <div className="col-xl-12">
                  <input
                    type="text"
                    name="Name"
                    className="form-control bg-light border-0"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    name="E-mail"
                    className="form-control bg-light border-0"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="Service"
                    className="form-control bg-light border-0"
                    placeholder="Your Service"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12" style={{ display: "none !important" }}>
                  <input
                    name="Date"
                    defaultValue="datetime-local"
                    className=" date form-control bg-light border-0"
                    placeholder="Your Service"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="Message"
                    className="form-control bg-light border-0"
                    rows={3}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-light w-100 py-3" type="submit">
                    Request A Quote
                  </button>
                </div>
              </div>
              <span id="msg" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quote End


    <!-- Testimonial Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-4 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 class="mb-0">What Our Clients Say About Our Digital Services</h1>
      </div>
      <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
          <div class="testimonial-item bg-light my-4">
              <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img class="img-fluid rounded" src="img/testimonial-1.jpg" style="width: 60px; height: 60px;" >
                  <div class="ps-4">
                      <h4 class="text-primary mb-1">Client Name</h4>
                      <small class="text-uppercase">Profession</small>
                  </div>
              </div>
              <div class="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </div>
          </div>
          <div class="testimonial-item bg-light my-4">
              <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img class="img-fluid rounded" src="img/testimonial-2.jpg" style="width: 60px; height: 60px;" >
                  <div class="ps-4">
                      <h4 class="text-primary mb-1">Client Name</h4>
                      <small class="text-uppercase">Profession</small>
                  </div>
              </div>
              <div class="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </div>
          </div>
          <div class="testimonial-item bg-light my-4">
              <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img class="img-fluid rounded" src="img/testimonial-3.jpg" style="width: 60px; height: 60px;" >
                  <div class="ps-4">
                      <h4 class="text-primary mb-1">Client Name</h4>
                      <small class="text-uppercase">Profession</small>
                  </div>
              </div>
              <div class="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </div>
          </div>
          <div class="testimonial-item bg-light my-4">
              <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img class="img-fluid rounded" src="img/testimonial-4.jpg" style="width: 60px; height: 60px;" >
                  <div class="ps-4">
                      <h4 class="text-primary mb-1">Client Name</h4>
                      <small class="text-uppercase">Profession</small>
                  </div>
              </div>
              <div class="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Testimonial End */}
  {/* Team Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Team Members</h5>
          <h1 class="mb-0">Professional Stuffs Ready to Help Your Business</h1>
      </div>
      <div class="row g-5">
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div class="team-item bg-light rounded overflow-hidden">
                  <div class="team-img position-relative overflow-hidden">
                      <img class="img-fluid w-100" src="img/team-1.jpg" alt="">
                      <div class="team-social">
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                      </div>
                  </div>
                  <div class="text-center py-4">
                      <h4 class="text-primary">Full Name</h4>
                      <p class="text-uppercase m-0">Designation</p>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div class="team-item bg-light rounded overflow-hidden">
                  <div class="team-img position-relative overflow-hidden">
                      <img class="img-fluid w-100" src="img/team-2.jpg" alt="">
                      <div class="team-social">
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                      </div>
                  </div>
                  <div class="text-center py-4">
                      <h4 class="text-primary">Full Name</h4>
                      <p class="text-uppercase m-0">Designation</p>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div class="team-item bg-light rounded overflow-hidden">
                  <div class="team-img position-relative overflow-hidden">
                      <img class="img-fluid w-100" src="img/team-3.jpg" alt="">
                      <div class="team-social">
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                      </div>
                  </div>
                  <div class="text-center py-4">
                      <h4 class="text-primary">Full Name</h4>
                      <p class="text-uppercase m-0">Designation</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Team End */}
  {/* Blog Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Latest Blog</h5>
          <h1 class="mb-0">Read The Latest Articles from Our Blog Post</h1>
      </div>
      <div class="row g-5">
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div class="blog-item bg-light rounded overflow-hidden">
                  <div class="blog-img position-relative overflow-hidden">
                      <img class="img-fluid" src="img/blog-1.jpg" alt="">
                      <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                  </div>
                  <div class="p-4">
                      <div class="d-flex mb-3">
                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                          <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                      </div>
                      <h4 class="mb-3">How to build a website</h4>
                      <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                      <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div class="blog-item bg-light rounded overflow-hidden">
                  <div class="blog-img position-relative overflow-hidden">
                      <img class="img-fluid" src="img/blog-2.jpg" alt="">
                      <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                  </div>
                  <div class="p-4">
                      <div class="d-flex mb-3">
                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                          <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                      </div>
                      <h4 class="mb-3">How to build a website</h4>
                      <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                      <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div class="blog-item bg-danger rounded overflow-hidden">
                  <div class="blog-img position-relative overflow-hidden">
                      <img class="img-fluid" src="img/blog-3.jpg" alt="">
                      <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                  </div>
                  <div class="p-4">
                      <div class="d-flex mb-3">
                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                          <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                      </div>
                      <h4 class="mb-3 ">How to build a website</h4>
                      <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                      <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Blog Start */}
  {/* Vendor Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5 mb-5">
      <div class="bg-white">
          <div class="owl-carousel vendor-carousel">
              <img src="img/vendor-1.jpg" alt="">
              <img src="img/vendor-2.jpg" alt="">
              <img src="img/vendor-3.jpg" alt="">
              <img src="img/vendor-4.jpg" alt="">
              <img src="img/vendor-5.jpg" alt="">
              <img src="img/vendor-6.jpg" alt="">
              <img src="img/vendor-7.jpg" alt="">
              <img src="img/vendor-8.jpg" alt="">
              <img src="img/vendor-9.jpg" alt="">
          </div>
      </div>
  </div>
    </div> */}
  {/* Vendor End */}
  {/* Footer Start */}
  <div
    style={{ backgroundColor: "#434344" }}
    className="container-fluid text-light mt-5 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="row gx-5">
        {/* <div class="col-lg-4 col-md-6 footer-about">
              <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                  <a href="index.html" class="navbar-brand">
                      <h1 class="m-0 text-white"><i class="fa fa-user-tie me-2"></i>Startup</h1>
                  </a>
                  <p class="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                  <form action="">
                      <div class="input-group">
                          <input type="text" class="form-control border-white p-3" placeholder="Your Email">
                          <button class="btn btn-dark">Sign Up</button>
                      </div>
                  </form>
              </div>
          </div> */}
        <div className="col-lg-8 col-md-6">
          <div className="row gx-5">
            <div
              style={{ borderRight: "2px solid black" }}
              id="footer-section-get"
              className="col-lg-4 col-md-12 pt-5"
            >
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Get In Touch</h3>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-geo-alt text-primary me-2" />
                <p className="mb-0">123 Street, New York, USA</p>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-envelope-open text-primary me-2" />
                <p className="mb-0">info@example.com</p>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-telephone text-primary me-2" />
                <p className="mb-0">+012 345 67890</p>
              </div>
              <div className="d-flex mt-4">
                <a className="btn btn-primary btn-square me-2" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-primary btn-square me-2" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-primary btn-square me-2" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-primary btn-square" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Quick Links</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#home-section">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Home
                </a>
                <a className="text-light mb-2" href="#about">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  About Us
                </a>
                <a className="text-light mb-2" href="#services">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Our Services
                </a>
                <a className="text-light mb-2" href="#courses-section">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Courses
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Latest Blog
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Academia
                </a>
                <a className="text-light" href="#contact">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Contact Us
                </a>
              </div>
            </div>
            {/* <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                      <div class="section-title section-title-sm position-relative pb-3 mb-4">
                          <h3 class="text-light mb-0">Popular Links</h3>
                      </div>
                      <div class="link-animated d-flex flex-column justify-content-start">
                          <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                          <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                          <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                          <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                          <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                          <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                      </div>
                  </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    style={{ backgroundColor: "black" }}
    className="container-fluid text-white"
  >
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-6">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: 75 }}
          >
            <p className="mb-0">
              ©{" "}
              <a className="text-white border-bottom" href="#home-section">
                Yojana Digitech
              </a>
              . All Rights Reserved.
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a
    style={{ backgroundColor: "grey" }}
    href="#home-section"
    className="btn btn-lg btn-secondary btn-lg-square rounded back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>
</>

			{/* <nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav> */}
		</div>
	);
};

export default Main;
