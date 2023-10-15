import { ElementType, ReactNode, memo, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Typography.module.scss';

export interface TypographyProps {
  component: ElementType;
  children: ReactNode;
  id?: string;
  className?: string;
  color?: 'primary' | 'secondary' | 'white' | 'dark-grey' | 'dangerous';
  weight?: 'bold' | 'normal' | 'medium';
  gutterBottom?: 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
  onClick?(): void;
}

export const Typography = memo(
  forwardRef(<T extends unknown>(props: TypographyProps, ref: T) => {
    const {
      component: Component,
      children,
      id,
      className,
      color,
      weight,
      gutterBottom,
      onClick,
    } = props;

    return (
      <Component
        ref={ref}
        id={id}
        onClick={onClick}
        className={classNames(
          styles.typography,
          styles[`typography-${Component}`],
          {
            [styles[`typography--${color}`]]: color,
            [styles[`typography--${weight}`]]: weight,
            [styles[`typography--gap-${gutterBottom}`]]: gutterBottom,
          },
          className,
        )}>
        {children}
      </Component>
    );
  }),
);
