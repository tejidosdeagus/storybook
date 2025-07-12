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
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

export interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  priceWithDiscount?: string; // New prop for discounted price
  onAddToCart?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  quantity?: number;
  maxQuantity?: number;
  onQuantityChange?: (newQuantity: number) => void;
  onDeleteSelection?: () => void;
}

export const ProductCard = ({
  image,
  title,
  price,
  priceWithDiscount,
  onAddToCart,
  onEdit,
  onDelete,
  quantity = 0,
  maxQuantity = 10,
  onQuantityChange,
  onDeleteSelection,
}: ProductCardProps) => {
  const handleDecrease = () => {
    if (onQuantityChange && quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };
  const handleIncrease = () => {
    if (onQuantityChange && quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (onQuantityChange) {
      if (!isNaN(value) && value >= 1 && value <= maxQuantity) {
        onQuantityChange(value);
      }
    }
  };

  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        minWidth: 300,
        maxWidth: 500,
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
      {(onEdit || onDelete) && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 0.5,
          }}
        >
          {onEdit && (
            <IconButton
              aria-label="edit"
              onClick={onEdit}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)",
                },
              }}
            >
              <EditIcon />
            </IconButton>
          )}
          {onDelete && (
            <IconButton
              aria-label="delete"
              onClick={onDelete}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)",
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            {priceWithDiscount ? (
              <>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    textDecoration: "line-through",
                    color: "#4A4A4A",
                  }}
                >
                  {price}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#D54848",
                  }}
                >
                  {priceWithDiscount}
                </Typography>
              </>
            ) : (
              <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                {price}
              </Typography>
            )}
          </Box>
          {quantity > 0 && onQuantityChange ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                onClick={handleDecrease}
                variant="secondary"
                disabled={quantity <= 1}
                style={{ minWidth: 32, padding: 0 }}
              >
                -
              </Button>
              <input
                type="number"
                min={1}
                max={maxQuantity}
                value={quantity}
                onChange={handleInputChange}
                style={{
                  width: 40,
                  textAlign: "center",
                  fontSize: 16,
                  borderRadius: 4,
                  border: "1px solid #ccc",
                }}
              />
              <Button
                onClick={handleIncrease}
                variant="secondary"
                disabled={quantity >= maxQuantity}
                style={{ minWidth: 32, padding: 0 }}
              >
                +
              </Button>
              {onDeleteSelection && (
                <IconButton
                  aria-label="cancel selection"
                  onClick={onDeleteSelection}
                  sx={{ ml: 1 }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Box>
          ) : (
            <Button onClick={onAddToCart} variant="primary">
              Agregar al carrito
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
