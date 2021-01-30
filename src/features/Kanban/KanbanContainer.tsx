import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Kanban from "./Kanban";

import * as Types from "./types";
import {
  todosSelector,
  updateTodo,
  fetchTodos,
  deleteTodo,
} from "../../app/todos";

type Props = {
  children?: never;
  className?: string;
  onEdit: (todo: Types.Card) => void;
};

const KanbanContainer: React.FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleCardUpdate = (
    card: Types.Card,
    source: any,
    destination: any
  ) => {
    dispatch(updateTodo({ ...card, status: destination.toColumnId }));
  };

  const handleCardDelete = (card: Types.Card) => {
    dispatch(deleteTodo(card));
  };

  return (
    <Kanban
      className={props.className}
      cards={todos.todos}
      onCardUpdate={handleCardUpdate}
      onCardEdit={props.onEdit}
      onCardDelete={handleCardDelete}
    />
  );
};

export default KanbanContainer;
