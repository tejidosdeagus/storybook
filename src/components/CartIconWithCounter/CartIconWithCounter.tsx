import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export type CartIconWithCounterProps = {
  count: number;
};

export const CartIconWithCounter = ({ count }: CartIconWithCounterProps) => {
  return (
    <Badge badgeContent={count} color="error" showZero>
      <ShoppingCartIcon
        sx={{
          color: '#4A4A4A',
          fontSize: 24,
          transition: 'filter 0.2s ease-in-out',
          '&:hover': {
            filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.25))',
          },
        }}
      />
    </Badge>
  );
};
