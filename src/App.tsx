import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import Kanban from "./features/Kanban";
import Editor from "./features/Editor";

function App() {
  return (
    <Provider store={store}>
      <Kanban />
      <Editor toDo={null} />
    </Provider>
  );
}

export default App;
