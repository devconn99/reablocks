export interface CalendarTheme {
  base: string;
  header: {
    base: string;
    prev: string;
    mid: string;
    next: string;
  };
  title: string;
  content: string;
  days: {
    header: string;
    dayOfWeek: string;
    week: string;
    day: string;
    outside: string;
    startRangeDate: string;
    cornerStartDateBottom: string;
    endRangeDate: string;
    cornerEndDateTop: string;
    range: string;
  };
  months: {
    root: string;
    month: string;
  };
  years: {
    root: string;
    year: string;
  };
}

const baseTheme: CalendarTheme = {
  base: 'relative overflow-hidden',
  header: {
    base: 'flex text-center justify-between mb-2 items-center',
    prev: '',
    mid: '',
    next: ''
  },
  title: 'font-semibold',
  content: 'flex',

  days: {
    header: 'text-center grid grid-cols-7 opacity-50 mb-1 pt-2',
    dayOfWeek: 'text-center font-bold',
    week: 'grid grid-cols-7',
    day: 'flex p-2',
    outside: '',
    startRangeDate: 'rounded-tl-md rounded-tr-none rounded-br-none',
    cornerStartDateBottom: 'rounded-bl-none',
    endRangeDate: 'rounded-br-md rounded-bl-none rounded-tl-none',
    cornerEndDateTop: 'rounded-tr-none',
    range: 'rounded-none'
  },

  months: {
    root: 'grid grid-cols-4 gap-2',
    month: 'p-1.5'
  },

  years: {
    root: 'grid grid-cols-4 gap-2',
    year: 'p-1.5'
  }
};

export const calendarTheme: CalendarTheme = {
  ...baseTheme,
  days: {
    ...baseTheme.days,
    header: [baseTheme.days.header, 'text-panel-content'].join(' '),
    outside: [baseTheme.days.outside, 'opacity-50'].join(' ')
  }
};

export const legacyCalendarTheme: CalendarTheme = {
  ...baseTheme,
  header: {
    ...baseTheme.header,
    base: [
      baseTheme.header.base,
      'mb-[var(--spacing-sm)] mb-[var(--calendar-gap)]'
    ].join(' ')
  },
  days: {
    ...baseTheme.days,
    header: [baseTheme.days.header, 'gap-[var(--calendar-gap)]'].join(' '),
    outside: [baseTheme.days.outside, 'text-gray-100/60'].join(' ')
  }
};
