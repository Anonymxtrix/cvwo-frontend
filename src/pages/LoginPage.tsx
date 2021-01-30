import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Page from "../features/common/Page";
import Login from "../features/Login";

type Props = {
  children?: never;
  className?: never;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    login: {
      width: "100%",
      maxWidth: 600,
      marginTop: theme.spacing(12),
    },
  })
);

const LoginPage: React.FunctionComponent<Props> = () => {
  const classes = useStyles();
  return (
    <Page title="Login">
      <Box className={classes.root} flexGrow={1}>
        <Login className={classes.login} />
      </Box>
    </Page>
  );
};

export default LoginPage;
