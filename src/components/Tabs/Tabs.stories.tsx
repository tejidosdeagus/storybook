import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { useState } from 'react';
import { CartIconWithCounter } from '../CartIconWithCounter/CartIconWithCounter';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '1000px', backgroundColor: '#A8C3A3', padding: '20px' }}>
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
  { label: 'INICIAR SESIÓN', value: 'login' },
  { label: <CartIconWithCounter count={3} />, value: 'cart' }
];

export const Default: Story = {
  args: {
    items: navigationItems,
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

export const WithLongContent: Story = {
  args: {
    items: [
      ...navigationItems,
      { label: 'MIS CURSOS', value: 'my courses' },
      { label: 'SALIR', value: 'logout' },
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