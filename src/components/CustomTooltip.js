import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const CustomTooltip = withStyles(theme => ({
  arrow: {
    color: theme.palette.secondary.main
  },
  tooltip: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.black,
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))(Tooltip);

export default CustomTooltip;
