import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/kerplogo.png";
import Input from "./Input";

const Sidebar = () => {
  const [userdata, setUserdata] = useState({});
  // eslint-disable-next-line
  const [farmerid, setFarmerid] = useState(2005);
  // eslint-disable-next-line
  const [farmerpwd, setFarmerpwd] = useState("simiyu");

  let history = useHistory();
  const handleChange = (name, value) => {
    setUserdata((prev) => ({ ...prev, [name]: value }));
  };
  // console.log("userdata", userdata);
  const handleSubmit = () => {
    // e.preventDefault();
    // console.log("userdata ndani", userdata);
    if (userdata.farmernumber === farmerid && userdata.password === farmerpwd) {
      console.log("ikooooo");
      localStorage.setItem("farmerpwd", userdata.password);
      history.push("/farmer/dashboard");
    } else {
      console.log("ikooooo wapi");
    }
  };
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt='' style={{ width: "80%" }} />
      </LogoWrapper>
      <Form>
        <h3>Welcome</h3>
        <Input
          placeholder='Farmer number'
          name='farmernumber'
          onChange={handleChange}
        />
        <Input
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <Input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Sign In</button>
      </Form>
      <div>
        <Terms>
          By using kilimoERP, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Forgot password? <span>Restore</span>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #72c66c;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default Sidebar;
