import React from 'react';
import Link from "next/link";
import styles from './index.module.scss';
import classnames from 'classnames';
import Image from 'next/image';

export interface CardProps {
  content: any,
}

export const Card: React.FC<CardProps> = ({
    content,
  }) => {
  return (
    <Link href={`/blog/${content.id}`} >
      <a className={classnames(styles.card)}>
        <div className={classnames(styles.head)}>
          <Image src={'/images/placehold.png'} layout='fill' alt={`${content.title}の画像`} objectFit='cover' className={classnames(styles.image)} />
        </div>
        <div className={classnames(styles.body)}>
          <h3>{content.title}</h3>
        </div>
      </a>
    </Link>
  );
}

export default React.memo(Card);