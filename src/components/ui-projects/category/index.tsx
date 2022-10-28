import React from 'react';
import Link from "next/link";
import styles from './index.module.scss';
import classnames from 'classnames';
import { Flex } from 'components/foundation/flex';
export interface CategoryProps {
  category: any,
  active?: string,
}

export const Category: React.FC<CategoryProps> = ({
    category,
    active = 'all',
  }) => {
    // const classProps:string = classnames(
    //   );
  return (
    <Flex gap='small'>
      <li className={classnames(styles.item)}>
        <Link href={`/`}>
          <a className={classnames(styles.link, active === 'all' && styles.isActive)}>ALL</a>
        </Link>
      </li>
      {category.map((category) => (
        <li key={category.id} className={classnames(styles.item)}>
          <Link href={`/category/${category.id}`}>
            <a className={classnames(styles.link, active === category.id && styles.isActive)}>{category.name}</a>
          </Link>
        </li>
      ))}
    </Flex>
  );
}

export default React.memo(Category);