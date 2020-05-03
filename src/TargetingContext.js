import React from "react";

const TargetingContext = React.createContext({
  isTargeted: false,
  setIsTargeted: () => {}
});

export default TargetingContext;
