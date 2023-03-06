import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';

export interface CategoryProps {
  content: any,
}

export const Category: React.FC<CategoryProps> = ({
    content,
  }) => {
  return (
      <span className={classnames(styles.Category)}>
        {content}
      </span>
  );
}

export default React.memo(Category);