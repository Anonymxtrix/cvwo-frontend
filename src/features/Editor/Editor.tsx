import dayjs from "dayjs";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import Input from "../common/Input";

import { Title, Description, DueDate, Status } from "./types";

type Props = {
  className?: string;
  open: boolean;
  title: Title;
  onChangeTitle: React.ChangeEventHandler<HTMLInputElement>;
  description: Description;
  onChangeDescription: React.ChangeEventHandler<HTMLInputElement>;
  dueDate: DueDate;
  onChangeDueDate: React.ChangeEventHandler<HTMLInputElement>;
  status: Status;
  onChangeStatus: React.ChangeEventHandler<HTMLInputElement>;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
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

const Editor: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Modal open={props.open}>
      <form onSubmit={props.onSubmit}>
        <Card className={clsx(classes.root, props.className)}>
          <CardHeader title="Edit" titleTypographyProps={{ variant: "h6" }} />
          <Divider />
          <CardContent className={classes.content}>
            <Input
              label="Title"
              name="title"
              value={props.title || ""}
              onChange={props.onChangeTitle}
            />
            <Input
              label="Description"
              name="description"
              multiline
              rows={4}
              value={props.description || ""}
              onChange={props.onChangeDescription}
            />
            <Input
              type="date"
              label="Due Date"
              name="dueDate"
              value={
                dayjs(props.dueDate).format("YYYY-MM-DD") ||
                dayjs().format("YYYY-MM-DD")
              }
              onChange={props.onChangeDueDate}
            />
            <Input
              select
              label="Status"
              name="status"
              value={props.status || todoStatuses[0]}
              onChange={props.onChangeStatus}
            >
              {todoStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Input>
          </CardContent>
          <Divider />
          <CardActions className={classes.actions}>
            <Button variant="text" onClick={props.onCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </CardActions>
        </Card>
      </form>
    </Modal>
  );
};

const todoStatuses: Status[] = ["To Do", "Doing", "Done"];

export default Editor;
