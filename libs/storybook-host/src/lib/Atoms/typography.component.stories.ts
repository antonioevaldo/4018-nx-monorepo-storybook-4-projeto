import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@alfabit-alura-teste/typography';

const meta: Meta<TypographyComponent> = {
  component: TypographyComponent,
  render: (args) => ({
    props: args,
    template: `
      <ab-typography ${argsToTemplate(args)}>
        Text
      </ab-typography>
    `,
  }),
  parameters: {
    controls: { include: ['type', 'size'] },
  },
};

export default meta;

type Story = StoryObj<TypographyComponent>;

export const Default: Story = {};

export const Title1: Story = {
  args: {
    type: 'title1',
  },
};

export const Title2: Story = {
  args: {
    type: 'title2',
  },
};

export const Title3: Story = {
  args: {
    type: 'title3',
  },
};

export const Subtitle1: Story = {
  args: {
    type: 'subtitle1',
  },
};

export const Subtitle2: Story = {
  args: {
    type: 'subtitle2',
  },
};

export const TextLarge: Story = {
  args: {
    type: 'normal',
    size: 'lg',
  },
};

export const TextMedium: Story = {
  args: {
    ...TextLarge.args,
    size: 'md',
  },
};

export const TextSmall: Story = {
  args: {
    ...TextLarge.args,
    size: 'sm',
  },
};

export const TextExtraSmall: Story = {
  args: {
    ...TextLarge.args,
    size: 'xs',
  },
};

export const Title2WithMediumSize: Story = {
  args: {
    ...Title2.args,
    size: 'md',
  },
};

export const Paragraph: Story = {
  args: {
    type: 'normal',
    size: 'lg',
  },
  render: (args) => ({
    props: args,
    template: `
      <p>
        <ab-typography ${argsToTemplate(args)}>
          Primeiro <strong>parágrafo</strong>
        </ab-typography>
      </p>
    `,
  }),
};
