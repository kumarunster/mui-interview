
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <>
      {'Your Table Implementation here'}
    </>
  );
}