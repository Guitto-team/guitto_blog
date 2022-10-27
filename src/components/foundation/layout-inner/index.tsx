import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

export interface LayoutInnerProps {
  size?: 'small' | 'medium' | 'large' | 'full',
  children: React.ReactNode,
}

export const LayoutInner: React.FC<LayoutInnerProps> = ({
   size = 'medium',
   children,
  }) => {
    const classProps:string = classnames(styles.LayoutInner, styles[size])
  return (
    <div className={classProps}>
      {children}
    </div>
  );
}

export default React.memo(LayoutInner);