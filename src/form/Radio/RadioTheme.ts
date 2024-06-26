export interface RadioTheme {
  base: string;
  radio: {
    base: string;
    disabled: string;
    checked: string;
  };
  indicator: {
    base: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
    };
  };
  label: {
    base: string;
    clickable: string;
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

const baseTheme: RadioTheme = {
  base: 'box-border leading-none',
  radio: {
    base: 'will-change-[border-color] inline-flex justify-center items-center box-border align-middle rounded-[100%] bg-transparent border cursor-pointer',
    disabled: 'cursor-not-allowed opacity-60',
    checked: ''
  },
  indicator: {
    base: 'rounded-[100%]',
    sizes: {
      small: 'w-1.5 h-1.5',
      medium: 'w-2 h-2',
      large: 'w-2.5 h-2.5'
    }
  },
  label: {
    base: 'w-full align-middle ml-2.5',
    clickable: 'cursor-pointer'
  },
  sizes: {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5'
  }
};

export const radioTheme: RadioTheme = {
  ...baseTheme,
  label: {
    ...baseTheme.label,
    base: [baseTheme.label.base, 'text-surface-content'].join(' ')
  },
  radio: {
    ...baseTheme.radio,
    base: [baseTheme.radio.base, 'border-surface'].join(' '),
    checked: [baseTheme.radio.checked, 'border-primary'].join(' ')
  },
  indicator: {
    ...baseTheme.indicator,
    base: [baseTheme.indicator.base, 'bg-primary'].join(' ')
  }
};

export const legacyRadioTheme: RadioTheme = {
  ...baseTheme,
  label: {
    ...baseTheme.label,
    base: [
      baseTheme.label.base,
      'text-[var(--radio-label-color)] ml-[var(--spacing-md)]'
    ].join(' ')
  },
  radio: {
    ...baseTheme.radio,
    base: [
      baseTheme.radio.base,
      'bg-[var(--radio-background)] [border:_var(--radio-stroke-size)_solid_var(--radio-stroke)]'
    ].join(' '),
    checked: [
      baseTheme.radio.checked,
      'border-[var(--radio-stroke-active)]'
    ].join(' ')
  },
  indicator: {
    ...baseTheme.indicator,
    base: [baseTheme.indicator.base, 'bg-[var(--radio-indicator-active)]'].join(
      ' '
    ),
    sizes: {
      small:
        'w-[var(--radio-indicator-size,_6px)] h-[var(--radio-indicator-size,_6px)]',
      medium:
        'w-[var(--radio-indicator-size,_8px)] h-[var(--radio-indicator-size,_8px)]',
      large:
        'w-[var(--radio-indicator-size,_10px)] h-[var(--radio-indicator-size,_10px)]'
    }
  }
};
