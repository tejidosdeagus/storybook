// src/components/Header/Header.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const navItems = [
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
  render: () => {
    const [value, setValue] = useState('courses');
    return <Header items={navItems} value={value} onChange={setValue} />;
  },
};
