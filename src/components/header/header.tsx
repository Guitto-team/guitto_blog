import React from 'react'
import Link from "next/link";
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={`/`} className={styles.home}>
        Home
      </Link>
      <ul className={styles.lists}>
        <li className={styles.listsItem}>
          <Link href={`/`} className={styles.link}>
            dammy
          </Link>
        </li>
        <li className={styles.listsItem}>
          <Link href={`/`} className={styles.link}>
            dammy
          </Link>
        </li>
      </ul>
    </header>
  );
}