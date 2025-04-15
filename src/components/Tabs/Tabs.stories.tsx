import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
  { label: <ShoppingCartIcon sx={{
    color: '#4A4A4A',
    fontSize: 24,
    transition: 'filter 0.2s ease-in-out',
    '&:hover': {
      filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.25))',
    },
  }} />, value: 'cart' },
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