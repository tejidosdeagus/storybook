import { Box, TextField, Typography } from '@mui/material';
import { Button } from '../Button';

export const CheckoutForm = () => {
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{ width: '100%', maxWidth: 400 }}
    >
      <Typography variant="h5" fontWeight="bold">Checkout</Typography>
      <TextField label="Nombre completo" required />
      <TextField label="Email" type="email" required />
      <TextField label="Dirección" required />
      <TextField label="Código Postal" required />
      <TextField label="Ciudad" required />
      <TextField label="País" required />
      <Button onClick={() => alert('Formulario enviado')} variant="primary">
        Finalizar compra
      </Button>
    </Box>
  );
};
