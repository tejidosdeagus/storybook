import React from 'react';
import { Tabs as MuiTabs, Tab as MuiTab, styled } from '@mui/material';

export interface TabsProps {
  /**
   * The items to display in the tabs
   */
  items: {
    label: string;
    value: string;
  }[];
  /**
   * The currently selected tab value
   */
  value: string;
  /**
   * Callback fired when a tab is clicked
   */
  onChange: (value: string) => void;
  /**
   * Optional additional className
   */
  className?: string;
}

const StyledTabs = styled(MuiTabs)({
  minHeight: 'auto',
  gap: '16px',
  padding: '5px 16px',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const StyledTab = styled(MuiTab)({
  color: '#4A4A4A',
  fontSize: '18px',
  fontWeight: 600,
  textTransform: 'uppercase',
  //padding: '8px 8px',
  minHeight: 'auto',
  '&.Mui-selected': {
    color: '#D4AF80',
  },
  '&:hover': {
    color: '#D4AF80',
  },
});

/**
 * Navigation tabs component
 */
export const Tabs = ({
  items,
  value,
  onChange,
  className = '',
}: TabsProps) => {
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };

  return (
    <StyledTabs
      value={value}
      onChange={handleChange}
      className={className}
      variant="scrollable"
      scrollButtons="auto"
    >
      {items.map((item) => (
        <StyledTab
          key={item.value}
          label={item.label}
          value={item.value}
          disableRipple
        />
      ))}
    </StyledTabs>
  );
}; 