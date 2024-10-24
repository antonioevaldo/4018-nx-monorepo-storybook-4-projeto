import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from '@alfabit-alura-teste/modal';
import { Component, Input } from '@angular/core';
import { TypographyComponent } from '@alfabit-alura-teste/typography';
import { ButtonComponent } from '@alfabit-alura-teste/button';

@Component({
  selector: 'lib-wrapper-modal',
  standalone: true,
  imports: [ModalComponent, TypographyComponent, ButtonComponent],
  template: `
    <button (click)="isOpen = true">Abrir modal</button>

    <ab-modal modalTitle="Heading" [isOpen]="isOpen" (closed)="isOpen = false">
      <p>
        <ab-typography size="md">
          Today, every company I talk to wants to implement a design system from
          scratch. Unfortunately, the details of a design system are not
          explored, so often they are not used to the maximum to create a useful
          user experience.
        </ab-typography>
      </p>
      <ab-button (click)="isOpen = false">Fechar</ab-button>
    </ab-modal>
  `,
})
class WrapperModalComponent {
  @Input() isOpen!: boolean;
}

const meta: Meta<WrapperModalComponent> = {
  component: WrapperModalComponent,
};

export default meta;

type Story = StoryObj<WrapperModalComponent>;

export const WrapperModal: Story = {
  args: {
    isOpen: false,
  },
};
