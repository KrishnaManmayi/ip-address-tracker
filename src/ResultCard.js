import React from "react";
import styled from "styled-components";

const ResultCardWrapper = styled.div`
  background-color: white;
  color: black;
  padding: 18px;
  display: flex;
`;

const ResultBlock = styled.div`
  width: 25%;
  margin: 10px;
  border-right: 1px solid hsl(0, 0%, 59%);

  &:last-child {
    border: none;
  }

  p {
    :first-child {
      color: hsl(0, 0%, 59%);
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }
    :last-child {
      font-size: 28px;
      font-weight: 500;
    }
  }
`;

const ResultCard = (props) => {
  return (
    <ResultCardWrapper className={props.className}>
      <ResultBlock>
        <p>Ip Address</p>
        <p>192.212.174.101</p>
      </ResultBlock>
      <ResultBlock>
        <p>Location</p>
        <p>Brooklyn, NY 10001</p>
      </ResultBlock>
      <ResultBlock>
        <p>Timezone</p>
        <p>UTC -05:00</p>
      </ResultBlock>
      <ResultBlock>
        <p>Isp</p>
        <p>SpaceX Starlink</p>
      </ResultBlock>
    </ResultCardWrapper>
  );
};

export default ResultCard;
