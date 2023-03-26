import React from 'react';

import { Button } from './Button';

/**
 * 2뎁스 컴포넌트
 * export default {
 *  title: '1뎁스제목/2뎁스제목',
 *  component: 컴포넌트명,
 *  argTypes: {
 *    스타일, 함수 등
 *  },
 * };
 */
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

/**
 * 3뎁스 컴포넌트
 * export const 옵션명 = Template.bind({});
 * 옵션명.args = {
 *  컨트롤 옵션
 * };
 */
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
