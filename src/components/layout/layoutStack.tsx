import React from 'react'
import styles from './layoutStack.module.scss'


export default function LayoutStack({ children }) {
  return (
    <div className={styles.layoutStack}>{children}</div>
  );
}