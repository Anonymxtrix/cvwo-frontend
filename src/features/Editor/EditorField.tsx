import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

type Props = {
  className?: string;
};

const useStyles = makeStyles({
  root: {
    marginTop: 4,
    marginBottom: 8,
  },
});

const EditorField: React.FunctionComponent<Props & TextFieldProps> = (
  props
) => {
  const { className, ...rest } = props;
  const classes = useStyles(props);

  return (
    <TextField
      className={clsx(classes.root, className)}
      InputLabelProps={{
        shrink: true,
      }}
      {...rest}
    />
  );
};

export default EditorField;
