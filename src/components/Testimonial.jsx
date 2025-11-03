import React from 'react';
import Slider from 'react-slick';

import Testimonial1 from '../assets/testimonial-1.jpg';
import Testimonial2 from '../assets/testimonial-2.jpg';
import Testimonial3 from '../assets/testimonial-3.jpg';

const testimonials = [Testimonial1, Testimonial2, Testimonial3];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Testimonial = () => {
  return (
    <div className="container-fluid bg-light py-5 my-5" id="testimonial">
      <div className="container py-5">
        <h1 className="display-5 text-center mb-5">Testimonial</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="testimonial-left h-100">
              <img className="img-fluid" src={Testimonial1} alt="" />
              <img className="img-fluid" src={Testimonial2} alt="" />
              <img className="img-fluid" src={Testimonial3} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <Slider {...settings}>
              {testimonials.map((img, index) => (
                <div className="testimonial-item text-center" key={index}>
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                      src={img}
                      alt=""
                    />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                    lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <div className="testimonial-right h-100">
              <img className="img-fluid" src={Testimonial1} alt="" />
              <img className="img-fluid" src={Testimonial2} alt="" />
              <img className="img-fluid" src={Testimonial3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
