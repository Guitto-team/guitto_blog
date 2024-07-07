import React from 'react';
import Link from "next/link";
import styles from './index.module.scss';
import classnames from 'classnames';
import { Flex } from 'components/foundation/flex';
export interface CategoryListProps {
  contents: any,
  active?: string,
}

export const CategoryList: React.FC<CategoryListProps> = ({
    contents,
    active = 'all',
  }) => {
    // const classProps:string = classnames(
    //   );
  return (
    <Flex gap='none' direction='col'>
      <li className={classnames(styles.item)}>
        <Link
          href={`/`}
          scroll={false}
          className={classnames(styles.link, active === 'all' && styles.isActive)}
        >
          ALL
        </Link>
      </li>
      {contents.map((content) => (
        <li key={content.id} className={classnames(styles.item)}>
          <Link
            href={`/category/${content.id}`}
            scroll={false}
            className={classnames(styles.link, active === content.id && styles.isActive)}
          >
            {content.name}
          </Link>
        </li>
      ))}
    </Flex>
  );
}

export default React.memo(CategoryList);