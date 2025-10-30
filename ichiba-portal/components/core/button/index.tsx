import React from 'react';
import TouchRipple from '../touch-ripple';
import clsx from 'clsx';

type ButtonSize = 'small' | 'medium' | 'large';

type ButtonVariant = 'outlined' | 'contained';

type ButtonProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
} & JSX.IntrinsicElements['button'];

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size = 'small', variant = 'contained', children, className, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          '!tw-relative tw-rounded-lg tw-font-medium tw-px-3',
          {
            'tw-text-sm tw-py-2.5': size === 'small',
            'tw-text-sm tw-py-3.5': size === 'medium',
            'tw-text-base tw-py-3.5': size === 'large',
            'tw-text-white tw-bg-brand-primary': variant === 'contained',
            'tw-text-brand-primary': variant === 'outlined',
          },
          className,
        )}
        {...props}
      >
        {children}
        <TouchRipple autoStart />
        <div
          className={clsx(
            'tw-absolute tw-inset-0 tw-rounded-lg tw-pointer-events-none',
            {
              'tw-border-2 tw-border-brand-primary': variant === 'outlined',
            },
          )}
        />
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
