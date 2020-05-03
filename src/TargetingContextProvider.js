import React from "react";

import TargetingContext from "./TargetingContext";

export default function TargetingContextProvider({ children }) {
  const [isTargeted, setIsTargeted] = React.useState(false);

  return (
    <TargetingContext.Provider value={{ isTargeted, setIsTargeted }}>
      {children}
    </TargetingContext.Provider>
  );
}
