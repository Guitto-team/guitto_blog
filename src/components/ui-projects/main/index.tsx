import React from 'react'
import styles from './index.module.scss'

export interface MainProps {
  children: React.ReactNode,
}

export const Main: React.FC<MainProps> = ({
  children,
  }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}

export default React.memo(Main);