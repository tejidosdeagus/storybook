import { Card, CardContent, CardMedia, Typography} from '@mui/material';
import { Button } from '../Button';


export type BlogCardProps = {
  image: string;
  date: string;
  title: string;
  summary: string;
  linkTo?: string;
  onReadMore: () => void;
};

export const BlogCard = ({ image, date, title, summary, linkTo, onReadMore }: BlogCardProps) => {
  return (
    <Card sx={{ width: 354, backgroundColor: '#D4AF80', borderRadius: 2 }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ width: '100%', height: 200, objectFit: 'cover' }}
      />
      <CardContent sx={{ px: 2, py: 2 }}>
        <Typography
          sx={{
            fontFamily: 'Italiana',
            fontStyle: 'italic',
            fontSize: 20,
            color: '#4A4A4A',
          }}
        >
          {date}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            fontSize: 24,
            color: '#4A4A4A',
           
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Playfair Display',
            fontSize: 18,
            color: '#D54848',
            mt: 1.5,
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {summary}
        </Typography>
        <Button
            onClick={onReadMore}
            variant="secondary"
          >
            Agregar al carrito
          </Button>
      </CardContent>
    </Card>
  );
};
