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
    <div className={classnames(styles.card)}>
      <LayoutStack margin='s0'>
        <Link href={`/blog/${content.id}`} scroll={false}>
          <a className={classnames(styles.head)}>
            <Eyecatch eyecatch={content.eyecatch} alt={content.title} />
          </a>
        </Link>
        <div className={classnames(styles.body)}>
          <LayoutBox>
            {
              info === 'title' ? (
                <Link href={`/blog/${content.id}`} scroll={false}>
                <a className={classnames(styles.title)}>
                  <Typography html='p' weight='bold'>{content.title}</Typography>
                </a>
              </Link>
              ) : (
                <LayoutStack margin='s0'>
                  <Flex justifyContent='j-flex-start'>
                    <Category content={content.category.name} />
                    <TagList contents={content.tag} justifyContent={'j-flex-start'} />
                  </Flex>
                  <Link href={`/blog/${content.id}`} scroll={false}>
                    <a className={classnames(styles.title)}>
                      <Typography html='h4' weight='normal'>{content.title}</Typography>
                    </a>
                  </Link>
                </LayoutStack>
              )
            }
          </LayoutBox>
        </div>
      </LayoutStack>
    </div>
  );
}

export default React.memo(Card);