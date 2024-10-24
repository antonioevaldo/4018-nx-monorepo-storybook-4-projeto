import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from '@alfabit-alura-teste/modal';

const meta: Meta<ModalComponent> = {
  component: ModalComponent,
};

export default meta;

type Story = StoryObj<ModalComponent>;

export const Primary: Story = {
  args: {},
};
