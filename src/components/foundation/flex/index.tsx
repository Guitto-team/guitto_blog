import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

export interface FlexProps {
  justifyContent?: 'j-flex-start' | 'j-center' | 'j-flex-end' | 'j-between';
  alignItems?: 'a-flex-start' | 'a-center' | 'a-flex-end';
  direction?: 'row' | 'col';
  gap?: 'none' | 'small' | 'medium' | 'large' ,
  children: React.ReactNode,
}

export const Flex: React.FC<FlexProps> = ({
    justifyContent = 'j-center',
    alignItems = 'a-flex-start',
    direction = 'row',
    gap = 'none',
    children,
  }) => {
    const classProps:string = classnames(
        styles.Flex,
        styles[justifyContent],
        styles[alignItems],
        styles[direction],
        styles[gap]
      );
  return (
    <ul className={classProps}>
      {children}
    </ul>
  );
}

export default React.memo(Flex);