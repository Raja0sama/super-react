import React, { FC } from 'react';
import styles from './NotFound.module.scss';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => (
  <div className={styles.NotFound} data-testid="NotFound">
    NotFound Component
  </div>
);

export default NotFound;
