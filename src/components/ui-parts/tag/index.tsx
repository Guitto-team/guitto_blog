import React from 'react';
import Link from "next/link";
import styles from './index.module.scss';
import classnames from 'classnames';
import Image from 'next/image';

export interface TagProps {
  content: any,
}

export const Tag: React.FC<TagProps> = ({
    content,
  }) => {
  return (
    <Link href={`/tag/${content.id}`} scroll={false}>
      <a className={classnames(styles.Tag)}>
        <i className={classnames(styles.icon)}>
          <Image src={'/images/tag.svg'} alt='タグアイコン' width={15} height={15}/>
        </i>
        {content.name}
      </a>
    </Link>
  );
}

export default React.memo(Tag);