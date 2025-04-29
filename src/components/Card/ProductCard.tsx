import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Button } from '../Button';

export interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  onAddToCart?: () => void;
}

export const ProductCard = ({ image, title, price, onAddToCart }: ProductCardProps) => {
  return (
    <Card
      sx={{
        width: 354,
        height: 469,
        backgroundColor: 'transparent',
        color: '#4A4A4A',
        fontFamily: 'Poppins, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '8px',
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: 324,
          height: 324,
          objectFit: 'cover',
          alignSelf: 'center',
          marginTop: 2,
          borderRadius: '4px',
        }}
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: 24, mb: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: 30, fontWeight: 600 }}>{price}</Typography>
          <Button
            onClick={onAddToCart}
            variant="primary"
          >
            Agregar al carrito
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
