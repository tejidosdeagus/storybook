import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { useState } from 'react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '800px', padding: '0px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

const navigationItems = [
  { label: 'CURSOS Y PATRONES', value: 'courses' },
  { label: 'PRODUCTOS', value: 'products' },
  { label: 'BLOG', value: 'blog' },
  { label: 'AYUDA', value: 'help' },
];

export const Default: Story = {
  args: {
    items: navigationItems,
    value: 'courses',
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return (
      <div style={{ backgroundColor: '#A8C3A3'}}>
      <Tabs
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
      </div>
    );
  },
};

export const WithLongContent: Story = {
  args: {
    items: [
      ...navigationItems,
      { label: 'CATEGORÍAS', value: 'categories' },
      { label: 'CONTACTO', value: 'contact' },
      { label: 'ACERCA DE', value: 'about' },
    ],
    value: 'courses',
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return (
      <Tabs
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
}; 