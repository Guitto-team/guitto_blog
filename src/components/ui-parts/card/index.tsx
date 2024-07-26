import React from 'react';
import sanitizeHtml from 'sanitize-html';
import Link from 'next/link';
import styles from './index.module.scss';
import classnames from 'classnames';
import { Eyecatch } from '../eyecatch';
import { TagList } from 'components/ui-projects/tag-list';
import { LayoutStack } from 'components/foundation/layout-stack';
import { Typography } from '../typography';
import { Flex } from 'components/foundation/flex';
import { Category } from '../category';
export interface CardProps {
  content: any;
  info?: 'title' | 'full';
}

export const Card: React.FC<CardProps> = ({ content, info = 'title' }) => {
  function removeTags(html) {
    return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} });
  }

  const plainText = removeTags(content.content.substring(0, 140));

  return (
    <div className={classnames(styles.card, info === 'full' && styles.full)}>
      <LayoutStack margin='s0'>
        <Link href={`/blog/${content.id}`} scroll={false} className={classnames(styles.head)}>
          <Eyecatch eyecatch={content.eyecatch} alt={content.title} />
        </Link>
        <div className={classnames(styles.body)}>
          {info === 'title' ? (
            <Link href={`/blog/${content.id}`} scroll={false} className={classnames(styles.link)}>
              <Typography html='p' weight='bold'>
                <span className={classnames(styles.title)}>{content.title}</span>
              </Typography>
            </Link>
          ) : (
            <LayoutStack margin='s0'>
              <Flex justifyContent='j-flex-start' alignItems='a-center' gap='small' flexWrap='wrap'>
                <Category content={content.category.name} />
                <TagList contents={content.tag} justifyContent={'j-flex-start'} />
              </Flex>
              <Link href={`/blog/${content.id}`} scroll={false} className={classnames(styles.link)}>
                <Typography html='h4' weight='normal'>
                  <span className={classnames(styles.title)}>{content.title}</span>
                </Typography>
                <div className={styles.text}>{`${plainText}...`}</div>
              </Link>
            </LayoutStack>
          )}
        </div>
      </LayoutStack>
    </div>
  );
};

export default React.memo(Card);
