import React from "react";

import Editor from "./Editor";

import { FormState } from "./types";
import { Todo } from "../types";

type Props = {
  className?: string;
  toDo: Todo | null;
};

const EditorContainer: React.FunctionComponent<Props> = (props) => {
  const [formState, setFormState] = React.useState(
    mapTodoToDefaultFormState(props.toDo)
  );
  return <Editor className={props.className} open={true} />;
};

const mapTodoToDefaultFormState = (toDo: Todo | null): FormState => ({
  values: {
    title: toDo?.title ? toDo.title : "",
    description: toDo?.description ? toDo.description : "",
    dueDate: toDo?.dueDate ? new Date(toDo.dueDate) : new Date(),
  },
  errors: {
    title: null,
    description: null,
    dueDate: null,
  },
});

export default EditorContainer;
