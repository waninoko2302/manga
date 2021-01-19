import { makeStyles } from '@material-ui/core';

export const labelStyles = makeStyles(theme => ({
  redLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1, 1),
    borderRadius: `0 ${theme.spacing(2)}px`,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    fontSize: 'inherit',
  },
  orangeLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1, 1),
    borderRadius: `${theme.spacing(2)}px 0`,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.warning.main,
    fontSize: 'inherit',
  },
}));
