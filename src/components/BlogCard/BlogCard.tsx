import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Button } from "../Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

export type BlogCardProps = {
  image: string;
  date: string;
  title: string;
  summary: string;
  onClick: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onFavorite?: () => void;
};

export const BlogCard = ({
  image,
  date,
  title,
  summary,
  onClick,
  onEdit,
  onDelete,
  onFavorite,
}: BlogCardProps) => {
  return (
    <Card
      sx={{
        position: "relative",
        minWidth: 300,
        maxWidth: 500,
        minHeight: 600,
        maxHeight: 750,
        backgroundColor: "#D4AF80",
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        paddingTop: "50px",
      }}
    >
      {(onFavorite || onEdit || onDelete) && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 0.5,
          }}
        >
          {onFavorite && (
            <IconButton
              aria-label="favorite"
              onClick={onFavorite}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)",
                },
              }}
            >
              <FavoriteIcon />
            </IconButton>
          )}
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
          minWidth: 300,
          height: 325,
          objectFit: "cover",
          alignSelf: "center",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-between",
          px: 2,
          py: 1,
        }}
      >
        <div>
          <Typography
            sx={{
              fontFamily: "Italiana",
              fontStyle: "italic",
              fontSize: 32,
              color: "#4A4A4A",
            }}
          >
            {date}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: 32,
              color: "#4A4A4A",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontSize: 32,
              color: "#D54848",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            {summary}
          </Typography>
        </div>

        <Button
          onClick={onClick}
          variant="secondary"
          sx={{ alignSelf: "flex-start" }}
        >
          Seguir leyendo
        </Button>
      </CardContent>
    </Card>
  );
};
