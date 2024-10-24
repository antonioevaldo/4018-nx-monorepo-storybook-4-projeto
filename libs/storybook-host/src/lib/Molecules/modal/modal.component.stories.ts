import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from '@alfabit-alura-teste/modal';
import { Component, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

// @Component({
//   standalone: true,
//   imports: [CommonModule, ModalComponent],
//   template: `<ab-modal [isOpen]="true" />`,
// })
// class WrapperModalComponent {}

const meta: Meta<ModalComponent> = {
  component: ModalComponent,
};

export default meta;

type Story = StoryObj<ModalComponent>;

export const Primary: Story = {
  args: {
    isOpen: false as unknown as InputSignal<boolean>,
  },
};
