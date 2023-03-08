import React from 'react';
import Link from "next/link";
import styles from './index.module.scss';
import classnames from 'classnames';
import { Eyecatch } from '../eyecatch';
import { TagList } from 'components/ui-projects/tag-list';
import { LayoutBox } from 'components/foundation/layout-box';
import { LayoutStack } from 'components/foundation/layout-stack';
import { Typography } from '../typography';
import { Flex } from 'components/foundation/flex';
import { Category } from '../category';
export interface CardProps {
  content: any,
  info?: 'title' | 'full'
}

export const Card: React.FC<CardProps> = ({
    content,
    info = 'title'
  }) => {
  return (
    <div className={classnames(styles.card, info === 'full' && styles.full)}>
      <LayoutStack margin='s0'>
        <Link href={`/blog/${content.id}`} scroll={false}>
          <a className={classnames(styles.head)}>
            <Eyecatch eyecatch={content.eyecatch} alt={content.title} />
          </a>
        </Link>
        <div className={classnames(styles.body)}>
          {
            info === 'title' ? (
              <Link href={`/blog/${content.id}`} scroll={false}>
              <a className={classnames(styles.link)}>
                <Typography html='p' weight='bold'><span className={classnames(styles.title)}>{content.title}</span></Typography>
              </a>
            </Link>
            ) : (
              <LayoutStack margin='s0'>
                <Flex justifyContent='j-flex-start' gap='small'>
                  <Category content={content.category.name} />
                  <TagList contents={content.tag} justifyContent={'j-flex-start'} />
                </Flex>
                <Link href={`/blog/${content.id}`} scroll={false}>
                  <a className={classnames(styles.link)}>
                    <Typography html='h4' weight='normal'><span className={classnames(styles.title)}>{content.title}</span></Typography>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${content.content.substring(0, 130)}...`,
                      }}
                      className={styles.text}
                    />
                  </a>
                </Link>
              </LayoutStack>
            )
          }
        </div>
      </LayoutStack>
    </div>
  );
}

export default React.memo(Card);