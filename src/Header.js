import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import patternBg from "./assets/pattern-bg.png";
import iconArrow from "./assets/icon-arrow.svg";
import geoLocationApi from "./api/geoLocation";

const HeaderWrapper = styled.div`
  background-image: url(${patternBg});
  background-size: cover;
  width: 100%;
  height: 35vh;
  padding-top: 5vh;

  @media (max-width: 375px) {
    height: 46vh;
    padding-top: 2vh;
  }
`;

const Heading = styled.p`
  color: white;
  margin-bottom: 3vh;
  text-align: center;
  font-weight: 500;
  font-size: 32px;
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.input`
  width: 35vw;
  height: 45px;
  padding: 20px;
  border-radius: 10px 0 0 10px;
  border: none;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 375px) {
    width: 80vw;
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.button`
  width: 5vw;
  height: 45px;
  border-radius: 0 10px 10px 0;
  border: none;
  background-color: hsl(0, 0%, 17%);
  cursor: pointer;

  img {
    height: 30%;
  }

  @media (max-width: 375px) {
    width: 10vw;
  }
`;

const Header = (props) => {
  const [enteredIpAdd, setEnteredIpAdd] = useState("");

  const ipAddChangeHandler = (event) => {
    setEnteredIpAdd(event.target.value);
  };

  const fetchIpLocation = async (ipAddress) => {
    try {
      const response = await geoLocationApi.get("country,city", {
        params: {
          apiKey: process.env.REACT_GEOLOC_API_KEY,
          ipAddress: ipAddress,
        },
      });
      const data = response.data;
      props.updateIpLocDetails(data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        toast.error(error.response.data.messages, { autoClose: 3000 });
      } else if (error.request) {
        toast.error("Unresponsive. Please try later");
        console.log(error.request);
      } else {
        toast.error("Unresponsive. Please try later");
        console.log("Error", error.message);
      }
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredIpAdd === "") {
      toast.warn("Enter an IP address", { autoClose: 3000 });
      return;
    }
    fetchIpLocation(enteredIpAdd);
    setEnteredIpAdd("");
  };

  return (
    <>
      <HeaderWrapper>
        <Heading>IP Address Tracker</Heading>
        <FormWrapper onSubmit={onSubmitHandler}>
          <InputWrapper
            value={enteredIpAdd}
            onChange={ipAddChangeHandler}
            placeholder="Search for any IP address or domain"
          />
          <ButtonWrapper type="submit">
            <img src={iconArrow} alt="Search" />
          </ButtonWrapper>
        </FormWrapper>
      </HeaderWrapper>
      <ToastContainer />
    </>
  );
};

export default Header;
