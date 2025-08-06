import React, { forwardRef } from "react";
import styles from "./Typography.module.scss";

import { mergeClasses } from "@/lib/utils";

export const H1 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h1 ref={ref} className={mergeClasses(styles.h1, className)} {...props}>
      {children}
    </h1>
  )
);
H1.displayName = "H1";

export const H2 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h2 ref={ref} className={mergeClasses(styles.h2, className)} {...props}>
      {children}
    </h2>
  )
);
H2.displayName = "H2";

export const H3 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={mergeClasses(styles.h3, className)} {...props}>
      {children}
    </h3>
  )
);
H3.displayName = "H3";

export const H4 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h4 ref={ref} className={mergeClasses(styles.h4, className)} {...props}>
      {children}
    </h4>
  )
);
H4.displayName = "H4";

export const H5 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h5 ref={ref} className={mergeClasses(styles.h5, className)} {...props}>
      {children}
    </h5>
  )
);
H5.displayName = "H5";

export const P = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={mergeClasses(styles.p, className)} {...props}>
      {children}
    </p>
  )
);
P.displayName = "P";

export const InlineCode = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => (
    <code ref={ref} className={mergeClasses(styles.inlineCode, className)} {...props}>
      {children}
    </code>
  )
);
InlineCode.displayName = "InlineCode";

export const Label = forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, children, ...props }, ref) => (
    <label ref={ref} className={mergeClasses(styles.label, className)} {...props}>
      {children}
    </label>
  )
);
Label.displayName = "Label";
