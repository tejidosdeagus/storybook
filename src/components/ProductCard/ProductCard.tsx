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
  onClick?: () => void; // New prop for card click
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
  onClick,
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

  const handleCardClick = (event: React.MouseEvent) => {
    // Only execute onClick if the click wasn't on a button or input
    const target = event.target as HTMLElement;
    const isButton =
      target.closest("button") ||
      target.closest("input") ||
      target.closest('[role="button"]');

    if (!isButton && onClick) {
      onClick();
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        position: "relative",
        width: 350,
        height: 500,
        backgroundColor: "#D4AF80",
        color: "#4A4A4A",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "8px",
        cursor: onClick ? "pointer" : "default",
        "&:hover": onClick
          ? {
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-2px)",
              transition: "all 0.2s ease-in-out",
            }
          : {},
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
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            fontSize: "1.75rem",
            color: "#4A4A4A",
            mb: 1,
            lineHeight: 1.3,
          }}
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
                    fontFamily: "Playfair Display",
                    fontSize: 20,
                    fontWeight: 400,
                    textDecoration: "line-through",
                    color: "#4A4A4A",
                  }}
                >
                  {price}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Playfair Display",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#D54848",
                  }}
                >
                  {priceWithDiscount}
                </Typography>
              </>
            ) : (
              <Typography
                sx={{
                  fontFamily: "Playfair Display",
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
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
            <Button onClick={onAddToCart} variant="secondary">
              Agregar al carrito
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
