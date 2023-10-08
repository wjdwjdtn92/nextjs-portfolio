import type { HeadingVariants } from './Heading.type';

import { forwardRef } from 'react';
import type { HTMLAttributes, ForwardedRef, PropsWithChildren } from 'react';

import classNames from 'classnames';

import { heading } from './Heading.css';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  HeadingVariants & {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
  };

function Heading(props: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) {
  const { tag: Components = 'h2', children, className, size, ...other } = props;
  return (
    <Components
      ref={ref}
      className={classNames(
        heading({
          size
        }),
        className
      )}
      {...other}
    >
      {children}
    </Components>
  );
}

export default forwardRef<HTMLHeadingElement, PropsWithChildren<HeadingProps>>(Heading);
