import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import Card from 'components/ui-parts/card';

export interface CardListProps {
  contents: any,
  size?: 'small' | 'medium' | 'large',
}

export const CardList: React.FC<CardListProps> = ({
    contents,
    size = 'medium',
  }) => {
    const classProps:string = classnames(styles.CardList, styles[size]);
    const info = size == 'large' ? 'full' : 'title';
  return (
    <ul className={classProps}>
      {contents.map((content) => (
        <li key={content.id}>
          <Card content={content} info={info} />
        </li>
      ))}
    </ul>
  );
}

export default React.memo(CardList);