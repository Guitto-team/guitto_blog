import React from 'react'
import Link from "next/link";
import styles from './index.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={`/`} className={styles.home}>
        Home
      </Link>
      <ul className={styles.lists}>
        <li className={styles.listsItem}>
          <Link href={`https://www.guitto.co.jp/contact`} className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}