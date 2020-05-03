import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import ExperienceContext from "../ExperienceContext";
import TargetingContext from "../TargetingContext";

function Toggle() {
  const { state, sendEvent } = React.useContext(ExperienceContext);
  const { isTargeted, setIsTargeted } = React.useContext(TargetingContext);

  const isTargetedMessage = isTargeted ? "Yes" : "No";

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          setIsTargeted(true);
          sendEvent("SET_ELIGIBLE");
        }}
      >
        Set isTargeted
      </Button>
      <p>{`Current experience state: ${state.value}`}</p>
      <p>{`Is targeted: ${isTargetedMessage}`}</p>
    </Typography>
  );
}

export default Toggle;
