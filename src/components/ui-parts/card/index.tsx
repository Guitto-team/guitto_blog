import React from 'react';
import Link from "next/link";
import styles from './index.module.scss';
import classnames from 'classnames';
import Image from 'next/image';
import { TagList } from 'components/ui-projects/tag-list';
import { LayoutBox } from 'components/foundation/layout-box';
export interface CardProps {
  content: any,
}

export const Card: React.FC<CardProps> = ({
    content,
  }) => {
  return (
    <div className={classnames(styles.card)}>
      <div className={classnames(styles.back)}>
        <Image src={'/images/placehold.png'} layout='fill' alt={`${content.title}の画像`} objectFit='cover' className={classnames(styles.image)} />
        <h3 className={classnames(styles.title)}>{content.title}</h3>
      </div>
      <div className={classnames(styles.front)}>
        <LayoutBox>
          <span className={classnames(styles.category)}>{content.category.name}</span>
          <TagList contents={content.tag} justifyContent={'j-flex-start'} />
          <Link href={`/blog/${content.id}`} scroll={false}>
            <a className={classnames(styles.showmore)}>more</a>
          </Link>
        </LayoutBox>
      </div>
    </div>
  );
}

export default React.memo(Card);