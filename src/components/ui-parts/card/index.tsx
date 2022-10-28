import React from 'react';
import Link from "next/link";
import styles from './index.module.scss';
import classnames from 'classnames';
import Image from 'next/image';

export interface CardProps {
  blog: any,
}

export const Card: React.FC<CardProps> = ({
    blog,
  }) => {
  return (
    <Link href={`/blog/${blog.id}`} >
      <a className={classnames(styles.card)}>
        <div className={classnames(styles.head)}>
          <Image src={'/images/placehold.png'} layout='fill' alt={`${blog.title}の画像`} objectFit='cover' className={classnames(styles.image)} />
        </div>
        <div className={classnames(styles.body)}>
          <h3>{blog.title}</h3>
        </div>
      </a>
    </Link>
  );
}

export default React.memo(Card);