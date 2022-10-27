import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

export interface LayoutStackProps {
  margin?: 'none' | 's0' | 's1' | 's2'| 's3'| 's4',
  children: React.ReactNode,
}

export const LayoutStack: React.FC<LayoutStackProps> = ({
   margin = 's1',
   children,
  }) => {
    const classProps:string = classnames(styles.LayoutStack, styles[margin])
  return (
    <div className={classProps}>
      {children}
    </div>
  );
}

export default React.memo(LayoutStack);