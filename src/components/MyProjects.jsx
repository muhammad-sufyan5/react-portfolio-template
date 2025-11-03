import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import projectData from "../data/projectData";

const MyProjects = () => {
  const [filterKey, setFilterKey] = useState("*");
  const gridRef = useRef(null);
  const isotope = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      imagesLoaded(gridRef.current, () => {
        isotope.current = new Isotope(gridRef.current, {
          itemSelector: ".portfolio-item",
          layoutMode: "fitRows",
        });
      });
    }

    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({ filter: filterKey });
    }
  }, [filterKey]);

  const handleFilter = (e) => {
    const newFilter = e.target.getAttribute("data-filter");
    setFilterKey(newFilter);

    // Toggle active class
    document
      .querySelectorAll("#portfolio-flters li")
      .forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Projects</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
              <li className="mx-3 active" data-filter="*" onClick={handleFilter}>
                All Projects
              </li>
              <li className="mx-3" data-filter=".first" onClick={handleFilter}>
                UI/UX Design
              </li>
              <li className="mx-3" data-filter=".second" onClick={handleFilter}>
                Graphic Design
              </li>
            </ul>
          </div>
        </div>

        <div
          className="row g-4 portfolio-container"
          ref={gridRef}
        >
          {projectData.map((project) => (
            <div
              key={project.id}
              className={`col-lg-4 col-md-6 portfolio-item ${project.category}`}
            >
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src={project.image} alt="" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href={project.image}
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="#"
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
