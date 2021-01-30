import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Helmet } from "react-helmet";

type Props = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxHeight: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
});

const Page: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <div className={clsx(classes.root, props.className)}>
      <Helmet>
        <title>{props.title} - ToDoApp</title>
      </Helmet>
      {props.children}
    </div>
  );
};

export default Page;
