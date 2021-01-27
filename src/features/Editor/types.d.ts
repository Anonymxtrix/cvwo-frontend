import { Title as TodoTitle, Description as TodoDescription } from "../types";

/**
 * Editor Title Field
 */
export type Title = TodoTitle;

/**
 * Editor Description Field
 */
export type Description = TodoDescription;

/**
 * Editor DueDate Field
 */
export type DueDate = Date;

/**
 * Editor Form Values
 */
export type FormValues = {
  title: Title;
  description: Description;
  dueDate: DueDate;
};

/**
 * Editor Form Errors
 */
export type FormErrors = {
  title: string | null;
  description: string | null;
  dueDate: string | null;
};

export type FormState = {
  values: FormValues;
  errors: FormErrors;
};
