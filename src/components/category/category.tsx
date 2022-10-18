import React from 'react';
import Link from "next/link";
import styles from './category.module.scss';
import classnames from 'classnames';

export default function Category(props) {
  return (
    <ul className={styles.categories}>
      <li className={classnames(styles.item)}>
        <Link href={`/`}>
          <a className={classnames(styles.link, styles.isActive)}>ALL</a>
        </Link>
      </li>
      {props.category.map((category) => (
        <li key={category.id} className={classnames('item')}>
          <Link href={`/category/${category.id}`}>
            <a className={classnames(styles.link)}>{category.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}