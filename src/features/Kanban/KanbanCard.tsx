import dayjs from "dayjs";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import * as Types from "./types";

type Props = {
  children?: never;
  className?: string;
  card: Types.Card;
  cardBag: Types.CardBag;
  onEdit: (todo: Types.Card) => void;
  onDelete: (todo: Types.Card) => void;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // width: 300,
    },
    text: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

const KanbanCard: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Accordion className={clsx(classes.root, props.className)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.text} noWrap>
          {props.card.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.text}>
          {props.card.description && (
            <>
              <i>{props.card.description}</i>
              <br />
              <br />
            </>
          )}
          Due: {dayjs(props.card.dueDate).format("DD-MM-YYYY")}
        </Typography>
      </AccordionDetails>
      <AccordionActions>
        <Button
          size="small"
          color="secondary"
          onClick={() => props.onDelete(props.card)}
        >
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => props.onEdit(props.card)}
        >
          Edit
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

export default KanbanCard;
