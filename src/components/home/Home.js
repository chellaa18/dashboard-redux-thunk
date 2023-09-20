import React from "react";
import Banner from "../../assets/images/banner-1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="container-fluid">
      {/* style={{backgroundColor:"#00008B"}} */}
      <div className="row">
        <div class="col-lg-6 back-linear">
          <img
            className="mt-5 ms-4 px-auto d-none d-md-block"
            src={Banner}
            height="450px"
            alt="banner"
          />
        </div>
        <div className="col-lg-6 banner-col-2 px-0 d-flex align-items-center">
          <div className="col-lg-10 position-relative">
            <h1 className="text-white">Successful Consultants</h1>
            <p className="mt-4 text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              vitae cum natus possimus sunt pariatur, voluptates alias vero.
            </p>
            <p className="mt-4 text-white">
             Image from <Link>freepik</Link>
            </p>

            <div className="col-lg-10 mt-5">
              <button className="banner-btn-1">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
