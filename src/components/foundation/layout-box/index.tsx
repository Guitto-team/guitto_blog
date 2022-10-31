import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

export interface LayoutBoxProps {
  padding?: 'none' | 'small' | 'medium' | 'large' | 'xlarge',
  children: React.ReactNode,
}

export const LayoutBox: React.FC<LayoutBoxProps> = ({
   padding = 'small',
   children,
  }) => {
    const classProps:string = classnames(styles.LayoutBox, styles[padding])
  return (
    <div className={classProps}>
      {children}
    </div>
  );
}

export default React.memo(LayoutBox);