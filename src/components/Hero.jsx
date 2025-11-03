import React from "react";
import { ReactTyped } from 'react-typed'
import profileImage from "../assets/profile.png";

const Hero = () => {
  return (
    <>
      <div className="container-fluid hero-section bg-light my-6 mt-0" id="home">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 py-6 pb-0 pt-lg-0">
              <h3 className="text-primary mb-3">I'm</h3>
              <h1 className="display-3 mb-3">Muhammad Sufyan</h1>
              <h2 className="text-dark mb-3">
                <ReactTyped
                  strings={[
                    "Software Engineer",
                    "Web Developer",
                    "Full Stack Engineer",
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </h2>
              <div className="d-flex align-items-center pt-5">
                <a href="" className="btn btn-primary py-3 px-4 me-5">
                  Download CV
                </a>
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={profileImage} alt="profile" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal modal-video fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowfullscreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
