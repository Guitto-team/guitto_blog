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
      <Link href={`/blog/${content.id}`} scroll={false}>
        <a className={classnames(styles.head)}>
          <Image src={'/images/placehold.png'} layout='fill' alt={`${content.title}の画像`} objectFit='cover' className={classnames(styles.image)} />
          <span className={classnames(styles.category)}>{content.category.name}</span>
        </a>
      </Link>
      <div className={classnames(styles.body)}>
        <LayoutBox>
          <h3 className={classnames(styles.title)}>{content.title}</h3>
          <TagList contents={content.tag} justifyContent={'j-flex-start'} />
        </LayoutBox>
      </div>
    </div>
  );
}

export default React.memo(Card);