import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Board from "@lourenci/react-kanban";
import KanbanCard from "./KanbanCard";
import "@lourenci/react-kanban/dist/styles.css";

import * as Types from "./types";

type Props = {
  children?: never;
  className?: string;
  cards: Types.Card[];
  onCardUpdate: (card: Types.Card, source: any, destination: any) => void;
  onCardEdit: (todo: Types.Card) => void;
  onCardDelete: (todo: Types.Card) => void;
};

const useStyles = makeStyles({
  root: {},
});

const columns = [
  { title: "To Do", id: "To Do" },
  { title: "Doing", id: "Doing" },
  { title: "Done", id: "Done" },
];

const Kanban: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);
  const board = {
    columns: columns.map((column) => ({
      id: column.id,
      title: column.title,
      cards: props.cards.filter((card) => card.status === column.title),
    })),
  };

  return (
    <Box className={clsx(classes.root, props.className)}>
      <Board
        // Column
        allowAddColumn={false}
        allowRemoveColumn={false}
        disableColumnDrag
        // Card
        onCardDragEnd={props.onCardUpdate}
        // Styles
        // renderColumnHeader={() => {}}
        renderCard={(card: Types.Card, cardBag: Types.CardBag) => (
          <KanbanCard
            card={card}
            cardBag={cardBag}
            onEdit={props.onCardEdit}
            onDelete={props.onCardDelete}
          />
        )}
      >
        {board}
      </Board>
    </Box>
  );
};

export default Kanban;
