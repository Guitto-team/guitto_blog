import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

export interface GridProps {
  type?: 'col2' | 'col3' | 'col4' | 'col6' ,
  gap?: 'none' | 'small' | 'medium' | 'large' ,
  children: React.ReactNode,
}

export const Grid: React.FC<GridProps> = ({
    type = 'col4',
    gap = 'small',
    children,
  }) => {
    const classProps:string = classnames(styles.Grid, styles[type], styles[gap])
  return (
    <div className={classProps}>
      {children}
    </div>
  );
}

export default React.memo(Grid);