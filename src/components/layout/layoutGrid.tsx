import React from 'react'
import styles from './layoutGrid.module.scss'


export default function LayoutGrid({ children }) {
  return (
    <div className={styles.layoutGrid}>{children}</div>
  );
}