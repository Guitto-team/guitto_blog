import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import Image from 'next/image';
export interface EyecatchProps {
  eyecatch?: { url: string },
  alt: string,
  objectFit?: 'cover' | 'contain'
}

export const Eyecatch: React.FC<EyecatchProps> = ({
    eyecatch,
    alt,
    objectFit = 'cover'
  }) => {

  const imageUrl = eyecatch?.url ?? '/images/placehold.png';

  return (
    <div className={classnames(styles.eyecatch)}>
      <Image
        src={imageUrl}
        fill
        sizes='100vw'
        alt={`${alt}のアイキャッチ画像`}
        style={{ objectFit }}
        className={classnames(styles.image)}
      />
    </div>
  );
}

export default React.memo(Eyecatch);