import {
  moduleMetadata,
  argsToTemplate,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ModalComponent } from '@alfabit-alura-teste/modal';
import { TypographyComponent } from '@alfabit-alura-teste/typography';
import { ButtonComponent } from '@alfabit-alura-teste/button';

const meta: Meta<ModalComponent> = {
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [TypographyComponent, ButtonComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <ab-modal ${argsToTemplate(args)}>
        <p>
          <ab-typography>
            Today, every company I talk to wants to implement a design system from
            scratch. Unfortunately, the details of a design system are not
            explored, so often they are not used to the maximum to create a useful
            user experience.
          </ab-typography>
        </p>

        <ab-button>
          Primary button
        </ab-button>
      </ab-modal>
    `,
  }),
  parameters: {
    controls: { include: ['isOpen', 'modalTitle', 'closed'] },
  },
};

export default meta;

type Story = StoryObj<ModalComponent>;

export const Open: Story = {
  args: {
    isOpen: true,
    modalTitle: 'Heading',
  },
};

export const Closed: Story = {
  args: {
    ...Open.args,
    isOpen: false,
  },
};
