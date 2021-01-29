import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Board from "@lourenci/react-kanban";
import KanbanCard from "./KanbanCard";
import "@lourenci/react-kanban/dist/styles.css";

import * as Types from "./types";

type Props = {
  children?: never;
  className?: string;
};

const useStyles = makeStyles({
  root: {},
});

const Kanban: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Board
      className={clsx(classes.root, props.className)}
      // Column
      allowAddColumn={false}
      allowRemoveColumn={false}
      disableColumnDrag
      // Card
      onCardDragEnd={() => {}}
      // Styles
      // renderColumnHeader={() => {}}
      renderCard={(card: Types.Card, cardBag: Types.CardBag) => (
        <KanbanCard card={card} cardBag={cardBag} />
      )}
    >
      {initialBoard}
    </Board>
  );
};

const initialBoard: Types.Board = {
  columns: [
    {
      id: 1,
      title: "To Do",
      cards: [
        {
          id: 1,
          title: "Add card",
          description: "Add capability to add a card in a column",
          dueDate: 1000000000,
          status: "To Do",
        },
      ],
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 2,
          title: "Drag-n-drop support",
          description: "Move a card between the columns",
          dueDate: 1000000000,
          status: "Doing",
        },
      ],
    },
    {
      id: 3,
      title: "Done",
      cards: [],
    },
  ],
};

export default Kanban;
