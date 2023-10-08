import type { ParagraphVariants } from './Paragraph.type';

import { forwardRef } from 'react';
import type { HTMLAttributes, ForwardedRef, PropsWithChildren } from 'react';

import classNames from 'classnames';

import { paragraph } from './Paragraph.css';

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  ParagraphVariants & {
    tag?: 'p' | 'div' | 'section' | 'article';
    className?: string;
  };

function Paragraph(props: ParagraphProps, ref: ForwardedRef<HTMLParagraphElement>) {
  const { tag: Components = 'p', children, className, size, ...other } = props;
  return (
    <Components
      ref={ref}
      className={classNames(
        paragraph({
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

export default forwardRef<HTMLParagraphElement, PropsWithChildren<ParagraphProps>>(Paragraph);
