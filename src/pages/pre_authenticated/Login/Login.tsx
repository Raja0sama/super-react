import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../../redux/store";
import styles from "./Login.module.scss";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const count = useSelector((state: any) => state.app);
  const { app } = actions;
  const dispatch = useDispatch();

  console.log({ count, app });
  return (
    <div className={styles.Login} data-testid="Login">
      Login Component
      <button
        onClick={() => {
          console.log("Hello mom");
          dispatch(app.setState({ value: count.value + 1 }));
        }}
      >
        Hello World {count.value}
      </button>
    </div>
  );
};

export default Login;
