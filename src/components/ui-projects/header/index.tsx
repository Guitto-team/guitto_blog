import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={`/`} scroll={false} className={styles.home}>
        <i className={styles.icon}>
          <Image src={'/images/logo.svg'} alt={'GUITTO BLOG'} width={166} height={14} />
        </i>
      </Link>
      <ul className={styles.lists}>
        <li className={styles.listsItem}>
          <Link href={'/'} scroll={false} className={styles.link}>
            <i className={styles.icon}>
              <Image src={'/images/home.svg'} alt={'HOMEのアイコン'} width={22} height={21} />
            </i>
          </Link>
        </li>
        <li className={styles.listsItem}>
          <Link
            href={`https://www.guitto.co.jp/contact`}
            scroll={false}
            className={styles.link}
            target='_blank'
          >
            <i className={styles.icon}>
              <Image src={'/images/mail.svg'} alt={'CONTACTのアイコン'} width={25} height={18} />
            </i>
          </Link>
        </li>
      </ul>
    </header>
  );
}
