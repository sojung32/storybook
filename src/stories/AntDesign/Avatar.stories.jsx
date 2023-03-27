import React from 'react';

import { AvatarAntD } from './Avatar';

export default {
  title: 'Example/Avatar',
  component: AvatarAntD,
  argTypes: {
  },
};

const Template = (args) => <AvatarAntD {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  badge: false,
  square: false,
  size: 64,
  icon: true,
};
export const Badge = Template.bind({});
Badge.args = {
  badge: true,
  dot: true,
}