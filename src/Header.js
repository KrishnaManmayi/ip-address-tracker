import React from "react";
import styled from "styled-components";
import patternBg from "./assets/pattern-bg.png";
import iconArrow from "./assets/icon-arrow.svg";
import ResultCard from "./ResultCard";
import classes from "./Header.module.css";

const HeaderWrapper = styled.div`
  background-image: url(${patternBg});
  background-size: cover;
  width: 100%;
  height: 35vh;
  padding-top: 5vh;
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
`;

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Heading>IP Address Tracker</Heading>
        <FormWrapper>
          <InputWrapper placeholder="Search for any IP address or domain" />
          <ButtonWrapper type="submit">
            <img src={iconArrow} alt="Search" />
          </ButtonWrapper>
        </FormWrapper>
      </HeaderWrapper>
      <ResultCard className={classes.resultCard} />
    </>
  );
};

export default Header;
