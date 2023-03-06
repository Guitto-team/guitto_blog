import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';

export interface TypographyProps {
  children: React.ReactNode,
  html?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
  weight?: 'light' | 'normal' | 'bold',
  textAlign?: 'left' | 'center' | 'right',
  color?: 'black' | 'white' | 'main'
}

export const Typography: React.FC<TypographyProps> = ({
    children,
    html = 'span',
    weight = 'normal',
    textAlign = 'left',
    color = 'black'
  }) => {
  const classProps:string = classnames(
    styles.Typography,
    styles[html],
    styles[weight],
    styles[textAlign],
    styles[color]
  );

  const typography = () => {
    switch(html){
      case 'h1':
        return(
          <h1 className={classProps}>
            {children}
          </h1>
        )
      case 'h2':
        return(
          <h2 className={classProps}>
            {children}
          </h2>
        )
      case 'h3':
        return(
          <h3 className={classProps}>
            {children}
          </h3>
        )
      case 'h4':
        return(
          <h4 className={classProps}>
            {children}
          </h4>
        )
      case 'h5':
        return(
          <h5 className={classProps}>
            {children}
          </h5>
        )
      case 'h6':
        return(
          <h6 className={classProps}>
            {children}
          </h6>
        )
      case 'p':
        return(
          <p className={classProps}>
            {children}
          </p>
        )
      default:
        return(
          <span className={classProps}>
            {children}
          </span>
        )
    }
  }

  return (
      <>
        {typography()}
      </>
  );
}

export default React.memo(Typography);