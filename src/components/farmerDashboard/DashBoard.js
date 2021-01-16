import React, { useState } from "react";
import Header from "../common/Header";
import "../../assets/style.css";
import Fields from "./Fields";
import Requests from "./Requests";
import Accounts from "./Accounts";
import Profile from "./Profile";

const FarmerDashBoard = () => {
  const [modalShow, setModalShow] = useState(false);
  const [component, setComponent] = useState(1);
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
                  <a
                    href='#profile'
                    onClick={() => setModalShow(true)}
                    className='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
                  >
                    Profile
                  </a>
                  <a
                    href='#fields'
                    onClick={() => setComponent(1)}
                    className={
                      component == 1
                        ? "nav-item dash-link-active  text-black-50 font-dm-sans font-size-16 active"
                        : "nav-item dash-link text-black-50 font-dm-sans font-size-16 active"
                    }
                    // className='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
                  >
                    Fields
                  </a>
                  <a
                    href='#requests'
                    onClick={() => setComponent(2)}
                    className={
                      component == 2
                        ? "nav-item dash-link-active  text-black-50 font-dm-sans font-size-16 active"
                        : "nav-item dash-link text-black-50 font-dm-sans font-size-16 active"
                    }
                    // className='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
                  >
                    Requests
                  </a>
                  <a
                    href='#acounts'
                    onClick={() => setComponent(3)}
                    className={
                      component == 3
                        ? "nav-item dash-link-active  text-black-50 font-dm-sans font-size-16 active"
                        : "nav-item dash-link text-black-50 font-dm-sans font-size-16 active"
                    }
                    // className='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
                  >
                    Accounts
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div
            className='col-md-9 col-sm-12   px-0'
            style={{ backgroundColor: "#dfecdf" }}
          >
            {component == 1 ? (
              <Fields />
            ) : component == 2 ? (
              <Requests />
            ) : component == 3 ? (
              <Accounts />
            ) : (
              <Fields />
            )}
            <Profile openProfile={modalShow} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FarmerDashBoard;
