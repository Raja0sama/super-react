import React, { FC } from "react";

import styles from "./Box.module.scss";

interface BoxProps {
  text?: string;
}

const Box: FC<BoxProps> = ({ text }) => (
  <div className={styles.Box} data-testid="Box">
    {text}
  </div>
);

export default Box;
