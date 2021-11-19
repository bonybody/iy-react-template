import { Meta, Story } from '@storybook/react';
import { HogeDom } from './Hoge';
import type { HogeDomProps } from './Hoge';

const meta: Meta = {
  title: 'Components/Elements/Hoge',
  component: HogeDom,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HogeDomProps> = (props) => <HogeDom {...props} />;

let props: HogeDomProps = {
  title: 'primary title',
  text: 'primary text',
};

export const Primary = Template.bind({});
Primary.args = props;

props = {
  title: '',
  text: '',
};
export const EmptyProps = Template.bind({});
EmptyProps.args = props;

const longerText = 'aaa'.repeat(20);
props = {
  title: longerText,
  text: longerText,
};
export const LongerTexts = Template.bind({});
LongerTexts.args = props;
