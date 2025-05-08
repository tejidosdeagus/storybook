import { Box, TextField, Typography } from "@mui/material";
import { Button } from "../Button";

type CheckoutFormProps = {
  formData: {
    name: string;
    email: string;
    address: string;
    postalCode: string;
    city: string;
    country: string;
  };
  onChange: (data: CheckoutFormProps["formData"]) => void;
  onSubmit: (e: React.FormEvent) => void;
  error?: string;
  onPostalCodeChange?: (postalCode: string) => void;
};

export const CheckoutForm = ({
  formData,
  onChange,
  onSubmit,
  error,
  onPostalCodeChange,
}: CheckoutFormProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    onChange(newFormData);

    if (name === "postalCode" && onPostalCodeChange) {
      onPostalCodeChange(value);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        name="name"
        label="Nombre"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <TextField
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
      <TextField
        name="address"
        label="Dirección"
        value={formData.address}
        onChange={handleInputChange}
        required
      />
      <TextField
        name="postalCode"
        label="Código Postal"
        value={formData.postalCode}
        onChange={(e) => {
          onChange({ ...formData, postalCode: e.target.value });
          onPostalCodeChange?.(e.target.value);
        }}
        required
      />
      <TextField
        name="city"
        label="Ciudad"
        value={formData.city}
        onChange={handleInputChange}
        required
      />
      <TextField
        name="country"
        label="País"
        value={formData.country}
        onChange={handleInputChange}
        required
      />
      <Button onClick={() => alert("Formulario enviado")} variant="primary">
        Finalizar compra
      </Button>
    </Box>
  );
};
