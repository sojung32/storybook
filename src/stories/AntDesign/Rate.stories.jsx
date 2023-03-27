import React from 'react';

import { RateAntD } from './Rate';

export default {
  title: 'Example/Rate',
  component: RateAntD,
  argTypes: {
  },
};

const Template = (args) => <RateAntD {...args} />;

export const Star = Template.bind({});
Star.args = {
  icon: 'star',
}
export const Heart = Template.bind({});
Heart.args = {
  icon: 'heart',
}
export const Smile = Template.bind({});
Smile.args = {
  allowHalf: false,
  icon: 'smile',
}
export const Character = Template.bind({});
Character.args = {
  icon: 'input character',
  character: '♣',
}