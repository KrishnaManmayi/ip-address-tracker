import React, { useState } from "react";
import classes from "./App.module.css";

import Header from "./Header";
import Map from "./Map";
import ResultCard from "./ResultCard";

const App = () => {
  const [ipLocDetails, setIpLocDetails] = useState({
    resIpAddress: "8.8.8.8",
    resCity: "Mountain View",
    resCountry: "US",
    resTimezone: "-07:00",
    resIsp: "Google LLC",
    resLat: "37.40599",
    resLng: "-122.078514",
  });

  const updateIpLocDetails = (data) => {
    setIpLocDetails({
      resIpAddress: data.ip,
      resCity: data.location.city,
      resCountry: data.location.country,
      resTimezone: data.location.timezone,
      resIsp: data.isp,
      resLat: data.location.lat,
      resLng: data.location.lng,
    });
  };

  return (
    <div className={classes.app}>
      <Header
        ipLocDetails={ipLocDetails}
        updateIpLocDetails={updateIpLocDetails}
      />
      <Map ipLocDetails={ipLocDetails} />
      <ResultCard className={classes.resultCard} ipResponse={ipLocDetails} />
      <div className={classes.attribution}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/KrishnaManmayi">Krishna Manmayi</a>.
      </div>
    </div>
  );
};

export default App;
