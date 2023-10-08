import type { LabelVariants } from './Label.type';

import { forwardRef } from 'react';
import type { LabelHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react';

import classNames from 'classnames';

import { label } from './Label.css';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement | HTMLSpanElement> &
  LabelVariants & {
    tag?: 'label' | 'span';
    className?: string;
  };

function Label(props: LabelProps, ref: ForwardedRef<HTMLLabelElement>) {
  const { tag: Components = 'label', children, className, size, ...other } = props;
  return (
    <Components
      ref={ref}
      className={classNames(
        label({
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

export default forwardRef<HTMLLabelElement, PropsWithChildren<LabelProps>>(Label);
