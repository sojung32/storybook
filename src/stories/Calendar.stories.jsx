import React from 'react';

import { CalendarAntD } from './Calendar';

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
  title: 'Example/CalendarAntD',
  component: CalendarAntD,
  argTypes: {
  },
};

const Template = (args) => <CalendarAntD {...args} />;

/**
 * 3뎁스 컴포넌트
 * export const 옵션명 = Template.bind({});
 * 옵션명.args = {
 *  컨트롤 옵션
 * };
 */
export const Primary = Template.bind({});
Primary.args = {
  label: 'Calendar',
};
