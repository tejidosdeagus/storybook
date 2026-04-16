import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Chip,
  // LinearProgress,
} from "@mui/material";
import { Button } from "../Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
  disableQuantityControls?: boolean; // New prop to disable quantity controls
  isPurchased?: boolean; // New prop to indicate if course is purchased
  // purchasedProgress?: number; // Progress percentage for purchased courses
  onViewCourse?: () => void; // New prop for viewing purchased course
  height?: number; // Height of the card
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
  disableQuantityControls = true,
  isPurchased = false,
  // purchasedProgress = 0,
  onViewCourse,
  height = 500,
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
        width: { xs: "100%", sm: 350 },
        maxWidth: { xs: "100%", sm: 350 },
        height: { xs: "auto", sm: height },
        minHeight: 0,
        backgroundColor: "#F3E5D8",
        color: "#4A4A4A",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "flex-start", sm: "space-between" },
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
      {/* Admin actions and purchased indicator */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 4, sm: 8 },
          right: { xs: 4, sm: 8 },
          display: "flex",
          gap: 0.5,
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {/* Purchased indicator
        {isPurchased && (
          <Chip
            icon={<CheckCircleIcon />}
            label="Comprado"
            size="small"
            sx={{
              backgroundColor: "#4CAF50",
              color: "white",
              fontSize: "0.75rem",
              height: 24,
              mb: 0.5,
            }}
          />
        )}
        */}
        {/* Admin actions */}
        {(onEdit || onDelete) && (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {onEdit && (
              <IconButton
                aria-label="edit"
                size="small"
                onClick={onEdit}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  p: { xs: 0.35, sm: 1 },
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: { xs: "1.1rem", sm: "1.5rem" },
                  },
                }}
              >
                <EditIcon />
              </IconButton>
            )}
            {onDelete && (
              <IconButton
                aria-label="delete"
                size="small"
                onClick={onDelete}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  p: { xs: 0.35, sm: 1 },
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: { xs: "1.1rem", sm: "1.5rem" },
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Box>
        )}
      </Box>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: "100%",
          height: "auto",
          aspectRatio: { xs: "16 / 9", sm: "1 / 1" },
          objectFit: "cover",
          alignSelf: "center",
          borderRadius: "4px",
          flexShrink: 0,
        }}
      />
      <CardContent
        sx={{
          padding: { xs: 1.25, sm: 2 },
          pt: { xs: 1.25, sm: 2 },
          "&:last-child": { pb: { xs: 1.25, sm: 2 } },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.2rem" },
            color: "#4A4A4A",
            mb: { xs: 0.5, sm: 1 },
            lineHeight: 1.3,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>

        {/* Progress bar for purchased courses
        {isPurchased && purchasedProgress > 0 && (
          <Box sx={{ mb: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.75rem",
                  color: "#4A4A4A",
                }}
              >
                Progreso
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.75rem",
                  color: "#4A4A4A",
                  fontWeight: 600,
                }}
              >
                {purchasedProgress}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={purchasedProgress}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#4CAF50",
                },
              }}
            />
          </Box>
        )}
         */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "center" },
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            {priceWithDiscount ? (
              <>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { xs: "0.95rem", sm: "1.25rem" },
                    fontWeight: 400,
                    textDecoration: "line-through",
                    color: "#4A4A4A",
                  }}
                >
                  {price}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { xs: "1.25rem", sm: "1.75rem" },
                    fontWeight: 600,
                    color: "#D54848",
                  }}
                >
                  {priceWithDiscount}
                </Typography>
              </>
            ) : (
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { xs: "1.25rem", sm: "1.75rem" },
                  fontWeight: 600,
                }}
              >
                {price}
              </Typography>
            )}
          </Box>
          {quantity > 0 && onQuantityChange ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {!disableQuantityControls && (
                <Button
                  onClick={handleDecrease}
                  variant="secondary"
                  disabled={quantity <= 1}
                  style={{ minWidth: 32, padding: 0, height: "32px" }}
                >
                  -
                </Button>
              )}
              <input
                type="number"
                min={1}
                max={maxQuantity}
                value={quantity}
                onChange={handleInputChange}
                disabled={disableQuantityControls}
                style={{
                  width: 40,
                  textAlign: "center",
                  fontSize: 16,
                  borderRadius: 4,
                  border: "1px solid #ccc",
                  opacity: disableQuantityControls ? 0.6 : 1,
                }}
              />
              {!disableQuantityControls && (
                <Button
                  onClick={handleIncrease}
                  variant="secondary"
                  disabled={quantity >= maxQuantity}
                  style={{ minWidth: 32, padding: 0, height: "32px" }}
                >
                  +
                </Button>
              )}
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
            <Button
              onClick={isPurchased ? onViewCourse : onAddToCart}
              variant={isPurchased ? "secondary" : "primary"}
              disabled={isPurchased && !onViewCourse}
              sx={{
                width: { xs: "100%", sm: "auto" },
                alignSelf: { xs: "stretch", sm: "auto" },
                minHeight: { xs: 44, sm: 60 },
                height: { xs: 44, sm: 60 },
                fontSize: { xs: "0.95rem", sm: "18px" },
                px: { xs: 1.5, sm: 3 },
                py: { xs: 0.75, sm: 2 },
              }}
            >
              {isPurchased ? "Ir a mi curso" : "Agregar al carrito"}
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
