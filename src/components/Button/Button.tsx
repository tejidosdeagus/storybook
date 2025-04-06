import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';
import './Button.css';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  /**
   * Button contents/label
   */
  children: React.ReactNode;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary';
  /**
   * Optional additional className
   */
  className?: string;
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  padding: '16px 24px',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: 1,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    opacity: 0.9,
  },
  '&.button--primary': {
    backgroundColor: '#D4AF80',
    color: '#4A4A4A',
    '&:hover': {
      backgroundColor: '#D4AF80',
      opacity: 0.9,
    },
  },
  '&.button--secondary': {
    backgroundColor: '#6D8B74',
    color: '#F3E5D8',
    '&:hover': {
      backgroundColor: '#6D8B74',
      opacity: 0.9,
    },
  },
  '&.Mui-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      className={`button button--${variant} ${className}`}
      {...props}
    >
      {children}
    </StyledButton>
  );
}; 