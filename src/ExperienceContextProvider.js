import React from "react";
import { useMachine } from "@xstate/react";

import ordersOverviewExperienceMachine from "./state-machines/ordersOverviewExperience";
import ExperienceContext from "./ExperienceContext";
import TargetingContext from "./TargetingContext";

export default function ExperienceContextProvider({ children }) {
  const { isTargeted } = React.useContext(TargetingContext);
  // Define a mock targetingApi
  const targetingApi = {
    onShow: () => console.log("on show"), // function
    onClose: () => console.log("on close"), // function
    onComplete: () => console.log("on complete") // function
  };

  const { onShow, onClose, onComplete } = targetingApi;

  // Define the state machine to store into context
  const [state, sendEvent] = useMachine(ordersOverviewExperienceMachine, {
    actions: {
      onClose,
      onComplete,
      onShow
    },
    context: {
      canShow: isTargeted
    }
  });

  return (
    <ExperienceContext.Provider value={{ state, sendEvent }}>
      {children}
    </ExperienceContext.Provider>
  );
}
