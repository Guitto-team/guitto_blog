import React from 'react'
import styles from './inner.module.scss'


export default function Inner({ children }) {
  return (
    <div className={styles.inner}>{children}</div>
  );
}