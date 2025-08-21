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
import DraftIcon from "@mui/icons-material/Drafts";

export type BlogCardProps = {
  image: string;
  date: string;
  title: string;
  summary: string;
  onClick: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onFavorite?: () => void;
  isDraft?: boolean;
  draftText?: string;
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
  isDraft,
  draftText = "Borrador",
}: BlogCardProps) => {
  return (
    <Card
      sx={{
        width: 350,
        height: 500,
        backgroundColor: "#D4AF80",
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {(onFavorite || onEdit || onDelete || isDraft) && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 0.5,
            zIndex: 1,
          }}
        >
          {isDraft && (
            <IconButton
              aria-label="draft"
              sx={{
                backgroundColor: "#D4AF80",
                pointerEvents: "none",
                "&:hover": {
                  backgroundColor: "#D4AF80",
                },
              }}
            >
              <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
                {draftText}
              </Typography>
            </IconButton>
          )}
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
                  backgroundColor: "#D54848",
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      )}
      <Box
        sx={{
          width: "100%",
          height: 200,
          background: "#e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-between",
          px: 2,
          py: 2,
        }}
      >
        <div>
          <Typography
            sx={{
              fontFamily: "Italiana",
              fontStyle: "italic",
              fontSize: "0.875rem",
              color: "#4A4A4A",
              mb: 1,
            }}
          >
            {date}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#4A4A4A",
              mb: 1,
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontSize: "0.875rem",
              color: "#D54848",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              lineHeight: 1.4,
            }}
          >
            {summary}
          </Typography>
        </div>

        <Button
          onClick={onClick}
          variant="secondary"
          sx={{ alignSelf: "flex-start", mt: 2 }}
        >
          Seguir leyendo
        </Button>
      </CardContent>
    </Card>
  );
};
