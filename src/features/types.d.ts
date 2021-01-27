/**
 * Todo Identifier
 */
export type Id = string | number;

/**
 * Todo Title
 */
export type Title = string;

/**
 * Todo Description
 */
export type Description = string;

/**
 * Todo Due Date
 */
export type DueDate = number;

/**
 * Todo Object
 */
export type Todo = {
  id: Id;
  title: Title;
  description: Description;
  dueDate: DueDate;
};
