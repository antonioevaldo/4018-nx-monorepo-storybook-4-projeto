import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@alfabit-alura-teste/input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    multiline: false,
    label: '',
    id: '',
    disabled: false,
  },
};

export const Multiline: Story = {
  args: {
    ...Primary.args,
    multiline: true,
  },
};

export const PrimaryWithLabel: Story = {
  args: {
    ...Primary.args,
    label: 'Label',
    id: '1',
  },
};

export const MultilineWithLabel: Story = {
  args: {
    ...Multiline.args,
    label: 'Label',
    id: '2',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const MultilineDisabled: Story = {
  args: {
    ...Multiline.args,
    disabled: true,
  },
};

export const PrimaryWithLabelDisabled: Story = {
  args: {
    ...Primary.args,
    label: 'Label',
    id: '3',
    disabled: true,
  },
};

export const MultilineWithLabelDisabled: Story = {
  args: {
    ...Multiline.args,
    label: 'Label',
    id: '4',
    disabled: true,
  },
};
