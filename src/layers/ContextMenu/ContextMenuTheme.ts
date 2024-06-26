export interface ContextMenuTheme {
  enabled: string;
}

const baseTheme: ContextMenuTheme = {
  enabled: 'cursor-context-menu'
};

export const contextMenuTheme: ContextMenuTheme = {
  ...baseTheme
};

export const legacyContextMenuTheme: ContextMenuTheme = {
  ...baseTheme
};
