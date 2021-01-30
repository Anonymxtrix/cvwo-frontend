import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import uuid from "uuid-random";

import Login from "./Login";

import { FormState } from "./types";
import { login } from "../../app/auth";

type Props = {
  children?: never;
  className?: string;
};

const LoginContainer: React.FunctionComponent<Props> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formState, setFormState] = React.useState<FormState>({
    isLoading: false,
    name: "",
    nameError: "",
  });

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState((previousState) => ({
      ...previousState,
      name: event.target.value,
    }));
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(
      login({
        id: uuid().replace(/-/g, ""),
        name: formState.name,
      })
    );
    history.push("/");
  };

  return (
    <Login
      className={props.className}
      name={formState.name}
      onChangeName={handleChangeName}
      onSubmit={handleFormSubmit}
    />
  );
};

export default LoginContainer;
