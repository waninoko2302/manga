import { withStyles } from '@material-ui/core';
import AtomTabs from '../Tabs';

const AtomMenuTabs = withStyles(
  theme => ({
    flexContainer: {
      flexWrap: 'wrap',
      '& > *': {
        marginBottom: theme.spacing(1.5),
        '&:not(:last-child)': {
          marginRight: theme.spacing(1.5),
        },
      },
    },
    indicator: {
      display: 'none',
    },
  }),
  { name: 'AtomMenuTabs' },
)(AtomTabs);
export default AtomMenuTabs;
