import dayjs from "dayjs";
import React from "react";
import { useDispatch } from "react-redux";

import Editor from "./Editor";

import { FormState } from "./types";
import { Todo } from "../types";
import { addTodo, updateTodo } from "../../app/todos";

type Props = {
  className?: string;
  toDo: Todo | null;
  isOpen: boolean;
  closeEditor: () => void;
};

const EditorContainer: React.FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = React.useState(
    mapTodoToDefaultFormState(props.toDo)
  );

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState((previousState) => ({
      ...previousState,
      values: {
        ...previousState.values,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const handleSave: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (props.toDo != null) {
      dispatch(
        updateTodo({
          ...props.toDo,
          title: formState.values.title,
          description: formState.values.description,
          dueDate: dayjs(formState.values.dueDate).valueOf(),
          status: formState.values.status,
        })
      );
    } else {
      dispatch(
        addTodo({
          title: formState.values.title,
          description: formState.values.description,
          dueDate: dayjs(formState.values.dueDate).valueOf(),
          status: formState.values.status,
        })
      );
    }
    props.closeEditor();
  };

  return (
    <Editor
      className={props.className}
      open={props.isOpen}
      onCancel={props.closeEditor}
      title={formState.values.title}
      onChangeTitle={handleChangeInput}
      description={formState.values.description}
      onChangeDescription={handleChangeInput}
      dueDate={formState.values.dueDate}
      onChangeDueDate={handleChangeInput}
      status={formState.values.status}
      onChangeStatus={handleChangeInput}
      onSubmit={handleSave}
    />
  );
};

const mapTodoToDefaultFormState = (toDo: Todo | null): FormState => ({
  values: {
    title: toDo?.title ? toDo.title : "",
    description: toDo?.description ? toDo.description : "",
    dueDate: toDo?.dueDate ? new Date(toDo.dueDate) : new Date(),
    status: toDo?.status ? toDo.status : "To Do",
  },
  errors: {
    title: null,
    description: null,
    dueDate: null,
    status: null,
  },
});

export default EditorContainer;
