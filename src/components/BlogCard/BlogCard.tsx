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
        width: { xs: "100%", sm: 350 },
        maxWidth: { xs: "100%", sm: 350 },
        height: { xs: "auto", sm: 500 },
        minHeight: 0,
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
            top: { xs: 4, sm: 8 },
            right: { xs: 4, sm: 8 },
            display: "flex",
            gap: 0.5,
            zIndex: 1,
            flexWrap: "wrap",
            justifyContent: "flex-end",
            maxWidth: "calc(100% - 8px)",
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
              size="small"
              onClick={onFavorite}
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
              <FavoriteIcon />
            </IconButton>
          )}
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
                  backgroundColor: "#D54848",
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
      <Box
        sx={{
          width: "100%",
          height: { xs: 150, sm: 200 },
          flexShrink: 0,
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
          flexGrow: { xs: 0, sm: 1 },
          justifyContent: "space-between",
          px: { xs: 1.25, sm: 2 },
          py: { xs: 1.25, sm: 2 },
          "&:last-child": { pb: { xs: 1.25, sm: 2 } },
        }}
      >
        <div>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: { xs: "0.9rem", sm: "1.1rem" },
              color: "#7c6a58",
              fontFamily: "Playfair Display",
              mb: { xs: 0.5, sm: 1 },
            }}
          >
            {date}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: { xs: "1.35rem", sm: "1.75rem" },
              color: "#4A4A4A",
              mb: { xs: 0.5, sm: 1 },
              lineHeight: 1.25,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              "@media (min-width: 600px)": {
                WebkitLineClamp: 3,
              },
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              color: "#D54848",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              lineHeight: 1.35,
              "@media (min-width: 600px)": {
                WebkitLineClamp: 3,
              },
            }}
          >
            {summary}
          </Typography>
        </div>

        <Button
          onClick={onClick}
          variant="secondary"
          sx={{
            alignSelf: { xs: "stretch", sm: "flex-start" },
            width: { xs: "100%", sm: "auto" },
            mt: { xs: 1.25, sm: 2 },
            minHeight: { xs: 44, sm: 60 },
            height: { xs: 44, sm: 60 },
            fontSize: { xs: "0.95rem", sm: "18px" },
            px: { xs: 1.5, sm: 3 },
            py: { xs: 0.75, sm: 2 },
          }}
        >
          Seguir leyendo
        </Button>
      </CardContent>
    </Card>
  );
};
