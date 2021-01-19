import { withStyles } from '@material-ui/core';
import StepConnector from '@material-ui/core/StepConnector';

const AtomStepConnectorDotted = withStyles(
  theme => ({
    lineVertical: {
      borderLeft: `2px dotted ${theme.palette.grey[400]}`,
    },
    lineHorizontal: {
      borderTop: `2px dotted ${theme.palette.grey[400]}`,
    },
  }),
  {
    name: 'AtomStepConnectorDotted',
  },
)(StepConnector);
export default AtomStepConnectorDotted;
