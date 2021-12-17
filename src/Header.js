import React, { useState } from "react";
import styled from "styled-components";
import patternBg from "./assets/pattern-bg.png";
import iconArrow from "./assets/icon-arrow.svg";
import ResultCard from "./ResultCard";
import classes from "./Header.module.css";
import geoLocationApi from "./api/geoLocation";

const HeaderWrapper = styled.div`
  position: relative;
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
`;

const ButtonWrapper = styled.button`
  width: 5vw;
  height: 45px;
  border-radius: 0 10px 10px 0;
  border: none;
  background-color: hsl(0, 0%, 17%);

  img {
    height: 30%;
  }

  @media (max-width: 375px) {
    width: 10vw;
  }
`;

const Header = () => {
  const [enteredIpAdd, setEnteredIpAdd] = useState("");
  const [ipLocDetails, setIpLocDetails] = useState({
    resIpAddress: "8.8.8.8",
    resCity: "Mountain View",
    resCountry: "US",
    resTimezone: "-07:00",
    resIsp: "Google LLC",
    resLat: "37.40599",
    resLng: "-122.078514",
  });

  const ipAddChangeHandler = (event) => {
    setEnteredIpAdd(event.target.value);
  };

  const fetchIpLocation = async (ipAddress) => {
    try {
      const response = await geoLocationApi.get("country,city", {
        params: {
          apiKey: "at_H0dQ5NDF6r5uhuqIzRqyZ9nHAC8q6",
          ipAddress: ipAddress,
        },
      });
      const data = response.data;
      setIpLocDetails({
        resIpAddress: data.ip,
        resCity: data.location.city,
        resCountry: data.location.country,
        resTimezone: data.location.timezone,
        resIsp: data.isp,
        resLat: data.location.lat,
        resLng: data.location.lng,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
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
      <ResultCard className={classes.resultCard} ipResponse={ipLocDetails} />
    </>
  );
};

export default Header;
