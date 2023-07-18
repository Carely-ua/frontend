import { ElementType, ReactNode, memo, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Typography.module.scss';

export interface TypographyProps {
  component: ElementType;
  children: ReactNode;
  id?: string;
  className?: string;
  color?: string;
  weight?: 'bold' | 'normal' | 'medium';
  gutterBottom?: 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
}

export const Typography = memo(
  forwardRef(<T extends unknown>(props: TypographyProps, ref: T) => {
    const { component: Component, children, id, className, color, weight, gutterBottom } = props;

    return (
      <Component
        ref={ref}
        id={id}
        className={classNames(className, styles.typography, styles[`typography-${Component}`], {
          [styles[`typography--${color}`]]: color,
          [styles[`typography--${weight}`]]: weight,
          [styles[`typography--gap-${gutterBottom}`]]: gutterBottom,
        })}>
        {children}
      </Component>
    );
  }),
);
