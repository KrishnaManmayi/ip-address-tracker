import React from "react";
import styled from "styled-components";

const ResultCardWrapper = styled.div`
  background-color: white;
  color: black;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ResultBlock = styled.div`
  width: 25%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin: 1rem 0.5rem;
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
      font-size: 1.4em;
      font-weight: 500;
    }
  }

  @media (max-width: 576px) {
    border: none;
    width: 80%;
    margin: 0.5rem auto;
    text-align: center;
    p {
      :first-child {
        font-size: 10px;
      }
      :last-child {
        font-size: 1em;
      }
    }
  }

  @media (max-width: 375px) {
    p {
      :first-child {
        font-size: 12px;
      }
      :last-child {
        font-size: 1.1em;
      }
    }
  }
`;

const ResultCard = (props) => {
  const ipDetails = props.ipResponse;
  return (
    <ResultCardWrapper className={props.className}>
      <ResultBlock>
        <p>Ip Address</p>
        <p>{ipDetails.resIpAddress}</p>
      </ResultBlock>
      <ResultBlock>
        <p>Location</p>
        <p>
          {ipDetails.resCity}, {ipDetails.resCountry}
        </p>
      </ResultBlock>
      <ResultBlock>
        <p>Timezone</p>
        <p>UTC {ipDetails.resTimezone}</p>
      </ResultBlock>
      <ResultBlock>
        <p>Isp</p>
        <p>{ipDetails.resIsp}</p>
      </ResultBlock>
    </ResultCardWrapper>
  );
};

export default ResultCard;
