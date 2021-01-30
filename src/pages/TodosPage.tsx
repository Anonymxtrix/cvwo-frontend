import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

import Page from "../features/common/Page";
import Layout from "../features/common/Layout";
import Kanban from "../features/Kanban";
import Editor from "../features/Editor";

import { Todo } from "../features/types";

type Props = {
  children?: never;
  className?: never;
};

type EditorState = {
  isOpen: boolean;
  todo: Todo | null;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    actions: {
      marginTop: theme.spacing(3),
    },
    addIcon: {
      marginRight: theme.spacing(1),
    },
    kanban: {
      marginTop: theme.spacing(3),
      maxWidth: "100%",
    },
  })
);

const TodosPage: React.FunctionComponent<Props> = () => {
  const classes = useStyles();
  const [editorState, setEditorState] = React.useState<EditorState>({
    isOpen: false,
    todo: null,
  });

  const openEditor = (todo: Todo): void => {
    setEditorState({
      isOpen: true,
      todo,
    });
  };

  const closeEditor = (): void => {
    setEditorState({
      isOpen: false,
      todo: null,
    });
  };

  const addToDo = (): void => {
    setEditorState((previousState) => ({
      ...previousState,
      isOpen: true,
    }));
  };

  return (
    <Page title="Todos">
      <Layout>
        <Box className={classes.root} flexGrow={1}>
          <Box className={classes.actions}>
            <Button variant="contained" color="primary" onClick={addToDo}>
              <PlaylistAddIcon className={classes.addIcon} />
              Add To Do
            </Button>
          </Box>
          <Kanban className={classes.kanban} onEdit={openEditor} />
          {editorState.isOpen && (
            <Editor
              toDo={editorState.todo}
              closeEditor={closeEditor}
              isOpen={editorState.isOpen}
            />
          )}
        </Box>
      </Layout>
    </Page>
  );
};

export default TodosPage;
