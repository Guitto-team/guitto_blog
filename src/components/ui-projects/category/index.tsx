import React from 'react';
import Link from "next/link";
import styles from './index.module.scss';
import classnames from 'classnames';
import { Flex } from 'components/foundation/flex';

export default function Category(props) {
  return (
    <Flex gap='small'>
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
    </Flex>
  );
}