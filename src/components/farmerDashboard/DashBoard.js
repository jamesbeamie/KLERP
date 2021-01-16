import React, { useState } from "react";
import Header from "../common/Header";
import "../../assets/style.css";
import Fields from "./Fields";
import Requests from "./Requests";
import Accounts from "./Accounts";
import Profile from "./Profile";

const FarmerDashBoard = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <React.Fragment>
      <Header />

      <div className='container'>
        <div className='row' id='mkulima'>
          <div className='col-md-3 col-sm-12 px-0 '>
            <div className='bgcolor-farmgreen profile '>
              <nav className='primary-nav navbar-expand-md'>
                <div className='site-title text-center text-light py-5'>
                  <a
                    href='#'
                    className='navbar-brand font-dm-sans-thick font-size-40'
                  >
                    Simiyu
                  </a>
                  <p className='description font-dm-sans'>Sikhendu Outgrower</p>
                </div>
                <div className='d-flex flex-column '>
                  <span
                    href='/profile'
                    onClick={() => setModalShow(true)}
                    className='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
                  >
                    Profile
                  </span>
                  <a
                    href='#services'
                    className='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
                  >
                    Fields
                  </a>
                  <a
                    href='#portfolio'
                    className='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
                  >
                    Requests
                  </a>
                  <a
                    href='#footer'
                    className='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
                  >
                    Account
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div
            className='col-md-9 col-sm-12   px-0'
            style={{ backgroundColor: "#dfecdf" }}
          >
            {/* <Fields /> */}
            {/* <Requests /> */}
            <Accounts />
            <Profile openProfile={modalShow} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FarmerDashBoard;
