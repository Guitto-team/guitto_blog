import React from 'react';
import Link from "next/link";
import styles from './index.module.scss';
import classnames from 'classnames';

export interface TagProps {
  content: any,
}

export const Tag: React.FC<TagProps> = ({
    content,
  }) => {
  return (
    <Link href={`/tag/${content.id}`} >
      <a className={classnames(styles.Tag)}>
        {content.name}
      </a>
    </Link>
  );
}

export default React.memo(Tag);