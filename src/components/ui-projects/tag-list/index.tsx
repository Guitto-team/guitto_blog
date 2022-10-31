import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import Flex from 'components/foundation/flex';
import Tag from 'components/ui-parts/tag';

export interface TagListProps {
  contents: any,
  justifyContent?: 'j-flex-start' | 'j-center' | 'j-flex-end' | 'j-between';
}

export const TagList: React.FC<TagListProps> = ({
    contents,
    justifyContent = 'j-center',
  }) => {
    const classProps:string = classnames(styles.TagList)
  return (
    <Flex justifyContent={justifyContent}>
      {contents.map((content) => (
        <li key={content.id}>
          <Tag content={content} />
        </li>
      ))}
    </Flex>
  );
}

export default React.memo(TagList);