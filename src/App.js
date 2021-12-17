import React, { useState } from "react";
import Header from "./Header";
import Map from "./Map";

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
    <>
      <Header
        ipLocDetails={ipLocDetails}
        updateIpLocDetails={updateIpLocDetails}
      />
      <Map ipLocDetails={ipLocDetails} />
    </>
  );
};

export default App;
