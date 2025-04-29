import { Typography, Box } from '@mui/material';

export type PriceTagProps = {
  price: number;
  isOnSale?: boolean;
  salePrice?: number;
};

export const PriceTag = ({ price, isOnSale = false, salePrice }: PriceTagProps) => {
  return (
    <Box display="flex" gap={1} alignItems="center">
      {isOnSale && salePrice ? (
        <>
          <Typography sx={{ color: '#D54848', fontWeight: 'bold', fontSize: 20 }}>
            ${salePrice}
          </Typography>
          <Typography
            sx={{ textDecoration: 'line-through', color: '#777', fontSize: 16 }}
          >
            ${price}
          </Typography>
        </>
      ) : (
        <Typography sx={{ fontWeight: 'bold', fontSize: 20, color: '#4A4A4A' }}>
          ${price}
        </Typography>
      )}
    </Box>
  );
};