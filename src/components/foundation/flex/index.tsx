import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export interface FlexProps {
  justifyContent?: 'j-flex-start' | 'j-center' | 'j-flex-end' | 'j-between';
  alignItems?: 'a-flex-start' | 'a-center' | 'a-flex-end';
  direction?: 'row' | 'col';
  gap?: 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  children: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  justifyContent = 'j-center',
  alignItems = 'a-flex-start',
  direction = 'row',
  gap = 'none',
  flexWrap = 'nowrap',
  children,
}) => {
  const classProps: string = classnames(
    styles.Flex,
    styles[justifyContent],
    styles[alignItems],
    styles[direction],
    styles[gap],
    styles[flexWrap],
  );
  return <ul className={classProps}>{children}</ul>;
};

export default React.memo(Flex);
