import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import ProtectedRoute from "./features/common/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import TodosPage from "./pages/TodosPage";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute>
            <TodosPage />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
