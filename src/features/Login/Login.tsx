import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import Input from "../common/Input";

type Props = {
  children?: never;
  className?: string;
  name: string;
  onChangeName: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.default,
    },
    content: {
      display: "flex",
      flexDirection: "column",
    },
    actions: {
      display: "flex",
      justifyContent: "flex-end",
    },
  })
);

const Login: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Card
      className={clsx(classes.root, props.className)}
      variant="outlined"
      elevation={0}
    >
      <form onSubmit={props.onSubmit}>
        <CardContent className={classes.content}>
          <Input
            label="Enter your name"
            value={props.name}
            onChange={props.onChangeName}
          />
        </CardContent>
        <CardActions className={classes.actions}>
          <Button type="submit" variant="contained" color="primary">
            Hello
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default Login;
