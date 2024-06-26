export interface AvatarTheme {
  base: string;
  rounded: string;
}

const baseTheme: AvatarTheme = {
  base: 'flex justify-center items-center bg-cover bg-center font-bold',
  rounded: 'rounded-[50%]'
};

export const avatarTheme: AvatarTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-white'].join(' ')
};

export const legacyAvatarTheme: AvatarTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'text-[var(--avatar-initials-color)] [border:_var(--avatar-border)]'
  ].join(' ')
};
