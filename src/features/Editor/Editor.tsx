import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Title, Description, DueDate } from "./types";

type Props = {
  className?: string;
  open: boolean;
  // title: Title;
  // onChangeTitle: React.ChangeEventHandler<HTMLInputElement>;
  // description: Description;
  // onChangeDescription: React.ChangeEventHandler<HTMLInputElement>;
  // dueDate: DueDate;
  // onChangeDueDate: React.ChangeEventHandler<HTMLInputElement>;
  // onCancel: React.MouseEventHandler<HTMLButtonElement>;
  // onSubmit: React.MouseEventHandler<HTMLButtonElement>;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      outline: "none",
      boxShadow: theme.shadows[20],
      width: 700,
      maxHeight: "100%",
      overflowY: "auto",
      maxWidth: "100%",
    },
  })
);

const Editor: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Modal open={props.open}>
      <Card className={clsx(classes.root, props.className)}>
        <CardContent>
          <Typography variant="body1">
            <b>Edit Your To Do:</b>
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default Editor;
