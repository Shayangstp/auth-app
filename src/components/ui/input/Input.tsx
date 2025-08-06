import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => (
  <div className={styles.inputWrapper}>
    {label && <label>{label}</label>}
    <input ref={ref} {...props} className={styles.input} />
    {error && <p className={styles.error}>{error}</p>}
  </div>
));

Input.displayName = "Input";
export default Input;
