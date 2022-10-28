import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import Card from 'components/ui-parts/card';

export interface CardListProps {
  contents: any,
}

export const CardList: React.FC<CardListProps> = ({
    contents,
  }) => {
    const classProps:string = classnames(styles.CardList)
  return (
    <ul className={classProps}>
      {contents.map((content) => (
        <li key={content.id}>
          <Card content={content} />
        </li>
      ))}
    </ul>
  );
}

export default React.memo(CardList);