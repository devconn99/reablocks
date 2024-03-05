import React from 'react';
import { Divider } from './Divider';
export default {
  title: 'Components/Layout/Divider',
  component: Divider,
  decorators: [
    (Story, context) => (
      <div
        style={{
          width: 400,
          color: context.globals.theme === 'light' ? 'black' : 'inherit'
        }}
      >
        <Story />
      </div>
    )
  ]
};

export const Horizontal = () => (
  <>
    Above
    <Divider />
    Below
  </>
);

export const NoMargin = () => (
  <>
    Above
    <Divider disableMargins />
    Below
  </>
);

export const Vertical = () => (
  <div style={{ height: 400, display: 'flex' }}>
    Left
    <Divider orientation="vertical" />
    Right
  </div>
);
