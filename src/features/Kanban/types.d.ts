import { Todo } from "../types";

/**
 * Kanban Card
 */
export type Card = Todo;

/**
 * Kanban Card Bag
 */
export type CardBag = {
  removeCard: () => void;
  dragging: boolean;
};

/**
 * Kanban Column Identifier
 */
export type ColumnId = string | number;

/**
 * Kanban Column Title
 */
export type ColumnTitle = string;

/**
 * Kanban Column
 */
export type Column = {
  id: ColumnId;
  title: ColumnTitle;
  cards: Card[];
};

/**
 * Kanban Board
 */
export type Board = {
  columns: Column[];
};
