import React, { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import { Input, InputProps, InputRef } from '../Input';

export interface DebouncedInputProps extends InputProps {
  /**
   * The debounce time in milliseconds. Defaults to 100.
   */
  debounce?: number;
}

export const DebouncedInput = forwardRef<InputRef, DebouncedInputProps>(
  (
    { debounce, value, onChange, onValueChange, ...rest },
    ref: Ref<InputRef>
  ) => {
    // eslint-disable-next-line no-undef
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [internalValue, setInternalValue] = useState<
      string | number | readonly string[]
    >(value);

    useEffect(() => {
      setInternalValue(value);
    }, [value]);

    return (
      <Input
        {...rest}
        ref={ref}
        value={internalValue}
        onKeyDown={(event: any) => {
          // if user hits enter, no need to debounce
          if (event.key === 'Enter') {
            onValueChange?.(event.target.value);
            onChange?.(event as any);
          }
        }}
        onChange={event => {
          setInternalValue(event.target.value);

          if (debounce) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              onValueChange?.(event.target.value);
              onChange?.(event);
            }, debounce);
          } else {
            onValueChange?.(event.target.value);
            onChange?.(event);
          }
        }}
      />
    );
  }
);

DebouncedInput.defaultProps = {
  debounce: 100
};
