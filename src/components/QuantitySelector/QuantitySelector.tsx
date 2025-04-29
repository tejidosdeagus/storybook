import { IconButton, Box, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export type QuantitySelectorProps = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export const QuantitySelector = ({ quantity, onDecrease, onIncrease }: QuantitySelectorProps) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton onClick={onDecrease} size="small">
        <RemoveIcon />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={onIncrease} size="small">
        <AddIcon />
      </IconButton>
    </Box>
  );
};
