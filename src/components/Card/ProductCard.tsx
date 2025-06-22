import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Button } from "../Button";
import EditIcon from "@mui/icons-material/Edit";

export interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  onAddToCart?: () => void;
  onEdit?: () => void;
}

export const ProductCard = ({
  image,
  title,
  price,
  onAddToCart,
  onEdit,
}: ProductCardProps) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        minWidth: 300,
        height: "auto",
        backgroundColor: "transparent",
        color: "#4A4A4A",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "8px",
      }}
    >
      {onEdit && (
        <IconButton
          aria-label="edit"
          onClick={onEdit}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <EditIcon />
        </IconButton>
      )}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: "100%",
          height: "auto",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          alignSelf: "center",
          borderRadius: "4px",
        }}
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, fontSize: 22, mb: 1 }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
            {price}
          </Typography>
          <Button onClick={onAddToCart} variant="primary">
            Agregar al carrito
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
