import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { authSelector } from "../../app/auth";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
});

const Layout: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);
  const auth = useSelector(authSelector);

  return (
    <Box className={classes.root}>
      <Box className={clsx(classes.header, props.className)}>
        <Button>{auth.user?.name}</Button>
      </Box>
      {props.children}
    </Box>
  );
};

export default Layout;
