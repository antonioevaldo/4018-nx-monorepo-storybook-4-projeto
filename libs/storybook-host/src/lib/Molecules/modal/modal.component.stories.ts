import {
  moduleMetadata,
  argsToTemplate,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ModalComponent } from '@alfabit-alura-teste/modal';
import { TypographyComponent } from '@alfabit-alura-teste/typography';

const meta: Meta<ModalComponent> = {
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [TypographyComponent],
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
      </ab-modal>
    `,
  }),
};

export default meta;

type Story = StoryObj<ModalComponent>;

export const Closed: Story = {
  args: {
    isOpen: false,
    modalTitle: 'Heading',
  },
};

export const Open: Story = {
  args: {
    ...Closed.args,
    isOpen: true,
  },
};
