import React from 'react'
import Link from "next/link";
import styles from './index.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Guitto Blog</p>
    </footer>
  );
}