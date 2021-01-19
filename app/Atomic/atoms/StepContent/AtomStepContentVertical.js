import { withStyles } from '@material-ui/core';
import StepContent from '@material-ui/core/StepContent';

const AtomStepContentVertical = withStyles(
  theme => ({
    root: {
      borderLeft: `2px dotted ${theme.palette.grey[400]}`,
    },
  }),
  {
    name: 'AtomStepContentVertical',
  },
)(StepContent);
export default AtomStepContentVertical;
