import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            {/* <img
              src="https://via.placeholder.com/600x400"
              className="card-img-top"
              alt="Card image cap"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                This is a lengthy description. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
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
