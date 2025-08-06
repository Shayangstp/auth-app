import React, { forwardRef } from "react";
import styles from "./Input.module.scss";
import { Label } from "../typography/Typography";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = "text", onKeyDown, maxLength, ...props }, ref) => {
    const isNumeric = type === "number";

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isNumeric) {
        const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"];
        const isDigit = /^[0-9]$/.test(e.key);

        if (!isDigit && !allowedKeys.includes(e.key)) {
          e.preventDefault();
        }

        const target = e.target as HTMLInputElement;
        if (target.value.length >= (maxLength || 11) && isDigit) {
          e.preventDefault();
        }
      }

      if (onKeyDown) onKeyDown(e);
    };

    return (
      <div className={styles.inputWrapper}>
        {label && <Label>{label}</Label>}
        <input
          ref={ref}
          type={isNumeric ? "text" : type}
          inputMode={isNumeric ? "numeric" : undefined}
          maxLength={isNumeric ? maxLength : undefined}
          onKeyDown={handleKeyDown}
          className={styles.input}
          {...props}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
