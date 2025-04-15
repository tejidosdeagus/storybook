// src/components/Header/Header.tsx
import React from 'react';
import { Box } from '@mui/material';
import { Tabs, TabItem } from '../Tabs/Tabs';

interface HeaderProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  logo?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ items, value, onChange, logo }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#A8C3A3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 23px',
        fontFamily: 'Playfair Display',
      }}
    >
      {/* Logo */}
      <Box sx={{ width: '150px' }}>
        {logo || <img src="src\assets\logotejidos.png" alt="Tejidos de Agus" style={{ maxHeight: '50px' }} onClick={() => window.location.href = '/'}/>}

      </Box>

      {/* Tabs */}
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Tabs items={items} value={value} onChange={onChange} />
      </Box>

      
    </Box>
  );
};
