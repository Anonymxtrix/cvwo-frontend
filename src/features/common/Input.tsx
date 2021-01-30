import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

type Props = {
  className?: string;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  })
);

const Input: React.FunctionComponent<Props & TextFieldProps> = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles(props);

  return (
    <TextField
      className={clsx(classes.root, className)}
      fullWidth
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      {...rest}
    />
  );
};

export default Input;
