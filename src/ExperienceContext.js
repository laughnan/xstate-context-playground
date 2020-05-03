import React from "react";

const ExperienceContext = React.createContext({
  state: "",
  sendEvent: () => {}
});

export default ExperienceContext;
