import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { authSelector } from "../../app/auth";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FunctionComponent<Props> = (props) => {
  const auth = useSelector(authSelector);

  if (auth.isLoading === false && auth.user == null)
    return <Redirect to={{ pathname: "/login" }} />;

  return <>{props.children}</>;
};

export default ProtectedRoute;
