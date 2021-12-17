import React, { useState } from "react";

export const IpGeoLocContext = React.createContext({
  resIpAddress: "",
  resCity: "",
  resCountry: "",
  resTimezone: "",
  resIsp: "",
  resLat: "",
  resLng: "",
  updateIpLocDetails: (data) => {},
});

const IpGeoLocProvider = (props) => {
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

  const value = {
    ...ipLocDetails,
    updateIpLocDetails,
  };

  return (
    <IpGeoLocContext.Provider value={value}>
      {props.children}
    </IpGeoLocContext.Provider>
  );
};

export default IpGeoLocProvider;
