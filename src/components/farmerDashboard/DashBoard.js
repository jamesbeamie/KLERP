import React from "react";
import Header from "../common/Header";
import "../../assets/style.css";
import Fields from "./Fields";

const FarmerDashBoard = () => {
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
                    href='#about_me'
                    className='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
                  >
                    Profile
                  </a>
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
            className='col-md-9 col-sm-12 bg-green px-0'
            // style={{ backgroundColor: "red" }}
          >
            <Fields />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FarmerDashBoard;

{
  /* <header id='header'>
<div class='row m-0'>
  <div class='col-3 bgcolor-blue'>
    <nav class='primary-nav navbar-expand-md'>
      <div class='site-title text-center text-light py-5'>
        <a href='#' class='navbar-brand font-staat font-size-40'>
          James
        </a>
        <p class='description font-dm-sans'>Software Developer</p>
      </div>
      <div class='d-flex flex-column'>
        <a
          href='#about_me'
          class='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
        >
          About Me
        </a>
        <a
          href='#services'
          class='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
        >
          Services
        </a>
        <a
          href='#portfolio'
          class='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
        >
          My Work
        </a>
        <a
          href='#footer'
          class='nav-item dash-link text-black-50 font-dm-sans font-size-16 active'
        >
          Contact
        </a>
      </div>
    </nav>
  </div>
</div>
</header> */
}
