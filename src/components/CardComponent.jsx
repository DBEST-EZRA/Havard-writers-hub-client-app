import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card shadow-sm">
            {/* <img
              src="https://via.placeholder.com/600x400"
              className="card-img-top"
              alt="Card image cap"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Microsoft Access Assignment</h5>
              <p className="card-text">
                This is a lengthy description. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              <p className="text-success">Ksh 1500</p>
              <p className="text-danger">Deadline 1200hrs</p>
              <a href="#" className="btn btn-primary">
                Bid
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
